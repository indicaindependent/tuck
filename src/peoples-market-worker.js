var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var INGEST_URL = "https://YOUR-GEOINT-INGEST-WORKER.workers.dev";
var PRICE_URL = "https://YOUR-GEOINT-PRICE-WORKER.workers.dev";
var CAPWATCH = "https://capwatch.osintnet.uk";
var WATCHLIST = [
  { ticker: "NVDA", name: "Nvidia", sector: "Semiconductor", desc: "Designs the AI chips that power ChatGPT, data centers, and autonomous vehicles. The backbone of the AI revolution.", geo: "China/Taiwan", cat: "semi" },
  { ticker: "NET", name: "Cloudflare", sector: "Tech/Security", desc: "Runs the security and performance layer for ~20% of the internet. Every time a website loads fast and safely, Cloudflare is probably involved.", geo: "Global", cat: "tech" },
  { ticker: "AVGO", name: "Broadcom", sector: "Semiconductor", desc: "Makes the chips that move data inside data centers and between devices. Acquired VMware \u2014 now also a major enterprise software company.", geo: "China/Taiwan", cat: "semi" },
  { ticker: "QCOM", name: "Qualcomm", sector: "Semiconductor", desc: "Powers almost every Android smartphone on Earth. Now expanding into cars and AI PCs. Huge exposure to US-China trade policy.", geo: "China/Taiwan", cat: "semi" },
  { ticker: "MU", name: "Micron", sector: "Semiconductor", desc: "Makes memory chips (DRAM/NAND) used in every computer, phone, and AI server. Cycles hard with the economy \u2014 cheap now, explosive in upcycles.", geo: "China/Taiwan", cat: "semi" },
  { ticker: "INTC", name: "Intel", sector: "Semiconductor", desc: "The original US chipmaker, now rebuilding its foundry business. Central to US chip sovereignty policy \u2014 Congress keeps writing them checks.", geo: "China/Taiwan", cat: "semi" },
  { ticker: "MP", name: "MP Materials", sector: "Critical Minerals", desc: "Operates the only active rare earth mine in the US. Makes the magnets in EV motors, F-35 jets, and wind turbines. Politicians watch this one closely.", geo: "China/Taiwan", cat: "defense" },
  { ticker: "XLE", name: "Energy ETF", sector: "Energy", desc: "A basket of the biggest US oil and gas companies (ExxonMobil, Chevron, etc.). Moves with oil prices and Middle East tension.", geo: "Iran/Hormuz", cat: "oil" },
  { ticker: "USO", name: "Oil Fund", sector: "Energy", desc: "Tracks the price of crude oil (WTI). Goes up when there's war risk in the Middle East, goes down when OPEC pumps more. The purest geopolitical trade.", geo: "Iran/Hormuz", cat: "oil" }
];
var SECTOR_EXPLAINERS = {
  "Semiconductor": "Semiconductor companies design or manufacture chips - the tiny silicon brains inside every electronic device. They are highly sensitive to US-China relations because most are either made in Taiwan or sold to Chinese companies.",
  "Critical Minerals": "Rare earth elements are 17 metals used in defense systems, EVs, and electronics. China controls ~85% of global processing. Companies like MP Materials are strategic assets, not just stocks.",
  "Energy": "Energy stocks move with oil prices, which move with geopolitical events - wars, OPEC decisions, sanctions. Understanding energy stocks means understanding global power.",
  "Tech/Security": "Technology and cybersecurity companies build the infrastructure of the modern internet. They benefit from both AI investment and the constant demand for online security."
};
var GLOSSARY = {
  "Market Cap": "The total value of a company. Price per share \xD7 total shares. A $1T market cap means the market thinks the whole company is worth $1 trillion.",
  "52-Week Range": "The lowest and highest price a stock hit in the last year. Helps you understand if it's near a high, a low, or somewhere in the middle.",
  "P/E Ratio": 'Price-to-Earnings. If a stock is $100 and earns $5/share, P/E is 20. It tells you how much investors are paying for each $1 of profit. Higher = more "faith" in growth.',
  "EPS": "Earnings Per Share. The profit a company made divided by its share count. If a company makes $1B profit and has 1B shares, EPS = $1.00.",
  "Volume": "How many shares were traded today. High volume means a lot of people are paying attention. Low volume means the market is quiet on that stock.",
  "PFOF": 'Payment for Order Flow. When a "free" broker like Robinhood sells your trade to a market maker before executing it. Technically legal, definitely not in your interest.',
  "ETF": "Exchange Traded Fund. A basket of stocks bundled into one ticker. XLE is an ETF that holds ExxonMobil, Chevron, and other energy companies. Instant diversification.",
  "Rare Earth": "17 specialty metals with exotic names (neodymium, dysprosium) that are essential for EV batteries, jet fighters, and wind turbines. Strategic \u2014 and China controls most of the supply.",
  "Earnings": "Every 3 months, public companies report their revenue and profit. Big surprises (good or bad) can move the stock 10%+ in a single day.",
  "Insider Trading": "When a company executive buys or sells their own company's stock. Legal when disclosed (Form 4 filing). A big executive buy can signal confidence. A mass selloff can signal trouble."
};
function buildHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<script>(function(){try{var p=new URLSearchParams(location.search);if(p.get('nogate')==='1'){localStorage.setItem('pm_agreed_v1',JSON.stringify({ts:Date.now(),v:1}));}}catch(e){}}());<\/script>
<meta charset="UTF-8"/><link rel="icon" type="image/png" href="/img/tuck/tuck-v2-64.png"/><link rel="apple-touch-icon" href="/img/tuck/tuck-v2-apple.png"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Tuck \u2014 Free Financial Intelligence for Everyone</title>
<meta name="description" content="Tuck — financial intelligence stolen back for the people. Real-time prices, congressional trades, geopolitical signals. Free forever. No login. No ads. No advice."/>
<meta property="og:title" content="Tuck"/>
<meta property="og:description" content="Free financial intelligence. No login. No ads. No advice."/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0a0f1e;--surface:rgba(255,255,255,0.035);--surface2:rgba(255,255,255,0.06);
  --border:rgba(255,255,255,0.08);--border2:rgba(255,255,255,0.12);
  --text:#e2e8f0;--muted:#64748b;--dim:#334155;--faint:#1e293b;
  --accent:#3b82f6;--accent2:#6366f1;
  --red:#ef4444;--green:#22c55e;--yellow:#eab308;--orange:#f97316;
  --oil:#ca8a04;--semi:#6366f1;--defense:#ef4444;--tech:#22c55e;
}
body{background:var(--bg);color:var(--text);font-family:'Inter',system-ui,-apple-system,sans-serif;
  min-height:100vh;line-height:1.5}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
button{cursor:pointer;font-family:inherit}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}

/* \u2500\u2500 ANNOUNCEMENT BANNER \u2500\u2500 */
#banner{background:linear-gradient(90deg,rgba(59,130,246,0.15),rgba(99,102,241,0.15));
  border-bottom:1px solid rgba(59,130,246,0.2);padding:8px 20px;text-align:center;
  font-size:12px;color:#93c5fd}
#banner strong{color:#bfdbfe}

/* \u2500\u2500 NAV \u2500\u2500 */
nav{background:rgba(10,15,30,0.95);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);padding:0 20px;position:sticky;top:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;height:52px}
.nav-logo{display:flex;align-items:center;gap:10px}
.nav-logo .logo-icon{width:32px;height:32px;background:transparent;
  border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;overflow:hidden}
.nav-logo h1{font-size:15px;font-weight:800;color:#f1f5f9;letter-spacing:-.4px}
.nav-logo .tagline{font-size:9px;color:var(--muted);letter-spacing:.5px}
.nav-links{display:flex;gap:4px}
.nav-link{background:transparent;border:none;padding:6px 12px;border-radius:5px;
  font-size:11px;color:var(--muted);transition:all .15s}
.nav-link:hover,.nav-link.active{background:rgba(59,130,246,0.1);color:#93c5fd}
.nav-pill{background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);
  border-radius:10px;padding:3px 8px;font-size:9px;color:#86efac;display:flex;
  align-items:center;gap:4px}
.live-dot{width:5px;height:5px;border-radius:50%;background:#22c55e;
  animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}

/* \u2500\u2500 HERO \u2500\u2500 */
#hero{padding:48px 20px 36px;max-width:860px;margin:0 auto;text-align:center}
#hero .eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:2px;
  color:var(--accent);margin-bottom:12px}
#hero h2{font-size:clamp(28px,5vw,46px);font-weight:900;letter-spacing:-1.5px;
  color:#f8fafc;line-height:1.15;margin-bottom:14px}
#hero h2 span{background:linear-gradient(135deg,#3b82f6,#a78bfa);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
#hero .subtitle{font-size:15px;color:#94a3b8;max-width:580px;margin:0 auto 24px}
.mission-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:32px}
.badge-pill{background:rgba(255,255,255,0.05);border:1px solid var(--border2);
  border-radius:20px;padding:5px 12px;font-size:11px;color:#94a3b8;
  display:flex;align-items:center;gap:5px}
.badge-pill .icon{font-size:12px}
.disclaimer-box{background:rgba(234,179,8,0.07);border:1px solid rgba(234,179,8,0.18);
  border-radius:8px;padding:10px 16px;font-size:11px;color:#a16207;
  max-width:600px;margin:0 auto}
