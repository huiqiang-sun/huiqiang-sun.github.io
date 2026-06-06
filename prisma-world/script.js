const demoData = {
  agent: {
    two: [
      {
        title: "2-Agent Sample 01",
        agents: "2 agents",
        note: "Two camera-controlled agents generated together in one shared scene.",
        sources: ["results/demo/2 agent/sample01/1.mp4", "results/demo/2 agent/sample01/2.mp4"],
      },
      {
        title: "2-Agent Sample 02",
        agents: "2 agents",
        note: "Joint denoising supports controllable paired video generation.",
        sources: ["results/demo/2 agent/sample06/1.mp4", "results/demo/2 agent/sample06/2.mp4"],
      },
      {
        title: "2-Agent Sample 03",
        agents: "2 agents",
        note: "Two generated agents observe one coherent environment from different views.",
        sources: ["results/demo/2 agent/sample03/1.mp4", "results/demo/2 agent/sample03/2.mp4"],
      },
      {
        title: "2-Agent Sample 04",
        agents: "2 agents",
        note: "Camera-controllable two-agent generation with shared visual evidence.",
        sources: ["results/demo/2 agent/sample04/1.mp4", "results/demo/2 agent/sample04/2.mp4"],
      },
      {
        title: "2-Agent Sample 05",
        agents: "2 agents",
        note: "Overlapping agent views remain consistent while following different cameras.",
        sources: ["results/demo/2 agent/sample05/1.mp4", "results/demo/2 agent/sample05/2.mp4"],
      },
      {
        title: "2-Agent Sample 06",
        agents: "2 agents",
        note: "Paired viewpoints preserve consistent scene structure under camera motion.",
        sources: ["results/demo/2 agent/sample02/1.mp4", "results/demo/2 agent/sample02/2.mp4"],
      },
    ],
    three: [
      {
        title: "3-Agent Sample 01",
        agents: "3 agents",
        note: "Three synchronized agent videos are generated as one coupled rollout.",
        sources: ["results/demo/3 agent/sample01/1.mp4", "results/demo/3 agent/sample01/2.mp4", "results/demo/3 agent/sample01/3.mp4"],
      },
      {
        title: "3-Agent Sample 02",
        agents: "3 agents",
        note: "The model supports three controllable viewpoints without separate sampling.",
        sources: ["results/demo/3 agent/sample02/1.mp4", "results/demo/3 agent/sample02/2.mp4", "results/demo/3 agent/sample02/3.mp4"],
      },
      {
        title: "3-Agent Sample 03",
        agents: "3 agents",
        note: "Multi-view content is jointly synthesized across three camera trajectories.",
        sources: ["results/demo/3 agent/sample03/1.mp4", "results/demo/3 agent/sample03/2.mp4", "results/demo/3 agent/sample03/3.mp4"],
      },
      {
        title: "3-Agent Sample 04",
        agents: "3 agents",
        note: "Three agents explore a shared scene with consistent generated details.",
        sources: ["results/demo/3 agent/sample04/1.mp4", "results/demo/3 agent/sample04/2.mp4", "results/demo/3 agent/sample04/3.mp4"],
      },
      {
        title: "3-Agent Sample 05",
        agents: "3 agents",
        note: "Joint full attention enables communication across all generated views.",
        sources: ["results/demo/3 agent/sample05/1.mp4", "results/demo/3 agent/sample05/2.mp4", "results/demo/3 agent/sample05/3.mp4"],
      },
      {
        title: "3-Agent Sample 06",
        agents: "3 agents",
        note: "Variable agent generation extends naturally from two to three outputs.",
        sources: ["results/demo/3 agent/sample06/1.mp4", "results/demo/3 agent/sample06/2.mp4", "results/demo/3 agent/sample06/3.mp4"],
      },
    ],
    four: [
      {
        title: "4-Agent Sample 01",
        agents: "4 agents",
        note: "A single Prisma-World model generates four camera-controlled agent videos.",
        sources: ["results/demo/4 agent/sample01/1.mp4", "results/demo/4 agent/sample01/2.mp4", "results/demo/4 agent/sample01/3.mp4", "results/demo/4 agent/sample01/4.mp4"],
      },
      {
        title: "4-Agent Sample 02",
        agents: "4 agents",
        note: "Four agent views are synthesized together while sharing one scene state.",
        sources: ["results/demo/4 agent/sample02/1.mp4", "results/demo/4 agent/sample02/2.mp4", "results/demo/4 agent/sample02/3.mp4", "results/demo/4 agent/sample02/4.mp4"],
      },
      {
        title: "4-Agent Sample 03",
        agents: "4 agents",
        note: "The generation process scales to four outputs with controllable cameras.",
        sources: ["results/demo/4 agent/sample03/1.mp4", "results/demo/4 agent/sample03/2.mp4", "results/demo/4 agent/sample03/3.mp4", "results/demo/4 agent/sample03/4.mp4"],
      },
      {
        title: "4-Agent Sample 04",
        agents: "4 agents",
        note: "Multiple generated viewpoints preserve scene-level coherence.",
        sources: ["results/demo/4 agent/sample04/1.mp4", "results/demo/4 agent/sample04/2.mp4", "results/demo/4 agent/sample04/3.mp4", "results/demo/4 agent/sample04/4.mp4"],
      },
      {
        title: "4-Agent Sample 05",
        agents: "4 agents",
        note: "Four-agent generation demonstrates variable agent number control.",
        sources: ["results/demo/4 agent/sample05/1.mp4", "results/demo/4 agent/sample05/2.mp4", "results/demo/4 agent/sample05/3.mp4", "results/demo/4 agent/sample05/4.mp4"],
      },
      {
        title: "4-Agent Sample 06",
        agents: "4 agents",
        note: "Prisma-World jointly denoises a larger multi-agent video group.",
        sources: ["results/demo/4 agent/sample06/1.mp4", "results/demo/4 agent/sample06/2.mp4", "results/demo/4 agent/sample06/3.mp4", "results/demo/4 agent/sample06/4.mp4"],
      },
    ],
  },
  open: {
    two: [
      {
        title: "Open-Domain 2-Agent Sample 01",
        agents: "2 agents",
        note: "Camera-controlled two-agent rollout in a diverse scene.",
        sources: ["results/open-domain/2 agent/sample03/1.mp4", "results/open-domain/2 agent/sample03/2.mp4"],
      },
      {
        title: "Open-Domain 2-Agent Sample 02",
        agents: "2 agents",
        note: "Cross-view consistency outside the core UE setting.",
        sources: ["results/open-domain/2 agent/sample02/1.mp4", "results/open-domain/2 agent/sample02/2.mp4"],
      },
      {
        title: "Open-Domain 2-Agent Sample 03",
        agents: "2 agents",
        note: "Two-agent generation in an open-domain scene.",
        sources: ["results/open-domain/2 agent/sample01/1.mp4", "results/open-domain/2 agent/sample01/2.mp4"],
      },
    ],
    three: [
      {
        title: "Open-Domain 3-Agent Sample 01",
        agents: "3 agents",
        note: "Three-agent generation in a broader visual domain.",
        sources: ["results/open-domain/3 agent/sample01/1.mp4", "results/open-domain/3 agent/sample01/2.mp4", "results/open-domain/3 agent/sample01/3.mp4"],
      },
      {
        title: "Open-Domain 3-Agent Sample 02",
        agents: "3 agents",
        note: "Shared scene evidence across three generated views.",
        sources: ["results/open-domain/3 agent/sample02/1.mp4", "results/open-domain/3 agent/sample02/2.mp4", "results/open-domain/3 agent/sample02/3.mp4"],
      },
      {
        title: "Open-Domain 3-Agent Sample 03",
        agents: "3 agents",
        note: "Complex layout and synchronized camera control.",
        sources: ["results/open-domain/3 agent/sample03/1.mp4", "results/open-domain/3 agent/sample03/2.mp4", "results/open-domain/3 agent/sample03/3.mp4"],
      },
    ],
    four: [
      {
        title: "Open-Domain 4-Agent Sample 01",
        agents: "4 agents",
        note: "Four-agent generation in diverse scenes.",
        sources: ["results/open-domain/4 agent/sample01/1.mp4", "results/open-domain/4 agent/sample01/2.mp4", "results/open-domain/4 agent/sample01/3.mp4", "results/open-domain/4 agent/sample01/4.mp4"],
      },
      {
        title: "Open-Domain 4-Agent Sample 02",
        agents: "4 agents",
        note: "Scalable generation with open-domain content.",
        sources: ["results/open-domain/4 agent/sample02/1.mp4", "results/open-domain/4 agent/sample02/2.mp4", "results/open-domain/4 agent/sample02/3.mp4", "results/open-domain/4 agent/sample02/4.mp4"],
      },
      {
        title: "Open-Domain 4-Agent Sample 03",
        agents: "4 agents",
        note: "Camera-aware generation across four views.",
        sources: ["results/open-domain/4 agent/sample03/1.mp4", "results/open-domain/4 agent/sample03/2.mp4", "results/open-domain/4 agent/sample03/3.mp4", "results/open-domain/4 agent/sample03/4.mp4"],
      },
      {
        title: "Open-Domain 4-Agent Sample 04",
        agents: "4 agents",
        note: "Scene-level consistency with four agents.",
        sources: ["results/open-domain/4 agent/sample04/1.mp4", "results/open-domain/4 agent/sample04/2.mp4", "results/open-domain/4 agent/sample04/3.mp4", "results/open-domain/4 agent/sample04/4.mp4"],
      },
    ],
  },
  interaction: [
    {
      title: "Player-driven Sample 01",
      agents: "interactive",
      note: "Action-conditioned movement with yaw camera control.",
      sources: ["results/user/browser/sample02/user1.mp4", "results/user/browser/sample02/user2.mp4"],
      actions: [
        {
          keyboard: [
            { start: 162 / 324, end: 202 / 324, keys: ["up"] },
            { start: 202 / 324, end: 243 / 324, keys: ["down"] },
          ],
          mouse: [
            { start: 0, end: 81 / 324, yaw: 1 },
            { start: 81 / 324, end: 121 / 324, yaw: -1 },
            { start: 243 / 324, end: 1, yaw: -0.5 },
          ],
        },
        {
          keyboard: [
            { start: 0, end: 40 / 324, keys: ["up"] },
            { start: 40 / 324, end: 81 / 324, keys: ["down"] },
          ],
          mouse: [
            { start: 81 / 324, end: 162 / 324, yaw: 1 },
            { start: 243 / 324, end: 283 / 324, yaw: 0.5 },
            { start: 283 / 324, end: 1, yaw: -1 },
          ],
        },
      ],
    },
    {
      title: "Player-driven Sample 02",
      agents: "interactive",
      note: "Player-like steering under a shared scene state.",
      sources: ["results/user/browser/sample01/user1.mp4", "results/user/browser/sample01/user2.mp4"],
      actions: [
        {
          keyboard: [
            { start: 0, end: 81 / 324, keys: ["right"] },
            { start: 81 / 324, end: 162 / 324, keys: ["up"] },
            { start: 162 / 324, end: 243 / 324, keys: ["down"] },
            { start: 243 / 324, end: 1, keys: ["right"] },
          ],
          mouse: [{ start: 243 / 324, end: 1, yaw: -0.5 }],
        },
        {
          keyboard: [
            { start: 0, end: 81 / 324, keys: ["right"] },
            { start: 121 / 324, end: 202 / 324, keys: ["left"] },
            { start: 202 / 324, end: 283 / 324, keys: ["left"] },
          ],
          mouse: [{ start: 202 / 324, end: 283 / 324, yaw: 0.5 }],
        },
      ],
    },
  ],
  minimap: [
    {
      title: "Minimap Sample 01",
      agents: "minimap",
      map: "results/minimap/browser/sample01/map.mp4",
      noMinimap: ["results/minimap/sample01/no minimap/1.mp4", "results/minimap/sample01/no minimap/2.mp4"],
      withMinimap: ["results/minimap/sample01/with/1.mp4", "results/minimap/sample01/with/2.mp4"],
    },
  ],
};

