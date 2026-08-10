# DNS rollback record — `aitist.ai` apex cutover

**Captured:** 2026-08-10, immediately before the apex cutover to Cloudflare Pages.
**Zone:** `aitist.ai` — zone id `f8cb85e8b79ee45a4dc078a67e56e81a` (account `962646ca…`, profile `adobe-foundry`)
**Total records in zone at capture time:** 60

## Why the cutover

`https://aitist.ai/` returned **503** with `server: Google Frontend`. The apex pointed at
Google's domain-mapping anycast IPs (`216.239.3x.21` / `2001:4860:4802:3x::15`) and `www` at
`ghs.googlehosted.com` — a Google-hosted service that no longer exists. DNS-only (grey cloud),
so Cloudflare was pass-through and the 503 came straight from Google.

## Records REMOVED (restore these to roll back)

Exact pre-change state. All were `proxied=false`, `ttl=1` (auto).

| Type | Name | Content | Proxied | TTL | Old record id |
|------|------|---------|---------|-----|---------------|
| A | `aitist.ai` | `216.239.38.21` | false | 1 | `e31f095a9d059ecc293aaef6e2be4f53` |
| A | `aitist.ai` | `216.239.36.21` | false | 1 | `82c0ed7fb3b6559f8e3d54ec620c8efa` |
| A | `aitist.ai` | `216.239.34.21` | false | 1 | `0f74889f9b69a2f74ae04ebd93b69fef` |
| A | `aitist.ai` | `216.239.32.21` | false | 1 | `44e4eabb5d3009116ee6aece16b17991` |
| AAAA | `aitist.ai` | `2001:4860:4802:38::15` | false | 1 | `983803a626af0e97f2e0e978f51668a1` |
| AAAA | `aitist.ai` | `2001:4860:4802:36::15` | false | 1 | `5e890a24072df29f4e2f88ecce798d6a` |
| AAAA | `aitist.ai` | `2001:4860:4802:34::15` | false | 1 | `26fac75dae42686e43370fe77d22c5c9` |
| AAAA | `aitist.ai` | `2001:4860:4802:32::15` | false | 1 | `28b71ea5a481255278df9597ea833544` |
| CNAME | `www.aitist.ai` | `ghs.googlehosted.com` | false | 1 | `0b49ac3fadbec5d313e492710bf7d2cd` |

Record ids are dead after deletion — they're logged only for audit/correlation. Roll back by
**re-creating** the rows above.

## Records at apex that were NOT touched (must survive)

If any of these are missing after the cutover, something went wrong — company email and
payment/verification flows depend on them.

| Type | Content |
|------|---------|
| MX | `mx1.privateemail.com`, `mx2.privateemail.com` |
| NS | `dns1.registrar-servers.com`, `dns2.registrar-servers.com` |
| TXT | `v=spf1 include:spf.privateemail.com ~all` |
| TXT | `stripe-verification=25b68762…` |
| TXT | `google-site-verification=u0w2PtmRc75be8iKhQHnVbh7UdQE25cNX1ik7bIGFKI` |
| TXT | `google-site-verification=_pSOuJR1c2FnKXV2zYNmx0ejAc_Z65MaBKSY-CNdUeM` |
| TXT | `brevo-code:3ad8b990556ddd903e76cdf4b6efe07c` |

## Do not touch

- **`reports.aitist.ai`** and **`reports-preview.aitist.ai`** (`AAAA 100::`, proxied) — the
  report hub Worker. Breaking these breaks every published report link.
- **`report.aitist.ai`** — Pages project `collab-jack-qa-report-20260719`.
- **ECH stays OFF** for this zone. It was disabled 2026-08-09 because Chrome + corp VPN
  middleboxes RST on ECH. Do not re-enable.

## Rollback procedure

```bash
set -a; . ~/.secrets/cf-deploy.env; set +a
Z=f8cb85e8b79ee45a4dc078a67e56e81a
api() { curl -s -X "$1" "https://api.cloudflare.com/client/v4/zones/$Z/dns_records${2:-}" \
        -H "Authorization: Bearer $CF_API_TOKEN" -H 'Content-Type: application/json' ${3:+-d "$3"}; }

# 1. detach the Pages custom domains first (else Pages recreates its DNS)
cf-deploy pages-rm aitist-web          # or detach domains only, in the CF dashboard

# 2. delete whatever now sits at apex / www
api GET '?name=aitist.ai&type=A'       # note ids, then DELETE each
api GET '?name=aitist.ai&type=AAAA'
api GET '?name=www.aitist.ai'

# 3. restore the Google records
for ip in 216.239.32.21 216.239.34.21 216.239.36.21 216.239.38.21; do
  api POST '' "{\"type\":\"A\",\"name\":\"aitist.ai\",\"content\":\"$ip\",\"ttl\":1,\"proxied\":false}"
done
for ip in 2001:4860:4802:32::15 2001:4860:4802:34::15 2001:4860:4802:36::15 2001:4860:4802:38::15; do
  api POST '' "{\"type\":\"AAAA\",\"name\":\"aitist.ai\",\"content\":\"$ip\",\"ttl\":1,\"proxied\":false}"
done
api POST '' '{"type":"CNAME","name":"www","content":"ghs.googlehosted.com","ttl":1,"proxied":false}'
```

Rolling back restores the **503** — the Google service behind those records is gone. Roll back
only to hand the apex to something else, not to "fix" it.

## Full zone snapshot

A complete 60-record dump was taken at capture time. It is intentionally not committed (it
contains DKIM/verification strings for third-party services and is regenerable):

```bash
set -a; . ~/.secrets/cf-deploy.env; set +a
curl -s "https://api.cloudflare.com/client/v4/zones/f8cb85e8b79ee45a4dc078a67e56e81a/dns_records?per_page=200" \
  -H "Authorization: Bearer $CF_API_TOKEN" | python3 -m json.tool
```
