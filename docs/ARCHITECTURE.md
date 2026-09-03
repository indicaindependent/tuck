# Tuck Architecture

## Design philosophy

**One file. Zero dependencies. Edge-first.**

The entire frontend (HTML + CSS + JS) and the entire backend (API routes) live in a single Cloudflare Worker file. No bundler. No framework. No build step.

This is deliberate:

1. **Sovereign**: anyone can read 100% of the code in one place
2. **Fast**: edge-served from 300+ Cloudflare locations
3. **Cheap**: runs on Workers free tier for most communities
4. **Auditable**: no transitive dependencies, no `node_modules`, no supply chain risk
5. **Forkable**: a single file is easier to understand and modify than 50

## Request flow

```
User → Cloudflare Edge → tuck-worker
                              │
                              ├─ GET / → serves embedded HTML
                              ├─ GET /api/prices → Yahoo Finance proxy
                              ├─ GET /api/news → Geoint Ingest Worker
                              ├─ GET /api/congress → Capitol Trades proxy
                              ├─ GET /api/macro → Geoint Price Worker
                              └─ POST /api/ask-tuck → Workers AI (Llama 3.3)
```

## The Ask Tuck pipeline

1. User types in the chat widget
2. Browser POSTs to `/api/ask-tuck`
3. Worker checks rate limit in KV (10/min/IP)
4. Worker calls `env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', ...)` with:
   - System prompt (immutable, defines persona + guardrails)
   - User message (max 1000 chars)
   - `max_tokens: 500`, `temperature: 0.7`
5. Worker returns JSON `{ reply }` to browser
6. Browser appends reply to chat panel

**No conversation history** is sent — each question is independent. This keeps the worker stateless and prevents prompt-injection attacks from leveraging multi-turn context.

## Why Llama 3.3 70B?

- **Open weight** — not OpenAI / Anthropic / Google
- **Strong reasoning** — handles "what is X" questions well
- **Fast at fp8** — sub-2s response time on Cloudflare's edge
- **Free** within Workers AI free tier
- **Aligned with our values** — we don't want users' questions going to a closed-source model owned by the same companies we're trying to defang

## Security / Privacy posture

- **No login, no accounts, no cookies** (except a 1-bit "you accepted the disclaimer" flag in localStorage)
- **No analytics, no tracking pixels, no third-party scripts**
- **No PII collected** by Tuck itself
- **Cloudflare logs** IP addresses for rate limiting (standard CDN behavior). Logs auto-expire per CF retention policy.
- **No conversation history stored** — questions to Ask Tuck are not persisted

## What runs where

| Component | Where | Why |
|-----------|-------|-----|
| HTML/CSS/JS | Cloudflare Worker | Edge-served, no origin needed |
| Llama 3.3 | Workers AI | Already at the edge, no extra hop |
| Rate limit | Workers KV | Strongly consistent, edge-replicated |
| Asset images | R2 | Cheap, no egress fees |
| Market data | Yahoo Finance (public) | Free, reliable for educational use |
| Congressional trades | Capitol Trades (proxied) | Public STOCK Act data |
| News signals | OSINT RSS feeds (proxied) | Verifiable sources |

## Failure modes

- **Workers AI down**: Ask Tuck returns "Tuck is resting" error; rest of site continues working
- **Yahoo Finance throttles**: Watchlist shows stale data with a warning
- **Backend workers down**: Affected tab shows "temporarily unavailable", rest of site fine

The site is **graceful-degradation by design** — every feature can fail independently without breaking the others.
