# deploy/ — how aitist.ai gets served

| File | What it is |
|------|-----------|
| [`DNS-ROLLBACK.md`](./DNS-ROLLBACK.md) | Pre-cutover apex DNS state + one-shot rollback. **Read before touching DNS.** |
| `site/` | The static site. This directory is what gets deployed, verbatim. |

## Current status (2026-08-10)

| | |
|---|---|
| Direction shipped | **A — Operator Console** (see [`../design/DIRECTIONS.md`](../design/DIRECTIONS.md)) |
| Built + QA'd | ✅ zero console errors, no horizontal overflow at 390 / 768 / 1440 |
| Live preview | https://reports.aitist.ai/aitist-website/home-a/ |
| **Apex `aitist.ai`** | ❌ **still on the old Google records (503)** — blocked, see below |
| DNS mutated? | **No.** Nothing has been changed yet. The zone is exactly as `DNS-ROLLBACK.md` describes. |

## Blocker: Cloudflare Pages project limit

Public static sites go to Cloudflare Pages (`cf-deploy pages <name> <dir>`, mechanism ① in
`cf-deploy/docs/ROUTING.md`). Creating the `aitist-web` project fails:

```
code 8000027: You have reached the limit of projects you can have on your account.
```

Account `962646ca…` is at **10/10 Pages projects** — a hard cap (verified: creating any new
project name fails identically, so it is not a name collision). The existing 10:

| Project | Custom domains |
|---|---|
| `when2buy-options-data-standard` | options-data.when2buy.ai |
| `steve-face` | myself.steveouyang.com |
| `airacle-home` | airacle.cn, airacle.com, airacle.tech, +www |
| `collab-jack-qa-report-20260719` | report.aitist.ai |
| `aitist-nonprofit` | non-profit.steveouyang.com |
| `paw-strategy-reports` | paw-reports.steveouyang.com, paw-tree.steveouyang.com, tree.when2buy.ai |
| `report-skill-demos` | dinner.steveouyang.com, reports.steveouyang.com |
| `airacle-creator-intel` | — (pages.dev only, last deploy 2026-07-11) |
| `gaokao2026-math` | gaokao.steveouyang.com |
| `oprah-demo` | oprah.airacle.tech |

Freeing a slot means deleting one of these, which takes its URL down. Not doing that unasked.

**Two ways forward:**
1. Free a slot — `cf-deploy pages-rm <name>` (handles DNS → domain detach → project, in order).
   `airacle-creator-intel` is the cheapest: no custom domain, so only its `.pages.dev` URL dies.
2. Raise the cap — Cloudflare support, https://cfl.re/3WgEyrH. No deletions, but not instant.

## Remaining steps once a slot exists

```bash
# 1. deploy (Node 20 on this box → wrangler 4 refuses to run; pin v3 and pre-create the project)
set -a; . ~/.secrets/cf-deploy.env; set +a
curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/pages/projects" \
  -H "Authorization: Bearer $CF_API_TOKEN" -H 'Content-Type: application/json' \
  -d '{"name":"aitist-web","production_branch":"main"}'
CF_WRANGLER="npx -y wrangler@3" cf-deploy pages aitist-web deploy/site \
  -d "aitist.ai official website"

# 2. free the apex — delete ONLY the 4 A + 4 AAAA at aitist.ai and the www CNAME.
#    Leave MX / NS / TXT alone. See DNS-ROLLBACK.md for the exact rows.

# 3. attach both hostnames, reusing cf-pages' own attach path with the aitist.ai zone
#    (CF_ZONE_ID in ~/.secrets/cf-deploy.env points at a DIFFERENT zone — must override)
CF_ZONE_ID=f8cb85e8b79ee45a4dc078a67e56e81a python3 - <<'EOF'
import importlib.machinery, importlib.util, os
os.environ.setdefault('CF_API_TOKEN', os.environ['CF_API_TOKEN'])
ldr = importlib.machinery.SourceFileLoader('cfp', os.path.expanduser(
    '~/.claude/skills/cf-deploy/bin/cf-pages'))
spec = importlib.util.spec_from_loader('cfp', ldr)
m = importlib.util.module_from_spec(spec); ldr.exec_module(m)
m.attach_domain('aitist-web', 'aitist.ai')
m.attach_domain('aitist-web', 'www.aitist.ai')
EOF

# 4. register + verify
svc add aitist-web -d "aitist.ai official website" --domain aitist.ai
cf-deploy refresh && svc verify aitist-web
curl -sI https://aitist.ai/ | head -1
curl -sI https://www.aitist.ai/ | head -1
```

### Two footguns already handled

- **`site/_headers`** forces `max-age=0, must-revalidate`. Without it Cloudflare caches HTML at a
  custom domain for 7 days (`s-maxage=604800`) and new deploys silently don't appear.
- **Asset paths are relative** (`icon.png`, not `/icon.png`) so the same build works at the apex
  root *and* under a preview subpath. Only `canonical` / `og:*` are absolute, as crawlers require.

### Don't

- Don't touch `reports.aitist.ai` / `reports-preview.aitist.ai` / `report.aitist.ai`.
- Don't re-enable ECH on this zone (Chrome + corp VPN middleboxes RST on it).
- Don't put any token or credential in `site/` — it's a public static artifact.

## Content honesty

The page ships v1 copy (real agents, real metrics) and deliberately **omits** everything flagged
🚩 in [`../content/MASTER-COPY.md`](../content/MASTER-COPY.md): the SOC2 claim, "bank-grade
encryption", 99.9% uptime, "10+ enterprise clients", "300% traffic growth", and the fabricated
per-agent savings/efficiency figures. The hero console is labelled
`EXAMPLE RUN` + *"Illustration of one agent's daily briefing job — not live telemetry"* rather
than posing as live fleet data. The `$400K live portfolio` figure (claim #7, "confirm the client
is OK being described publicly") is replaced with `Weekly rebalancing across 95 stocks, fully
automated` — same case, no client financials.
