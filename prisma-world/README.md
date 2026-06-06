# Prisma-World Project Page

Open locally:

```bash
python -m http.server 8099 --directory project_page
```

Then visit:

```text
http://localhost:8099
```

To add variable-agent demo videos, place each sample under `results/demo/<agent count>/sampleXX/`, then edit the corresponding `sources` fields in `script.js`, for example:

```js
{
  title: "2-Agent Sample 01",
  agents: "2 agents",
  note: "Two camera-controlled agents generated together in one shared scene.",
  sources: ["results/demo/2 agent/sample01/1.mp4", "results/demo/2 agent/sample01/2.mp4"],
}
```

The page currently contains prepared sections for 2-agent, 3-agent, 4-agent, open-domain, interactive, and minimap-guided demos.

The main demo and open-domain sections use carousel data:

- `demoData.agent.two`, `demoData.agent.three`, `demoData.agent.four`
- `demoData.open.two`, `demoData.open.three`, `demoData.open.four`
- `demoData.interaction`
- `demoData.minimap`

Each carousel supports previous/next buttons and clickable thumbnail previews. For variable-agent demos, one carousel item can contain multiple synchronized videos via the `sources` array. The page renders these videos together and uses the first video frame as the thumbnail preview.
