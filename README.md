# Fantasy Sumo Live League Site

Local React/TypeScript/Vite dashboard for Danny's fantasy sumo league.

## What it includes

- Six team standings for Danny, David, Liz, Josh, Dolo, and Joe.
- Rikishi cards with rank/side, W-L, team owner, fantasy points, honor/kinboshi/kimarite scoring, and absence/watch flags.
- Scoring model for yusho, zensho, jun-yusho, sansho, kinboshi, kachi-koshi, post-kachi-koshi wins, and kimarite bonuses.
- 15 head-to-head matchup cards.
- Live data architecture that attempts SSE first and falls back to a local JSON snapshot and then in-browser mock status.
- Responsive dark fantasy-sports dashboard inspired by Linear-style product surfaces.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, usually http://127.0.0.1:5173/.

## Verification commands

```bash
npm run test
npm run typecheck
npm run build
```

## Live data architecture

The client calls `connectLiveEvents()` in `src/liveData.ts`:

1. Try `EventSource('/api/live')` for SSE updates. A future local service can stream official match events as JSON `LiveSnapshot` messages.
2. If SSE is missing or disconnects, load `public/data/live-snapshot.json`. This is intentionally easy to update by hand or by a scraper/official-source importer.
3. If the JSON snapshot is unavailable, render a clearly labeled mock fallback so the UI never hides data freshness status.

No secrets are required or stored. Official-source credentials, if ever needed, should live outside this repo and feed a local service that writes sanitized snapshots or streams SSE.

## Important source files

- `src/data/league.ts` — league roster, W-L mock data, rank/side/status metadata, scoring rule labels.
- `src/scoring.ts` — deterministic fantasy scoring and matchup calculation utilities.
- `src/liveData.ts` — SSE/polling/mock fallback provider abstraction.
- `src/App.tsx` — dashboard composition.
- `src/styles.css` — responsive dark UI system.
- `public/data/live-snapshot.json` — editable local data feed.

## Current limitations

- W-L and feed values are seeded local/mock data, not official live results.
- `/api/live` is an expected interface, not a bundled server. Vite will fall back to the JSON snapshot unless a local service is added.
- Absence/watch flags are visible but must be verified against official Japan Sumo Association sources before competition decisions.
