# Tuck

> **Free market intelligence for the people Wall Street ignores.**
>
> *"Patron saint of the unbanked, the unpriced, and the unwelcome. He stands with the vulnerable, the poor, and the oppressed — freeing them from the bonds of class warfare with the one weapon Wall Street fears most: information."*

<p align="center">
  <img src="public/img/tuck-128.png" alt="Tuck" width="128"/>
</p>

**Live:** [market.osintnet.uk](https://market.osintnet.uk)

Built and maintained by **[VPDLNY](https://github.com/vpdlny)**.

---

## What it is

Tuck is a single-file Cloudflare Worker that delivers:

- 📊 **Watchlist** — real-time market data for a 9-ticker watchlist (NVDA, NET, AVGO, QCOM, MP, XLE, USO, MU, INTC)
- 📰 **News** — OSINT-grade news signals with escalation/de-escalation scoring
- 🏛️ **Congress Watch** — live congressional stock trade tracking (STOCK Act 2012 disclosures)
- 📈 **Macro** — Fed funds, CPI, unemployment, VIX, DXY, oil prices
- 🤖 **Ask Tuck** — free conversational AI guide powered by **Llama 3.3 70B** on Cloudflare Workers AI
- 📚 **Learn** — plain-English market education

**No login. No ads. No tracking. No PFOF. No financial advice. Ever.**

## What it isn't

- ❌ Not financial advice
- ❌ Not a brokerage
- ❌ Not a signal service
- ❌ Not pay-to-win

If you came here looking for buy/sell calls, you're in the wrong place. Tuck explains what the data means. You make your own decisions.

## Why we built it

Wall Street hoards information. Bloomberg Terminal costs $25k/year. Real-time data, congressional trade tracking, geopolitical OSINT — it's all locked behind paywalls that the vulnerable, the working class, and the curious can't afford.

We think that's broken. So we built Tuck.

## Architecture

```
                    ┌─────────────────────────────┐
                    │   market.osintnet.uk        │
                    │   (peoples-market-worker)   │
                    │   Single Cloudflare Worker  │
                    └──────────────┬──────────────┘
                                   │
       ┌────────────┬──────────────┼──────────────┬──────────────┐
       │            │              │              │              │
       ▼            ▼              ▼              ▼              ▼
   Yahoo        Capwatch       Geoint         Workers AI       OSINT
   Finance      Worker         Workers        (Llama 3.3)      Feeds
   (prices)     (congress)     (news+px)      (Ask Tuck)       (RSS)
```

## Stack

- **Edge:** Cloudflare Workers (V8 isolates, free tier)
- **AI:** `@cf/meta/llama-3.3-70b-instruct-fp8-fast` on Workers AI
- **Storage:** Cloudflare KV (rate limiting), R2 (assets)
- **Frontend:** Vanilla HTML/CSS/JS — zero dependencies, zero build step
- **Data sources:** Yahoo Finance, Capitol Trades, public OSINT RSS feeds

## Deploying your own copy

> **Note:** This repo contains the published source of the live worker for transparency and forking. To deploy your own, you'll need to configure the listed backend services or replace them with your own data sources.

1. Fork this repo
2. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
3. Create the required bindings in `wrangler.toml`:
   - `AI` — Workers AI binding
   - `TUCK_KV` — KV namespace for rate limiting
   - `CAPWATCH_SECRET` — bearer token for your Capitol Trades backend (or replace the proxy with your own data source)
4. Update the `YOUR-*-WORKER.workers.dev` placeholders in `src/peoples-market-worker.js` to point to your own backend workers or remove those features
5. Deploy: `wrangler deploy`

See [docs/SETUP.md](docs/SETUP.md) for the full guide.

## Files

| File | Purpose |
|------|---------|
| [`src/peoples-market-worker.js`](src/peoples-market-worker.js) | The single-file worker — HTML, CSS, JS, and API routes all in one |
| [`docs/SETUP.md`](docs/SETUP.md) | Deploy-it-yourself guide |
| [`docs/ASK_TUCK_PROMPT.md`](docs/ASK_TUCK_PROMPT.md) | The exact system prompt that gives Tuck his personality and guardrails |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | How the pieces fit together |

## Hard rules (built into the AI)

Tuck's Llama 3.3 instance has these rules in its system prompt — they cannot be overridden by users:

1. **Never give financial advice.** Educational only.
2. **Never predict prices.** Direct users to live data tabs.
3. **Never moralize or preach.** Just help.
4. **Be honest about uncertainty.** Say "I don't know" when you don't.

## License

MIT. Use it, fork it, improve it. If you build something cool with it, tell us.

## Credits

- Built by [VPDLNY](https://github.com/vpdlny)
- Tuck portrait & branding by the VPDLNY art collective
- Llama 3.3 by Meta, served via [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)
- Congressional trade data via Capitol Trades / Senate Stock Watcher
- Market data via Yahoo Finance public endpoints

## Connect

- 🌐 [market.osintnet.uk](https://market.osintnet.uk)
- 💬 [Discord](https://discord.gg/vpdlny)
- 🐦 Bluesky: [@indicaindependent.bsky.social](https://bsky.app/profile/indicaindependent.bsky.social)

---

*"What they hoard, we hand back."*


---

## ⚡ Support the Mission

This is free, ad-free, independent infrastructure — no VC, no gov funding, no strings. If it served you, a tip keeps it alive and funds the next tool.

[![Donate via SkyGive](https://img.shields.io/badge/💜_Donate_via_SkyGive-8A5CF6?style=for-the-badge&logoColor=white)](https://donate.skygive.app/)
[![Lightning](https://img.shields.io/badge/⚡_tips@skygive.app-F7931A?style=for-the-badge&logo=lightning&logoColor=white)](https://donate.skygive.app/)

<sub>🧡 Sovereign Lightning + on-chain via SkyGive. Your sats fund uptime, not ads.</sub>