const colorByTag = {
  "2 agents": "var(--cyan)",
  "3 agents": "var(--green)",
  "4 agents": "var(--amber)",
  interactive: "var(--violet)",
  minimap: "var(--green)",
};

const carouselState = new Map();

function makePlaceholder(index) {
  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  const label = document.createElement("span");
  label.textContent = `Demo ${String(index + 1).padStart(2, "0")}`;
  placeholder.append(label);
  return placeholder;
}

function makeVideo(src) {
  const video = document.createElement("video");
  video.src = src;
  const poster = getVideoPosterPath(src);
  if (poster) video.poster = poster;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = true;
  video.autoplay = true;
  video.preload = "auto";
  return video;
}

function getVideoPosterPath(src) {
  const userMatch = src.match(/^results\/user\/(?:browser\/)?(sample\d+)\/(user[12])\.mp4$/);
  if (userMatch) return `results/user/posters/${userMatch[1]}-${userMatch[2]}.jpg`;
  const mapMatch = src.match(/^results\/minimap\/browser\/(sample\d+)\/map\.mp4$/);
  if (mapMatch) return `results/minimap/posters/${mapMatch[1]}-map.jpg`;
  const minimapMatch = src.match(/^results\/minimap\/(sample\d+)\/(no minimap|with)\/([12])\.mp4$/);
  if (minimapMatch) {
    const condition = minimapMatch[2] === "with" ? "with" : "no";
    return `results/minimap/posters/${minimapMatch[1]}-${condition}-agent${minimapMatch[3]}.jpg`;
  }
  return "";
}

