# deploy/ — how aitist.ai gets served

| File | What it is |
|------|-----------|
| `wrangler.toml` | The deploy config. A Cloudflare Worker with static assets, bound to `aitist.ai` + `www.aitist.ai`. |
| [`DNS-ROLLBACK.md`](./DNS-ROLLBACK.md) | Pre-cutover apex DNS state + one-shot rollback. **Read before touching DNS.** |
| `site/` | The static site. This directory is what gets deployed, verbatim. |

## Current status (2026-08-10) — live

| | |
|---|---|
| Direction shipped | **A — Operator Console** (see [`../design/DIRECTIONS.md`](../design/DIRECTIONS.md)) |
| Live | **https://aitist.ai/** and **https://www.aitist.ai/** — both `HTTP/2 200`, `server: cloudflare` |
| Mechanism | Cloudflare **Worker + static assets**, script `aitist-web`, account `962646ca…` |
| workers.dev | https://aitist-web.aitist-dev.workers.dev (kept on as a mechanism-independent check) |
| Apex DNS | Cut over. `AAAA aitist.ai 100::` proxied; MX/NS/TXT untouched. See `DNS-ROLLBACK.md`. |
| QA | zero console errors, no horizontal overflow at 390 / 768 / 1440 |

## Why a Worker and not Pages

Cloudflare now points new static projects at **Workers Static Assets** rather than Pages — Pages is
in maintenance mode for new features, and Workers gets the ongoing investment. Two concrete wins
here:

- **No project cap.** This account is at Cloudflare's hard **10/10 Pages project limit**
  (`code 8000027`), so the Pages route required deleting a live site to free a slot. Workers cap out
  around 500 scripts — nothing had to be deleted.
- **One mechanism, room to grow.** If the site ever needs a form handler, a redirect rule, or an
  API route, it's a `fetch` handler in the same script instead of a second service.

`_headers` still works — Workers Static Assets reads the same file Pages did (verified: the file
itself 404s and its rules appear on responses).

## Deploy

```bash
cd <repo root>
set -a; . ~/.secrets/cf-deploy.env; set +a
export CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$CF_ACCOUNT_ID"

# wrangler 4 requires Node >=22; this box ships Node 20, so use the pinned copy on sensei-fs
export PATH=/sensei-fs-3/users/zouyang/tools/node22/bin:$PATH   # node v22.14.0, persistent

npx -y wrangler@4 deploy --config deploy/wrangler.toml
```

Editing anything under `site/` and re-running that command is the whole update loop. The
`custom_domain` routes are idempotent — re-deploying does not re-touch DNS.

## Verify after deploy

```bash
curl -sI https://aitist.ai/     | head -1     # want: HTTP/2 200
curl -sI https://www.aitist.ai/ | head -1     # want: HTTP/2 200
curl -s https://aitist.ai/ | grep -o '<title>[^<]*</title>'
```

Registry: registered as `aitist-web` with `--port 0` (edge-hosted, nothing listens on this box —
the same convention `cf-deploy pages` uses for Pages sites). `svc verify` will report DOWN for it
because it probes `127.0.0.1:<port>`; that's expected and not a signal. Check the URLs instead.

## Three footguns already handled

- **`site/_headers` sets Cache-Control per file type, never on `/*`.** Cloudflare applies every
  matching rule and *appends* the values, so a `/*` rule plus a `/*.png` rule yields
  `max-age=0, must-revalidate, public, max-age=86400`. `/*` now carries security headers only.
  HTML must stay `max-age=0, must-revalidate` — the default at a custom domain is `s-maxage=604800`,
  which serves a week-stale homepage after a deploy.
- **`not_found_handling = "404-page"`**, not the `single-page-application` default, which would
  return HTTP 200 with the homepage for every typo'd URL.
- **Asset paths are relative** (`icon.png`, not `/icon.png`) so the same build works at the apex
  root *and* under a preview subpath. Only `canonical` / `og:*` are absolute, as crawlers require.

## Don't

- Don't touch `reports.aitist.ai` / `reports-preview.aitist.ai` / `report.aitist.ai`.
- Don't re-enable ECH on this zone (Chrome + corp VPN middleboxes RST on it). Confirmed `off`.
- Don't put any token or credential in `site/` — it's a public static artifact.
- Don't delete the apex `AAAA 100::` rows without first detaching the Worker's custom domains;
  the next deploy would just recreate them. See `DNS-ROLLBACK.md`.

## Content honesty

The page ships v1 copy (real agents, real metrics) and deliberately **omits** everything flagged
🚩 in [`../content/MASTER-COPY.md`](../content/MASTER-COPY.md): the SOC2 claim, "bank-grade
encryption", 99.9% uptime, "10+ enterprise clients", "300% traffic growth", and the fabricated
per-agent savings/efficiency figures. The hero console is labelled
`EXAMPLE RUN` + *"Illustration of one agent's daily briefing job — not live telemetry"* rather
than posing as live fleet data. The `$400K live portfolio` figure (claim #7, "confirm the client
is OK being described publicly") is replaced with `Weekly rebalancing across 95 stocks, fully
automated` — same case, no client financials.