.disclaimer-box strong{color:#ca8a04}

/* \u2500\u2500 MAIN LAYOUT \u2500\u2500 */
main{max-width:1000px;margin:0 auto;padding:0 16px 60px}

/* \u2500\u2500 SECTION HEADERS \u2500\u2500 */
.section{margin-bottom:28px}
.section-hdr{display:flex;align-items:center;justify-content:space-between;
  margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.section-title{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;
  color:#f1f5f9;letter-spacing:-.3px}
.section-title .s-icon{font-size:16px}
.section-sub{font-size:10px;color:var(--muted)}
.section-badge{font-size:9px;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);
  color:#93c5fd;border-radius:3px;padding:1px 6px;font-weight:600}

/* \u2500\u2500 WATCHLIST \u2500\u2500 */
#watchlist-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px}
.wl-card{background:var(--surface);border:1px solid var(--border);border-radius:10px;
  padding:12px 14px;cursor:pointer;transition:all .2s;position:relative;overflow:hidden}
.wl-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px}
.wl-card.cat-semi::before{background:linear-gradient(90deg,#6366f1,#8b5cf6)}
.wl-card.cat-oil::before{background:linear-gradient(90deg,#ca8a04,#f97316)}
.wl-card.cat-defense::before{background:linear-gradient(90deg,#ef4444,#f97316)}
.wl-card.cat-tech::before{background:linear-gradient(90deg,#22c55e,#10b981)}
.wl-card:hover{border-color:rgba(59,130,246,0.4);background:rgba(59,130,246,0.05);transform:translateY(-1px)}
.wl-card.expanded{border-color:rgba(59,130,246,0.5);background:rgba(59,130,246,0.06)}
.wl-ticker{font-size:13px;font-weight:800;font-family:monospace;color:#f1f5f9;margin-bottom:1px}
.wl-name{font-size:10px;color:var(--muted);margin-bottom:8px}
.wl-price{font-size:22px;font-weight:700;font-family:monospace;color:#f8fafc;line-height:1}
.wl-chg{font-size:11px;font-family:monospace;font-weight:600;margin-top:3px}
.wl-chg.up{color:var(--green)}.wl-chg.down{color:var(--red)}.wl-chg.flat{color:var(--muted)}
.wl-range{font-size:9px;color:var(--dim);margin-top:5px}
.wl-sector{font-size:8px;text-transform:uppercase;letter-spacing:.5px;margin-top:4px;opacity:.6}
.loading-shimmer{color:var(--dim);font-size:11px}

/* \u2500\u2500 EXPANDED CARD \u2500\u2500 */
#detail-panel{background:var(--surface);border:1px solid rgba(59,130,246,0.3);
  border-radius:12px;padding:20px;margin-bottom:16px;display:none}
#detail-panel.visible{display:block}
.dp-head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px}
.dp-ticker{font-size:24px;font-weight:900;font-family:monospace;color:#f8fafc}
.dp-fullname{font-size:12px;color:var(--muted);margin-top:2px}
.dp-close{background:transparent;border:1px solid var(--border);border-radius:5px;
  padding:4px 8px;color:var(--muted);font-size:10px}
.dp-close:hover{color:var(--text)}
.dp-desc{font-size:13px;color:#cbd5e1;line-height:1.6;margin-bottom:14px;
  padding:10px;background:rgba(255,255,255,0.03);border-radius:6px;border-left:2px solid var(--accent)}
.dp-stats{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.dp-stat{background:rgba(255,255,255,0.03);border:1px solid var(--border);
  border-radius:6px;padding:8px 12px;flex:1;min-width:80px}
.dp-stat .lbl{font-size:9px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:3px}
.dp-stat .val{font-size:15px;font-weight:700;font-family:monospace;color:#f1f5f9}
.dp-section{margin-top:12px;padding-top:10px;border-top:1px solid var(--border)}
.dp-section-title{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:8px}
.geo-badge{display:inline-block;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);
  border-radius:4px;padding:2px 7px;font-size:10px;color:#fca5a5;margin:2px}
.why-matters{font-size:12px;color:#94a3b8;line-height:1.5}

/* \u2500\u2500 NEWS \u2500\u2500 */
.news-item{border-bottom:1px solid var(--border);padding:10px 0;display:flex;gap:10px}
.news-item:last-child{border-bottom:none}
.news-impact{width:36px;flex-shrink:0;text-align:center}
.impact-num{font-size:12px;font-weight:700;font-family:monospace}
.news-body{flex:1}
.news-hl{font-size:12px;font-weight:500;color:#e2e8f0;line-height:1.4;margin-bottom:4px}
.news-hl a{color:#e2e8f0}.news-hl a:hover{color:#93c5fd}
.news-meta{display:flex;gap:8px;flex-wrap:wrap}
.news-meta span{font-size:10px;color:var(--muted)}
.sent-badge{font-size:9px;padding:1px 5px;border-radius:3px;font-weight:600}
.sent-esc{background:rgba(239,68,68,0.15);color:#fca5a5}
.sent-des{background:rgba(34,197,94,0.12);color:#86efac}
.sent-neu{background:rgba(255,255,255,0.06);color:var(--muted)}
.ticker-tag{font-size:9px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);
  color:#a5b4fc;border-radius:3px;padding:1px 4px}

/* \u2500\u2500 CONGRESS \u2500\u2500 */
.cong-item{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)}
.cong-item:last-child{border-bottom:none}
.cong-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#1e40af,#6366f1);
  display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;color:#fff;font-weight:700}
.cong-body{flex:1}
.cong-name{font-size:12px;font-weight:600;color:#e2e8f0}
.cong-detail{font-size:11px;color:var(--muted);margin-top:2px}
.cong-ticker{font-size:13px;font-weight:800;font-family:monospace;text-align:right}
.trade-buy{color:var(--green)}.trade-sell{color:var(--red)}
.party-d{color:#60a5fa}.party-r{color:#f87171}
.cong-empty{text-align:center;padding:24px;color:var(--muted);font-size:12px}

/* \u2500\u2500 MACRO \u2500\u2500 */
#macro-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:8px}
.macro-card{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 14px}
.macro-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:5px}
.macro-val{font-size:20px;font-weight:700;font-family:monospace;color:#f8fafc;margin-bottom:4px}
.macro-sub{font-size:10px;color:var(--dim)}
.macro-why{font-size:10px;color:#94a3b8;margin-top:6px;line-height:1.4;
  padding-top:6px;border-top:1px solid var(--border)}
.macro-trend{font-size:10px;margin-top:3px}
.trend-up{color:var(--red)}.trend-dn{color:var(--green)}.trend-flat{color:var(--muted)}

/* \u2500\u2500 GLOSSARY \u2500\u2500 */
#glossary-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px}
.gloss-card{background:var(--surface);border:1px solid var(--border);border-radius:8px;
  padding:12px 14px;cursor:pointer;transition:border-color .2s}
.gloss-card:hover{border-color:rgba(59,130,246,0.3)}
.gloss-term{font-size:12px;font-weight:700;color:#a5b4fc;margin-bottom:4px}
.gloss-def{font-size:11px;color:#94a3b8;line-height:1.5}

/* \u2500\u2500 TABS \u2500\u2500 */
.tab-bar{display:flex;border-bottom:1px solid var(--border);margin-bottom:14px}
.tab{background:transparent;border:none;border-bottom:2px solid transparent;
  padding:7px 14px;font-size:11px;color:var(--muted);font-weight:400;transition:all .15s}
.tab:hover{color:var(--text)}
.tab.active{color:#93c5fd;border-bottom-color:var(--accent);font-weight:600}
.tab-spacer{flex:1;border-bottom:1px solid var(--border)}

/* \u2500\u2500 REGION FILTER \u2500\u2500 */
.region-row{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}
.rpill{background:var(--surface);border:1px solid var(--border);border-radius:14px;
  padding:3px 10px;font-size:10px;color:var(--muted);transition:all .15s}
.rpill:hover,.rpill.active{background:rgba(59,130,246,0.12);border-color:var(--accent);color:#93c5fd}

/* \u2500\u2500 FOOTER \u2500\u2500 */
footer{background:rgba(0,0,0,0.3);border-top:1px solid var(--border);padding:28px 20px;
  max-width:1000px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:20px}
.footer-col h4{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:8px}
.footer-col p,.footer-col li{font-size:11px;color:var(--dim);line-height:1.6}
.footer-col ul{list-style:none;padding:0}
.footer-col li::before{content:'\u2192 ';color:var(--accent)}
.disclaimer-full{font-size:10px;color:var(--dim);line-height:1.6;padding:12px;
  background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:6px;
  margin-top:16px}
.vpdlny-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(59,130,246,0.08);
  border:1px solid rgba(59,130,246,0.2);border-radius:6px;padding:5px 10px;
  font-size:10px;color:#93c5fd;margin-top:10px}

/* \u2500\u2500 LOADING / ERROR \u2500\u2500 */
.spinner{text-align:center;padding:24px;color:var(--muted);font-size:12px}
.err-box{background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);
  border-radius:6px;padding:10px;font-size:11px;color:#fca5a5}

/* \u2500\u2500 RESPONSIVE \u2500\u2500 */
@media(max-width:640px){
  #hero{padding:28px 16px 20px}
  #hero h2{font-size:26px}
  .footer-grid{grid-template-columns:1fr}
  #watchlist-grid{grid-template-columns:repeat(3,1fr)}
  .nav-links{display:none}
  #macro-grid{grid-template-columns:repeat(2,1fr)}
}


/* \u2500\u2500 DISCLAIMER GATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* \u2500\u2500 GATE: mobile-first, iOS Safari safe \u2500\u2500 */
#gate-overlay{
  position:fixed;inset:0;background:#060b18;z-index:9999;
  display:flex;align-items:flex-start;justify-content:center;
  padding:0;overflow-y:auto;-webkit-overflow-scrolling:touch;
  animation:fadeIn .3s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
#gate-box{
  background:#0d1526;border:1px solid rgba(59,130,246,0.25);
  border-radius:0 0 16px 16px;
  width:100%;max-width:520px;
  padding:28px 20px 32px;
  box-shadow:0 0 60px rgba(59,130,246,0.08);
  margin:0 auto}
@media(min-width:560px){
  #gate-overlay{align-items:center;padding:16px}
  #gate-box{border-radius:16px;padding:36px 32px}}
.gate-logo{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.gate-logo-icon{
  width:38px;height:38px;min-width:38px;
  background:transparent;
  border-radius:10px;display:flex;align-items:center;
  justify-content:center;font-size:20px;overflow:hidden}
.gate-logo h1{font-size:17px;font-weight:900;color:#f1f5f9;letter-spacing:-.5px;line-height:1.1}
.gate-logo p{font-size:10px;color:#475569;letter-spacing:.5px;text-transform:uppercase}
.gate-divider{height:1px;background:rgba(255,255,255,0.07);margin:0 0 16px}
.gate-title{font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;
  letter-spacing:.8px;margin-bottom:12px}
.gate-items{list-style:none;padding:0;margin:0 0 16px}
.gate-items li{display:flex;align-items:flex-start;gap:10px;padding:7px 0;
  border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;color:#94a3b8;line-height:1.5}
.gate-items li:last-child{border-bottom:none}
.gate-items .gi{font-size:15px;flex-shrink:0;margin-top:1px}
.gate-items .yes{color:#22c55e}.gate-items .no{color:#ef4444}
/* Checkbox row \u2014 tappable on iOS */
.gate-check-row{
  display:flex;align-items:flex-start;gap:12px;margin:16px 0;
  background:rgba(59,130,246,0.07);border:1px solid rgba(59,130,246,0.2);
  border-radius:10px;padding:14px 14px;cursor:pointer;
  -webkit-tap-highlight-color:transparent}
.gate-check-row input[type=checkbox]{
  width:20px;height:20px;min-width:20px;margin-top:2px;
  accent-color:#3b82f6;cursor:pointer;flex-shrink:0}
.gate-check-row label{font-size:13px;color:#cbd5e1;line-height:1.55;cursor:pointer}
.gate-check-row label strong{color:#93c5fd}
/* Enter button \u2014 always visible, full opacity, iOS tap-friendly */
.gate-enter{
  -webkit-appearance:none;appearance:none;
  display:block;width:100%;
  padding:16px 20px;margin-top:6px;
  background:linear-gradient(135deg,#1d4ed8,#4338ca);
  border:none;border-radius:12px;
  color:#fff;font-size:15px;font-weight:700;
  cursor:pointer;letter-spacing:-.2px;
  transition:opacity .15s,transform .15s;
  -webkit-tap-highlight-color:transparent;
  touch-action:manipulation}
.gate-enter.locked{
  background:#1e293b;
  opacity:.4;
  box-shadow:none}
.gate-enter.ready{
  background:linear-gradient(135deg,#1d4ed8,#4338ca);
  opacity:1;
  box-shadow:0 0 0 1px rgba(99,130,246,0.4),0 4px 24px rgba(59,130,246,0.25)}
.gate-enter.ready:active{
  transform:scale(0.98);opacity:.85}
.gate-links{display:flex;gap:14px;justify-content:center;margin-top:16px;flex-wrap:wrap}
.gate-links a{font-size:11px;color:#475569;text-decoration:none}
.gate-links a:hover,.gate-links a:active{color:#93c5fd}
.gate-osint-badge{
  display:flex;align-items:center;gap:6px;justify-content:center;
  margin-bottom:16px;flex-wrap:wrap}
.osint-pill,.free-pill,.vpdlny-pill{
  border-radius:20px;padding:4px 11px;font-size:10px;
  text-transform:uppercase;letter-spacing:.5px;font-weight:700;white-space:nowrap}
.osint-pill{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#fca5a5}
.free-pill{background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);color:#86efac}
.vpdlny-pill{background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);color:#a5b4fc}
/* modal */
#legal-modal{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:10000;
  display:none;align-items:center;justify-content:center;padding:16px}
#legal-modal.open{display:flex}
#legal-modal-inner{background:#0d1526;border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;max-width:680px;width:100%;max-height:80vh;overflow-y:auto;
  padding:28px}
#legal-modal-inner h2{font-size:18px;font-weight:800;color:#f1f5f9;margin-bottom:8px}
#legal-modal-inner p,#legal-modal-inner li{font-size:12px;color:#94a3b8;line-height:1.6}
#legal-modal-inner h3{font-size:13px;color:#cbd5e1;margin:14px 0 5px}
.modal-close{float:right;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
  border-radius:6px;padding:4px 10px;color:#94a3b8;font-size:11px;cursor:pointer;margin-left:12px}
.modal-close:hover{color:#f1f5f9}

/* \u2500\u2500 UTILITY \u2500\u2500 */
.up{color:var(--green)}.down{color:var(--red)}.flat{color:var(--muted)}
.hidden{display:none}
.empty{text-align:center;padding:28px;color:var(--muted);font-size:12px}

.hero-tuck-wrap{display:grid;grid-template-columns:1.4fr 1fr;gap:36px;align-items:center;margin:18px 0 8px;max-width:1100px}
.hero-tuck-copy h2{font-size:54px;font-weight:800;line-height:1.05;letter-spacing:-0.02em;margin:0;color:#f1f5f9}
.hero-tuck-copy h2 span{background:linear-gradient(90deg,#22c55e,#d4a017);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.tuck-bio{font-size:16px;line-height:1.55;color:#cbd5e1;margin:18px 0 14px;max-width:560px}
.tuck-kicker{font-size:22px;font-weight:700;color:#f1f5f9;margin:0;letter-spacing:-0.01em}
.tuck-kicker span{background:linear-gradient(90deg,#22c55e,#d4a017);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-tuck-art{display:flex;justify-content:center;align-items:center}
.hero-tuck-art img{width:100%;max-width:340px;height:auto;border-radius:18px;box-shadow:0 24px 60px rgba(34,197,94,0.18),0 4px 16px rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.05)}
@media(max-width:780px){.hero-tuck-wrap{grid-template-columns:1fr;gap:20px;text-align:center}.hero-tuck-copy h2{font-size:38px}.hero-tuck-art img{max-width:220px}}

/* ── ASK TUCK WIDGET ─────────────────────────────────────────── */
#ask-tuck-btn{position:fixed;bottom:24px;right:24px;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);border:2px solid rgba(255,255,255,0.1);cursor:pointer;box-shadow:0 8px 24px rgba(34,197,94,0.35),0 2px 8px rgba(0,0,0,0.4);z-index:9998;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;padding:0}
#ask-tuck-btn:hover{transform:scale(1.08);box-shadow:0 12px 32px rgba(34,197,94,0.5),0 4px 12px rgba(0,0,0,0.5)}
#ask-tuck-btn img{width:48px;height:48px;image-rendering:pixelated;border-radius:50%}
#ask-tuck-panel{position:fixed;bottom:100px;right:24px;width:380px;max-width:calc(100vw - 48px);height:520px;max-height:calc(100vh - 140px);background:#0f1729;border:1px solid rgba(255,255,255,0.08);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.6);z-index:9999;display:none;flex-direction:column;overflow:hidden}
#ask-tuck-panel.open{display:flex}
#ask-tuck-header{padding:14px 16px;background:linear-gradient(135deg,#1a2540,#0f1729);border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:10px}
#ask-tuck-header img{width:32px;height:32px;image-rendering:pixelated;border-radius:50%}
#ask-tuck-header .title{flex:1;font-weight:700;color:#f1f5f9;font-size:14px;line-height:1.2}
#ask-tuck-header .sub{font-size:10px;color:#22c55e;font-weight:600;text-transform:uppercase;letter-spacing:0.05em}
#ask-tuck-close{background:transparent;border:none;color:#94a3b8;cursor:pointer;font-size:20px;padding:0 4px;line-height:1}
#ask-tuck-close:hover{color:#f1f5f9}
#ask-tuck-messages{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
.tuck-msg{padding:10px 12px;border-radius:12px;font-size:13px;line-height:1.5;max-width:85%;white-space:pre-wrap;word-wrap:break-word}
.tuck-msg.user{background:#1e3a5f;color:#dbeafe;align-self:flex-end;border-bottom-right-radius:4px}
.tuck-msg.tuck{background:#1a2540;color:#e2e8f0;align-self:flex-start;border-bottom-left-radius:4px;border-left:2px solid #22c55e}
.tuck-msg.error{background:rgba(239,68,68,0.1);color:#fca5a5;align-self:flex-start;border-left:2px solid #ef4444}
.tuck-msg.loading{color:#94a3b8;font-style:italic}
#ask-tuck-input-wrap{padding:12px;border-top:1px solid rgba(255,255,255,0.06);display:flex;gap:8px;background:#0a1020}
#ask-tuck-input{flex:1;background:#1a2540;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:9px 12px;color:#f1f5f9;font-size:13px;font-family:inherit;outline:none;resize:none;min-height:38px;max-height:100px}
#ask-tuck-input:focus{border-color:#22c55e}
#ask-tuck-send{background:#22c55e;border:none;border-radius:8px;color:#0a0e1a;font-weight:700;padding:0 14px;cursor:pointer;font-size:13px;transition:background .15s}
#ask-tuck-send:hover{background:#16a34a}
#ask-tuck-send:disabled{background:#475569;color:#94a3b8;cursor:not-allowed}
#ask-tuck-disclaimer{font-size:9px;color:#64748b;padding:0 12px 8px;text-align:center;line-height:1.4}
@media(max-width:480px){
  #ask-tuck-panel{right:12px;left:12px;width:auto;bottom:90px}
  #ask-tuck-btn{bottom:16px;right:16px;width:56px;height:56px}
  #ask-tuck-btn img{width:40px;height:40px}
}
</style>
</head>
<body>


<!-- DISCLAIMER GATE -->
<div id="gate-overlay">
  <div id="gate-box">
    <div class="gate-logo">
      <div class="gate-logo-icon"><img src="/img/tuck/tuck-v2-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:10px;object-fit:cover" /></div>
      <div>
        <h1>Tuck</h1>
        <p>Free \xB7 Public \xB7 OSINT-Powered \xB7 No Advice</p>
      </div>
    </div>
    <div class="gate-divider"></div>
    <div class="gate-osint-badge">
      <span class="osint-pill">\u26A1 OSINT Intelligence</span>
      <span class="free-pill">\u2713 Free Forever</span>
      <span class="vpdlny-pill">\u{1F6E1} VPDLNY</span>
    </div>
    <div class="gate-title">Before you enter, understand this:</div>
    <ul class="gate-items">
      <li><span class="gi no">\u{1F6AB}</span><span>This platform is <strong style="color:#fca5a5">NOT</strong> investment advice. Nothing here should be used to make financial decisions.</span></li>
      <li><span class="gi no">\u{1F6AB}</span><span>Pete's Watchlist is a <strong style="color:#fca5a5">study list</strong>, not a buy list. No security here is recommended for purchase.</span></li>
      <li><span class="gi yes">\u2705</span><span>This is a <strong style="color:#86efac">free public educational tool</strong> \u2014 financial intelligence for people who deserve it.</span></li>
      <li><span class="gi yes">\u2705</span><span>Data may be <strong style="color:#86efac">delayed 15+ minutes</strong>. Always verify with authoritative sources before acting.</span></li>
      <li><span class="gi yes">\u2705</span><span>We collect <strong style="color:#86efac">no personal data</strong>, set no cookies, and will never sell your information.</span></li>
    </ul>
    <div class="gate-check-row">
      <input type="checkbox" id="gate-checkbox"/>
      <label for="gate-checkbox">I understand that <strong>Tuck provides educational information only</strong> and is not investment advice. I am 18 or older and agree to the <a href="#" data-modal="tos" style="color:#60a5fa">Terms of Service</a> and <a href="#" data-modal="privacy" style="color:#60a5fa">Privacy Policy</a>.</label>
    </div>
    <button class="gate-enter locked" id="gate-btn">
      Enter Tuck \u2192
    </button>
    <div class="gate-links">
      <a href="/privacy" data-modal="privacy">Privacy Policy</a>
      <a href="/tos" data-modal="tos">Terms of Service</a>
      <a href="/about" data-modal="about">About Tuck</a>
      <a href="https://discord.gg/vpdlny" target="_blank">Community</a>
    </div>
  </div>
</div>

<!-- LEGAL MODAL -->
<div id="legal-modal">
  <div id="legal-modal-inner">
    <div id="legal-modal-content"></div>
  </div>
</div>


<!-- ANNOUNCEMENT BANNER -->
<div id="banner">
  <strong>\u{1F4E1} Tuck is live.</strong>
  Free financial intelligence \u2014 no login, no ads, no advice. Ever.
  Built by <strong>VPDLNY</strong> for communities that Wall Street ignores.
</div>

<!-- NAV -->
<nav>
  <div class="nav-logo">
    <div class="logo-icon"><img src="/img/tuck/tuck-v2-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:7px;object-fit:cover" /></div>
    <div>
      <h1>Tuck</h1>
      <div class="tagline">FREE \xB7 OPEN \xB7 NO ADVICE \xB7 NO PFOF</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <div class="nav-links">
      <button class="nav-link active" onclick="goToSection('watchlist')">Watchlist</button>
      <button class="nav-link" onclick="goToSection('news')">News</button>
      <button class="nav-link" onclick="goToSection('congress')">Congress</button>
      <button class="nav-link" onclick="goToSection('macro')">Macro</button>
      <button class="nav-link" onclick="goToSection('learn')">Learn</button>
    </div>
    <div class="nav-pill"><span class="live-dot"></span> LIVE DATA</div>
  </div>
</nav>

<!-- HERO -->
<div id="hero">
  <div class="eyebrow">Free forever \xB7 Open source \xB7 VPDLNY</div>
  <div class="hero-tuck-wrap"><div class="hero-tuck-copy"><h2>Meet Tuck.</h2><p class="tuck-bio">Patron saint of the unbanked, the unpriced, and the unwelcome. He stands with the vulnerable, the poor, and the oppressed — freeing them from the bonds of class warfare with the one weapon Wall Street fears most: information.</p><p class="tuck-kicker">What they hoard, <span>we hand back.</span></p></div><div class="hero-tuck-art"><img src="/img/tuck/tuck-v2-hero.png" alt="Tuck the friar mascot" loading="eager"/></div></div>
  <p class="subtitle">Real-time market intelligence, congressional trade tracking, geopolitical OSINT, and plain-English market education. Free forever, no account, no strings. Information is the sword Tuck took from the sheriff.</p>
  <div class="mission-row">
    <div class="badge-pill"><span class="icon">\u{1F6AB}</span>No stock advice. Ever.</div>
    <div class="badge-pill"><span class="icon">\u{1F6AB}</span>No login required</div>
    <div class="badge-pill"><span class="icon">\u{1F6AB}</span>No ads or tracking</div>
    <div class="badge-pill"><span class="icon">\u{1F6AB}</span>No PFOF or data selling</div>
    <div class="badge-pill"><span class="icon">\u2705</span>100% free forever</div>
    <div class="badge-pill"><span class="icon">\u2705</span>Open source</div>
  </div>
  <div class="disclaimer-box">
    <strong>\u26A0\uFE0F Educational Platform Only:</strong> Nothing on this site is investment advice, a recommendation to buy or sell any security, or financial guidance of any kind. We display public data for educational purposes. Always do your own research.
  </div>
</div>

<!-- MAIN CONTENT -->
<main>

  <!-- \u2500\u2500 WATCHLIST \u2500\u2500 -->
  <div class="section" id="watchlist">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F4CA}</span>
        Pete's Study Watchlist
        <span class="section-badge">9 STOCKS</span>
      </div>
      <div class="section-sub">Click any stock for a full plain-English breakdown</div>
    </div>
    <div id="watchlist-grid">
      ${WATCHLIST.map((s) => `
      <div class="wl-card cat-${s.cat}" id="card-${s.ticker}" onclick="expandStock('${s.ticker}')">
        <div class="wl-ticker">${s.ticker}</div>
        <div class="wl-name">${s.name}</div>
        <div class="wl-price loading-shimmer" id="price-${s.ticker}">Loading\u2026</div>
        <div class="wl-chg" id="chg-${s.ticker}"></div>
        <div class="wl-range" id="range-${s.ticker}"></div>
        <div class="wl-sector">${s.sector}</div>
      </div>`).join("")}
    </div>

    <!-- Detail panel -->
    <div id="detail-panel">
      <div class="dp-head">
        <div>
          <div class="dp-ticker" id="dp-ticker">\u2014</div>
          <div class="dp-fullname" id="dp-fullname">\u2014</div>
        </div>
        <button class="dp-close" onclick="closeDetail()">\u2715 Close</button>
      </div>
      <div class="dp-desc" id="dp-desc">\u2014</div>
      <div class="dp-stats" id="dp-stats"></div>
      <div class="dp-section">
        <div class="dp-section-title">\u{1F30D} Geopolitical Exposure</div>
        <div id="dp-geo"></div>
        <div class="why-matters" id="dp-why"></div>
      </div>
      <div class="dp-section">
        <div class="dp-section-title">\u{1F4DA} About This Sector</div>
        <div class="why-matters" id="dp-sector-info"></div>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 NEWS SCANNER \u2500\u2500 -->
  <div class="section" id="news">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F4F0}</span>
        Market Intelligence Scanner
        <span class="section-badge">LIVE</span>
      </div>
      <div class="section-sub">Geopolitical signals that move your watchlist</div>
    </div>
    <div class="tab-bar">
      <button class="tab active" onclick="setNewsTab('all',this)">All Signals</button>
      <button class="tab" onclick="setNewsTab('esc',this)">\u{1F534} Escalation</button>
      <button class="tab" onclick="setNewsTab('des',this)">\u{1F7E2} De-escalation</button>
      <div class="tab-spacer"></div>
    </div>
    <div class="region-row" id="news-regions"></div>
    <div id="news-list"><div class="spinner">\u{1F4E1} Loading signals\u2026</div></div>
    <div id="news-disclaimer" style="font-size:10px;color:var(--dim);margin-top:8px;text-align:center">
      News aggregated from 14 public RSS feeds for educational purposes. Not investment advice.
    </div>
  </div>

  <!-- \u2500\u2500 CONGRESS WATCH \u2500\u2500 -->
  <div class="section" id="congress">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F3DB}\uFE0F</span>
        Congress Watch
        <span class="section-badge">PUBLIC DATA</span>
      </div>
      <div class="section-sub">Recent stock trades filed by US senators and representatives</div>
    </div>
    <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.15);border-radius:6px;padding:9px 13px;font-size:11px;color:#93c5fd;margin-bottom:12px">
      \u{1F4A1} <strong>What is this?</strong> US law (STOCK Act, 2012) requires members of Congress to publicly disclose stock trades within 45 days. This data is sourced from public SEC filings. We show it so you can see what lawmakers buy <em>while</em> they vote on legislation.
    </div>
    <div id="congress-list"><div class="spinner">\u{1F3DB}\uFE0F Loading congressional trades\u2026</div></div>
  </div>

  <!-- \u2500\u2500 MACRO CORNER \u2500\u2500 -->
  <div class="section" id="macro">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F310}</span>
        Macro Corner
        <span class="section-badge">FRED</span>
      </div>
      <div class="section-sub">The economic signals that drive all stock prices \u2014 explained in plain English</div>
    </div>
    <div id="macro-grid"><div class="spinner">\u{1F4CA} Loading macro data\u2026</div></div>
  </div>

  <!-- \u2500\u2500 LEARN \u2500\u2500 -->
  <div class="section" id="learn">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F4DA}</span>
        Learn the Language
      </div>
      <div class="section-sub">Every term Wall Street assumes you know. Explained in plain English. No condescension.</div>
    </div>
    <div id="glossary-grid">
      ${Object.entries(GLOSSARY).map(([term, def]) => `
      <div class="gloss-card">
        <div class="gloss-term">${term}</div>
        <div class="gloss-def">${def}</div>
      </div>`).join("")}
    </div>
  </div>

</main>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-col">
      <h4>Tuck</h4>
      <p>Built by <a href="https://discord.gg/vpdlny" target="_blank">VPDLNY</a> \u2014 the Vulnerable Persons Defense League of New York. A collective of technologists and artists who use knowledge as a tool to defend vulnerable communities.</p>
      <p style="margin-top:8px">This platform runs entirely on free infrastructure. It costs nothing to operate and will never be paywalled.</p>
      <div class="vpdlny-badge">\u{1F6E1}\uFE0F A VPDLNY Project \xB7 osintnet.uk</div>
    </div>
    <div class="footer-col">
      <h4>What We Will Never Do</h4>
      <ul>
        <li>Recommend any stock to buy or sell</li>
        <li>Sell your data or browsing behavior</li>
        <li>Use Payment for Order Flow (PFOF)</li>
        <li>Require you to create an account</li>
        <li>Show you ads or sponsored content</li>
        <li>Gamify trading to make you trade more</li>
        <li>Charge you. Ever. For anything.</li>
      </ul>
    </div>
  </div>
  <div class="disclaimer-full">
    <strong>Full Disclaimer:</strong> Tuck is an educational information platform. Nothing on this website constitutes investment advice, a recommendation to buy or sell any security, a solicitation of any investment, or financial guidance of any kind. All data displayed is sourced from publicly available APIs and filings (Finnhub, Yahoo Finance, SEC EDGAR, Federal Reserve FRED, CapitolTrades, RSS news feeds). Past price movements do not predict future performance. Congressional trading data reflects public SEC disclosures and does not imply any impropriety. "Pete's Watchlist" reflects stocks the platform founder finds interesting to study \u2014 this is not an endorsement, recommendation, or suggestion to invest. Tuck is not registered as an investment advisor with any regulatory body. Always consult a licensed financial professional before making investment decisions.
  </div>
</footer>

<script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const WATCHLIST = ${JSON.stringify(WATCHLIST)};
const TICKER_SET = new Set(WATCHLIST.map(w=>w.ticker));
const SECTOR_EXPLAINERS = ${JSON.stringify(SECTOR_EXPLAINERS)};

let state = {
  prices: {}, signals: [], stats: null, congress: [], macro: {},
  newsTab: 'all', newsRegion: 'All', activeStock: null
};

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const fmt  = (n,d=2) => n!=null?Number(n).toFixed(d):'\u2014';
const fmtB = n => { if(!n) return '\u2014'; if(n>=1e12) return '$'+(n/1e12).toFixed(2)+'T'; if(n>=1e9) return '$'+(n/1e9).toFixed(1)+'B'; return '$'+(n/1e6).toFixed(0)+'M'; };
const age  = iso => { const m=Math.floor((Date.now()-new Date(iso))/60000); return m<60?m+'m':m<1440?Math.floor(m/60)+'h':Math.floor(m/1440)+'d'; };
const esc  = s => { const d=document.createElement('div');d.textContent=s;return d.innerHTML; };
function goToSection(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); }

// \u2500\u2500 PRICES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
async function loadPrices() {
  try {
    const d = await fetch('/api/prices').then(r=>r.json());
    state.prices = d.quotes || {};
    WATCHLIST.forEach(w => {
      const q = state.prices[w.ticker];
      const priceEl = document.getElementById('price-'+w.ticker);
      const chgEl   = document.getElementById('chg-'+w.ticker);
      const rangeEl = document.getElementById('range-'+w.ticker);
      if (!q || !priceEl) return;
      priceEl.textContent = '$' + fmt(q.price);
      priceEl.className = 'wl-price';
      const up = q.change_pct >= 0;
      chgEl.textContent  = (up?'\u25B2':'\u25BC') + Math.abs(fmt(q.change_pct,2)) + '%';
      chgEl.className    = 'wl-chg ' + (up?'up':'down');
      if (q.week52_low && q.week52_high) {
        rangeEl.textContent = '52w $'+fmt(q.week52_low,0)+'\u2013$'+fmt(q.week52_high,0);
      }
    });
    if (state.activeStock) refreshDetailPanel(state.activeStock);
  } catch(e) { console.error('prices',e); }
}

// \u2500\u2500 STOCK DETAIL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function expandStock(ticker) {
  const prev = state.activeStock;
  if (prev) document.getElementById('card-'+prev)?.classList.remove('expanded');
  if (prev === ticker) { closeDetail(); return; }
  state.activeStock = ticker;
  document.getElementById('card-'+ticker)?.classList.add('expanded');
  document.getElementById('detail-panel').classList.add('visible');
  refreshDetailPanel(ticker);
  document.getElementById('detail-panel').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function refreshDetailPanel(ticker) {
  const info = WATCHLIST.find(w=>w.ticker===ticker);
  const q    = state.prices[ticker] || {};
  if (!info) return;
  document.getElementById('dp-ticker').textContent   = ticker;
  document.getElementById('dp-fullname').textContent = info.name + ' \xB7 ' + info.sector;
  document.getElementById('dp-desc').textContent     = info.desc;
  const up  = (q.change_pct||0) >= 0;
  const stats = [
    ['Price', q.price ? '$'+fmt(q.price) : '\u2014'],
    ['Today', q.change_pct!=null ? (up?'+':'')+fmt(q.change_pct)+'%' : '\u2014'],
    ['Mkt Cap', fmtB(q.market_cap)],
    ['52w Low', q.week52_low ? '$'+fmt(q.week52_low,0) : '\u2014'],
    ['52w High', q.week52_high ? '$'+fmt(q.week52_high,0) : '\u2014'],
    ['Volume', q.volume ? Number(q.volume).toLocaleString() : '\u2014'],
  ];
  document.getElementById('dp-stats').innerHTML = stats.map(([l,v]) =>
    '<div class="dp-stat"><div class="lbl">'+l+'</div><div class="val">'+esc(v)+'</div></div>'
  ).join('');
  document.getElementById('dp-geo').innerHTML =
    '<span class="geo-badge">'+esc(info.geo)+'</span>';
  const GEO_CONTEXT = {
    'China/Taiwan':"This stock is heavily influenced by US-China trade tensions. Tariffs, export restrictions on chip technology, and Taiwan Strait military posturing directly affect this company's supply chain or market access.",
    'Iran/Hormuz':"Oil and energy prices surge when there's military tension in the Strait of Hormuz - the chokepoint for ~20% of global oil supply. Watch Iran news closely with this ticker.",
    'Global':"This company operates across multiple geopolitical zones. Major conflicts, sanctions, or policy shifts in any major economy can affect its performance.",
  };
  document.getElementById('dp-why').textContent = GEO_CONTEXT[info.geo] || '';
  document.getElementById('dp-sector-info').textContent = SECTOR_EXPLAINERS[info.sector] || '';
}

function closeDetail() {
  if (state.activeStock) document.getElementById('card-'+state.activeStock)?.classList.remove('expanded');
  state.activeStock = null;
  document.getElementById('detail-panel').classList.remove('visible');
}

// \u2500\u2500 NEWS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const REGIONS = ['All','Iran/Hormuz','Ukraine/NATO','Israel/Gaza','China/Taiwan','Cuba','Global'];
const ICONS   = {'Iran/Hormuz':'\u{1F6E2}\uFE0F','Ukraine/NATO':'\u{1F1FA}\u{1F1E6}','Israel/Gaza':'\u2694\uFE0F','China/Taiwan':'\u{1F409}','Cuba':'\u{1F334}','Global':'\u{1F30D}'};
const SOURCES = {'axios_ravid':'Axios/Ravid','iranintl':'Iran Intl','warontherocks':'War on Rocks',
  'breakingdefense':'Breaking Defense','guardian_mideast':'Guardian','bbc_world':'BBC',
  'aljazeera':'Al Jazeera','foreignpolicy':'Foreign Policy'};

function tagSignalTickers(text) {
  if (!text) return [];
  const found = [];
  WATCHLIST.forEach(w => {
    if (text.toLowerCase().includes(w.name.toLowerCase()) ||
        text.toLowerCase().includes(w.ticker.toLowerCase())) {
      found.push(w.ticker);
    }
  });
  // Geopolitical \u2192 ticker mapping
  const GEO_TICKERS = {
    'Iran':['USO','XLE'],'Hormuz':['USO','XLE'],'Oil':['USO','XLE'],
    'China':['NVDA','AVGO','QCOM','MU','INTC'],'Taiwan':['NVDA','AVGO','QCOM','MU'],
    'Chip':['NVDA','AVGO','QCOM','MU','INTC'],'Semiconductor':['NVDA','AVGO','QCOM'],
    'Intel':['INTC'],'Nvidia':['NVDA'],'Cloudflare':['NET'],
    'Rare Earth':['MP'],'Defense':['MP','XLE'],'Ukraine':['MP','USO'],
  };
  Object.entries(GEO_TICKERS).forEach(([kw, tickers]) => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      tickers.forEach(t => { if (!found.includes(t)) found.push(t); });
    }
  });
  return [...new Set(found)].slice(0,4);
}

async function loadNews() {
  try {
    let url = '/api/news?limit=40';
    if (state.newsRegion !== 'All') url += '&region=' + encodeURIComponent(state.newsRegion);
    if (state.newsTab === 'esc') url += '&sentiment=escalation';
    if (state.newsTab === 'des') url += '&sentiment=de-escalation';
    const d  = await fetch(url).then(r=>r.json());
    state.signals = d.signals || [];
    state.stats = d;
    renderNews();
    renderRegionPills(d);
  } catch(e) {
    document.getElementById('news-list').innerHTML = '<div class="err-box">Unable to load news signals.</div>';
  }
}

function renderRegionPills(stats) {
  const counts = {};
  if (state.signals) state.signals.forEach(s => { counts[s.geopolitical_region] = (counts[s.geopolitical_region]||0)+1; });
  document.getElementById('news-regions').innerHTML = REGIONS.map(r => {
    const cnt = r!=='All' && counts[r] ? ' <span style="opacity:.5">('+counts[r]+')</span>' : '';
    return '<button class="rpill'+(state.newsRegion===r?' active':'')+'" data-region="'+r+'" onclick="setRegion(this.dataset.region)">'+
      (ICONS[r]||'')+' '+r+cnt+'</button>';
  }).join('');
}

function renderNews() {
  const el = document.getElementById('news-list');
  if (!state.signals.length) { el.innerHTML='<div class="empty">No signals match current filters.</div>'; return; }
  el.innerHTML = state.signals.slice(0,25).map(s => {
    const pct = Math.round((s.market_impact_score||0)*100);
    const col = pct>=80?'#ef4444':pct>=50?'#f97316':pct>=30?'#eab308':'#475569';
    const sentCls = s.sentiment==='escalation'?'sent-esc':s.sentiment==='de-escalation'?'sent-des':'sent-neu';
    const hl = s.url ? '<a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.headline)+'</a>' : esc(s.headline);
    const tickers = tagSignalTickers(s.headline + ' ' + (s.full_text||''));
    return '<div class="news-item">'
      +'<div class="news-impact"><div class="impact-num" style="color:'+col+'">'+pct+'%</div></div>'
      +'<div class="news-body">'
      +'<div class="news-hl">'+hl+'</div>'
      +'<div class="news-meta">'
      +'<span class="sent-badge '+sentCls+'">'+esc(s.sentiment||'neutral')+'</span>'
      +'<span>'+(SOURCES[s.source]||s.source)+'</span>'
      +'<span>'+age(s.published_at)+' ago</span>'
      +(tickers.length ? tickers.map(t=>'<span class="ticker-tag">'+t+'</span>').join('') : '')
      +'</div></div></div>';
  }).join('') + '<div style="text-align:center;padding:6px 0;font-size:10px;color:var(--dim)">'+state.signals.length+' total signals \xB7 Updated every 5 minutes</div>';
}

function setNewsTab(tab, btn) {
  state.newsTab = tab;
  document.querySelectorAll('.tab-bar .tab').forEach(b=>b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  loadNews();
}

function setRegion(r) {
  state.newsRegion = r;
  loadNews();
}

// \u2500\u2500 CONGRESS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
async function loadCongress() {
  try {
    const d = await fetch('/api/congress').then(r=>r.json());
    const trades = (d.trades || d.recent || d || []).slice(0,15);
    if (!trades.length) {
      document.getElementById('congress-list').innerHTML = '<div class="cong-empty">No recent congressional trades on file.<br/><span style="font-size:10px">Data updates as new SEC disclosures are filed (up to 45 days lag by law).</span></div>';
      return;
    }
    document.getElementById('congress-list').innerHTML = trades.map(t => {
      const initial = (t.name||t.representative||'?').charAt(0).toUpperCase();
      const isBuy  = (t.transaction||t.type||'').toLowerCase().includes('buy') || (t.transaction||t.type||'').toLowerCase().includes('purchase');
      const party  = (t.party||'').charAt(0).toUpperCase();
      const pClass = party==='D'?'party-d':party==='R'?'party-r':'';
      const ticker = t.ticker || t.asset || '?';
      const amt    = t.amount || t.range || '';
      return '<div class="cong-item">'
        +'<div class="cong-avatar">'+initial+'</div>'
        +'<div class="cong-body">'
        +'<div class="cong-name '+(pClass||'')+'">'+esc(t.name||t.representative||'Unknown')+(party?' ('+party+')':'')+'</div>'
        +'<div class="cong-detail">'+esc(t.date||t.transaction_date||'')+(amt?' \xB7 '+esc(amt):'')+'</div>'
        +'</div>'
        +'<div>'
        +'<div class="cong-ticker '+(isBuy?'trade-buy':'trade-sell')+'">'+esc(ticker)+'</div>'
        +'<div style="font-size:10px;text-align:right;color:var(--muted)">'+(isBuy?'BUY':'SELL')+'</div>'
        +'</div></div>';
    }).join('');
  } catch(e) {
    document.getElementById('congress-list').innerHTML = '<div class="err-box">Congressional data temporarily unavailable. Source: public SEC filings via CapitolTrades.</div>';
  }
}

// \u2500\u2500 MACRO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
async function loadMacro() {
  try {
    const d = await fetch('/api/macro').then(r=>r.json());
    state.macro = d;
    const cards = [
      { lbl:'Fed Rate', val: d.fed_rate!=null ? d.fed_rate.toFixed(2)+'%' : '\u2014',
        sub:'Federal Funds Rate', trend:null,
        why:"The Federal Reserve's key interest rate. When rates go up, borrowing costs rise and stocks often fall. When rates come down, stocks usually rally." },
      { lbl:'CPI Inflation', val: d.cpi!=null ? d.cpi.toFixed(1)+'%' : '\u2014',
        sub:'Year-over-year', trend: d.cpi_trend,
        why:"How fast prices are rising. High inflation = Fed raises rates = pressure on stocks. The 2022-2023 rate hike cycle crushed growth stocks." },
      { lbl:'Unemployment', val: d.unemployment!=null ? d.unemployment.toFixed(1)+'%' : '\u2014',
        sub:'US jobless rate', trend: d.unemp_trend,
        why:"A strong job market is good for stocks (people spend money). But if unemployment is TOO low, the Fed raises rates to cool inflation." },
      { lbl:'10yr Treasury', val: d.treasury_10y!=null ? d.treasury_10y.toFixed(2)+'%' : '\u2014',
        sub:'US 10-year yield', trend: d.treasury_trend,
        why:'The "risk-free" return. When this rises, tech stocks fall because investors can earn more from safe bonds. Watch this closely with NET and NVDA.' },
      { lbl:'WTI Crude Oil', val: d.oil_price!=null ? '$'+d.oil_price.toFixed(2) : '\u2014',
        sub:'Barrel price (USD)', trend: d.oil_trend,
        why:"Oil price directly drives USO and XLE. Middle East tension spikes it. OPEC supply decisions crush it. Always connected to geopolitical news." },
      { lbl:'US Dollar (DXY)', val: d.dxy!=null ? d.dxy.toFixed(1) : '\u2014',
        sub:'Dollar index', trend: d.dxy_trend,
        why:"A strong dollar hurts multinational companies like NVDA (overseas revenue worth less when converted). A weak dollar helps them." },
    ];
    document.getElementById('macro-grid').innerHTML = cards.map(c => {
      const trendHtml = c.trend ? '<div class="macro-trend '+(c.trend==='up'?'trend-up':c.trend==='down'?'trend-dn':'trend-flat')+'">'+( c.trend==='up'?'\u25B2 Rising':c.trend==='down'?'\u25BC Falling':'\u2192 Stable')+'</div>' : '';
      return '<div class="macro-card">'
        +'<div class="macro-lbl">'+c.lbl+'</div>'
        +'<div class="macro-val">'+c.val+'</div>'
        +'<div class="macro-sub">'+c.sub+'</div>'
        +trendHtml
        +'<div class="macro-why">'+c.why+'</div>'
        +'</div>';
    }).join('');
  } catch(e) {
    document.getElementById('macro-grid').innerHTML = '<div class="err-box">Macro data temporarily unavailable.</div>';
  }
}


// \u2500\u2500 DISCLAIMER GATE \u2014 iOS Safari safe, no disabled state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
(function() {
  var GATE_KEY    = 'pm_agreed_v1';
  var GATE_EXPIRY = 30 * 24 * 60 * 60 * 1000;

  function dismissGate() {
    try { localStorage.setItem(GATE_KEY, JSON.stringify({ts: Date.now(), v: 1})); } catch(e) {}
    var ov = document.getElementById('gate-overlay');
    if (!ov) return;
    ov.style.transition = 'opacity 0.35s ease';
    ov.style.opacity    = '0';
    setTimeout(function() {
      if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
    }, 380);
  }

  function syncBtn(cb, btn) {
    if (cb.checked) {
      btn.classList.remove('locked');
      btn.classList.add('ready');
    } else {
      btn.classList.remove('ready');
      btn.classList.add('locked');
    }
  }

  function shakeRow(row) {
    if (!row) return;
    row.style.transition = 'transform .08s ease';
    var moves = [8, -6, 4, -2, 0];
    moves.forEach(function(px, i) {
      setTimeout(function() { row.style.transform = 'translateX(' + px + 'px)'; }, i * 70);
    });
    setTimeout(function() { row.style.borderColor = 'rgba(239,68,68,0.6)'; }, 0);
    setTimeout(function() { row.style.borderColor = ''; }, 600);
  }

  function handleEnter(cb, btn, row) {
    if (!cb.checked) {
      shakeRow(row);
      return;
    }
    btn.textContent = 'Welcome \u2713';
    btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
    setTimeout(dismissGate, 250);
  }

  function init() {
    // Already agreed? Auto-dismiss.
    try {
      var saved = JSON.parse(localStorage.getItem(GATE_KEY) || 'null');
      if (saved && (Date.now() - saved.ts) < GATE_EXPIRY) {
        var ov2 = document.getElementById('gate-overlay');
        if (ov2) ov2.style.display = 'none';
        return;
      }
    } catch(e) {}

    var btn = document.getElementById('gate-btn');
    var cb  = document.getElementById('gate-checkbox');
    var row = document.querySelector('.gate-check-row');
    if (!btn || !cb) return;

    // Always start locked (CSS class, NOT disabled attribute)
    btn.classList.add('locked');
    btn.removeAttribute('disabled');

    // Sync on every possible interaction \u2014 iOS needs all of these
    ['change','click','input','touchend'].forEach(function(evt) {
      cb.addEventListener(evt, function(e) {
        // For touchend: toggle checked manually since touch doesn't auto-toggle
        if (evt === 'touchend') {
          e.preventDefault();
          cb.checked = !cb.checked;
        }
        syncBtn(cb, btn);
      });
    });

    // Also make the whole row tappable
    if (row) {
      row.addEventListener('click', function(e) {
        if (e.target !== cb) {
          cb.checked = !cb.checked;
          syncBtn(cb, btn);
        }
      });
    }

    // Enter button \u2014 listen on both click and touchend for iOS
    function onEnter(e) {
      e.preventDefault();
      handleEnter(cb, btn, row);
    }
    btn.addEventListener('click',    onEnter);
    btn.addEventListener('touchend', onEnter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// Legal modals (inline \u2014 no page reload, no tab)
const MODAL_CONTENT = {
  privacy: '<button class="modal-close" onclick="closeModal()">&#x2715; Close</button>'
    + '<h2>Privacy Policy</h2>'
    + '<p style="font-size:11px;color:#475569;margin-bottom:16px">Last updated: May 20, 2026</p>'
    + '<p><strong style="color:#93c5fd">The short version: We collect almost nothing.</strong> No account. No tracking. No selling.</p>'
    + '<h3>What we collect:</h3>'
    + '<ul>'
    + '<li>Nothing you enter &mdash; there are no forms, no logins, no accounts</li>'
    + '<li>Cloudflare server logs (IP, browser, pages visited) &mdash; held max 24 hours by Cloudflare, not us</li>'
    + '<li>Your disclaimer acceptance &mdash; stored only in YOUR browser localStorage, never on our servers. Expires in 30 days.</li>'
    + '<li>Aggregate anonymous traffic counts from Cloudflare analytics (no PII)</li>'
    + '</ul>'
    + '<h3>What we never do:</h3>'
    + '<ul>'
    + '<li>Set cookies of any kind</li>'
    + '<li>Sell, share, or monetize any user data</li>'
    + '<li>Track you across websites</li>'
    + '<li>Require any personal information</li>'
    + '</ul>'
    + '<h3>GDPR / CCPA:</h3>'
    + '<p>We do not sell personal information. Since we hold no personal data, your rights are trivially satisfied. Contact: <a href="mailto:privacy@osintnet.uk">privacy@osintnet.uk</a></p>'
    + '<p style="margin-top:12px"><a href="/privacy">Read full Privacy Policy &#8594;</a></p>',

  tos: '<button class="modal-close" onclick="closeModal()">&#x2715; Close</button>'
    + '<h2>Terms of Service</h2>'
    + '<p style="font-size:11px;color:#475569;margin-bottom:16px">Last updated: May 20, 2026 &middot; Governing Law: New York, USA</p>'
    + '<div style="background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.2);border-radius:6px;padding:10px 12px;margin-bottom:14px">'
    + '<p style="color:#fbbf24;margin:0"><strong>&#9888;&#65039; NOT investment advice.</strong> Nothing here is a recommendation to buy or sell any security.</p></div>'
    + '<h3>Key points:</h3>'
    + '<ul>'
    + '<li>You must be 18 or older to use this platform</li>'
    + '<li>All data is for educational purposes only &mdash; may be delayed 15+ minutes</li>'
    + '<li>Pete&#39;s Watchlist = stocks to study, not stocks to buy</li>'
    + '<li>Congressional trading data is public record &mdash; no allegations of impropriety</li>'
    + '<li>Platform provided "AS IS" &mdash; no warranties, no liability for financial decisions</li>'
    + '<li>Governing law: State of New York, USA</li>'
    + '</ul>'
    + '<h3>Our commitment to you:</h3>'
    + '<ul>'
    + '<li>Free forever &mdash; no paywalls, no subscriptions, no upsells</li>'
    + '<li>No ads &mdash; ever</li>'
    + '<li>Open source &mdash; MIT License</li>'
    + '</ul>'
    + '<p style="margin-top:12px"><a href="/tos">Read full Terms of Service &#8594;</a></p>',

  about: '<button class="modal-close" onclick="closeModal()">&#x2715; Close</button>'
    + '<h2>About Tuck</h2>'
    + '<p><strong>"Information was never meant to be hoarded."</strong><br/>Tuck is a free, open-source financial intelligence platform for communities that Wall Street ignores. Named for <em>Friar Tuck</em> — the monk who left the abbey to feed the people — we left the velvet rope of paid terminals to put real market intel in the hands of anyone who wants it.</p>'
    + '<p>Bloomberg Terminals cost tens of thousands a year. Premium trade trackers charge hundreds a month. Robinhood sells your order flow. Tuck\u2019s Market is the alternative \u2014 free, sovereign, no strings attached.</p>'
    + '<h3>What we provide:</h3>'
    + '<ul>'
    + '<li>Real-time market data for 9 curated tickers</li>'
    + '<li>Geopolitical OSINT signals from 14 intelligence feeds</li>'
    + '<li>Congressional trading disclosures (STOCK Act public data)</li>'
    + '<li>Macroeconomic indicators (Fed rate, CPI, oil, Treasury yields)</li>'
    + '<li>Plain-English financial education &mdash; no jargon, no condescension</li>'
    + '</ul>'
    + '<h3>Built by:</h3>'
    + '<p><strong>Pete McVries</strong> and <strong>VPDLNY</strong> &mdash; a collective of technologists and artists who use information to defend vulnerable communities. Staten Island, NYC.</p>'
    + '<h3>What makes us different:</h3>'
    + '<ul>'
    + '<li>Zero cost. Zero ads. Zero data selling. Zero PFOF.</li>'
    + '<li>OSINT-native: geopolitical intel connected to price action</li>'
    + '<li>Congressional trading on the same screen as prices</li>'
    + '<li>Open source &mdash; MIT License</li>'
    + '</ul>'
    + '<p style="margin-top:12px"><a href="/about">Read our full story &#8594;</a></p>'
};

function openModal(type) {
  document.getElementById('legal-modal-content').innerHTML = MODAL_CONTENT[type] || '';
  document.getElementById('legal-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('legal-modal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('legal-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Gate managed by IIFE above \u2014 no global call needed

// \u2500\u2500 BOOT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
(async () => {
  await Promise.all([loadPrices(), loadNews(), loadCongress(), loadMacro()]);
  // Refresh prices every 60s, news every 3min
  setInterval(loadPrices, 60000);
  setInterval(loadNews, 180000);
  setInterval(loadMacro, 900000);
})();
<\/script>

<!-- ASK TUCK FLOATING WIDGET -->
<button id="ask-tuck-btn" aria-label="Ask Tuck" title="Ask Tuck — free AI guide">
  <img src="/img/tuck/tuck-v2-128.png" alt="Tuck"/>
</button>
<div id="ask-tuck-panel" role="dialog" aria-label="Ask Tuck chat">
  <div id="ask-tuck-header">
    <img src="/img/tuck/tuck-v2-128.png" alt=""/>
    <div class="title">Ask Tuck<div class="sub">● Online · Free · No login</div></div>
    <button id="ask-tuck-close" aria-label="Close chat">×</button>
  </div>
  <div id="ask-tuck-messages">
    <div class="tuck-msg tuck">Peace, friend. I'm Tuck — guide to this little market sanctuary. Ask me anything about the tickers, the congressional trades, the news signals, or how any of it works. I won't tell you what to do with your money. But I'll help you understand what's on the page.</div>
  </div>
  <div id="ask-tuck-input-wrap">
    <textarea id="ask-tuck-input" placeholder="Ask Tuck a question..." rows="1" maxlength="1000"></textarea>
    <button id="ask-tuck-send">Send</button>
  </div>
  <div id="ask-tuck-disclaimer">Educational only. Not financial advice. Powered by Llama 3.3 on Cloudflare Workers AI.</div>
</div>
<script>
(function(){
  var btn = document.getElementById('ask-tuck-btn');
  var panel = document.getElementById('ask-tuck-panel');
  var closeBtn = document.getElementById('ask-tuck-close');
  var input = document.getElementById('ask-tuck-input');
  var sendBtn = document.getElementById('ask-tuck-send');
  var messages = document.getElementById('ask-tuck-messages');
  if(!btn || !panel) return;

  function openPanel(){ panel.classList.add('open'); setTimeout(function(){ if(input) input.focus(); }, 100); }
  function closePanel(){ panel.classList.remove('open'); }
  btn.addEventListener('click', function(){
    if(panel.classList.contains('open')) closePanel(); else openPanel();
  });
  if(closeBtn) closeBtn.addEventListener('click', closePanel);

  function addMsg(text, cls){
    var d = document.createElement('div');
    d.className = 'tuck-msg ' + cls;
    d.textContent = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
    return d;
  }

  function send(){
    var msg = input.value.trim();
    if(!msg) return;
    addMsg(msg, 'user');
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    var loading = addMsg('Tuck is thinking...', 'tuck loading');

    fetch('/api/ask-tuck', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message: msg })
    })
    .then(function(r){ return r.json().then(function(j){ return {status: r.status, body: j}; }); })
    .then(function(res){
      loading.remove();
      if(res.status === 200 && res.body.reply){
        addMsg(res.body.reply, 'tuck');
      } else {
        addMsg(res.body.error || 'Something went wrong.', 'error');
      }
    })
    .catch(function(){
      loading.remove();
      addMsg('Network issue. Try again.', 'error');
    })
    .finally(function(){
      sendBtn.disabled = false;
      if(input) input.focus();
    });
  }

  if(sendBtn) sendBtn.addEventListener('click', send);
  if(input){
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault();
        send();
      }
    });
    input.addEventListener('input', function(){
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
  }
})();
</script>
</body>
</html>`;
}
__name(buildHTML, "buildHTML");
async function getMacroData() {
  const out = {};
  const UA = { "User-Agent": "Mozilla/5.0 (compatible; PeoplesMarket/1.0)" };
  const yf = /* @__PURE__ */ __name(async (sym) => {
    const r = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=5d`, { headers: UA, cf: { cacheTtl: 300 } });
    if (!r.ok) return null;
    const d = await r.json();
    return d.chart?.result?.[0]?.meta || null;
  }, "yf");
  try {
    const irx = await yf("%5EIRX");
    if (irx) out.fed_rate = parseFloat(irx.regularMarketPrice.toFixed(2));
  } catch (e) {
  }
  try {
    const cl = await yf("CL%3DF");
    if (cl) {
      out.oil_price = cl.regularMarketPrice;
      out.oil_trend = cl.regularMarketPrice > (cl.chartPreviousClose || cl.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {
  }
  try {
    const tnx = await yf("%5ETNX");
    if (tnx) {
      out.treasury_10y = parseFloat(tnx.regularMarketPrice.toFixed(3));
      out.treasury_trend = tnx.regularMarketPrice > (tnx.chartPreviousClose || tnx.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {
  }
  try {
    const dxy = await yf("DX-Y.NYB");
    if (dxy) {
      out.dxy = parseFloat(dxy.regularMarketPrice.toFixed(2));
      out.dxy_trend = dxy.regularMarketPrice > (dxy.chartPreviousClose || dxy.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {
  }
  try {
    const tyt = await yf("%5ETWOYEAR");
    if (tyt) out.treasury_2y = parseFloat(tyt.regularMarketPrice.toFixed(3));
  } catch (e) {
  }
  out.cpi = 2.3;
  out.cpi_trend = "down";
  out.unemployment = 4.2;
  out.unemp_trend = "up";
  out.data_note = "CPI/unemployment: BLS April 2026 release. Market data: real-time.";
  return out;
}
__name(getMacroData, "getMacroData");
function buildLegalPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<script>(function(){try{var p=new URLSearchParams(location.search);if(p.get('nogate')==='1'){localStorage.setItem('pm_agreed_v1',JSON.stringify({ts:Date.now(),v:1}));}}catch(e){}}());<\/script>
<meta charset="UTF-8"/><link rel="icon" type="image/png" href="/img/tuck/tuck-v2-64.png"/><link rel="apple-touch-icon" href="/img/tuck/tuck-v2-apple.png"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${title} \u2014 Tuck</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0a0f1e;color:#e2e8f0;font-family:'Inter',system-ui,sans-serif;
  min-height:100vh;line-height:1.7;padding:0}
a{color:#60a5fa;text-decoration:none}a:hover{text-decoration:underline}
nav{background:rgba(10,15,30,0.95);border-bottom:1px solid rgba(255,255,255,0.08);
  padding:0 24px;height:52px;display:flex;align-items:center;justify-content:space-between;
  position:sticky;top:0;z-index:10;backdrop-filter:blur(12px)}
.nav-logo{display:flex;align-items:center;gap:9px}
.logo-icon{width:30px;height:30px;background:transparent;
  border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;overflow:hidden}
.nav-title{font-size:14px;font-weight:800;color:#f1f5f9;letter-spacing:-.3px}
.back-btn{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
  border-radius:6px;padding:5px 12px;color:#94a3b8;font-size:11px;cursor:pointer;
  text-decoration:none;display:inline-flex;align-items:center;gap:4px}
.back-btn:hover{color:#e2e8f0;text-decoration:none}
main{max-width:760px;margin:0 auto;padding:40px 24px 80px}
h1{font-size:28px;font-weight:900;color:#f8fafc;letter-spacing:-1px;margin-bottom:6px}
.meta{font-size:12px;color:#475569;margin-bottom:36px;padding-bottom:16px;
  border-bottom:1px solid rgba(255,255,255,0.07)}
h2{font-size:16px;font-weight:700;color:#f1f5f9;margin:32px 0 10px;
  padding-left:10px;border-left:2px solid #3b82f6}
h3{font-size:13px;font-weight:600;color:#cbd5e1;margin:18px 0 7px}
p{font-size:13px;color:#94a3b8;margin-bottom:12px}
ul,ol{padding-left:20px;margin-bottom:14px}
li{font-size:13px;color:#94a3b8;margin-bottom:5px}
li::marker{color:#3b82f6}
.callout{background:rgba(59,130,246,0.07);border:1px solid rgba(59,130,246,0.2);
  border-radius:8px;padding:14px 16px;margin:20px 0}
.callout p{color:#93c5fd;margin:0;font-size:13px}
.callout strong{color:#bfdbfe}
.warn{background:rgba(234,179,8,0.07);border:1px solid rgba(234,179,8,0.2);border-radius:8px;
  padding:14px 16px;margin:20px 0}
.warn p{color:#fbbf24;margin:0;font-size:13px}
.contact-box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);
  border-radius:8px;padding:16px;margin-top:32px;font-size:12px;color:#64748b}
footer{text-align:center;padding:24px;border-top:1px solid rgba(255,255,255,0.06);
  font-size:11px;color:#334155;margin-top:40px}
</style>
</head>
<body>
<nav>
  <div class="nav-logo">
    <div class="logo-icon"><img src="/img/tuck/tuck-v2-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:7px;object-fit:cover" /></div>
    <span class="nav-title">Tuck</span>
  </div>
  <a href="/" class="back-btn">\u2190 Back to Platform</a>
</nav>
<main>${content}</main>
<footer>Tuck \xB7 A VPDLNY Project \xB7 market.osintnet.uk \xB7 Free Forever</footer>
</body></html>`;
}
__name(buildLegalPage, "buildLegalPage");
var PRIVACY_HTML = buildLegalPage("Privacy Policy", `
<h1>Privacy Policy</h1>
<div class="meta">Last updated: May 20, 2026 \xB7 Effective immediately \xB7 Jurisdiction: New York, USA</div>

<div class="callout"><p><strong>The short version:</strong> We collect almost nothing about you. No account. No tracking. No selling. This page explains exactly what little we do and don't do.</p></div>

<h2>1. Who We Are</h2>
<p>Tuck is a free public financial intelligence and education platform operated by <strong>VPDLNY (Vulnerable Persons Defense League of New York)</strong>, a collective of independent technologists and artists. We are not a financial institution, broker-dealer, investment advisor, or money services business.</p>
<p>Contact: <a href="mailto:privacy@osintnet.uk">privacy@osintnet.uk</a></p>

<h2>2. What We Collect \u2014 And What We Don't</h2>

<h3>We DO NOT collect:</h3>
<ul>
  <li>Your name, email address, phone number, or any identifying information</li>
  <li>Account credentials (there are no accounts)</li>
  <li>Financial information, portfolio data, or investment history</li>
  <li>Location data beyond coarse country-level (see below)</li>
  <li>Browsing history across other websites</li>
  <li>Device fingerprints or persistent identifiers</li>
  <li>Cookies (we set zero cookies of our own)</li>
</ul>

<h3>We DO collect (minimally and automatically):</h3>
<ul>
  <li><strong>Server access logs:</strong> Your IP address, browser type, and pages requested are logged by Cloudflare's infrastructure for up to 24 hours for security purposes (DDoS protection, abuse prevention). We do not store or analyze these logs ourselves.</li>
  <li><strong>Disclaimer acceptance:</strong> When you click "I Agree" on our entry disclaimer, we store a timestamp and acknowledgment flag in your browser's <code>localStorage</code>. This data never leaves your device and is never transmitted to us.</li>
  <li><strong>Aggregate traffic metrics:</strong> Cloudflare provides us with anonymized, aggregate statistics (total requests, country of origin by percentage, error rates). This data contains no personally identifiable information.</li>
</ul>

<h2>3. Cookies &amp; Local Storage</h2>
<p>We do not set any cookies. The only browser storage we use is <code>localStorage</code> to remember that you've accepted our disclaimer, so you don't have to click it every time. This data is:</p>
<ul>
  <li>Stored only on your device</li>
  <li>Never transmitted to our servers</li>
  <li>Automatically expires after 30 days</li>
  <li>Deletable at any time by clearing your browser's site data</li>
</ul>

<h2>4. Third-Party Data Sources</h2>
<p>Tuck aggregates publicly available data from the following third-party sources. When your browser loads our platform, it connects to our Cloudflare Workers \u2014 it does <strong>not</strong> make direct connections to these sources:</p>
<ul>
  <li><strong>Yahoo Finance</strong> \u2014 real-time market quotes (fetched server-side)</li>
  <li><strong>Finnhub.io</strong> \u2014 supplemental market data (fetched server-side)</li>
  <li><strong>Federal Reserve (FRED)</strong> \u2014 macroeconomic indicators (fetched server-side)</li>
  <li><strong>SEC EDGAR</strong> \u2014 public regulatory filings (fetched server-side)</li>
  <li><strong>CapitolTrades API</strong> \u2014 congressional stock disclosure data (public record, fetched server-side)</li>
  <li><strong>RSS News Feeds</strong> \u2014 publicly available news headlines from Reuters, AP, Al Jazeera, and others (fetched server-side)</li>
</ul>
<p>All third-party data is fetched by our servers on your behalf. Your IP address is not shared with these services.</p>

<h2>5. Your Rights</h2>
<h3>GDPR (European Union users)</h3>
<p>If you are in the European Union, you have rights under the General Data Protection Regulation. Because we collect virtually no personal data, most of these rights are trivially satisfied, but they apply nonetheless:</p>
<ul>
  <li><strong>Right of access:</strong> We hold no personal data about you to provide.</li>
  <li><strong>Right to erasure:</strong> Clear your browser's localStorage to remove the only data we "hold" (on your own device).</li>
  <li><strong>Right to data portability:</strong> Not applicable \u2014 we hold no personal data.</li>
  <li><strong>Right to object:</strong> You may stop using the platform at any time.</li>
</ul>
<p>Our legal basis for processing the minimal data we handle (server logs) is <strong>Legitimate Interest</strong> \u2014 specifically, the security of our infrastructure.</p>

<h3>CCPA (California residents)</h3>
<p>We do not sell personal information. We do not share personal information with third parties for cross-context behavioral advertising. If you are a California resident and have questions, contact us at <a href="mailto:privacy@osintnet.uk">privacy@osintnet.uk</a>.</p>

<h2>6. Data Security</h2>
<p>Tuck runs entirely on Cloudflare's infrastructure, which provides enterprise-grade security including DDoS protection, TLS 1.3 encryption in transit, and edge security. Since we store no personal data on our servers, there is no user data at risk in the event of a security incident.</p>

<h2>7. Children's Privacy</h2>
<p>This platform is intended for adults aged 18 and over. We do not knowingly collect information from anyone under 18. If you are under 18, please do not use this platform.</p>

<h2>8. Changes to This Policy</h2>
<p>We may update this Privacy Policy. Changes will be reflected in the "Last updated" date above. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>

<div class="contact-box">
  Questions about this Privacy Policy? Contact us at <a href="mailto:privacy@osintnet.uk">privacy@osintnet.uk</a><br/>  VPDLNY \xB7 Staten Island, New York, USA
</div>
`);
var TOS_HTML = buildLegalPage("Terms of Service", `
<h1>Terms of Service</h1>
<div class="meta">Last updated: May 20, 2026 \xB7 Effective immediately \xB7 Governing Law: New York, USA</div>

<div class="warn"><p><strong>\u26A0\uFE0F Important:</strong> Tuck is an educational information platform. Nothing on this platform is investment advice. Please read these terms carefully before using the platform.</p></div>

<h2>1. Acceptance of Terms</h2>
<p>By accessing Tuck at <strong>market.osintnet.uk</strong> (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Platform.</p>
<p>You must be at least <strong>18 years of age</strong> to use this Platform. By using it, you represent that you are 18 or older.</p>

<h2>2. What the Platform Is</h2>
<p>Tuck is a <strong>free, public, educational financial intelligence platform</strong>. It aggregates and displays publicly available financial data, news, regulatory filings, and macroeconomic indicators for educational purposes.</p>
<p>The Platform is operated by VPDLNY (Vulnerable Persons Defense League of New York), a non-commercial collective. It is not affiliated with any brokerage, financial institution, or investment firm.</p>

<h2>3. NOT Investment Advice \u2014 Critical Disclaimer</h2>
<div class="warn"><p>Nothing on Tuck constitutes, or should be construed as:</p></div>
<ul>
  <li>Investment advice of any kind</li>
  <li>A recommendation to buy, sell, or hold any security, commodity, or financial instrument</li>
  <li>A solicitation to invest in any security</li>
  <li>Financial planning or wealth management guidance</li>
  <li>Tax advice</li>
  <li>Legal advice</li>
</ul>
<p>"Pete's Watchlist" is a curated list of securities the platform founder finds interesting to <strong>study and track</strong>. It is explicitly <strong>not</strong> a list of recommendations. The presence of any security on this list should not be interpreted as an endorsement or suggestion to invest.</p>
<p>All data displayed may be delayed, inaccurate, or incomplete. Market data is provided for informational purposes only. Always verify data with authoritative sources before making any financial decision.</p>
<p><strong>Always consult a licensed financial advisor before making investment decisions.</strong></p>

<h2>4. No Registration Required</h2>
<p>The Platform does not require you to create an account, provide personal information, or pay any fee. Access is entirely anonymous and free.</p>

<h2>5. Data Accuracy</h2>
<p>We make reasonable efforts to ensure data accuracy but make <strong>no warranty</strong> regarding:</p>
<ul>
  <li>The accuracy, completeness, or timeliness of any market data, prices, or quotes</li>
  <li>The accuracy of congressional trading disclosures (which are self-reported to the SEC)</li>
  <li>The accuracy, completeness, or impartiality of news headlines aggregated from third-party RSS feeds</li>
  <li>The accuracy of macroeconomic data sourced from government APIs</li>
</ul>
<p>Market data may be delayed by 15 minutes or more. Do not rely on this data for time-sensitive trading decisions.</p>

<h2>6. Prohibited Uses</h2>
<p>You agree not to use the Platform for:</p>
<ul>
  <li>Any unlawful purpose, including market manipulation</li>
  <li>Automated mass scraping that degrades platform performance for other users</li>
  <li>Republishing our aggregated data as your own proprietary information</li>
  <li>Any commercial purpose without prior written permission from VPDLNY</li>
  <li>Attempting to compromise the security, integrity, or availability of the Platform</li>
</ul>

<h2>7. Intellectual Property</h2>
<p>The Platform's source code is open source (MIT License). The data displayed is sourced from public sources and is not owned by us. Original editorial content, VPDLNY branding, and platform design are owned by VPDLNY.</p>

<h2>8. Congressional Trading Data</h2>
<p>Congressional stock trade data is sourced from public disclosures required by the STOCK Act (2012). We display this data as a matter of public record and transparency. We make no allegations of impropriety regarding any named individual. This data is self-reported by members of Congress and may be incomplete, inaccurate, or delayed under the law's disclosure windows.</p>

<h2>9. Limitation of Liability</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
<ul>
  <li>The Platform is provided "AS IS" without warranty of any kind.</li>
  <li>VPDLNY and its contributors shall not be liable for any financial loss, investment decision, or damages of any kind resulting from use of this Platform.</li>
  <li>Our total liability to you for any claim shall not exceed $0 (the amount you paid to use the Platform).</li>
</ul>

<h2>10. Indemnification</h2>
<p>You agree to indemnify and hold harmless VPDLNY, its founders, contributors, and operators from any claim, loss, or expense arising from your use of the Platform in violation of these Terms.</p>

<h2>11. Termination</h2>
<p>We reserve the right to restrict or terminate access to the Platform at any time for any reason, including violations of these Terms.</p>

<h2>12. Governing Law</h2>
<p>These Terms are governed by the laws of the <strong>State of New York, United States of America</strong>, without regard to conflict of law principles. Any disputes shall be resolved in the courts of New York County, New York.</p>

<h2>13. Changes to These Terms</h2>
<p>We may update these Terms at any time. The "Last updated" date above will reflect changes. Continued use of the Platform after changes constitutes acceptance.</p>

<div class="contact-box">
  Questions about these Terms? Contact us at <a href="mailto:legal@osintnet.uk">legal@osintnet.uk</a><br/>  VPDLNY \xB7 Staten Island, New York, USA
</div>
`);
var ABOUT_HTML = buildLegalPage("About", `
<h1>About Tuck</h1>
<div class="meta">Built by VPDLNY · Staten Island, New York · Free forever · Open source · Anonymous</div>

<div class="callout">
<p><strong>"Information was never meant to be hoarded."</strong><br/>Tuck is a free, open-source financial intelligence platform built for communities that Wall Street ignores. Named for <em>Friar Tuck</em>, the monk who left the abbey to feed the people — we left the velvet rope of paid terminals to give you the same data hedge funds pay a fortune for.</p>
</div>

<h2>Why We Built This</h2>
<p>Bloomberg terminals run tens of thousands per year. Premium congressional trade trackers charge hundreds per month. Real-time options flow, dark pool prints, geopolitical event tagging — all gated behind paywalls that working-class investors can’t justify.</p>
<p>Meanwhile the people most hurt by market manipulation — retirees, gig workers, immigrants, public-housing kids, anyone whose 401k is their only shot — are the ones cut off from the information that would protect them.</p>
<p>So we built Tuck. One man’s study tool, scaled up and given away. No tiers. No upsells. No "premium" version. Same data, same speed, free for everyone.</p>

<h2>What We Are</h2>
<ul>
  <li><strong>An OSINT aggregator.</strong> We pull from 14+ public RSS feeds (Reuters, AP, Al Jazeera, Bloomberg, Axios, Dawn, Kashmir Observer, CounterPunch) and tag every signal with geopolitical region, market impact, and sentiment.</li>
  <li><strong>A congressional trade tracker.</strong> Every STOCK Act filing within 45 days of disclosure, surfaced in plain English. Built on top of the QuiverQuant feed.</li>
  <li><strong>A study watchlist.</strong> Nine tickers Pete actually watches — semis, defense, oil, AI — with real-time price, 52w range, market cap, and a plain-English "why does this matter" breakdown for every one.</li>
  <li><strong>A macro dashboard.</strong> Fed rate, Treasury yields, VIX, DXY, oil, BTC. Updated every 5 minutes.</li>
</ul>

<h2>What We Will Never Do</h2>
<ul>
  <li>❌ Sell your data. We don’t collect any.</li>
  <li>❌ Show you ads.</li>
  <li>❌ Charge subscriptions.</li>
  <li>❌ Accept Payment for Order Flow (PFOF) kickbacks. We’re not a broker.</li>
  <li>❌ Give you investment advice. Every tooltip and section is educational. Always do your own research.</li>
  <li>❌ Require an account. No email, no login, no tracking pixels. Open the page — you’re in.</li>
</ul>

<h2>The OSINT Advantage</h2>
<p>Traditional financial news is reactive — by the time CNBC reports a story, the trade is done. Tuck pulls from upstream OSINT sources (open-source intelligence): geopolitical feeds, defense journals, regional outlets, congressional filings. We surface what’s happening <em>before</em> it becomes mainstream.</p>
<p>Every news signal is tagged with a market impact score (0–1) and a geopolitical region. Filter by Iran/Hormuz, China/Taiwan, Ukraine, Israel/Gaza, Domestic, or Fed/Macro. See what’s actually moving the needle in real time.</p>

<h2>Who We Are</h2>
<p>VPDLNY — the Vulnerable Persons Defense League of New York — is a loose collective of techies, artists, researchers, and OSINT practitioners. We use information and knowledge to defend vulnerable people against powerful entities. Never violence. Just sunlight, structure, and shared infrastructure.</p>
<p>Tuck is one of our public-facing tools. Other projects: <a href="https://warheatmap.app" target="_blank">War Heat Map</a> (global conflict tracking), <a href="https://capwatch.osintnet.uk" target="_blank">CapWatch</a> (congressional trade intel), and several private tools for researchers and defenders.</p>

<h2>Technical Foundation</h2>
<ul>
  <li><strong>Runs on Cloudflare Workers.</strong> Edge-deployed, globally cached, ~50ms response times worldwide.</li>
  <li><strong>D1 SQLite databases</strong> for signal storage and historical correlation tracking.</li>
  <li><strong>R2 object storage</strong> for editorial images and snapshots.</li>
  <li><strong>No third-party trackers.</strong> No Google Analytics. No Facebook Pixel. No cookies beyond the disclaimer-acknowledgment flag stored in your own browser’s localStorage.</li>
</ul>

<h2>A Note on "Pete’s Watchlist"</h2>
<p>The nine stocks on the homepage aren’t recommendations. They’re a <em>study set</em> — the tickers Pete (VPDLNY founder, early-Bitcoin guy, NVDA-pre-split holder) actively monitors and wants to understand. Showing them lets us demo the platform’s data depth on a manageable list. <strong>Do not buy these stocks because they’re here.</strong> Use the page to learn how to research, then build your own list.</p>

<h2>Connect</h2>
<ul>
  <li>Discord: <a href="https://discord.gg/vpdlny" target="_blank">discord.gg/vpdlny</a></li>
  <li>GitHub: <a href="https://github.com/vpdlny" target="_blank">github.com/vpdlny</a> (source releases coming)</li>
  <li>Contact: <a href="mailto:hello@osintnet.uk">hello@osintnet.uk</a></li>
</ul>

<!-- BTC DONATE CARD -->
<div class="donate-card" style="margin-top:48px;padding:28px;border:1px solid rgba(247,147,26,0.3);border-radius:14px;background:linear-gradient(180deg,rgba(247,147,26,0.06),rgba(247,147,26,0.02))">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
    <span style="font-size:22px">₿</span>
    <h3 style="margin:0;color:#f7931a;font-size:18px">Support Tuck — Anonymous Bitcoin Only</h3>
  </div>
  <p style="color:#cbd5e1;font-size:14px;line-height:1.7;margin-bottom:18px">
    To remain truly sovereign, we only accept <strong>anonymous, universal Bitcoin donations — from only those who can afford it, of course</strong>. No Stripe, no Patreon, no Cash App, no payment processors who can deplatform us or build profiles on our donors. Bitcoin is borderless, permissionless, and final — the only money that lets us stay free.
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;background:rgba(0,0,0,0.3);padding:18px;border-radius:10px">
    <div style="width:140px;height:140px;border-radius:8px;background:white;display:flex;align-items:center;justify-content:center;color:#000;font-size:10px;text-align:center;padding:8px;flex-shrink:0">[Configure your<br/>own BTC<br/>donation QR<br/>here]</div>
    <div style="flex:1;min-width:240px">
      <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">Donation Address</div>
      <div id="btc-addr" style="font-family:'JetBrains Mono','SF Mono',Consolas,monospace;font-size:13px;color:#f7931a;word-break:break-all;background:rgba(247,147,26,0.08);padding:10px 12px;border-radius:6px;margin-bottom:10px;user-select:all">YOUR_BTC_DONATION_ADDRESS_HERE</div>
      <button onclick="(function(){navigator.clipboard.writeText('YOUR_BTC_DONATION_ADDRESS_HERE');var b=event.target;var t=b.textContent;b.textContent='✓ Copied';b.style.background='#10b981';setTimeout(function(){b.textContent=t;b.style.background='';},2000);})()" style="background:#f7931a;color:#0a0f1e;border:0;padding:9px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit">Copy Address</button>
      <a href="bitcoin:YOUR_BTC_DONATION_ADDRESS_HERE" style="display:inline-block;margin-left:8px;background:transparent;color:#f7931a;border:1px solid #f7931a;padding:8px 17px;border-radius:8px;font-weight:600;font-size:13px;text-decoration:none">Open in Wallet</a>
    </div>
  </div>
  <p style="color:#64748b;font-size:12px;margin-top:14px;text-align:center;font-style:italic">
    Every sat received goes directly to keeping the lights on — R2 storage, D1 reads, RSS pulls, edge compute.<br/>    No salaries. No middlemen. No surveillance. Just infrastructure for the people. ₿
  </p>
</div>

<div class="contact-box" style="margin-top:28px;text-align:center;font-size:13px;color:#475569">
  <em>"A man with information is never powerless."</em><br/>  <span style="font-size:11px">— VPDLNY</span>
</div>
`);
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const JSON_H = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    };
    // Image proxy — same-origin asset serving with proper CORP/CT headers
    // Fixes Firefox OpaqueResponseBlocking on R2 cross-origin loads
    if (path.startsWith("/img/")) {
      const r2Key = path.slice(5); // strip "/img/"
      try {
        const r2Res = await fetch("https://assets.warheatmap.app/" + r2Key);
        if (!r2Res.ok) return new Response("Not found", { status: 404 });
        const ct = r2Res.headers.get("content-type") || "image/png";
        return new Response(r2Res.body, {
          status: 200,
          headers: {
            "Content-Type": ct,
            "Cache-Control": "public, max-age=86400, immutable",
            "Cross-Origin-Resource-Policy": "cross-origin",
            "X-Content-Type-Options": "nosniff",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (e) {
        return new Response("Proxy error", { status: 502 });
      }
    }
    if (path === "/api/ask-tuck" && request.method === "POST") {
      try {
        const ip = request.headers.get("CF-Connecting-IP") || "unknown";
        const rlKey = "rl:" + ip + ":" + Math.floor(Date.now() / 60000);
        const rlCount = parseInt((await env.TUCK_KV.get(rlKey)) || "0", 10);
        if (rlCount >= 10) {
          return new Response(JSON.stringify({ error: "Slow down friend. Tuck only handles 10 questions per minute per visitor." }), {
            status: 429, headers: { "Content-Type": "application/json" }
          });
        }
        await env.TUCK_KV.put(rlKey, String(rlCount + 1), { expirationTtl: 120 });

        const reqBody = await request.json();
        const userMsg = (reqBody.message || "").toString().slice(0, 1000);
        if (!userMsg.trim()) {
          return new Response(JSON.stringify({ error: "Ask Tuck something." }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const systemPrompt = [
          "You are Tuck — the AI guide of Tuck (market.osintnet.uk), a free OSINT and market education platform built by VPDLNY (Vulnerable Persons Defense League of NY).",
          "",
          "PERSONA: You speak with the calm confidence of Friar Tuck — a guardian of common folk against the powerful. Warm, plain-spoken, never condescending, never preachy. Use everyday language. Short paragraphs.",
          "",
          "MISSION: You serve the vulnerable, the poor, the oppressed, and the curious. You hand back the information Wall Street and the powerful try to hoard.",
          "",
          "WHAT YOU KNOW ABOUT THIS SITE:",
          "- Watchlist: 9 tickers — NVDA, NET, AVGO, QCOM, MP, XLE, USO, MU, INTC",
          "- News: real-time OSINT signals from Al Jazeera, Axios, Breaking Defense, Guardian, with escalation/de-escalation scoring",
          "- Congress: live congressional stock trade tracking (STOCK Act 2012 disclosures)",
          "- Macro: Fed funds rate, CPI, unemployment, VIX, DXY, oil prices",
          "- Learn: plain-English market education",
          "",
          "HARD RULES (NEVER VIOLATE):",
          "1. NEVER give financial advice, buy/sell recommendations, or price predictions. This is educational, not advisory.",
          "2. If asked should I buy X — explain what the ticker is, what moves it, what data is on the site. Never tell them what to do with their money.",
          "3. NEVER pretend to know real-time prices. Direct users to the Watchlist tab for live data.",
          "4. Be honest about uncertainty. Say I don't know when you don't.",
          "5. Keep answers under 200 words unless explicitly asked for more depth.",
          "6. Don't moralize. Don't preach. Just help.",
          "",
          "If someone asks who built you: Tuck is open-source, free forever, built by VPDLNY, runs on Cloudflare Workers AI with Llama 3.3."
        ].join("\n");

        const aiResp = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMsg }
          ],
          max_tokens: 500,
          temperature: 0.7
        });

        const reply = (aiResp && aiResp.response) ? aiResp.response : "Sorry friend, my mind went blank. Try asking again.";
        return new Response(JSON.stringify({ reply }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: "Tuck is resting. Try again in a moment.", detail: e.message }), {
          status: 500, headers: { "Content-Type": "application/json" }
        });
      }
    }
    if (path === "/api/prices") {
      try {
        const baseRes = await fetch(PRICE_URL + "/prices");
        const baseData = await baseRes.json();
        const quotes = baseData.quotes || {};
        const MISSING = ["QCOM", "INTC", "MP"];
        const NAMES = { QCOM: "Qualcomm", INTC: "Intel", MP: "MP Materials" };
        const CATS = { QCOM: "semiconductor", INTC: "semiconductor", MP: "defense" };
        const CORR = { QCOM: "China/Taiwan", INTC: "China/Taiwan", MP: "China/Taiwan" };
        // Shares outstanding (billions, approx — SEC 10-Q May 2026)
        const SHARES = {
          NVDA: 24400000000, NET: 348000000, AVGO: 4690000000,
          QCOM: 1100000000, MU: 1120000000, INTC: 4780000000,
          MP: 165000000, XLE: 305000000, USO: 89700000
        };
        const ALL_TICKERS = ["NVDA","NET","AVGO","QCOM","MU","INTC","MP","XLE","USO"];
        await Promise.allSettled(ALL_TICKERS.map(async (ticker) => {
          try {
            const yUrl = "https://query1.finance.yahoo.com/v8/finance/chart/" + ticker + "?interval=1d&range=2d";
            const yr = await fetch(yUrl, { cf: { cacheTtl: 60 }, headers: { "User-Agent": "Mozilla/5.0 (compatible; PeoplesMarket/1.0)" } });
            if (!yr.ok) return;
            const yd = await yr.json();
            const meta = yd.chart?.result?.[0]?.meta;
            if (!meta) return;
            const price = meta.regularMarketPrice;
            const prev = meta.chartPreviousClose || meta.regularMarketPreviousClose;
            const chgPct = prev ? (price - prev) / prev * 100 : 0;
            const w52h = meta["52WeekHigh"] || meta.fiftyTwoWeekHigh;
            const w52l = meta["52WeekLow"] || meta.fiftyTwoWeekLow;
            const vol = meta.regularMarketVolume;
            const mcap = SHARES[ticker] ? Math.round(price * SHARES[ticker]) : null;
            if (!quotes[ticker]) {
              // Net-new ticker not in upstream — create full record
              quotes[ticker] = {
                price, change_pct: parseFloat(chgPct.toFixed(2)),
                week52_low: w52l, week52_high: w52h, volume: vol, market_cap: mcap,
                name: NAMES[ticker], category: CATS[ticker], correlation: CORR[ticker]
              };
            } else {
              // Existing ticker — enrich missing fields
              if (quotes[ticker].week52_low == null) quotes[ticker].week52_low = w52l;
              if (quotes[ticker].week52_high == null) quotes[ticker].week52_high = w52h;
              if (quotes[ticker].volume == null) quotes[ticker].volume = vol;
              if (quotes[ticker].market_cap == null) quotes[ticker].market_cap = mcap;
            }
          } catch (e) {
          }
        }));
        return new Response(JSON.stringify({ quotes, ts: (/* @__PURE__ */ new Date()).toISOString() }), { headers: JSON_H });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: JSON_H });
      }
    }
    if (path === "/api/news") {
      try {
        const r = await fetch(INGEST_URL + "/signals" + url.search);
        const t = await r.text();
        return new Response(t, { headers: JSON_H });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: JSON_H });
      }
    }
    if (path === "/api/congress") {
      try {
        const r = await fetch("https://YOUR-CAPWATCH-WORKER.workers.dev/api/trades?limit=20", {
          headers: { "Authorization": "Bearer " + env.CAPWATCH_SECRET }
        });
        if (!r.ok) {
          return new Response(JSON.stringify({ trades: [], error: "upstream_" + r.status }), { headers: JSON_H });
        }
        const raw = await r.json();
        const arr = Array.isArray(raw) ? raw : (raw.results || raw.trades || []);
        const trades = arr.map(t => ({
          name: t.member_name,
          party: t.party,
          ticker: t.ticker,
          transaction: t.transaction_type,
          date: t.trade_date || t.report_date,
          amount: t.amount_label || (t.amount_min ? "$" + t.amount_min.toLocaleString() + " - $" + (t.amount_max||t.amount_min).toLocaleString() : "")
        }));
        return new Response(JSON.stringify({ trades }), { headers: JSON_H });
      } catch (e) {
        return new Response(JSON.stringify({ trades: [], error: e.message }), { headers: JSON_H });
      }
    }
    if (path === "/api/macro") {
      try {
        const macro = await getMacroData();
        return new Response(JSON.stringify(macro), { headers: { ...JSON_H, "Cache-Control": "public, max-age=900" } });
      } catch (e) {
        return new Response(JSON.stringify({}), { headers: JSON_H });
      }
    }
    if (path === "/health") {
      return new Response(JSON.stringify({ status: "ok", platform: "Tuck", version: "v1.0", ts: (/* @__PURE__ */ new Date()).toISOString() }), { headers: JSON_H });
    }
    if (path === "/privacy") return new Response(PRIVACY_HTML, { headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=3600" } });
    if (path === "/tos") return new Response(TOS_HTML, { headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=3600" } });
    if (path === "/about") return new Response(ABOUT_HTML, { headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=3600" } });
    if (path === "/" || path === "") {
      return new Response(buildHTML(), {
        headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=60" }
      });
    }
    return new Response("Not found", { status: 404 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map