function setVideoFirstFrame(video) {
  const seekToStart = () => {
    try {
      video.currentTime = 0.05;
    } catch {
      // Some browsers delay seeking until enough data is available.
    }
  };
  video.addEventListener("loadedmetadata", seekToStart, { once: true });
}

function getActionState(action, progress) {
  const keyboard = action.keyboard || [];
  const mouse = action.mouse || [];
  const activeKeys = keyboard
    .filter((event) => progress >= event.start && progress <= event.end)
    .flatMap((event) => event.keys || []);
  const yawEvent = mouse.find((event) => progress >= event.start && progress <= event.end);
  const x = yawEvent ? yawEvent.x ?? yawEvent.yaw ?? 0 : 0;
  const y = yawEvent ? yawEvent.y ?? 0 : 0;
  return {
    keys: new Set(activeKeys),
    mouseX: x,
    mouseY: y,
  };
}

function getControlActions(item) {
  if (item.actions?.length) return item.actions;
  if (item.action) return [item.action];
  return [];
}

function updateActionPanel(panel, item, progress) {
  const actions = getControlActions(item);
  panel.querySelectorAll(".control-card").forEach((card, index) => {
    const state = getActionState(actions[index] || {}, progress);
    card.querySelectorAll(".keycap").forEach((key) => {
      key.classList.toggle("is-active", state.keys.has(key.dataset.key));
    });
    const mouseX = Math.max(-1, Math.min(1, state.mouseX));
    const mouseY = Math.max(-1, Math.min(1, state.mouseY));
    const mouseIcon = card.querySelector(".mouse-icon");
    if (mouseIcon) {
      mouseIcon.style.transform = `translate(${mouseX * 34}px, ${mouseY * 34}px)`;
      mouseIcon.classList.toggle("is-active", Math.abs(mouseX) + Math.abs(mouseY) > 0.01);
    }
  });
  const progressFill = panel.querySelector(".action-progress-fill");
  if (progressFill) progressFill.style.transform = `scaleX(${progress})`;
}

