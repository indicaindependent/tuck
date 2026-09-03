# Deploying Your Own Tuck

A guide for forking and deploying your own instance.

## Prerequisites

- A Cloudflare account (free tier is enough to start)
- Node.js 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed
- Workers AI enabled on your Cloudflare account (free tier: 10k neurons/day)

## Step 1: Clone

```bash
git clone https://github.com/vpdlny/tuck.git
cd tuck
```

## Step 2: Create bindings

### KV namespace for rate limiting

```bash
wrangler kv:namespace create "TUCK_KV"
```

Copy the returned `id` into `wrangler.toml`.

### Workers AI binding

In `wrangler.toml`:

```toml
[ai]
binding = "AI"
```

### Optional: Backend secrets

If you're proxying to your own Capitol Trades worker:

```bash
wrangler secret put CAPWATCH_SECRET
# (paste your bearer token when prompted)
```

## Step 3: Update placeholders

Open `src/peoples-market-worker.js` and find these placeholders:

- `YOUR-CAPWATCH-WORKER.workers.dev` — your congressional trades proxy worker
- `YOUR-GEOINT-INGEST-WORKER.workers.dev` — your news ingest worker
- `YOUR-GEOINT-PRICE-WORKER.workers.dev` — your price snapshot worker

You have three options:

1. **Replace them** with your own deployed backend workers
2. **Remove those features** by deleting the relevant `/api/*` routes and frontend tabs
3. **Stub them** to return empty data while you build the backends

## Step 4: Deploy

```bash
wrangler deploy
```

Your worker will be live at `<worker-name>.<your-subdomain>.workers.dev`.

## Step 5: Custom domain (optional)

Add a custom domain via the Cloudflare dashboard or `wrangler.toml`:

```toml
routes = [
  { pattern = "your-domain.com", custom_domain = true }
]
```

## Cost expectations

For a single-user / small community deployment:

- **Workers**: 100k requests/day free
- **Workers AI**: 10k neurons/day free (≈ 200-500 Ask Tuck conversations)
- **KV**: 100k reads + 1k writes/day free

A small community site will likely run for $0/month on the free tier.

For scale (10k+ daily users), expect ~$5-20/month in Workers AI usage.

## Troubleshooting

### "AI binding not found"
Make sure Workers AI is enabled on your account: dashboard → Workers AI → Get Started.

### Ask Tuck returns 429
Rate limit is 10 questions per IP per minute. Adjust in the `/api/ask-tuck` handler if needed.

### Yahoo Finance returns 401
Their public endpoint occasionally throttles. Cache responses in KV with a 30-60s TTL for production.

## Need help?

Open an issue or join us on [Discord](https://discord.osintnet.uk).
