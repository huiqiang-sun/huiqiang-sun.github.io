from __future__ import annotations

from pathlib import Path

import cv2
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]


def read_first_frame(path: Path) -> Image.Image:
    cap = cv2.VideoCapture(str(path))
    ok, frame = cap.read()
    cap.release()
    if not ok or frame is None:
        raise RuntimeError(f"Cannot read first frame: {path}")
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    return Image.fromarray(frame)


def fit(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    canvas = Image.new("RGB", size, (5, 7, 12))
    fitted = ImageOps.contain(img.convert("RGB"), size, Image.Resampling.LANCZOS)
    x = (size[0] - fitted.width) // 2
    y = (size[1] - fitted.height) // 2
    canvas.paste(fitted, (x, y))
    return canvas


def make_composite(frames: list[Image.Image]) -> Image.Image:
    count = len(frames)
    cell = (480, 270)
    if count == 2:
        canvas = Image.new("RGB", (cell[0] * 2, cell[1]), (5, 7, 12))
        positions = [(0, 0), (cell[0], 0)]
    elif count == 3:
        canvas = Image.new("RGB", (cell[0] * 3, cell[1]), (5, 7, 12))
        positions = [(0, 0), (cell[0], 0), (cell[0] * 2, 0)]
    elif count == 4:
        canvas = Image.new("RGB", (cell[0] * 2, cell[1] * 2), (5, 7, 12))
        positions = [(0, 0), (cell[0], 0), (0, cell[1]), (cell[0], cell[1])]
    else:
        canvas = Image.new("RGB", cell, (5, 7, 12))
        positions = [(0, 0)]

    for frame, pos in zip(frames, positions):
        canvas.paste(fit(frame, cell), pos)
    return canvas


def generate(root: Path) -> int:
    out_dir = root / "posters"
    out_dir.mkdir(parents=True, exist_ok=True)
    made = 0
    for agent_dir in ["2 agent", "3 agent", "4 agent"]:
        agent_root = root / agent_dir
        if not agent_root.exists():
            continue
        for sample in sorted(p for p in agent_root.iterdir() if p.is_dir()):
            videos = sorted(sample.glob("*.mp4"), key=lambda p: int(p.stem) if p.stem.isdigit() else p.stem)
            if not videos:
                continue
            frames = [read_first_frame(v) for v in videos]
            poster = make_composite(frames)
            agent_slug = agent_dir.replace(" ", "-")
            out = out_dir / f"{agent_slug}-{sample.name}.jpg"
            poster.save(out, quality=88, optimize=True)
            print(out.relative_to(ROOT))
            made += 1
    return made


def generate_user(root: Path) -> int:
    out_dir = root / "posters"
    out_dir.mkdir(parents=True, exist_ok=True)
    made = 0
    for sample in sorted(p for p in root.iterdir() if p.is_dir() and p.name.startswith("sample")):
        videos = [sample / "user1.mp4", sample / "user2.mp4"]
        if not all(video.exists() for video in videos):
            continue
        frames = [read_first_frame(video) for video in videos]
        poster = make_composite(frames)
        out = out_dir / f"{sample.name}.jpg"
        poster.save(out, quality=88, optimize=True)
        print(out.relative_to(ROOT))
        made += 1
        for video, frame in zip(videos, frames):
            single_out = out_dir / f"{sample.name}-{video.stem}.jpg"
            fit(frame, (480, 270)).save(single_out, quality=88, optimize=True)
            print(single_out.relative_to(ROOT))
            made += 1
    return made


def main() -> None:
    roots = [ROOT / "results" / "demo", ROOT / "results" / "open-domain", ROOT / "demo"]
    made = 0
    for root in roots:
        if root.exists():
            made += generate(root)
    user_root = ROOT / "results" / "user"
    if user_root.exists():
        made += generate_user(user_root)
    print(f"generated={made}")


if __name__ == "__main__":
    main()