function makeActionPanel(item) {
  const panel = document.createElement("div");
  panel.className = "action-panel";
  const actions = getControlActions(item);
  const controls = (actions.length ? actions : [{}, {}])
    .slice(0, item.sources?.length || 2)
    .map(
      (_, index) => `
    <div class="control-card">
      <div class="control-title">User ${index + 1}</div>
      <div class="control-body">
        <div class="action-keyboard" aria-label="User ${index + 1} keyboard movement">
          <button class="keycap key-up" data-key="up" type="button">&uarr;</button>
          <button class="keycap key-left" data-key="left" type="button">&larr;</button>
          <button class="keycap key-down" data-key="down" type="button">&darr;</button>
          <button class="keycap key-right" data-key="right" type="button">&rarr;</button>
        </div>
        <div class="action-mouse" aria-label="User ${index + 1} mouse movement">
          <div class="mouse-stage">
            <span class="mouse-arrow mouse-arrow-up" aria-hidden="true"></span>
            <span class="mouse-arrow mouse-arrow-right" aria-hidden="true"></span>
            <span class="mouse-arrow mouse-arrow-down" aria-hidden="true"></span>
            <span class="mouse-arrow mouse-arrow-left" aria-hidden="true"></span>
            <span class="mouse-icon" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>`,
    )
    .join("");
  panel.innerHTML = `
    <div class="control-grid">${controls}</div>
    <div class="action-progress" aria-hidden="true">
      <span class="action-progress-fill"></span>
    </div>
  `;
  updateActionPanel(panel, item, 0);
  return panel;
}

