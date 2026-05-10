# Deployment receipts

Lightweight deployment receipts for the public fantasy sumo site. Keep this file free of secrets: record public URLs, commit SHAs, test/build results, and verification evidence only.

## 2026-05-10 — `sumo.kurult.ai`

- Date: 2026-05-10T05:42:16Z
- Repository: `Danservfinn/fantasy-sumo-league-site`
- Commit recorded: `b8fb2d2ff57a9912746cfa05d7774fcb9a930d64` (`b8fb2d2`)
- Service URL: `https://sumo.kurult.ai/`
- Build output: Vite production build under `dist/`
- Secrets: none added to the repo; deployment details here use only public URL and local command results.

### Verification

- `npm test`: passed — 2 test files, 7 tests.
- `npm run typecheck`: passed — `tsc --noEmit` completed successfully.
- `npm run build`: passed — TypeScript build plus Vite production build.
- Public URL check: `curl -I --max-time 15 https://sumo.kurult.ai/` returned `HTTP/2 200`.

### Notes

- Cloudflare response headers included `server: cloudflare`, `cf-cache-status: DYNAMIC`, and the site content type `text/html; charset=utf-8`.
- This receipt documents the public site health at the time above; it does not encode local LaunchAgent paths, tunnel IDs, credentials, or machine-private configuration.

## Receipt checklist

For future deployments, append a new dated section with:

1. Date/time in UTC.
2. Commit SHA deployed or recorded.
3. Commands run for tests and build, including pass/fail result.
4. Service URL verified.
5. Verification command and HTTP/status result.
6. Any non-secret deployment notes needed for the next operator.
