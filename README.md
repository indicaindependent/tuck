# Tuck

> **Free financial intelligence — what Wall Street hoards, we hand back.**
>
> *"Patron saint of the unbanked, the unpriced, and the unwelcome. He stands with the vulnerable, the poor, and the oppressed — freeing them from the bonds of class warfare with the one weapon Wall Street fears most: information."*

<p align="center">
  <img src="public/img/tuck-128.png" alt="Tuck" width="128"/>
</p>

**Live:** [tuck.osintnet.uk](https://tuck.osintnet.uk)

[![Live](https://img.shields.io/badge/live-tuck.osintnet.uk-2ea44f?style=for-the-badge)](https://tuck.osintnet.uk)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Workers AI](https://img.shields.io/badge/Llama_3.3_70B-7C3AED?style=for-the-badge)](https://developers.cloudflare.com/workers-ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](.github/CONTRIBUTING.md)

Built and maintained by **VPDLNY**.

---

## What it is

Tuck is a single-file Cloudflare Worker — HTML, CSS, JS, and every API route in one file, zero build step — that turns paywalled market intelligence into something anyone can open for free. No login, no ads, no tracking, no PFOF, no financial advice. Ever.

It ships as a mobile-first app with these sections:

- **Pulse** — a live ticker strip and at-a-glance market read for the watchlist.
- **Scanner** — the Market Intel Scanner: geopolitical and news signals scored for how they move your watchlist, with escalation / de-escalation tagging and per-ticker mapping.
- **Scores** — *Tuck's Score*, a daily leaderboard that ranks watchlist names by a composite read of the day's signals.
- **War3** — a plain-English geopolitical-risk band gauge (calm → hot) with a sparkline, so you can see the macro-war temperature at a glance.
- **Ravid** — a curated "inside scoops" feed (reporting from sources like Axios and Channel 12) surfaced in one place.
- **Congress** — live congressional stock-trade tracking from STOCK-Act (2012) disclosures: who bought/sold what, and when.
- **AI Scenarios** — probability-weighted outlooks for the names and themes Tuck tracks.
- **Heat Map** — a live sector heat map (which sectors are hot/cold right now) with region filtering.
- **Macro** — the Macro Corner: Fed funds, CPI, unemployment, VIX, DXY, and oil.
- **Ask Tuck** — a free conversational AI guide powered by **Llama 3.3 70B** on Cloudflare Workers AI, wired to real tools (prices, news, congress, macro, scores) so it answers from live data, not vibes.
- **Learn** — plain-English market education for people the system never bothered to teach.

## What it isn't

- Not financial advice.
- Not a brokerage.
- Not a signal service.
- Not pay-to-win.

If you came for buy/sell calls, you're in the wrong place. Tuck explains what the data *means*. You make your own decisions.

## Why we built it

Wall Street hoards information. A Bloomberg Terminal costs ~$25k/year. Real-time data, congressional-trade tracking, geopolitical OSINT — all locked behind paywalls the working class and the curious can't afford. We think that's broken, so we built Tuck to hand it back.

## Architecture

```
                    ┌─────────────────────────────┐
                    │      tuck.osintnet.uk        │
                    │   (single Cloudflare Worker) │
                    │  HTML + CSS + JS + API routes│
                    └──────────────┬───────────────┘
                                   │  (fans out to pluggable backends)
       ┌───────────┬───────────────┼───────────────┬───────────────┐
       ▼           ▼               ▼               ▼               ▼
   Market       Congress        Signal/News     Scenario /       Workers AI
   prices       trades          + Scores        risk engine      (Llama 3.3)
   feed         feed            services         services         "Ask Tuck"
```

The public worker calls a set of pluggable backend services for the heavier data (congress trades, signal scoring, scenarios). Those backend URLs are configuration — the published source uses named placeholders so you can point them at your own workers or swap in your own data sources.

## Stack

- **Edge:** Cloudflare Workers (V8 isolates, free tier)
- **AI:** `@cf/meta/llama-3.3-70b-instruct-fp8-fast` on Workers AI, with real tool-calls
- **Storage:** Cloudflare KV (rate limiting / caching), R2 (assets)
- **Frontend:** Vanilla HTML/CSS/JS — zero dependencies, zero build step
- **Data sources:** public market endpoints, STOCK-Act congressional disclosures, and public OSINT feeds

## Deploy your own copy

> This repo publishes the source of the live worker for transparency and forking. To run your own, configure the backend services below or replace them with your own data sources.

1. Fork this repo.
2. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).
3. Create the bindings in `wrangler.toml`:
   - `AI` — Workers AI binding
   - `TUCK_KV` — KV namespace for rate limiting / caching
   - a bearer secret for whatever congress-trade backend you use (or replace that proxy)
4. Point the named backend-URL placeholders in `src/tuck-worker.js` at your own workers, or remove those sections.
5. Deploy: `wrangler deploy`.

See [docs/SETUP.md](docs/SETUP.md) for the full guide.

## Files

| File | Purpose |
|------|---------|
| [`src/tuck-worker.js`](src/tuck-worker.js) | The single-file worker — HTML, CSS, JS, and every API route |
| [`docs/SETUP.md`](docs/SETUP.md) | Deploy-it-yourself guide |
| [`docs/ASK_TUCK_PROMPT.md`](docs/ASK_TUCK_PROMPT.md) | The exact system prompt that gives Tuck his personality and guardrails |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | How the pieces fit together |

## Hard rules (built into the AI)

Tuck's Llama 3.3 instance carries these in its system prompt — users can't override them:

1. **Never give financial advice.** Educational only.
2. **Never predict prices.** Point users to the live data tabs.
3. **Never moralize or preach.** Just help.
4. **Be honest about uncertainty.** Say "I don't know" when you don't.

## License

[MIT](LICENSE). Use it, fork it, improve it. If you build something cool with it, tell us.

## Credits

- Built by VPDLNY; portrait & branding by the VPDLNY art collective.
- Llama 3.3 by Meta, served via [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/).
- Congressional-trade data via public STOCK-Act disclosures.
- Market data via public market endpoints.

## Connect

- 🌐 [tuck.osintnet.uk](https://tuck.osintnet.uk)
- 🐦 Bluesky: [@indicaindependent.bsky.social](https://bsky.app/profile/indicaindependent.bsky.social)

---

*"What they hoard, we hand back."*

---

## ⚡ Support the mission

Free, ad-free, independent infrastructure — no VC, no strings. If it served you, a tip keeps it alive.

[![Donate via SkyGive](https://img.shields.io/badge/Donate_via_SkyGive-8A5CF6?style=for-the-badge&logoColor=white)](https://donate.skygive.app/)