function bindActionSync(frame, item) {
  const panel = frame.querySelector(".action-panel");
  const videos = [...frame.querySelectorAll("video")];
  if (!panel || !videos.length) return;
  const driver = videos[0];
  const followers = videos.slice(1);
  let raf = 0;
  let linking = false;
  let lastDriverTime = driver.currentTime || 0;
  let lastSyncAt = 0;
  const getProgress = () => {
    const duration = Number.isFinite(driver.duration) ? driver.duration : 0;
    if (duration > 0) return (driver.currentTime % duration) / duration;
    return 0;
  };

  const syncFollowerTime = (force = false) => {
    if (driver.readyState <= 0) return;
    const now = performance.now();
    const looped = driver.currentTime + 0.35 < lastDriverTime;
    lastDriverTime = driver.currentTime;
    if (!force && !looped && now - lastSyncAt < 900) return;
    lastSyncAt = now;

    followers.forEach((video) => {
      if (video.readyState <= 0) return;
      const targetTime = looped ? 0 : Math.min(driver.currentTime, video.duration || driver.currentTime);
      const threshold = looped || force ? 0.04 : 0.45;
      if (Math.abs(video.currentTime - targetTime) <= threshold) return;
      try {
        linking = true;
        video.currentTime = targetTime;
      } catch {
        // Metadata can arrive at slightly different times across paired videos.
      } finally {
        window.setTimeout(() => {
          linking = false;
        }, 0);
      }
    });
  };

  const tick = () => {
    syncFollowerTime(false);
    updateActionPanel(panel, item, getProgress());
    if (!driver.paused) {
      raf = window.requestAnimationFrame(tick);
    } else {
      raf = 0;
    }
  };
  const startTick = () => {
    if (!raf) tick();
  };

  const playGroup = () => {
    if (linking) return;
    linking = true;
    videos.forEach((video) => {
      if (video.paused) video.play().catch(() => {});
    });
    startTick();
    window.setTimeout(() => {
      linking = false;
    }, 0);
  };

  const pauseGroup = () => {
    if (linking) return;
    linking = true;
    videos.forEach((video) => {
      if (!video.paused) video.pause();
    });
    window.cancelAnimationFrame(raf);
    raf = 0;
    updateActionPanel(panel, item, getProgress());
    window.setTimeout(() => {
      linking = false;
    }, 0);
  };

  const seekGroupFrom = (source) => {
    if (linking || source.readyState <= 0) return;
    try {
      linking = true;
      if (source !== driver && driver.readyState > 0) {
        driver.currentTime = Math.min(source.currentTime, driver.duration || source.currentTime);
      }
      syncFollowerTime(true);
      updateActionPanel(panel, item, getProgress());
    } catch {
      // Ignore transient seek errors while media metadata is loading.
    } finally {
      window.setTimeout(() => {
        linking = false;
      }, 0);
    }
  };

  videos.forEach((video) => {
    video.addEventListener("play", playGroup);
    video.addEventListener("pause", pauseGroup);
    video.addEventListener("seeked", () => seekGroupFrom(video));
    video.addEventListener("loadedmetadata", () => {
      syncFollowerTime(true);
      updateActionPanel(panel, item, getProgress());
      if (!driver.paused) startTick();
    });
  });

  updateActionPanel(panel, item, getProgress());
}

