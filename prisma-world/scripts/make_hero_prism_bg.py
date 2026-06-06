from __future__ import annotations

from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "hero-prism.png"


def cubic(p0, p1, p2, p3, steps=180):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        mt = 1 - t
        x = mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0]
        y = mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
        pts.append((x, y))
    return pts


def line_layer(size, pts, color, width, blur):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(layer, "RGBA").line(pts, fill=color, width=width, joint="curve")
    return layer.filter(ImageFilter.GaussianBlur(blur)) if blur else layer


def main():
    size = (2400, 1350)
    w, h = size
    img = Image.new("RGBA", size, (5, 7, 12, 255))
    draw = ImageDraw.Draw(img, "RGBA")

    # Deep glassy background with subtle star-like specks.
    for y in range(h):
        a = y / h
        r = int(5 + 12 * a)
        g = int(7 + 10 * a)
        b = int(12 + 25 * a)
        draw.line((0, y, w, y), fill=(r, g, b, 255))

    for i in range(180):
        x = (i * 137) % w
        y = (i * 251) % h
        alpha = 18 + (i % 42)
        draw.ellipse((x, y, x + 2, y + 2), fill=(190, 230, 255, alpha))

    focus = (1140, 655)

    # Incoming white light.
    for k, sy in enumerate([460, 540, 620, 700, 780]):
        pts = cubic((-200, sy), (310, sy - 35), (760, 630 + (k - 2) * 14), focus)
        img.alpha_composite(line_layer(size, pts, (255, 255, 255, 58), 72, 28))
        img.alpha_composite(line_layer(size, pts, (255, 255, 255, 155), 13, 2))

    # Abstract glass prism.
    prism = Image.new("RGBA", size, (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(prism, "RGBA")
    poly = [(1030, 420), (1315, 655), (1030, 895)]
    pdraw.polygon(poly, fill=(210, 245, 255, 38), outline=(255, 255, 255, 126))
    pdraw.line((1030, 420, 1125, 655, 1030, 895), fill=(255, 255, 255, 90), width=4)
    pdraw.line((1125, 655, 1315, 655), fill=(114, 234, 255, 80), width=3)
    prism = prism.filter(ImageFilter.GaussianBlur(0.4))
    img.alpha_composite(prism)

    # Output spectral rays.
    colors = [
        (72, 238, 255, 185),
        (99, 151, 255, 185),
        (155, 101, 255, 178),
        (244, 83, 226, 175),
        (255, 117, 167, 170),
        (255, 195, 83, 165),
    ]
    targets = [(2630, 350), (2630, 480), (2630, 600), (2630, 720), (2630, 850), (2630, 985)]
    for idx, (color, end) in enumerate(zip(colors, targets)):
        spread = end[1] - focus[1]
        pts = cubic((1275, 655), (1580, 655 + spread * 0.08), (1980, 655 + spread * 0.48 + math.sin(idx) * 18), end)
        img.alpha_composite(line_layer(size, pts, color[:3] + (58,), 92, 35))
        img.alpha_composite(line_layer(size, pts, color, 12, 2))

    # Central glow.
    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow, "RGBA")
    for radius in range(260, 0, -20):
        alpha = int(105 * (1 - radius / 260) ** 1.7)
        gdraw.ellipse((focus[0] - radius, focus[1] - radius, focus[0] + radius, focus[1] + radius), fill=(170, 236, 255, alpha))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(18)))

    # Dark edge vignette.
    vignette = Image.new("L", size, 0)
    vdraw = ImageDraw.Draw(vignette)
    vdraw.ellipse((-180, -120, w + 260, h + 180), fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(120))
    dark = Image.new("RGBA", size, (0, 0, 0, 150))
    img = Image.composite(img, dark, vignette)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(OUT, quality=94)
    print(OUT)


if __name__ == "__main__":
    main()