function makeMedia(item, index, className = "demo-frame") {
  const frame = document.createElement("div");
  frame.className = className;

  if (item.sources?.length) {
    frame.classList.add(`count-${item.sources.length}`);
    if (item.action || item.actions) frame.classList.add("is-player-driven");
    const group = document.createElement("div");
    group.className = `multi-video-grid count-${item.sources.length}`;
    item.sources.forEach((src, agentIndex) => {
      const tile = document.createElement("div");
      tile.className = "agent-video-tile";
      const label = document.createElement("span");
      label.className = "agent-video-label";
      label.textContent = item.action || item.actions ? `User ${agentIndex + 1}` : `Agent ${agentIndex + 1}`;
      const video = makeVideo(src);
      if (!item.action && !item.actions) setVideoFirstFrame(video);
      tile.append(video, label);
      group.append(tile);
    });
    frame.append(group);
    if (item.action || item.actions) frame.append(makeActionPanel(item));
  } else if (item.src) {
    const video = makeVideo(item.src);
    setVideoFirstFrame(video);
    frame.append(video);
  } else {
    frame.append(makePlaceholder(index));
  }
  return frame;
}

function makeThumbPreview(item) {
  const preview = document.createElement("span");
  preview.className = "thumb-preview";
  if (item.sources?.length) {
    preview.classList.add(`count-${item.sources.length}`);
  }
  const poster = getPosterPath(item);
  if (poster) {
    preview.style.backgroundImage = `url("${poster}")`;
    preview.classList.add("has-poster");
  }
  return preview;
}

function getPosterPath(item) {
  const first = item.sources?.[0];
  if (!first) return "";
  const userMatch = first.match(/^results\/user\/(?:browser\/)?(sample\d+)\/user1\.mp4$/);
  if (userMatch) return `results/user/posters/${userMatch[1]}.jpg`;
  const match = first.match(/^(results\/demo|results\/open-domain|demo)\/([234]) agent\/(sample\d+)\/1\.mp4$/);
  if (!match) return "";
  return `${match[1]}/posters/${match[2]}-agent-${match[3]}.jpg`;
}

function renderCarousel(id, items, startIndex = 0) {
  const root = document.getElementById(id);
  if (!root) return;

  const count = items.length;
  const activeIndex = ((startIndex % count) + count) % count;
  carouselState.set(id, { items, activeIndex });

  const item = items[activeIndex];
  const shell = document.createDocumentFragment();

  const main = document.createElement("div");
  main.className = "carousel-main";

  const prev = document.createElement("button");
  prev.className = "carousel-nav";
  prev.type = "button";
  prev.setAttribute("aria-label", "Previous demo");
  prev.textContent = "<";
  prev.addEventListener("click", () => moveCarousel(id, -1));

  const next = document.createElement("button");
  next.className = "carousel-nav";
  next.type = "button";
  next.setAttribute("aria-label", "Next demo");
  next.textContent = ">";
  next.addEventListener("click", () => moveCarousel(id, 1));

  const featured = document.createElement("article");
  featured.className = "featured-demo";
  const media = makeMedia(item, activeIndex);
  featured.append(media);

  main.append(prev, featured, next);
  shell.append(main);

  const thumbs = document.createElement("div");
  thumbs.className = "thumb-strip";
  items.forEach((thumbItem, index) => {
    const thumb = document.createElement("button");
    thumb.className = `thumb${index === activeIndex ? " is-active" : ""}`;
    thumb.type = "button";
    thumb.setAttribute("aria-label", `Show ${thumbItem.title}`);
    thumb.addEventListener("click", () => renderCarousel(id, items, index));

    const label = document.createElement("span");
    label.className = "thumb-label";
    label.textContent = thumbItem.title;
    const preview = makeThumbPreview(thumbItem);
    const srcForPreview = thumbItem.src || thumbItem.sources?.[0];
    if (srcForPreview && !preview.classList.contains("has-poster")) {
      createPosterFromVideo(srcForPreview, preview);
    }
    thumb.append(preview, label);
    thumbs.append(thumb);
  });
  shell.append(thumbs);

  root.replaceChildren(shell);
  bindActionSync(media, item);
  root.querySelectorAll("video").forEach((video) => {
    video.play().catch(() => {});
  });
}

function makeMinimapAgentStack(sources) {
  const stack = document.createElement("div");
  stack.className = "minimap-agent-stack";
  sources.forEach((src, index) => {
    const tile = document.createElement("div");
    tile.className = "agent-video-tile";
    const label = document.createElement("span");
    label.className = "agent-video-label";
    label.textContent = `Agent ${index + 1}`;
    const video = makeVideo(src);
    tile.append(video, label);
    stack.append(tile);
  });
  return stack;
}

function bindMinimapSync(root) {
  const videos = [...root.querySelectorAll("video")];
  if (videos.length < 2) return;
  const driver = videos[0];
  let raf = 0;
  let linking = false;
  let lastDriverProgress = 0;
  let lastDriftSyncAt = 0;

  const getProgress = (video) => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    if (duration <= 0) return 0;
    return Math.max(0, Math.min(1, (video.currentTime % duration) / duration));
  };

  const setPlaybackRates = () => {
    const driverDuration = Number.isFinite(driver.duration) ? driver.duration : 0;
    if (driverDuration <= 0) return;
    videos.forEach((video) => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (duration <= 0) return;
      video.playbackRate = duration / driverDuration;
    });
  };

  const syncToProgress = (progress, force = false) => {
    const now = performance.now();
    const looped = progress + 0.05 < lastDriverProgress;
    lastDriverProgress = progress;
    if (!force && !looped && now - lastDriftSyncAt < 1800) return;

    let didSync = false;
    videos.slice(1).forEach((video) => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (video.readyState <= 0 || duration <= 0) return;
      const targetTime = looped ? 0 : Math.min(progress * duration, Math.max(0, duration - 0.001));
      const threshold = force || looped ? 0.035 : duration * 0.08;
      if (Math.abs(video.currentTime - targetTime) <= threshold) return;
      try {
        linking = true;
        video.currentTime = targetTime;
        didSync = true;
      } catch {
        // Media metadata can arrive at different times.
      } finally {
        window.setTimeout(() => {
          linking = false;
        }, 180);
      }
    });
    if (didSync || force || looped) lastDriftSyncAt = now;
  };

  const tick = () => {
    const progress = getProgress(driver);
    syncToProgress(progress, false);
    if (!driver.paused) {
      raf = window.requestAnimationFrame(tick);
    } else {
      raf = 0;
    }
  };

  const startTick = () => {
    if (!raf) tick();
  };

  const playGroup = () => {
    if (linking) return;
    linking = true;
    setPlaybackRates();
    videos.forEach((video) => {
      if (video.paused) video.play().catch(() => {});
    });
    startTick();
    window.setTimeout(() => {
      linking = false;
    }, 120);
  };

  const pauseGroup = () => {
    if (linking) return;
    linking = true;
    videos.forEach((video) => {
      if (!video.paused) video.pause();
    });
    window.cancelAnimationFrame(raf);
    raf = 0;
    window.setTimeout(() => {
      linking = false;
    }, 120);
  };

  const seekGroupFrom = (source) => {
    if (linking || source.readyState <= 0) return;
    const progress = getProgress(source);
    try {
      linking = true;
      if (source !== driver && driver.readyState > 0 && Number.isFinite(driver.duration) && driver.duration > 0) {
        driver.currentTime = Math.min(progress * driver.duration, Math.max(0, driver.duration - 0.001));
      }
      syncToProgress(progress, true);
    } catch {
      // Ignore transient seek errors while loading.
    } finally {
      window.setTimeout(() => {
        linking = false;
      }, 180);
    }
  };

  videos.forEach((video) => {
    video.addEventListener("play", playGroup);
    video.addEventListener("pause", pauseGroup);
    video.addEventListener("seeked", () => seekGroupFrom(video));
    video.addEventListener("loadedmetadata", () => {
      setPlaybackRates();
      syncToProgress(getProgress(driver), true);
      if (!driver.paused) startTick();
    });
  });

  setPlaybackRates();
  syncToProgress(getProgress(driver), true);
}

function renderMinimapDemo(id, items, startIndex = 0, mode = "no") {
  const root = document.getElementById(id);
  if (!root) return;

  const count = items.length;
  const activeIndex = ((startIndex % count) + count) % count;
  const item = items[activeIndex];
  const activeSources = mode === "with" ? item.withMinimap : item.noMinimap;
  const shell = document.createDocumentFragment();

  const header = document.createElement("div");
  header.className = "minimap-demo-header";
  const title = document.createElement("div");
  title.className = "minimap-demo-title";
  title.textContent = item.title;
  const toggle = document.createElement("div");
  toggle.className = "minimap-toggle";
  [
    ["no", "No minimap"],
    ["with", "With minimap"],
  ].forEach(([value, labelText]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `minimap-toggle-button${mode === value ? " is-active" : ""}`;
    button.textContent = labelText;
    button.addEventListener("click", () => renderMinimapDemo(id, items, activeIndex, value));
    toggle.append(button);
  });
  header.append(title, toggle);
  shell.append(header);

  const stage = document.createElement("div");
  stage.className = `minimap-video-stage${mode === "with" ? " has-map" : ""}`;
  const resultPanel = document.createElement("div");
  resultPanel.className = "minimap-result-panel";
  resultPanel.append(makeMinimapAgentStack(activeSources));
  stage.append(resultPanel);
  if (mode === "with") {
    const mapPanel = document.createElement("div");
    mapPanel.className = "minimap-map-panel";
    const mapLabel = document.createElement("span");
    mapLabel.className = "agent-video-label";
    mapLabel.textContent = "Minimap";
    const mapVideo = makeVideo(item.map);
    mapPanel.append(mapVideo, mapLabel);
    stage.append(mapPanel);
  }
  shell.append(stage);

  if (items.length > 1) {
    const thumbs = document.createElement("div");
    thumbs.className = "thumb-strip";
    items.forEach((thumbItem, index) => {
      const thumb = document.createElement("button");
      thumb.className = `thumb${index === activeIndex ? " is-active" : ""}`;
      thumb.type = "button";
      thumb.setAttribute("aria-label", `Show ${thumbItem.title}`);
      thumb.addEventListener("click", () => renderMinimapDemo(id, items, index, mode));
      const preview = document.createElement("span");
      preview.className = "thumb-preview count-2 has-poster";
      preview.style.backgroundImage = `url("${getPosterPath({ sources: thumbItem.withMinimap })}")`;
      const label = document.createElement("span");
      label.className = "thumb-label";
      label.textContent = thumbItem.title;
      thumb.append(preview, label);
      thumbs.append(thumb);
    });
    shell.append(thumbs);
  }

  root.replaceChildren(shell);
  bindMinimapSync(root);
  root.querySelectorAll("video").forEach((video) => {
    video.play().catch(() => {});
  });
}

function createPosterFromVideo(src, target) {
  const video = document.createElement("video");
  video.src = src;
  video.muted = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.addEventListener(
    "loadedmetadata",
    () => {
      try {
        video.currentTime = Math.min(0.08, video.duration || 0.08);
      } catch {
        // If seeking fails, the CSS placeholder remains visible.
      }
    },
    { once: true },
  );
  video.addEventListener(
    "seeked",
    () => {
      const width = video.videoWidth || 320;
      const height = video.videoHeight || 180;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, width, height);
      target.style.backgroundImage = `url("${canvas.toDataURL("image/jpeg", 0.72)}")`;
      target.classList.add("has-poster");
    },
    { once: true },
  );
}

function moveCarousel(id, delta) {
  const state = carouselState.get(id);
  if (!state) return;
  renderCarousel(id, state.items, state.activeIndex + delta);
}

function setTabbedCarousel(group, filter) {
  const id = group === "agent" ? "agent-carousel" : "open-carousel";
  renderCarousel(id, demoData[group][filter], 0);
  document.querySelectorAll(`.tab[data-group="${group}"]`).forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.filter === filter);
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setTabbedCarousel(tab.dataset.group, tab.dataset.filter));
});

setTabbedCarousel("agent", "two");
setTabbedCarousel("open", "two");
renderCarousel("interaction-carousel", demoData.interaction);
renderMinimapDemo("minimap-carousel", demoData.minimap);
