const DARK_INITIALS={MU:'#0a2540'};
const LOGO_BG={INTC:'#0068b5'};
const WEAK_LOGOS={QQQ:'#1d4ed8',USO:'#0d9488',XLE:'#b45309',IVV:'#1d4ed8',SPY:'#1d4ed8',VOO:'#1d4ed8',DIA:'#1d4ed8',IWM:'#7c3aed'};
// ═══════════ TUCK v2 BUNDLE START ═══════════

function __confPct(c){
  if(c==null) return null;
  if(typeof c==='number') return c<=1?Math.round(c*100):Math.round(c);
  var s=String(c).toLowerCase().trim();
  var m={'very low':20,'low':35,'medium':65,'med':65,'moderate':65,'high':88,'very high':95};
  if(m[s]!=null) return m[s];
  var n=parseFloat(s); if(!isNaN(n)) return n<=1?Math.round(n*100):Math.round(n);
  return null;
}
function __confLabel(c){
  var p=__confPct(c); if(p==null) return '';
  return p>=80?'High':p>=50?'Medium':'Low';
}

// ==========================================================
// TUCK v2.3.3 — bundled at 2026-05-27T23:35:00Z (v2.3.2 + price regex broadened for 'at today' / 'right now')
// Source files concatenated. Edit individual files, not this.
// ==========================================================


// ── lib/tokens.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — DESIGN TOKENS
// Single source of truth for spacing, type, color, radius, shadow.
// Mobile-first: tokens scale UP via media queries, never down.
// ────────────────────────────────────────────────────────────────────

const DESIGN_TOKENS_CSS = `
:root {
  /* ── Spacing scale (4px base) ───────────────────────────── */
  --sp-0: 0;
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --sp-10: 40px;
  --sp-12: 48px;
  --sp-16: 64px;

  /* ── Type scale (mobile-first) ──────────────────────────── */
  --tx-xs: 11px;
  --tx-sm: 13px;
  --tx-base: 15px;
  --tx-md: 17px;
  --tx-lg: 20px;
  --tx-xl: 24px;
  --tx-2xl: 30px;
  --tx-3xl: 38px;

  --lh-tight: 1.2;
  --lh-snug: 1.35;
  --lh-normal: 1.5;
  --lh-relaxed: 1.65;

  /* ── Touch targets ──────────────────────────────────────── */
  --hit: 44px;
  --hit-sm: 36px;
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left: env(safe-area-inset-left, 0px);
  --safe-right: env(safe-area-inset-right, 0px);

  /* ── Semantic color ─────────────────────────────────────── */
  --bg: #0a0f1e;
  --bg-elev: #0f172a;
  --bg-elev2: #1a2236;
  --bg-overlay: rgba(10, 15, 30, 0.72);

  --fg: #e8edf5;
  --fg-dim: #aab4c5;
  --fg-faint: #6f7c91;
  --fg-muted: #475569;

  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.14);
  --border-focus: #3b82f6;

  /* Brand */
  --tuck: #22c55e;
  --tuck-soft: rgba(34, 197, 94, 0.12);
  --tuck-bold: #16a34a;

  /* Semantic */
  --escalate: #ef4444;
  --escalate-soft: rgba(239, 68, 68, 0.12);
  --calm: #22c55e;
  --calm-soft: rgba(34, 197, 94, 0.12);
  --neutral: #eab308;
  --neutral-soft: rgba(234, 179, 8, 0.12);
  --info: #3b82f6;
  --info-soft: rgba(59, 130, 246, 0.12);
  --warn: #f97316;
  --warn-soft: rgba(249, 115, 22, 0.12);

  /* Score color tiers */
  --score-hot: #ef4444;
  --score-warm: #f97316;
  --score-neutral: #94a3b8;
  --score-cool: #3b82f6;
  --score-cold: #475569;

  /* ── Radius ─────────────────────────────────────────────── */
  --r-xs: 6px;
  --r-sm: 8px;
  --r: 12px;
  --r-md: 14px;
  --r-lg: 16px;
  --r-xl: 20px;
  --r-2xl: 28px;
  --r-full: 9999px;

  /* ── Shadow ─────────────────────────────────────────────── */
  --sh-1: 0 1px 2px rgba(0, 0, 0, 0.4);
  --sh-2: 0 4px 12px rgba(0, 0, 0, 0.35);
  --sh-3: 0 12px 32px rgba(0, 0, 0, 0.45);
  --sh-glow: 0 0 0 1px rgba(34, 197, 94, 0.2), 0 8px 24px rgba(34, 197, 94, 0.18);

  /* ── Motion ─────────────────────────────────────────────── */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast: 120ms;
  --dur: 200ms;
  --dur-slow: 320ms;

  /* ── Z-index scale ──────────────────────────────────────── */
  --z-base: 1;
  --z-nav: 50;
  --z-tabbar: 60;
  --z-sticky: 70;
  --z-sheet-bg: 80;
  --z-sheet: 90;
  --z-toast: 100;
  --z-gate: 110;
}

/* Type scales UP on tablet+ */
@media (min-width: 640px) {
  :root {
    --tx-xl: 28px;
    --tx-2xl: 36px;
    --tx-3xl: 44px;
  }
}

/* Reduced-motion safety net */
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 0ms;
    --dur: 0ms;
    --dur-slow: 0ms;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
`;

// ── lib/base.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — BASE STYLES (reset + body + a11y)
// ────────────────────────────────────────────────────────────────────

const BASE_CSS = `
* { box-sizing: border-box; }
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  border-radius: var(--r-xs);
}

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
  font-size: var(--tx-base);
  line-height: var(--lh-normal);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
}

body {
  min-height: 100dvh;
  overflow-x: hidden;
  padding-bottom: calc(var(--hit) + var(--sp-4) + var(--safe-bottom)); /* room for bottom tab bar */
}

@media (min-width: 1024px) {
  body { padding-bottom: var(--sp-8); }  /* no bottom bar on desktop */
}

a {
  color: var(--info);
  text-decoration: none;
  border-radius: var(--r-xs);
}
a:hover { text-decoration: underline; }

button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

input, select, textarea {
  font: inherit;
  color: inherit;
}

img { max-width: 100%; height: auto; display: block; }

h1, h2, h3, h4, h5, h6 { margin: 0; font-weight: 700; letter-spacing: -0.01em; }

/* Visually-hidden utility for a11y labels */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* App container */
.app {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--sp-4);
  padding-left: max(var(--sp-4), var(--safe-left));
  padding-right: max(var(--sp-4), var(--safe-right));
}
@media (min-width: 640px) { .app { max-width: 720px; padding: 0 var(--sp-6); } }
@media (min-width: 1024px) { .app { max-width: 1080px; padding: 0 var(--sp-8); } }

/* Page section spacing rhythm */
.app > section { margin-top: var(--sp-6); }
.app > section:first-child { margin-top: var(--sp-4); }
.app > section + section { margin-top: var(--sp-8); }
@media (min-width: 640px) {
  .app > section { margin-top: var(--sp-8); }
}
`;

// ── lib/primitives.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — UI PRIMITIVES (Card · Pill · Sheet · Chip · Score · etc.)
// Composable CSS classes. No JS framework. Pure vanilla.
// ────────────────────────────────────────────────────────────────────

const PRIMITIVES_CSS = `
/* ─── Card ─────────────────────────────────────────────── */
.card {
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-4);
  transition: border-color var(--dur) var(--ease-out), transform var(--dur) var(--ease-out);
}
.card-interactive {
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.card-interactive:hover { border-color: var(--border-strong); }
.card-interactive:active { transform: scale(0.985); }
.card-flush { padding: 0; overflow: hidden; }
.card-hdr {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--sp-3);
  margin-bottom: var(--sp-3);
}
.card-title {
  display: flex; align-items: center; gap: var(--sp-2);
  font-size: var(--tx-base); font-weight: 700; letter-spacing: 0.01em;
  color: var(--fg);
}
.card-title-icon {
  width: 24px; height: 24px; flex-shrink: 0;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--tuck);
}
.card-sub {
  font-size: var(--tx-sm); color: var(--fg-dim);
  line-height: var(--lh-snug);
  margin-top: var(--sp-1);
}

/* ─── Pill / Badge ─────────────────────────────────────── */
.pill {
  display: inline-flex; align-items: center; gap: var(--sp-1);
  height: 22px; padding: 0 var(--sp-2);
  border-radius: var(--r-full);
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.06em; text-transform: uppercase;
  background: var(--bg-elev2); color: var(--fg-dim);
  border: 1px solid var(--border);
  white-space: nowrap;
}
.pill-live   { background: var(--calm-soft);     color: #86efac; border-color: rgba(34,197,94,0.3); }
.pill-live::before { content:''; width:6px;height:6px;border-radius:50%;background:var(--calm);
  box-shadow:0 0 0 0 rgba(34,197,94,.7); animation: pulse 2s var(--ease-out) infinite; }
.pill-daily  { background: var(--info-soft);     color: #93c5fd; border-color: rgba(59,130,246,0.3); }
.pill-scoop  { background: var(--warn-soft);     color: #fdba74; border-color: rgba(249,115,22,0.3); }
.pill-public { background: var(--info-soft);     color: #93c5fd; border-color: rgba(59,130,246,0.3); }
.pill-fred   { background: var(--warn-soft);     color: #fdba74; border-color: rgba(249,115,22,0.3); }
.pill-beta   { background: var(--neutral-soft);  color: #fde047; border-color: rgba(234,179,8,0.3); }
.pill-up     { background: var(--calm-soft);     color: var(--calm); border-color: rgba(34,197,94,0.3); }
.pill-dn     { background: var(--escalate-soft); color: var(--escalate); border-color: rgba(239,68,68,0.3); }

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,.7); }
  70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}

/* ─── Chip (filter) ───────────────────────────────────── */
.chip-row {
  display: flex; gap: var(--sp-2);
  overflow-x: auto;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  touch-action: pan-x;
  padding: var(--sp-2) 0;
  margin: 0 calc(-1 * var(--sp-4));
  padding-left: var(--sp-4);
  padding-right: var(--sp-4);
  scrollbar-width: none;
}
.chip-row::-webkit-scrollbar { display: none; }
.chip {
  flex: 0 0 auto;
  display: inline-flex; align-items: center; gap: var(--sp-1);
  height: var(--hit-sm);
  padding: 0 var(--sp-3);
  border-radius: var(--r-full);
  background: var(--bg-elev);
  border: 1px solid var(--border);
  font-size: var(--tx-sm); font-weight: 600;
  color: var(--fg-dim);
  cursor: pointer;
  white-space: nowrap;
  scroll-snap-align: start;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color: transparent;
}
.chip:hover { color: var(--fg); border-color: var(--border-strong); }
.chip-active { background: var(--tuck-soft); border-color: rgba(34,197,94,0.4); color: var(--tuck); }
.chip-count {
  font-size: var(--tx-xs); opacity: 0.75;
  padding: 0 var(--sp-1);
  border-radius: var(--r-xs);
  background: rgba(255,255,255,0.06);
}

/* ─── Button ───────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--sp-2);
  height: var(--hit);
  padding: 0 var(--sp-5);
  border-radius: var(--r-md);
  font-size: var(--tx-base); font-weight: 600;
  background: var(--bg-elev2); color: var(--fg);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.btn:hover { background: var(--bg-elev); }
.btn:active { transform: scale(0.97); }
.btn-primary {
  background: linear-gradient(180deg, var(--tuck) 0%, var(--tuck-bold) 100%);
  color: #fff; border-color: rgba(0,0,0,0.2);
  box-shadow: var(--sh-glow);
}
.btn-primary:hover { filter: brightness(1.05); background: linear-gradient(180deg, var(--tuck) 0%, var(--tuck-bold) 100%); }
.btn-ghost { background: transparent; }
.btn-sm { height: var(--hit-sm); padding: 0 var(--sp-3); font-size: var(--tx-sm); }
.btn-icon { width: var(--hit); padding: 0; }

/* ─── Score badge ─────────────────────────────────────── */
.score-badge {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 44px; height: 28px; padding: 0 var(--sp-2);
  font-size: var(--tx-base); font-weight: 800;
  border-radius: var(--r-sm);
  background: var(--bg-elev2); color: var(--fg-dim);
  border: 1px solid var(--border);
  font-variant-numeric: tabular-nums;
}
.score-hot     { background: rgba(239,68,68,0.15);  color: #fca5a5; border-color: rgba(239,68,68,0.35); }
.score-warm    { background: rgba(249,115,22,0.15); color: #fdba74; border-color: rgba(249,115,22,0.35); }
.score-neutral { background: rgba(148,163,184,0.12); color: #cbd5e1; border-color: rgba(148,163,184,0.3); }
.score-cool    { background: rgba(59,130,246,0.15); color: #93c5fd; border-color: rgba(59,130,246,0.35); }
.score-cold    { background: rgba(71,85,105,0.18);  color: #94a3b8; border-color: rgba(71,85,105,0.4); }

/* ─── Freshness pill ──────────────────────────────────── */
.fresh {
  display: inline-flex; align-items: center; gap: var(--sp-1);
  font-size: var(--tx-xs); color: var(--fg-faint);
  font-weight: 500;
}
.fresh::before {
  content:''; width:6px; height:6px; border-radius:50%;
  background: var(--calm);
}
.fresh-live::before  { background: var(--good); }
.fresh-stale::before { background: var(--warn); }
.fresh-old::before   { background: var(--danger); animation: fresh-pulse 1.5s ease-in-out infinite; }
@keyframes fresh-pulse {
  0%,100% { opacity: 1; }
  50%     { opacity: 0.4; }
}

/* ─── Sheet (bottom drawer) ───────────────────────────── */
.sheet-backdrop {
  position: fixed; inset: 0;
  background: var(--bg-overlay);
  z-index: var(--z-sheet-bg);
  opacity: 0;
  transition: opacity var(--dur) var(--ease-out);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
}
.sheet-backdrop.open { opacity: 1; }
.sheet {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  max-height: 92dvh;
  background: var(--bg-elev);
  border-top: 1px solid var(--border-strong);
  border-radius: var(--r-2xl) var(--r-2xl) 0 0;
  z-index: var(--z-sheet);
  transform: translateY(100%);
  transition: transform var(--dur-slow) var(--ease-out);
  display: flex; flex-direction: column;
  padding-bottom: var(--safe-bottom);
  box-shadow: var(--sh-3);
}
.sheet.open { transform: translateY(0); }
.sheet-handle {
  flex-shrink: 0;
  width: 40px; height: 4px;
  background: var(--border-strong);
  border-radius: 2px;
  margin: var(--sp-3) auto var(--sp-2);
}
.sheet-hdr {
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--sp-2) var(--sp-5) var(--sp-3);
  gap: var(--sp-3);
}
.sheet-title {
  font-size: var(--tx-lg); font-weight: 700;
  color: var(--fg);
  display: flex; align-items: center; gap: var(--sp-2);
}
.sheet-close {
  width: var(--hit); height: var(--hit);
  border-radius: var(--r-full);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--fg-dim);
  background: var(--bg-elev2);
}
.sheet-close:hover { color: var(--fg); }
.sheet-body {
  flex: 1; min-height: 0;
  overflow-y: auto;
  padding: var(--sp-2) var(--sp-5) var(--sp-6);
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
@media (min-width: 720px) {
  .sheet {
    left: 50%; right: auto;
    bottom: 50%;
    transform: translate(-50%, calc(50% + 40px)) scale(0.96);
    width: 640px; max-width: calc(100vw - 48px);
    max-height: 80vh;
    border-radius: var(--r-2xl);
    border: 1px solid var(--border-strong);
  }
  .sheet.open { transform: translate(-50%, 50%) scale(1); }
}

/* ─── Skeleton (loading) ──────────────────────────────── */
.skel {
  background: linear-gradient(90deg, var(--bg-elev) 0%, var(--bg-elev2) 50%, var(--bg-elev) 100%);
  background-size: 200% 100%;
  animation: skel 1.4s ease-in-out infinite;
  border-radius: var(--r-sm);
}
@keyframes skel {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.skel-line { height: 12px; margin: var(--sp-1) 0; }
.skel-box  { width: 100%; height: 80px; }

/* ─── Empty / Error states ────────────────────────────── */
.empty, .err {
  text-align: center;
  padding: var(--sp-10) var(--sp-4);
  color: var(--fg-dim);
}
.empty-icon, .err-icon {
  width: 48px; height: 48px; margin: 0 auto var(--sp-3);
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--r-full);
  background: var(--bg-elev2);
  color: var(--fg-faint);
}
.err-icon { background: var(--escalate-soft); color: var(--escalate); }
.empty-title, .err-title {
  font-size: var(--tx-md); font-weight: 700;
  color: var(--fg); margin-bottom: var(--sp-1);
}
.empty-msg, .err-msg { font-size: var(--tx-sm); margin-bottom: var(--sp-4); }

/* ─── Section header (per-route) ──────────────────────── */
.shdr {
  position: sticky; top: 0; z-index: var(--z-sticky);
  background: linear-gradient(180deg, var(--bg) 70%, rgba(10,15,30,0.92) 100%);
  -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  padding: var(--sp-4) 0 var(--sp-3);
  margin: 0 calc(-1 * var(--sp-4)) var(--sp-3);
  padding-left: var(--sp-4); padding-right: var(--sp-4);
  border-bottom: 1px solid var(--border);
}
.shdr-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--sp-3);
}
.shdr-title {
  display: flex; align-items: center; gap: var(--sp-2);
  font-size: var(--tx-lg); font-weight: 800; letter-spacing: -0.01em;
}
.shdr-sub {
  font-size: var(--tx-sm); color: var(--fg-dim);
  margin-top: var(--sp-1); line-height: var(--lh-snug);
}
`;

// ── lib/icons.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — INLINE LUCIDE-STYLE ICONS
// Only the icons we use. Stroke=2, size set inline via width/height.
// ────────────────────────────────────────────────────────────────────

const ICONS = {
  home:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5Z"/></svg>`,
  pulse:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 12h3l3-9 4 18 3-9h5"/></svg>`,
  scanner:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  ravid:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M14 4h7v7"/><path d="M21 4 10 15"/><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/></svg>`,
  congress:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6 12 3l7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>`,
  scenarios:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9 4 4 9l5 5"/><path d="M20 20v-5a4 4 0 0 0-4-4H4"/></svg>`,
  scores:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 2 4 6v6a8 8 0 0 0 8 8 8 8 0 0 0 8-8V6Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  heatmap:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6Z"/></svg>`,
  macro:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  learn:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  about:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  menu:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></svg>`,
  more:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
  close:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  back:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="m15 18-6-6 6-6"/></svg>`,
  forward:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="m9 18 6-6-6-6"/></svg>`,
  up:          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="m6 9 6-6 6 6"/><path d="M12 3v18"/></svg>`,
  down:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M12 3v18"/><path d="m18 15-6 6-6-6"/></svg>`,
  flat:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 12h14"/></svg>`,
  refresh:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M3 12a9 9 0 0 1 14.85-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-14.85 6.36L3 16"/><path d="M3 21v-5h5"/></svg>`,
  filter:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M22 3H2l8 9.46V19l4 2v-8.54Z"/></svg>`,
  share:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>`,
  search:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  ask:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  globe:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
  external:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  chevron_right:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="m9 18 6-6-6-6"/></svg>`,
  warning:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
};

function icon(name, opts = {}) {
  const svg = ICONS[name];
  if (!svg) return '';
  if (!opts.size && !opts.className) return svg;
  let out = svg;
  if (opts.size) {
    out = out.replace(/width="\d+"/, `width="${opts.size}"`).replace(/height="\d+"/, `height="${opts.size}"`);
  }
  if (opts.className) {
    out = out.replace('<svg ', `<svg class="${opts.className}" `);
  }
  return out;
}

// ── lib/chrome.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — APP CHROME (top bar + bottom tab bar + drawer)
// ────────────────────────────────────────────────────────────────────

const CHROME_CSS = `
/* ─── Top bar ──────────────────────────────────────────── */
.topbar {
  position: sticky; top: 0; z-index: var(--z-nav);
  height: 56px; padding: 0 var(--sp-4);
  padding-top: var(--safe-top);
  padding-left: max(var(--sp-4), var(--safe-left));
  padding-right: max(var(--sp-4), var(--safe-right));
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--sp-3);
  background: linear-gradient(180deg, var(--bg) 70%, rgba(10,15,30,0.85) 100%);
  -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.topbar-brand {
  display: flex; align-items: center; gap: var(--sp-2);
  font-weight: 800; font-size: var(--tx-md); letter-spacing: -0.01em;
  color: var(--fg);
  -webkit-tap-highlight-color: transparent;
}
.topbar-brand img { width: 28px; height: 28px; border-radius: var(--r-sm); }
.topbar-actions { display: flex; align-items: center; gap: var(--sp-1); }
.topbar-btn {
  width: var(--hit); height: var(--hit);
  border-radius: var(--r-full);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--fg-dim);
}
.topbar-btn:hover { color: var(--fg); background: var(--bg-elev2); }

/* ─── Bottom tab bar (mobile) ─────────────────────────── */
.tabbar {
  position: fixed; left: 0; right: 0; bottom: 0;
  z-index: var(--z-tabbar);
  display: flex; align-items: stretch;
  background: var(--bg-elev);
  border-top: 1px solid var(--border);
  padding-bottom: var(--safe-bottom);
  padding-left: var(--safe-left); padding-right: var(--safe-right);
  -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
}
.tab {
  flex: 1; min-height: var(--hit);
  display: inline-flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2px;
  padding: var(--sp-2) var(--sp-1);
  color: var(--fg-faint);
  font-size: 10px; font-weight: 600; letter-spacing: 0.02em;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  transition: color var(--dur-fast) var(--ease-out);
}
.tab svg { width: 22px; height: 22px; }
.tab-label { line-height: 1; }
.tab:hover { color: var(--fg-dim); }
.tab-active { color: var(--tuck); }
.tab-active::before {
  content: '';
  position: absolute; top: 0; left: 50%;
  width: 32px; height: 3px;
  border-radius: 0 0 var(--r-sm) var(--r-sm);
  background: var(--tuck);
  transform: translateX(-50%);
  box-shadow: 0 0 12px rgba(34,197,94,0.6);
}
@media (min-width: 1024px) { .tabbar { display: none; } }

/* ─── Top nav links (desktop only) ────────────────────── */
.topnav { display: none; }
/* TUCK v2.1 — topnav breakpoint moved 1024 -> 900 to eliminate nav dead zone */
@media (min-width: 900px) {
  .topnav { display: flex; gap: var(--sp-1); align-items: center; }
  .topnav a {
    height: var(--hit-sm); padding: 0 var(--sp-3);
    display: inline-flex; align-items: center; gap: var(--sp-2);
    border-radius: var(--r-md);
    color: var(--fg-dim); font-weight: 600; font-size: var(--tx-sm);
    text-decoration: none;
  }
  .topnav a:hover { color: var(--fg); background: var(--bg-elev2); text-decoration: none; }
  .topnav a.active { color: var(--tuck); background: var(--tuck-soft); }
}

/* ─── "More" drawer (mobile slide-in from right) ──────── */
.drawer-backdrop {
  position: fixed; inset: 0;
  background: var(--bg-overlay);
  z-index: var(--z-sheet-bg);
  opacity: 0; pointer-events: none;
  transition: opacity var(--dur) var(--ease-out);
}
.drawer-backdrop.open { opacity: 1; pointer-events: auto; }
.drawer {
  position: fixed; right: 0; top: 0; bottom: 0;
  z-index: var(--z-sheet);
  width: min(80vw, 320px);
  background: var(--bg-elev);
  border-left: 1px solid var(--border-strong);
  padding: calc(var(--safe-top) + var(--sp-4)) var(--sp-4) var(--safe-bottom);
  transform: translateX(100%);
  transition: transform var(--dur-slow) var(--ease-out);
  box-shadow: var(--sh-3);
  overflow-y: auto;
  display: flex; flex-direction: column;
}
.drawer.open { transform: translateX(0); }
.drawer-hdr {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--sp-4);
}
.drawer-title { font-size: var(--tx-md); font-weight: 800; letter-spacing: -0.01em; }
.drawer-list {
  display: flex; flex-direction: column; gap: var(--sp-1);
}
.drawer-item {
  display: flex; align-items: center; gap: var(--sp-3);
  height: var(--hit);
  padding: 0 var(--sp-3);
  border-radius: var(--r-md);
  color: var(--fg);
  text-decoration: none;
  font-weight: 600;
}
.drawer-item:hover { background: var(--bg-elev2); text-decoration: none; }
.drawer-item-icon { color: var(--fg-dim); }
.drawer-item.active { color: var(--tuck); background: var(--tuck-soft); }
.drawer-item.active .drawer-item-icon { color: var(--tuck); }
.drawer-footer {
  margin-top: auto; padding-top: var(--sp-4);
  border-top: 1px solid var(--border);
  color: var(--fg-faint);
  font-size: var(--tx-xs);
  text-align: center;
}
`;

const TUCK_LOGO_URL = "/img/tuck/tuck-v5-128.png";

const ROUTE_LIST = [
  { path: '/',          label: 'Home',     icon: 'home',     primary: true },
  { path: '/watchlist', label: 'Pulse',    icon: 'pulse',    primary: true },
  { path: '/scanner',   label: 'Scanner',  icon: 'scanner',  primary: true },
  { path: '/scores',    label: 'Scores',   icon: 'scores',   primary: true },
  { path: '/war3',      label: 'War3',     icon: 'warning',  primary: true },
  { path: '/ravid',     label: 'Ravid',    icon: 'ravid' },
  { path: '/congress',  label: 'Congress', icon: 'congress' },
  { path: '/scenarios', label: 'AI Scenarios', icon: 'scenarios' },
  { path: '/heatmap',   label: 'Heat Map', icon: 'heatmap' },
  { path: '/macro',     label: 'Macro',    icon: 'macro' },
  { path: '/learn',     label: 'Learn',    icon: 'learn' },
  { path: '/about',     label: 'About',    icon: 'about' },
];

function isActive(currentPath, routePath) {
  if (routePath === '/') return currentPath === '/' || currentPath === '';
  return currentPath === routePath || currentPath.startsWith(routePath + '/');
}

function renderTopBar(currentPath, opts = {}) {
  const v = opts.vFlag ? `` : '';
  const navLinks = ROUTE_LIST
    .filter(r => r.path !== '/')
    .map(r => {
      const active = isActive(currentPath, r.path) ? ' class="active"' : '';
      return `<a href="${r.path}${v}" data-route${active}>${r.label}</a>`;
    }).join('');

  return `
<header class="topbar" role="banner">
  <a class="topbar-brand" href="/${v}" data-route aria-label="Tuck home">
    <img src="${TUCK_LOGO_URL}" alt="" aria-hidden="true"/>
    <span>Tuck</span>
  </a>
  <nav class="topnav" aria-label="Primary">
    ${navLinks}
  </nav>
  <div class="topbar-actions">
    <button class="topbar-btn" id="open-search" aria-label="Search">${icon('search')}</button>
    <button class="topbar-btn" id="open-drawer" aria-label="More" aria-controls="more-drawer" aria-expanded="false">${icon('menu')}</button>
  </div>
</header>`;
}

function renderTabBar(currentPath, opts = {}) {
  const v = opts.vFlag ? `` : '';
  const PRIMARY = ROUTE_LIST.filter(r => r.primary);
  const ask = { path: '#ask', label: 'Ask Tuck', icon: 'ask' };
  const tabs = [...PRIMARY, ask];

  return `
<nav class="tabbar" role="navigation" aria-label="Bottom">
  ${tabs.map(t => {
    const active = isActive(currentPath, t.path) ? ' tab-active' : '';
    const href = t.path === '#ask' ? '#' : `${t.path}${v}`;
    const onClick = t.path === '#ask' ? ' onclick="window.openAskTuck&&window.openAskTuck();return false;"' : '';
    return `<a class="tab${active}" href="${href}" data-route${onClick}>
      ${icon(t.icon)}
      <span class="tab-label">${t.label}</span>
    </a>`;
  }).join('')}
</nav>`;
}

function renderDrawer(currentPath, opts = {}) {
  const v = opts.vFlag ? `` : '';
  return `
<div class="drawer-backdrop" id="drawer-backdrop" aria-hidden="true"></div>
<aside class="drawer" id="more-drawer" role="dialog" aria-modal="true" aria-label="Navigation" tabindex="-1">
  <div class="drawer-hdr">
    <div class="drawer-title">All Sections</div>
    <button class="topbar-btn" id="close-drawer" aria-label="Close menu">${icon('close')}</button>
  </div>
  <div class="drawer-list">
    ${ROUTE_LIST.map(r => {
      const active = isActive(currentPath, r.path) ? ' active' : '';
      return `<a class="drawer-item${active}" href="${r.path}${v}" data-route>
        <span class="drawer-item-icon">${icon(r.icon)}</span>
        <span>${r.label}</span>
      </a>`;
    }).join('')}
  </div>
  <div class="drawer-footer">
    Tuck · A VPDLNY public utility · Free forever
  </div>
</aside>`;
}

// ── lib/client.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — CLIENT-SIDE BOOTSTRAP JAVASCRIPT
// Runs on every page. Handles:
//  - Bootstrap data hydration (read inline JSON, populate UI)
//  - Drawer + sheet + tab interactions
//  - SPA-style route navigation with View Transitions
//  - Live refresh of price pulse / freshness timers
// ────────────────────────────────────────────────────────────────────

const CLIENT_JS = `
(() => {
  'use strict';

  // ─── Consistent ticker logo (SoFi-style) — mirrors server maps ───
  const _DARK_INITIALS = { MU: '#0a2540' };
  const _LOGO_BG = { INTC: '#0068b5' };
  const _WEAK_LOGOS = { QQQ:'#1d4ed8', USO:'#0d9488', XLE:'#b45309', IVV:'#1d4ed8', SPY:'#1d4ed8', VOO:'#1d4ed8', DIA:'#1d4ed8', IWM:'#7c3aed' };
  window.__tuckLogoFail = function(img){ img.style.display='none'; if(img.nextElementSibling) img.nextElementSibling.style.display='flex'; };
  window.tuckLogo = function(ticker, size){
    const t = String(ticker||'').toUpperCase(); const s = size||40;
    const fs = Math.round(s*0.34);
    const ring = (bg, inner) => '<span style="width:'+s+'px;height:'+s+'px;border-radius:50%;background:'+bg+';display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 1px 3px rgba(0,0,0,.35);">'+inner+'</span>';
    const initials = (color) => '<span style="display:flex;width:100%;height:100%;border-radius:50%;color:'+color+';font-weight:900;font-size:'+fs+'px;align-items:center;justify-content:center;">'+t.slice(0,2)+'</span>';
    const img = (fbColor) => '<img src="https://financialmodelingprep.com/image-stock/'+t+'.png" alt="" width="'+s+'" height="'+s+'" style="border-radius:50%;object-fit:contain;" onerror=window.__tuckLogoFail(this)><span style="display:none;width:100%;height:100%;border-radius:50%;color:'+fbColor+';font-weight:800;font-size:'+fs+'px;align-items:center;justify-content:center;">'+t.slice(0,2)+'</span>';
    if(!t) return '';
    if(_DARK_INITIALS[t]) return ring('#fff', initials(_DARK_INITIALS[t]));
    if(_LOGO_BG[t]) return ring(_LOGO_BG[t], img('#fff'));
    if(_WEAK_LOGOS[t]) return ring(_WEAK_LOGOS[t], initials('#fff'));
    return ring('#f4f6f8', img('#cbd5e1'));
  };

  // ─── Utility ───
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  // Bootstrap data injected by the worker (per-route)
  const BOOT = (() => {
    try { return JSON.parse($('#tuck-bootstrap')?.textContent || '{}'); }
    catch (e) { return {}; }
  })();
  window.TUCK_BOOT = BOOT;

  // ─── Freshness pill renderer (ago strings) ───
  function timeAgo(iso) {
    if (!iso) return '';
    const t = new Date(iso).getTime();
    if (!t) return '';
    const sec = Math.floor((Date.now() - t) / 1000);
    if (sec < 60) return 'just now';
    if (sec < 3600) return Math.floor(sec / 60) + 'm ago';
    if (sec < 86400) return Math.floor(sec / 3600) + 'h ago';
    return Math.floor(sec / 86400) + 'd ago';
  }
  function freshnessClass(iso) {
    if (!iso) return 'fresh-old';
    const sec = (Date.now() - new Date(iso).getTime()) / 1000;
    // TUCK v2.2 — tighter thresholds for market data
    if (sec < 1200) return 'fresh-live';   // <20 min: green "live"
    if (sec < 3600) return '';              // 20-60 min: neutral default
    if (sec < 21600) return 'fresh-stale';  // 1-6h: yellow stale
    return 'fresh-old';                     // >6h: red old
  }
  window.tuckTimeAgo = timeAgo;
  window.tuckFreshnessClass = freshnessClass;

  // Update all freshness pills on the page every 30s
  function refreshFreshness() {
    $$('.fresh[data-iso]').forEach(el => {
      const iso = el.getAttribute('data-iso');
      el.textContent = 'Updated ' + timeAgo(iso);
      el.className = 'fresh ' + freshnessClass(iso);
    });
  }
  setInterval(refreshFreshness, 30000);
  refreshFreshness();

  // ─── TUCK v2.3 — US market-session badge (ET-aware) ───
  function marketStatus() {
    // Build ET time via Intl (handles DST automatically)
    const now = new Date();
    const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const day = et.getDay();                 // 0=Sun..6=Sat
    const mins = et.getHours() * 60 + et.getMinutes();
    const weekday = day >= 1 && day <= 5;
    if (!weekday) return { label: 'Market closed', cls: 'ms-closed', note: 'Weekend' };
    if (mins >= 240 && mins < 570)  return { label: 'Premarket', cls: 'ms-pre',  note: '4:00–9:30a ET' };   // 4:00a–9:30a
    if (mins >= 570 && mins < 960)  return { label: 'Market open', cls: 'ms-open', note: '9:30a–4:00p ET' };  // 9:30a–4:00p
    if (mins >= 960 && mins < 1200) return { label: 'After hours', cls: 'ms-after', note: '4:00–8:00p ET' };  // 4:00p–8:00p
    return { label: 'Market closed', cls: 'ms-closed', note: 'Reopens 4:00a ET' };
  }
  function refreshMarketBadge() {
    const ms = marketStatus();
    $$('.market-status').forEach(el => {
      el.textContent = ms.label;
      el.className = 'market-status ' + ms.cls;
      el.title = ms.note;
    });
  }
  window.tuckMarketStatus = marketStatus;
  setInterval(refreshMarketBadge, 30000);
  refreshMarketBadge();

  // ─── Score color tier ───
  function scoreClass(score) {
    if (score == null) return 'score-neutral';
    const s = Number(score);
    if (s >= 70) return 'score-hot';
    if (s >= 55) return 'score-warm';
    if (s >= 45) return 'score-neutral';
    if (s >= 30) return 'score-cool';
    return 'score-cold';
  }
  window.tuckScoreClass = scoreClass;

  // ─── Drawer ───
  const drawer = $('#more-drawer');
  const drawerBd = $('#drawer-backdrop');
  const drawerOpen = $('#open-drawer');
  const drawerClose = $('#close-drawer');
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawerBd.classList.add('open');
    drawerOpen?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    drawer.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawerBd.classList.remove('open');
    drawerOpen?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  drawerOpen?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawerBd?.addEventListener('click', closeDrawer);
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;

  // ─── Sheet primitive ───
  // Programmatic: window.openSheet({ title, html, onClose })
  let currentSheet = null;
  function openSheet({ title, html, onClose, icon: titleIcon = '' }) {
    closeSheet();
    const backdrop = document.createElement('div');
    backdrop.className = 'sheet-backdrop';
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.innerHTML = \`
      <div class="sheet-handle" aria-hidden="true"></div>
      <div class="sheet-hdr">
        <div class="sheet-title">\${titleIcon}<span>\${esc(title)}</span></div>
        <button class="sheet-close" aria-label="Close">×</button>
      </div>
      <div class="sheet-body">\${html}</div>\`;
    document.body.append(backdrop, sheet);
    // force reflow then animate in
    requestAnimationFrame(() => {
      backdrop.classList.add('open');
      sheet.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
    const close = () => {
      backdrop.classList.remove('open');
      sheet.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { backdrop.remove(); sheet.remove(); }, 320);
      currentSheet = null;
      if (onClose) onClose();
    };
    backdrop.addEventListener('click', close);
    sheet.querySelector('.sheet-close').addEventListener('click', close);
    // Swipe-to-dismiss (mobile)
    let startY = null, lastY = null;
    sheet.addEventListener('touchstart', (e) => {
      if (sheet.querySelector('.sheet-body').scrollTop > 0) return;
      startY = e.touches[0].clientY; lastY = startY;
    }, { passive: true });
    sheet.addEventListener('touchmove', (e) => {
      if (startY == null) return;
      const dy = e.touches[0].clientY - startY;
      if (dy < 0) return;
      lastY = e.touches[0].clientY;
      sheet.style.transition = 'none';
      sheet.style.transform = \`translateY(\${dy}px)\`;
    }, { passive: true });
    sheet.addEventListener('touchend', () => {
      if (startY == null) return;
      const dy = (lastY || startY) - startY;
      sheet.style.transition = '';
      sheet.style.transform = '';
      if (dy > 100) close();
      startY = null;
    });
    // Escape to close
    const onKey = (e) => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);
    currentSheet = { close };
    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(8);
    return { close };
  }
  function closeSheet() { if (currentSheet) currentSheet.close(); }
  window.openSheet = openSheet;
  window.closeSheet = closeSheet;
  // ── Shared modal helpers ──
  // Strip HTML tags + decode common entities so feed prose renders as clean text.
  window.__stripHtml = function(str){
    if(str==null) return '';
    var s = String(str);
    s = s.replace(/<[^>]*>/g, ' ');                 // drop tags
    var ta = document.createElement('textarea');
    ta.innerHTML = s;                                // decode &amp; &quot; &#39; etc.
    s = ta.value;
    return s.replace(/\\s+/g, ' ').trim();          // collapse whitespace
  };
  // Robust timestamp → locale string. Accepts sec, ms, ISO string, Date. Returns '' if unparseable.
  window.__safeDate = function(v){
    if(v==null || v==='') return '';
    var d;
    if(typeof v === 'number'){ d = new Date(v < 1e12 ? v*1000 : v); }
    else if(typeof v === 'string'){
      var n = parseFloat(v);
      if(!isNaN(n) && /^[0-9.]+$/.test(v.trim())){ d = new Date(n < 1e12 ? n*1000 : n); }
      else { d = new Date(v); }
    } else { d = new Date(v); }
    return isNaN(d.getTime()) ? '' : d.toLocaleString();
  };

  // ─── SPA route navigation ───
  // TUCK v2.1 — SPA navigation with route-CSS swap + cleanup lifecycle.
  // Route cleanup registry — each page IIFE pushes teardown fns here
  window.__tuckRouteCleanup = window.__tuckRouteCleanup || [];
  function runRouteCleanup() {
    const fns = window.__tuckRouteCleanup.slice();
    window.__tuckRouteCleanup.length = 0;
    fns.forEach(fn => { try { fn(); } catch(e) { console.warn('[tuck] cleanup err', e); }});
  }

  async function navigateTo(path) {
    // Build SPA URL with _spa=1 so cache keys are naturally distinct from full pages
    const spaURL = path + (path.includes('?') ? '&' : '?') + '_spa=1';
    let html;
    try {
      const res = await fetch(spaURL, { headers: { 'X-Tuck-Spa': '1' }});
      if (!res.ok) throw new Error('HTTP ' + res.status);
      html = await res.text();
    } catch (e) {
      console.warn('[tuck] SPA fetch failed, full-nav fallback', e);
      window.location.href = path;
      return false;
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const newMain = doc.querySelector('main');
    const oldMain = $('main');
    if (!newMain || !oldMain) {
      console.warn('[tuck] SPA partial missing <main>, full-nav fallback');
      window.location.href = path;
      return false;
    }

    const newTitle = doc.querySelector('title')?.textContent;
    if (newTitle) document.title = newTitle;

    const newBoot = doc.querySelector('#tuck-bootstrap')?.textContent;
    const bootEl = $('#tuck-bootstrap');
    if (bootEl && newBoot) bootEl.textContent = newBoot;
    try { window.TUCK_BOOT = newBoot ? JSON.parse(newBoot) : {}; } catch(e) { window.TUCK_BOOT = {}; }

    // Route-scoped CSS — replace the slot (don't append, no accumulation)
    const newRouteCSS = doc.querySelector('style[data-route-css]')?.textContent || '';
    let routeCssEl = document.querySelector('style[data-route-css]');
    if (!routeCssEl) {
      routeCssEl = document.createElement('style');
      routeCssEl.setAttribute('data-route-css', '');
      document.head.appendChild(routeCssEl);
    }
    routeCssEl.textContent = newRouteCSS;

    // Remove any previous route-tagged scripts before swap
    document.querySelectorAll('script[data-route-js]').forEach(s => s.remove());

    // Run prior-page cleanup
    runRouteCleanup();

    const doSwap = () => {
      oldMain.replaceWith(newMain);
      const matchPath = path.split('?')[0];
      $$('.tab, .topnav a, .drawer-item').forEach(el => {
        const href = (el.getAttribute('href') || '').split('?')[0];
        if (!href || href === '#') return;
        const matches = href === matchPath || (href !== '/' && matchPath.startsWith(href));
        if (el.classList.contains('tab')) el.classList.toggle('tab-active', matches);
        else el.classList.toggle('active', matches);
      });
      // Mount new route JS by re-creating the script tag so the browser executes it
      const newJS = doc.querySelector('script[data-route-js]')?.textContent;
      if (newJS) {
        const s = document.createElement('script');
        s.setAttribute('data-route-js', '');
        s.textContent = newJS;
        document.body.appendChild(s);
      }
      window.dispatchEvent(new CustomEvent('tuck:route', { detail: { path }}));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    if (document.startViewTransition) {
      try { await document.startViewTransition(doSwap).finished; } catch(e) { /* cancelled */ }
    } else {
      doSwap();
    }
    return true;
  }

  // Click handler — push history ONLY on confirmed swap success
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    closeDrawer();
    closeSheet();
    navigateTo(href).then((swapped) => {
      if (swapped) history.pushState({}, '', href);
      // If not swapped, window.location.href already triggered full nav
    });
  });
  window.addEventListener('popstate', () => {
    navigateTo(location.pathname + location.search);
  });

  // ─── Disclaimer gate handling ───
  // If gate is rendered, keep page underneath visible but pointer-events:none
  const gate = $('#gate-overlay');
  if (gate) {
    try {
      const agreed = JSON.parse(localStorage.getItem('pm_agreed_v1') || 'null');
      if (agreed && agreed.ts && (Date.now() - agreed.ts) < (90 * 24 * 3600 * 1000)) {
        gate.remove();
      }
    } catch (e) {}
  }
  // Gate button wiring
  const gateBtn = $('#gate-btn');
  const gateCheck = $('#gate-checkbox');
  gateCheck?.addEventListener('change', () => {
    gateBtn?.classList.toggle('locked', !gateCheck.checked);
    gateBtn && (gateBtn.disabled = !gateCheck.checked);
  });
  gateBtn?.addEventListener('click', () => {
    if (!gateCheck?.checked) return;
    localStorage.setItem('pm_agreed_v1', JSON.stringify({ ts: Date.now(), v: 1 }));
    gate?.classList.add('gate-closing');
    setTimeout(() => gate?.remove(), 300);
  });

  // ─── Per-page init hook ───
  // Each route's HTML can include <script data-page-init> blocks; we run them now
  function runPageInit() {
    $$('[data-page-init]').forEach(s => {
      try {
        if (s._ran) return;
        s._ran = true;
        // Already executed by browser; nothing else needed
      } catch(e) {}
    });
  }
  window.addEventListener('tuck:route', runPageInit);
  runPageInit();

  // ─── Web Share helpers ───
  window.tuckShare = async function ({ title, text, url }) {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return true;
      }
    } catch(e) {}
    try {
      await navigator.clipboard.writeText(url);
      if (window.tuckToast) window.tuckToast('Link copied to clipboard');
      return true;
    } catch(e) {
      return false;
    }
  };

  // ─── Toast (lightweight) ───
  let toastTimer;
  window.tuckToast = function (msg) {
    let t = $('#tuck-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'tuck-toast';
      Object.assign(t.style, {
        position:'fixed', left:'50%', bottom:'80px', transform:'translateX(-50%)',
        background:'var(--bg-elev2)', color:'var(--fg)', padding:'10px 16px',
        borderRadius:'999px', fontSize:'13px', fontWeight:'600',
        boxShadow:'var(--sh-2)', zIndex:'100',
        opacity:'0', transition:'opacity 200ms', pointerEvents:'none',
        border:'1px solid var(--border-strong)'
      });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = '0'; }, 2200);
  };

  // ─── Live price refresh (Pulse strip) ───
  async function refreshPrices() {
    try {
      const r = await fetch('/api/prices');
      const d = await r.json();
      if (!d || !d.prices) return;
      window.TUCK_BOOT.prices = d.prices;
      window.TUCK_BOOT.prices_at = new Date().toISOString();
      window.dispatchEvent(new CustomEvent('tuck:prices', { detail: d }));
      const pill = $('#prices-fresh');
      if (pill) {
        pill.setAttribute('data-iso', window.TUCK_BOOT.prices_at);
        refreshFreshness();
      }
    } catch(e) {}
  }
  setInterval(refreshPrices, 60000);

  // ─── First-paint sanity log ───
  console.log('%cTuck v2', 'color:#22c55e;font-weight:800', 'hydrated', { route: location.pathname });
})();
`;

// ── lib/shell.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — HTML SHELL BUILDER
// Wraps every route in topbar + main + tabbar + drawer + bootstrap data
// ────────────────────────────────────────────────────────────────────

const TUCK_FAVICON = "/img/tuck/tuck-v5-128.png";
const TUCK_OG_IMG  = "/img/tuck/tuck-v5-hero.png";

// ── ASK TUCK WIDGET (injected into v2 shell) ──
const ASK_TUCK_CSS = `#ask-tuck-btn{position:fixed;bottom:24px;right:24px;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);border:2px solid rgba(255,255,255,0.1);cursor:pointer;box-shadow:0 8px 24px rgba(34,197,94,0.35),0 2px 8px rgba(0,0,0,0.4);z-index:9998;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;padding:0}
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
/* TUCK v2.3 — IIM badge: cap size on DESKTOP only (mobile stays full-width) */
.btc-short{display:none}
/* IIM badge: full-width like all other cards (cap removed May 29) */
.iim-badge-img{max-width:100%;width:100%}
.iim-badge-link{max-width:100%;width:100%}
/* TUCK v2.3 — BTC donate card: tighter on MOBILE only */
@media(max-width:560px){
  .btc-long{display:none}
  .btc-short{display:block}
  .btc-card{padding:14px}
  .btc-card .card-title{font-size:15px}
  .btc-card [title="Open in your Bitcoin wallet"]{width:112px!important;height:112px!important;padding:6px!important}
  .btc-card a[title="Open in wallet"]{font-size:11px!important;padding:9px 10px!important}
  .btc-card>div{padding:13px!important;gap:13px!important}
}
@media(max-width:1023px){
  /* lift FAB above the bottom tab bar with a clear gap, pinned right */
  #ask-tuck-btn{bottom:calc(var(--hit) + 26px + var(--safe-bottom));right:14px;width:54px;height:54px}
  #ask-tuck-btn img{width:38px;height:38px}
  #ask-tuck-panel{right:12px;left:12px;width:auto;bottom:calc(var(--hit) + 86px + var(--safe-bottom));max-height:calc(100vh - var(--hit) - 160px)}
}`;

const ASK_TUCK_BLOCK = `<!-- ASK TUCK FLOATING WIDGET -->
<button id="ask-tuck-btn" aria-label="Ask Tuck" title="Ask Tuck — free AI guide">
  <img src="/img/tuck/tuck-v5-128.png" alt="Tuck"/>
</button>
<div id="ask-tuck-panel" role="dialog" aria-label="Ask Tuck chat">
  <div id="ask-tuck-header">
    <img src="/img/tuck/tuck-v5-128.png" alt=""/>
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
<script>
// Expose openAskTuck globally so the bottom tab can trigger it
window.openAskTuck = function() {
  var p = document.getElementById('ask-tuck-panel');
  var btn = document.getElementById('ask-tuck-btn');
  if (p && !p.classList.contains('open')) {
    p.classList.add('open');
    var inp = document.getElementById('ask-tuck-input');
    if (inp) setTimeout(function(){ inp.focus(); }, 100);
  }
};
</script>
`;



function renderShell({
  path = '/',
  title = 'Tuck — Free Financial Intelligence',
  description = 'Real-time market data, congressional trades, geopolitical OSINT signals. Free forever, no login, no advice.',
  bootstrap = {},
  body = '',
  pageCSS = '',
  pageJS = '',
  vFlag = false,
  spa = false,
}) {
  // SPA partial response: return just the <main> + <title> + bootstrap
  if (spa) {
    // TUCK v2.1 — SPA partial now includes <main> wrapper + route-scoped CSS slot + tagged JS
    return `<!doctype html><html><head><title>${esc(title)}</title>
<script id="tuck-bootstrap" type="application/json">${jsonInline(bootstrap)}</script>
<style data-route-css>${pageCSS || ''}</style>
</head><body><main class="app" id="main-content">${body}</main>
${pageJS ? `<script data-route-js>${pageJS}</script>` : ''}
</body></html>`;
  }

  const bootJSON = jsonInline(bootstrap);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=yes"/>
<meta name="theme-color" content="#0a0f1e"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}"/>
<link rel="icon" href="${TUCK_FAVICON}"/>
<link rel="apple-touch-icon" href="${TUCK_FAVICON}"/>
<meta name="apple-mobile-web-app-title" content="Tuck"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="${esc(title)}"/>
<meta property="og:description" content="${esc(description)}"/>
<meta property="og:image" content="${TUCK_OG_IMG}"/>
<meta property="og:url" content="https://tuck.osintnet.uk${esc(path)}"/>
<meta property="og:site_name" content="Tuck — Free Financial Intelligence"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(title)}"/>
<meta name="twitter:description" content="${esc(description)}"/>
<meta name="twitter:image" content="${TUCK_OG_IMG}"/>
<link rel="canonical" href="https://tuck.osintnet.uk${esc(path)}"/>
<link rel="preconnect" href="https://assets.warheatmap.app" crossorigin/>
<style>
${DESIGN_TOKENS_CSS}
${BASE_CSS}
${PRIMITIVES_CSS}
${CHROME_CSS}
${pageCSS}
${ASK_TUCK_CSS}
</style>
</head>
<body>
${renderTopBar(path, { vFlag })}
<main class="app" id="main-content">
${body}
</main>
${renderTabBar(path, { vFlag })}
${renderDrawer(path, { vFlag })}
<script id="tuck-bootstrap" type="application/json">${bootJSON}</script>
<script>${CLIENT_JS}</script>
${pageJS ? `<script>${pageJS}</script>` : ''}
${ASK_TUCK_BLOCK}
</body>
</html>`;
}

function jsonInline(obj) {
  // Safely embed JSON in <script type="application/json"> — escape </script>
  return JSON.stringify(obj || {})
    .replace(/</g, '\\u003c')
    .replace(/-->/g, '--\\u003e');
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function decodeSrc(str){ if(str==null) return ''; return String(str)
  .replace(/&quot;/g,'"').replace(/&#34;/g,'"')
  .replace(/&apos;/g,"'").replace(/&#39;/g,"'")
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .replace(/&amp;/g,'&'); }
function safeText(str){ // decode source entities, then escape ONLY <,>,& for safe text-node render (keep quotes literal)
  const d = decodeSrc(str);
  return String(d).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }



// ── lib/watchlist.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — V2_WATCHLIST (canonical ticker order + metadata)
// ────────────────────────────────────────────────────────────────────

const V2_WATCHLIST = [
  { ticker: "NVDA", name: "Nvidia",          sector: "Semiconductor",     geo: "China/Taiwan", cat: "semi",    desc: "Designs the AI chips that power ChatGPT, data centers, and autonomous vehicles. The backbone of the AI revolution." },
  { ticker: "NET",  name: "Cloudflare",      sector: "Tech/Security",     geo: "Global",       cat: "tech",    desc: "Runs the security and performance layer for ~20% of the internet. Every time a website loads fast and safely, Cloudflare is probably involved." },
  { ticker: "AVGO", name: "Broadcom",        sector: "Semiconductor",     geo: "China/Taiwan", cat: "semi",    desc: "Makes the chips that move data inside data centers and between devices. Acquired VMware — now also a major enterprise software company." },
  { ticker: "QCOM", name: "Qualcomm",        sector: "Semiconductor",     geo: "China/Taiwan", cat: "semi",    desc: "Powers almost every Android smartphone on Earth. Now expanding into cars and AI PCs. Huge exposure to US-China trade policy." },
  { ticker: "MU",   name: "Micron",          sector: "Semiconductor",     geo: "China/Taiwan", cat: "semi",    desc: "Makes memory chips (DRAM/NAND) used in every computer, phone, and AI server. Cycles hard with the economy — cheap now, explosive in upcycles." },
  { ticker: "INTC", name: "Intel",           sector: "Semiconductor",     geo: "China/Taiwan", cat: "semi",    desc: "The original US chipmaker, now rebuilding its foundry business. Central to US chip sovereignty policy — Congress keeps writing them checks." },
  { ticker: "MP",   name: "MP Materials",    sector: "Critical Minerals", geo: "China/Taiwan", cat: "defense", desc: "Operates the only active rare earth mine in the US. Makes the magnets in EV motors, F-35 jets, and wind turbines. Politicians watch this one closely." },
  { ticker: "XLE",  name: "Energy ETF",      sector: "Energy",            geo: "Iran/Hormuz",  cat: "oil",     desc: "A basket of the biggest US oil and gas companies (ExxonMobil, Chevron, etc.). Moves with oil prices and Middle East tension." },
  { ticker: "USO",  name: "Oil Fund",        sector: "Energy",            geo: "Iran/Hormuz",  cat: "oil",     desc: "Tracks the price of crude oil (WTI). Goes up when there's war risk in the Middle East, goes down when OPEC pumps more. The purest geopolitical trade." },
  { ticker: "KTOS", name: "Kratos Defense",  sector: "Defense",           geo: "Global",       cat: "defense", desc: "Builds unmanned drones, satellites, and missile-defense systems for the US military. Pure-play defense small-cap — surges on Pentagon contract wins and during geopolitical escalation." },
  { ticker: "SOXX", name: "Semiconductor ETF", sector: "Semiconductor",   geo: "China/Taiwan", cat: "etf",     desc: "iShares Semiconductor ETF — holds NVDA, AVGO, AMD, QCOM, INTC, MU and 24 more in one basket. The cleanest way to own the entire chip cycle without picking winners." },
  { ticker: "QQQ",  name: "Nasdaq-100 ETF",  sector: "Tech/Security",     geo: "Global",       cat: "etf",     desc: "Invesco QQQ — tracks the 100 largest non-financial Nasdaq stocks. Heavily weighted toward Apple, Microsoft, NVDA, Amazon, Meta, Google, Tesla. The tech mega-cap proxy." }
];

const V2_SECTOR_EXPLAINERS = {
  "Semiconductor": "Semiconductor companies design or manufacture chips — the tiny silicon brains inside every electronic device. They are highly sensitive to US-China relations because most are either made in Taiwan or sold to Chinese companies.",
  "Critical Minerals": "Rare earth elements are 17 metals used in defense systems, EVs, and electronics. China controls ~85% of global processing. Companies like MP Materials are strategic assets, not just stocks.",
  "Energy": "Energy stocks move with oil prices, which move with geopolitical events — wars, OPEC decisions, sanctions. Understanding energy stocks means understanding global power.",
  "Tech/Security": "Technology and cybersecurity companies build the infrastructure of the modern internet. They benefit from both AI investment and the constant demand for online security.",
  "Defense": "Defense contractors build weapons, drones, satellites, and intelligence systems for the US military. They benefit from rising defense budgets, geopolitical tension, and Pentagon contract wins.",
  "ETF": "An Exchange Traded Fund holds a basket of stocks in a single ticker. Buying SOXX means owning all 30 semiconductor stocks at once. Lower risk than picking one winner, but also lower upside."
};

const V2_GLOSSARY = {
  "Market Cap": "The total value of a company. Price per share × total shares. A $1T market cap means the market thinks the whole company is worth $1 trillion.",
  "52-Week Range": "The lowest and highest price a stock hit in the last year. Helps you understand if it's near a high, a low, or somewhere in the middle.",
  "P/E Ratio": "Price-to-Earnings. If a stock is $100 and earns $5/share, P/E is 20. It tells you how much investors are paying for each $1 of profit. Higher = more 'faith' in growth.",
  "EPS": "Earnings Per Share. The profit a company made divided by its share count. If a company makes $1B profit and has 1B shares, EPS = $1.00.",
  "Volume": "How many shares were traded today. High volume means a lot of people are paying attention. Low volume means the market is quiet on that stock.",
  "PFOF": "Payment for Order Flow. When a 'free' broker like Robinhood sells your trade to a market maker before executing it. Technically legal, definitely not in your interest.",
  "ETF": "Exchange Traded Fund. A basket of stocks bundled into one ticker. XLE is an ETF that holds ExxonMobil, Chevron, and other energy companies. Instant diversification.",
  "Rare Earth": "17 specialty metals with exotic names (neodymium, dysprosium) that are essential for EV batteries, jet fighters, and wind turbines. Strategic — and China controls most of the supply.",
  "Earnings": "Every 3 months, public companies report their revenue and profit. Big surprises (good or bad) can move the stock 10%+ in a single day.",
  "Insider Trading": "When a company executive buys or sells their own company's stock. Legal when disclosed (Form 4 filing). A big executive buy can signal confidence. A mass selloff can signal trouble.",
  "Short Interest": "The percentage of a stock's shares being bet AGAINST. High short interest (>15%) means lots of traders expect a drop — but it can also fuel 'short squeezes' when the price rises and shorts are forced to buy back.",
  "Float": "The number of shares actually available to trade. Different from 'shares outstanding' — float excludes insider-held and locked-up shares. A small float means the stock moves fast on small volume.",
  "Bid/Ask Spread": "The gap between what buyers offer (bid) and sellers want (ask). Tight spreads (a few cents) mean a healthy liquid market. Wide spreads mean you pay a hidden tax every time you trade.",
  "Beta": "How violently a stock moves compared to the S&P 500. Beta of 1.0 = moves with the market. Beta of 2.0 = twice as volatile. NVDA has a high beta. Utility stocks are low beta.",
  "Moving Average": "The average price over the last N days, plotted as a line. The 50-day and 200-day moving averages are the most-watched lines on Wall Street. Stocks crossing above or below them trigger algorithmic trades.",
  "Dividend Yield": "A stock that pays you to hold it. If a $100 stock pays $4/year in dividends, the yield is 4%. ETFs like XLE and SOXX pass through dividends from the companies they hold."
};

// ── routes/home.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /  (Home / Lobby)
// Hero (compact) + Pulse strip + 6-card feature grid + footer.
// All data inlined from KV cache → zero spinners on first paint.
// ────────────────────────────────────────────────────────────────────

const TUCK_MASCOT_URL = "/img/tuck/tuck-v5-hero.png";

async function homeRoute({ env, url, spa = false }) {
  // ─── Hydrate from KV (all cached, sub-50ms reads) ───
  const [prices, scores, sector, ravid] = await Promise.all([
    env.TUCK_KV.get('cache:prices:current', 'json'),
    env.TUCK_KV.get('cache:tucks-score:current', 'json'),
    env.TUCK_KV.get('cache:sector-heat:current', 'json'),
    kvOrNull(env.TUCK_KV, 'cache:ravid:current'),
  ]);

  // Build pulse rows in V2_WATCHLIST order using prices.quotes object
  const quotes = prices?.quotes || {};
  const pulseRows = V2_WATCHLIST.map(w => {
    const q = quotes[w.ticker] || {};
    return {
      ticker: w.ticker,
      name: w.name,
      sector: w.sector,
      price: q.price ?? null,
      change_pct: q.change_pct ?? null,
    };
  });

  // Compose summary bootstrap (small slice only)
  const topScores = (scores?.scores || []).slice(0, 3).map(s => ({
    ticker: s.ticker, total_score: s.total_score, verdict: s.verdict, delta: s.delta
  }));

  const bootstrap = {
    route: '/',
    prices: pulseRows,
    prices_at: prices?._cached_at || null,
    top_scores: topScores,
    top_scores_at: scores?._cached_at || null,
    sector_summary: summarizeSector(sector),
    sector_at: sector?._cached_at || null,
    ravid_count: ravid?.posts?.length || ravid?.signals?.length || null,
  };

  const pulseHTML = renderPulseStrip(pulseRows, prices?._cached_at);
  const featureGridHTML = renderFeatureGrid(bootstrap);

  const body = `
${renderHero()}
${pulseHTML}
${featureGridHTML}
${renderFooter()}
`;

  return new Response(renderShell({
    path: '/',
    title: 'Tuck — Free Financial Intelligence',
    description: 'Real-time market data, congressional trades, geopolitical OSINT signals — free, no login, no advice. Built by VPDLNY for everyone Wall Street ignores.',
    bootstrap,
    body,
    pageCSS: HOME_CSS,
    pageJS: HOME_JS,
    spa,
  }), {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=60, s-maxage=60',
    }
  });
}

async function kvOrNull(kv, key) {
  try { return await kv.get(key, 'json'); } catch { return null; }
}

function summarizeSector(sector) {
  if (!sector?.sectors) return null;
  const entries = Object.entries(sector.sectors).map(([name, data]) => ({
    name: prettySector(name),
    momentum: data.avg_momentum_5d || 0,
    count: (data.tickers || []).length,
  })).sort((a, b) => b.momentum - a.momentum);
  return { hottest: entries[0], coldest: entries[entries.length - 1] };
}

function prettySector(s) {
  const map = {
    semiconductor: 'Semis',
    defense: 'Defense',
    energy: 'Energy',
    infrastructure: 'Infra',
    broad_tech: 'Tech',
  };
  return map[s] || s;
}

// ─────────────────────────────────────────────────────────
// HERO — compact, mobile-first
// ─────────────────────────────────────────────────────────
function renderHero() {
  return `
<section class="hero">
  <div class="hero-art">
    <img src="${TUCK_MASCOT_URL}" alt="Tuck the friar mascot, patron saint of the unbanked" loading="eager" fetchpriority="high"/>
  </div>
  <div class="hero-copy">
    <h1 class="hero-title">Free financial intelligence.</h1>
    <p class="hero-sub">What Wall Street hoards, <span class="hero-accent">we hand back.</span></p>
    <div class="hero-trust">
      <span class="hero-trust-pill">No login</span>
      <span class="hero-trust-pill">No ads</span>
      <span class="hero-trust-pill">No advice</span>
    </div>
  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────
// PULSE STRIP — horizontal scroll of all 12 tickers
// ─────────────────────────────────────────────────────────
function renderPulseStrip(rows, cachedAt) {
  if (!rows || rows.length === 0) {
    return `
<section class="pulse-wrap" aria-label="Live ticker pulse">
  <div class="pulse-hdr">
    <span class="pulse-label">${icon('pulse')}<span>Live Pulse</span></span>
  </div>
  <div class="pulse-strip">
    ${Array.from({length:6}, () => '<div class="pulse-card skel"></div>').join('')}
  </div>
</section>`;
  }
  const cards = rows.map(r => {
    const hasPrice = r.price != null;
    const chg = r.change_pct ?? 0;
    const up = chg > 0;
    const dn = chg < 0;
    const arrow = up ? icon('up') : (dn ? icon('down') : icon('flat'));
    const cls = up ? 'pulse-up' : (dn ? 'pulse-dn' : 'pulse-flat');
    const priceTxt = hasPrice ? `$${Number(r.price).toFixed(2)}` : '—';
    const chgTxt = hasPrice ? `${Math.abs(chg).toFixed(2)}%` : '';
    return `<a class="pulse-card ${cls}" href="/watchlist/${esc(r.ticker)}" data-route data-ticker="${esc(r.ticker)}" aria-label="${esc(r.ticker)} ${esc(r.name)} ${priceTxt}">
  <span class="pulse-ticker">${esc(r.ticker)}</span>
  <span class="pulse-price">${priceTxt}</span>
  <span class="pulse-chg">${chgTxt ? arrow : ''}${chgTxt}</span>
</a>`;
  }).join('');

  const isoStamp = cachedAt || new Date().toISOString();
  return `
<section class="pulse-wrap" aria-label="Live ticker pulse">
  <div class="pulse-hdr">
    <span class="pulse-label">${icon('pulse')}<span>Live Pulse</span></span>
    <span class="market-status ms-init" title="US market session">·</span>
    <span class="fresh" id="prices-fresh" data-iso="${esc(isoStamp)}">Updated ${timeAgoServer(isoStamp)}</span>
  </div>
  <div class="pulse-strip" id="pulse-strip">${cards}</div>
</section>`;
}

function timeAgoServer(iso) {
  if (!iso) return 'just now';
  const sec = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (sec < 60) return 'just now';
  if (sec < 3600) return Math.floor(sec/60) + 'm ago';
  if (sec < 86400) return Math.floor(sec/3600) + 'h ago';
  return Math.floor(sec/86400) + 'd ago';
}

// ─────────────────────────────────────────────────────────
// FEATURE GRID — 6 big tap cards
// ─────────────────────────────────────────────────────────
function renderFeatureGrid(boot) {
  const topScore = boot.top_scores?.[0];
  const scoreLine = topScore
    ? `Top today: <strong>${esc(topScore.ticker)}</strong> ${topScore.total_score}`
    : 'Daily 0-100 composite';
  const hottest = boot.sector_summary?.hottest;
  const heatLine = hottest
    ? `Hottest: <strong>${esc(hottest.name)}</strong> ${hottest.momentum >= 0 ? '+' : ''}${(hottest.momentum||0).toFixed(1)}%`
    : '5-day sector momentum';

  const items = [
    { route: '/scanner',   icon: 'scanner',   title: 'Market Intel Scanner', desc: 'Geopolitical signals that move your watchlist', badge: 'LIVE', pill: 'live' },
    { route: '/ravid',     icon: 'ravid',     title: 'Ravid Watch',  desc: 'Inside scoops · Axios · Channel 12', badge: 'SCOOPS', pill: 'scoop' },
    { route: '/congress',  icon: 'congress',  title: 'Congress Watch', desc: 'Stock trades by senators and reps', badge: 'PUBLIC', pill: 'public' },
    { route: '/scenarios', icon: 'scenarios', title: 'AI Scenarios', desc: 'Probability-weighted outlooks', badge: 'AI', pill: 'beta' },
    { route: '/scores',    icon: 'scores',    title: "Tuck's Score", desc: scoreLine, badge: 'DAILY', pill: 'daily' },
    { route: '/heatmap',   icon: 'heatmap',   title: 'Sector Heat Map', desc: heatLine, badge: 'LIVE', pill: 'live' },
  ];

  const cards = items.map(i => `
<a class="feat-card card card-interactive" href="${i.route}" data-route aria-label="${esc(i.title)}">
  <div class="feat-card-top">
    <span class="feat-icon">${icon(i.icon)}</span>
    <span class="pill pill-${i.pill}">${i.badge}</span>
  </div>
  <div class="feat-card-title">${esc(i.title)}</div>
  <div class="feat-card-desc">${i.desc}</div>
  <div class="feat-card-chev">${icon('chevron_right')}</div>
</a>`).join('');

  return `
<section class="feat-grid-wrap" aria-label="Explore features">
  <h2 class="section-h2">Explore</h2>
  <div class="feat-grid">${cards}</div>
  <div class="feat-grid-extras">
    <a class="feat-extra" href="/macro" data-route>${icon('macro')}<span>Macro Corner</span></a>
    <a class="feat-extra" href="/learn" data-route>${icon('learn')}<span>Learn</span></a>
    <a class="feat-extra" href="/about" data-route>${icon('about')}<span>About</span></a>
  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────
function renderFooter() {
  return `
<section class="home-footer">
  <p>Tuck is a free, open OSINT financial-intelligence platform from <strong>Indica Independent Media</strong> — the public face of <strong>VPDLNY</strong>.</p>
  <p><strong>Educational only.</strong> Nothing here is investment advice or a recommendation to buy or sell any security.</p>
  <p>News aggregated from public RSS feeds · Congressional data from public SEC filings · Macro data from FRED</p>
</section>`;
}

// ─────────────────────────────────────────────────────────
// CSS specific to home
// ─────────────────────────────────────────────────────────
const HOME_CSS = `
.hero {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: var(--sp-4);
  align-items: center;
  padding: var(--sp-4) 0 var(--sp-2);
}
.hero-art img {
  width: 96px; height: 96px;
  border-radius: var(--r-lg);
  box-shadow: var(--sh-2), 0 0 0 1px var(--border);
}
.hero-title {
  font-size: var(--tx-lg); font-weight: 800;
  letter-spacing: -0.02em; line-height: var(--lh-tight);
  margin-bottom: var(--sp-1);
}
.hero-sub {
  font-size: var(--tx-sm); color: var(--fg-dim);
  line-height: var(--lh-snug);
  margin: 0 0 var(--sp-2);
}
.hero-accent { color: var(--tuck); font-weight: 700; }
.hero-trust {
  display: flex; flex-wrap: wrap; gap: var(--sp-1);
  margin-top: var(--sp-2);
}
.hero-trust-pill {
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase;
  padding: 3px 8px; border-radius: var(--r-full);
  background: var(--bg-elev); border: 1px solid var(--border);
  color: var(--fg-dim);
}
@media (min-width: 640px) {
  .hero { grid-template-columns: 140px 1fr; gap: var(--sp-6); padding: var(--sp-6) 0 var(--sp-4); }
  .hero-art img { width: 140px; height: 140px; }
  .hero-title { font-size: var(--tx-2xl); }
  .hero-sub { font-size: var(--tx-base); }
}
@media (min-width: 1024px) {
  .hero { grid-template-columns: 200px 1fr; padding: var(--sp-8) 0 var(--sp-6); }
  .hero-art img { width: 200px; height: 200px; }
  .hero-title { font-size: var(--tx-3xl); }
  .hero-sub { font-size: var(--tx-md); }
}

.pulse-wrap { margin-top: var(--sp-4); }
.pulse-hdr {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--sp-2);
}
.pulse-label {
  display: inline-flex; align-items: center; gap: var(--sp-1);
  font-size: var(--tx-xs); font-weight: 700;
  color: var(--fg-dim);
  letter-spacing: 0.08em; text-transform: uppercase;
}
.pulse-label svg { color: var(--tuck); width: 14px; height: 14px; }
.pulse-strip {
  display: flex; gap: var(--sp-2);
  overflow-x: auto;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  touch-action: pan-x;
  padding: var(--sp-1) 0 var(--sp-3);
  margin: 0 calc(-1 * var(--sp-4));
  padding-left: var(--sp-4); padding-right: var(--sp-4);
  scrollbar-width: none;
}
.pulse-strip::-webkit-scrollbar { display: none; }
.pulse-card {
  flex: 0 0 auto;
  width: 110px; height: 80px;
  border-radius: var(--r-md);
  background: var(--bg-elev);
  border: 1px solid var(--border);
  padding: var(--sp-2) var(--sp-3);
  display: flex; flex-direction: column; justify-content: space-between;
  text-decoration: none; color: var(--fg);
  scroll-snap-align: start;
  transition: border-color var(--dur-fast), transform var(--dur-fast);
  -webkit-tap-highlight-color: transparent;
}
.pulse-card:hover { border-color: var(--border-strong); text-decoration: none; }
.pulse-card:active { transform: scale(0.96); }
.pulse-ticker {
  font-size: var(--tx-sm); font-weight: 800; letter-spacing: 0.02em;
  color: var(--fg);
}
.pulse-price {
  font-size: var(--tx-md); font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.pulse-chg {
  font-size: var(--tx-xs); font-weight: 700;
  display: inline-flex; align-items: center; gap: 2px;
  font-variant-numeric: tabular-nums;
}
.pulse-up   .pulse-chg, .pulse-up   .pulse-price { color: var(--calm); }
.pulse-dn   .pulse-chg, .pulse-dn   .pulse-price { color: var(--escalate); }
.pulse-flat .pulse-chg { color: var(--fg-faint); }

.feat-grid-wrap { margin-top: var(--sp-6); }
.section-h2 {
  font-size: var(--tx-md); font-weight: 800;
  letter-spacing: -0.01em;
  margin-bottom: var(--sp-3);
  display: flex; align-items: center; gap: var(--sp-2);
}
.section-h2::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.feat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-3);
}
@media (min-width: 640px) { .feat-grid { grid-template-columns: repeat(3, 1fr); } }
.feat-card {
  position: relative;
  display: flex; flex-direction: column; gap: var(--sp-2);
  min-height: 140px;
  padding: var(--sp-3);
  text-decoration: none;
  color: var(--fg);
  overflow: hidden;
}
.feat-card-top {
  display: flex; align-items: center; justify-content: space-between; gap: var(--sp-2);
}
.feat-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--r-sm);
  background: var(--tuck-soft);
  color: var(--tuck);
}
.feat-card-title {
  font-size: var(--tx-base); font-weight: 800;
  letter-spacing: -0.01em; line-height: var(--lh-tight);
}
.feat-card-desc {
  font-size: var(--tx-xs); color: var(--fg-dim);
  line-height: var(--lh-snug);
  flex: 1; padding-right: var(--sp-5);
}
.feat-card-desc strong { color: var(--fg); font-weight: 700; }
.feat-card-chev {
  position: absolute; bottom: var(--sp-2); right: var(--sp-3);
  color: var(--fg-faint);
}
.feat-card:hover .feat-card-chev { color: var(--tuck); }
.feat-card:hover { text-decoration: none; }

.feat-grid-extras {
  display: flex; flex-wrap: wrap; gap: var(--sp-2);
  margin-top: var(--sp-4);
}
.feat-extra {
  flex: 1 1 calc(33% - var(--sp-2));
  min-width: 100px;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--sp-2);
  height: var(--hit);
  padding: 0 var(--sp-3);
  border-radius: var(--r-md);
  background: var(--bg-elev);
  border: 1px solid var(--border);
  color: var(--fg-dim);
  font-size: var(--tx-sm); font-weight: 600;
  text-decoration: none;
}
.feat-extra:hover { color: var(--fg); border-color: var(--border-strong); text-decoration: none; }

.home-footer {
  margin-top: var(--sp-10);
  padding: var(--sp-6) 0;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: var(--tx-xs); color: var(--fg-faint);
  line-height: var(--lh-relaxed);
}
.home-footer p { margin: 0 0 var(--sp-1); }
.home-footer a { color: var(--fg-dim); }
.home-footer strong { color: var(--fg-dim); }
`;

const HOME_JS = `
(() => {
  window.addEventListener('tuck:prices', (e) => {
    const quotes = e.detail?.quotes || {};
    const strip = document.getElementById('pulse-strip');
    if (!strip) return;
    Object.entries(quotes).forEach(([ticker, q]) => {
      const card = strip.querySelector('[data-ticker="' + ticker + '"]');
      if (!card) return;
      const priceEl = card.querySelector('.pulse-price');
      const chgEl = card.querySelector('.pulse-chg');
      if (priceEl) priceEl.textContent = '$' + Number(q.price || 0).toFixed(2);
      if (chgEl) chgEl.textContent = Math.abs(q.change_pct || 0).toFixed(2) + '%';
      card.classList.remove('pulse-up', 'pulse-dn', 'pulse-flat');
      const up = (q.change_pct || 0) > 0;
      const dn = (q.change_pct || 0) < 0;
      card.classList.add(up ? 'pulse-up' : dn ? 'pulse-dn' : 'pulse-flat');
    });
  });
})();
`;

// ── routes/watchlist.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /watchlist  + /watchlist/:ticker
// Full pulse list + per-ticker deep page
// ────────────────────────────────────────────────────────────────────

async function watchlistRoute({ env, url, spa = false }) {
  const parts = url.pathname.split('/').filter(Boolean);
  const ticker = parts[1] ? parts[1].toUpperCase() : null;

  const [prices, scores] = await Promise.all([
    env.TUCK_KV.get('cache:prices:current', 'json'),
    env.TUCK_KV.get('cache:tucks-score:current', 'json'),
  ]);
  const quotes = prices?.quotes || {};
  const scoresByTicker = Object.fromEntries((scores?.scores || []).map(s => [s.ticker, s]));

  if (ticker) {
    return renderTickerPage({ env, ticker, quotes, scoresByTicker, prices, spa });
  }
  return renderListPage({ quotes, scoresByTicker, prices, spa });
}

function renderListPage({ quotes, scoresByTicker, prices, spa }) {
  const cards = V2_WATCHLIST.map(w => {
    const q = quotes[w.ticker] || {};
    const score = scoresByTicker[w.ticker];
    const hasPrice = q.price != null;
    const chg = q.change_pct ?? 0;
    const up = chg > 0, dn = chg < 0;
    const arrow = up ? icon('up') : (dn ? icon('down') : icon('flat'));
    const dir = up ? 'up' : (dn ? 'dn' : 'flat');
    const scoreCls = scoreClassServer(score?.total_score);
    const scoreHTML = score
      ? `<span class="score-badge ${scoreCls}">${score.total_score}</span>`
      : `<span class="score-badge score-cold">—</span>`;
    return `<a class="wl-row card card-interactive wl-${dir}" href="/watchlist/${esc(w.ticker)}" data-route>
      <div class="wl-ticker">
        ${(()=>{const _t=(w.ticker||'').toUpperCase();
  if(DARK_INITIALS[_t]) return `<span class="wl-logo-ring" style="background:#fff"><span class="wl-logo-fb" style="display:flex;color:${DARK_INITIALS[_t]};font-weight:900;">${esc(_t)}</span></span>`;
  if(LOGO_BG[_t]) return `<span class="wl-logo-ring" style="background:${LOGO_BG[_t]}"><img class="wl-logo" src="https://financialmodelingprep.com/image-stock/${esc(w.ticker)}.png" alt="" width="38" height="38" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"/><span class="wl-logo-fb" style="display:none;color:#fff;">${esc(_t.slice(0,2))}</span></span>`;
  if(WEAK_LOGOS[_t]) return `<span class="wl-logo-ring" style="background:${WEAK_LOGOS[_t]}"><span class="wl-logo-fb" style="display:flex;color:#fff;">${esc(_t.slice(0,2))}</span></span>`;
  return `<span class="wl-logo-ring"><img class="wl-logo" src="https://financialmodelingprep.com/image-stock/${esc(w.ticker)}.png" alt="" width="38" height="38" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('fb');this.nextElementSibling.style.display='flex';"/><span class="wl-logo-fb" style="display:none;">${esc(_t.slice(0,2))}</span></span>`;
})()}
        <div class="wl-ticker-txt">
          <div class="wl-tick">${esc(w.ticker)}</div>
          <div class="wl-name">${esc(w.name)}</div>
        </div>
      </div>
      <div class="wl-price-col">
        <div class="wl-price">${hasPrice ? '$' + Number(q.price).toFixed(2) : '—'}</div>
        <div class="wl-chg">${hasPrice ? arrow + Math.abs(chg).toFixed(2) + '%' : ''}</div>
      </div>
      <div class="wl-score-col">
        ${scoreHTML}
        <div class="wl-score-label">Tuck</div>
      </div>
      <div class="wl-chev">${icon('chevron_right')}</div>
    </a>`;
  }).join('');

  const isoStamp = prices?._cached_at || new Date().toISOString();
  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('pulse')}<span>Watchlist</span></h1>
    <span class="fresh" data-iso="${esc(isoStamp)}">Updated ${timeAgoServer(isoStamp)}</span>
  </div>
  <p class="shdr-sub">12 stocks · Tap any to see why it matters and what's driving it today</p>
</header>
<section class="wl-list" aria-label="Watchlist stocks">${cards}</section>`;

  return new Response(renderShell({
    path: '/watchlist',
    title: 'Watchlist · Tuck',
    description: 'Tuck\'s 12-stock OSINT watchlist with live prices and daily scores.',
    bootstrap: { route: '/watchlist', prices_at: prices?._cached_at },
    body, pageCSS: WL_CSS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=60' }});
}

async function renderTickerPage({ env, ticker, quotes, scoresByTicker, prices, spa }) {
  const w = V2_WATCHLIST.find(x => x.ticker === ticker);
  if (!w) return new Response('Ticker not found', { status: 404 });

  const q = quotes[ticker] || {};
  const score = scoresByTicker[ticker];
  const hasPrice = q.price != null;
  const chg = q.change_pct ?? 0;
  const up = chg > 0, dn = chg < 0;
  const dir = up ? 'up' : (dn ? 'dn' : 'flat');
  const arrow = up ? icon('up') : (dn ? icon('down') : icon('flat'));
  const scoreCls = scoreClassServer(score?.total_score);
  const sectorExp = V2_SECTOR_EXPLAINERS[w.sector] || '';

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">
      <a class="topbar-btn" href="/watchlist" data-route aria-label="Back">${icon('back')}</a>
      <span>${esc(ticker)}</span>
    </h1>
    <button class="topbar-btn" onclick="tuckShare({title:'${esc(ticker)} · Tuck',url:location.href})" aria-label="Share">${icon('share')}</button>
  </div>
  <p class="shdr-sub">${esc(w.name)} · ${esc(w.sector)}</p>
</header>

<section class="tk-price-wrap card">
  <div class="tk-price-row tk-${dir}">
    <div class="tk-price">${hasPrice ? '$' + Number(q.price).toFixed(2) : '—'}</div>
    <div class="tk-chg">${hasPrice ? arrow + Math.abs(chg).toFixed(2) + '%' : ''}</div>
  </div>
  ${q.week52_low != null ? `<div class="tk-range">52w $${Number(q.week52_low).toFixed(0)}–$${Number(q.week52_high||0).toFixed(0)}</div>` : ''}
  ${score ? `<div class="tk-score-row">
    <span class="score-badge ${scoreCls}">${score.total_score}</span>
    <div>
      <div class="tk-score-verdict">${esc(score.verdict || '')}</div>
      <div class="tk-score-sub">Tuck's Score · ${score.delta > 0 ? '+' + score.delta : (score.delta < 0 ? score.delta : 'no change')} since yesterday</div>
    </div>
  </div>` : ''}
</section>

<section class="tk-stats">
  ${q.market_cap ? `<div class="tk-stat"><span class="tk-stat-k">Market Cap</span><span class="tk-stat-v">$${formatBig(q.market_cap)}</span></div>` : ''}
  ${q.volume ? `<div class="tk-stat"><span class="tk-stat-k">Volume</span><span class="tk-stat-v">${formatBig(q.volume)}</span></div>` : ''}
  ${q.correlation ? `<div class="tk-stat"><span class="tk-stat-k">Driver</span><span class="tk-stat-v">${esc(q.correlation)}</span></div>` : ''}
  <div class="tk-stat"><span class="tk-stat-k">Geo Risk</span><span class="tk-stat-v">${esc(w.geo)}</span></div>
</section>

<section class="card">
  <h2 class="card-title">${icon('about')}<span>Why ${esc(ticker)} matters</span></h2>
  <p class="tk-desc">${esc(w.desc)}</p>
</section>

${sectorExp ? `<section class="card">
  <h2 class="card-title">${icon('learn')}<span>${esc(w.sector)} — Plain English</span></h2>
  <p class="tk-desc">${esc(sectorExp)}</p>
</section>` : ''}

<section class="card">
  <h2 class="card-title">${icon('scores')}<span>Deeper analysis</span></h2>
  <div class="tk-links">
    <a class="tk-link" href="/scores#${esc(ticker)}" data-route>${icon('scores')}<span>Score breakdown</span>${icon('chevron_right')}</a>
    <a class="tk-link" href="/scanner?ticker=${esc(ticker)}" data-route>${icon('scanner')}<span>News mentions</span>${icon('chevron_right')}</a>
    <a class="tk-link" href="/congress?ticker=${esc(ticker)}" data-route>${icon('congress')}<span>Congress trades</span>${icon('chevron_right')}</a>
    <a class="tk-link" href="/scenarios?ticker=${esc(ticker)}" data-route>${icon('scenarios')}<span>AI scenarios</span>${icon('chevron_right')}</a>
  </div>
</section>
`;

  return new Response(renderShell({
    path: `/watchlist/${ticker}`,
    title: `${ticker} ${w.name} · Tuck`,
    description: `${w.name} (${ticker}) ${hasPrice ? '$' + q.price.toFixed(2) : ''} — Tuck's plain-English breakdown of why this stock matters.`,
    bootstrap: { route: '/watchlist/' + ticker },
    body, pageCSS: WL_CSS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=60' }});
}

function scoreClassServer(s) {
  if (s == null) return 'score-neutral';
  s = Number(s);
  if (s >= 70) return 'score-hot';
  if (s >= 55) return 'score-warm';
  if (s >= 45) return 'score-neutral';
  if (s >= 30) return 'score-cool';
  return 'score-cold';
}

function formatBig(n) {
  n = Number(n);
  if (n >= 1e12) return (n/1e12).toFixed(2) + 'T';
  if (n >= 1e9) return (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n/1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n/1e3).toFixed(0) + 'K';
  return String(n);
}

const WL_CSS = `
.wl-ticker{display:flex;align-items:center;gap:10px}
.wl-logo-ring{width:40px;height:40px;border-radius:50%;background:#f4f6f8;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 1px 3px rgba(0,0,0,.35)}
.wl-logo-ring.fb{background:#1f2937}
.wl-logo{border-radius:50%;object-fit:contain}
.wl-logo-fb{width:100%;height:100%;border-radius:50%;color:#cbd5e1;font-size:13px;font-weight:800;align-items:center;justify-content:center}
.wl-ticker-txt{min-width:0}
.wl-list { display: flex; flex-direction: column; gap: var(--sp-2); }
.wl-row {
  display: grid;
  grid-template-columns: 1fr auto auto 16px;
  gap: var(--sp-3);
  align-items: center;
  padding: var(--sp-3) var(--sp-4);
  text-decoration: none;
  color: var(--fg);
}
.wl-row:hover { text-decoration: none; }
.wl-tick { font-size: var(--tx-base); font-weight: 800; letter-spacing: 0.02em; }
.wl-name { font-size: var(--tx-xs); color: var(--fg-dim); margin-top: 2px; }
.wl-price-col { text-align: right; }
.wl-price { font-size: var(--tx-base); font-weight: 700; font-variant-numeric: tabular-nums; }
.wl-chg { font-size: var(--tx-xs); font-weight: 700; display: inline-flex; align-items: center; gap: 2px; font-variant-numeric: tabular-nums; margin-top: 2px; }
.wl-up .wl-price, .wl-up .wl-chg { color: var(--calm); }
.wl-dn .wl-price, .wl-dn .wl-chg { color: var(--escalate); }
.wl-flat .wl-chg { color: var(--fg-faint); }
.wl-score-col { text-align: center; min-width: 56px; }
.wl-score-label { font-size: 9px; color: var(--fg-faint); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
.wl-chev { color: var(--fg-faint); display: flex; align-items: center; }

/* Ticker detail page */
.tk-price-wrap { margin-top: var(--sp-2); }
.tk-price-row { display: flex; align-items: baseline; gap: var(--sp-3); }
.tk-price { font-size: var(--tx-3xl); font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
.tk-chg { font-size: var(--tx-base); font-weight: 700; display: inline-flex; align-items: center; gap: 2px; font-variant-numeric: tabular-nums; }
.tk-up .tk-price, .tk-up .tk-chg { color: var(--calm); }
.tk-dn .tk-price, .tk-dn .tk-chg { color: var(--escalate); }
.tk-range { font-size: var(--tx-xs); color: var(--fg-faint); margin-top: var(--sp-1); }
.tk-score-row { display: flex; align-items: center; gap: var(--sp-3); margin-top: var(--sp-3); padding-top: var(--sp-3); border-top: 1px solid var(--border); }
.tk-score-verdict { font-size: var(--tx-base); font-weight: 700; }
.tk-score-sub { font-size: var(--tx-xs); color: var(--fg-faint); }
.tk-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: var(--sp-2); margin-top: var(--sp-4);
}
@media (min-width: 640px) { .tk-stats { grid-template-columns: repeat(4, 1fr); } }
.tk-stat {
  background: var(--bg-elev); border: 1px solid var(--border);
  border-radius: var(--r-md); padding: var(--sp-3);
  display: flex; flex-direction: column; gap: var(--sp-1);
}
.tk-stat-k { font-size: 10px; color: var(--fg-faint); letter-spacing: 0.06em; text-transform: uppercase; font-weight: 700; }
.tk-stat-v { font-size: var(--tx-base); font-weight: 700; font-variant-numeric: tabular-nums; }
.tk-desc { color: var(--fg-dim); line-height: var(--lh-relaxed); margin: 0; }
.tk-links { display: flex; flex-direction: column; gap: var(--sp-1); margin-top: var(--sp-2); }
.tk-link {
  display: flex; align-items: center; gap: var(--sp-3);
  height: var(--hit); padding: 0 var(--sp-3);
  border-radius: var(--r-md);
  background: var(--bg-elev2); color: var(--fg);
  text-decoration: none; font-weight: 600;
}
.tk-link span { flex: 1; }
.tk-link:hover { background: var(--bg-elev); text-decoration: none; }
.tk-link svg { color: var(--tuck); }
.tk-link svg:last-child { color: var(--fg-faint); }
`;

// ── routes/scanner.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /scanner  (Market Intelligence Scanner)
// Live news signals — geopolitical → ticker impact
// ────────────────────────────────────────────────────────────────────

async function scannerRoute({ env, url, spa = false }) {
  // Direct D1 query — avoids fragile self-fetch in subrequest context
  let signals = [];
  let cachedAt = null;
  try {
    if (env.GEOINT_DB) {
      const q = await env.GEOINT_DB.prepare(
        "SELECT id, source, headline, full_text, url, published_at, market_impact_score, geopolitical_region FROM signals ORDER BY id DESC LIMIT 40"
      ).all();
      signals = q.results || [];
      cachedAt = new Date().toISOString();
    }
  } catch(e) {
    console.error('scannerRoute D1 error:', e?.message);
  }

  const tickerFilter = url.searchParams.get('ticker');
  if (tickerFilter) {
    signals = signals.filter(s => (s.related_tickers || '').toUpperCase().includes(tickerFilter.toUpperCase()));
  }

  // Region groups for chips
  const groups = countByRegion(signals);
  const rows = signals.slice(0, 40).map(renderSignal).join('') || renderEmpty_scanner();

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('scanner')}<span>Scanner</span></h1>
    <span class="pill pill-live">LIVE</span>
  </div>
  <p class="shdr-sub">Geopolitical signals scored 0-100% for market escalation. Tap any to see related tickers and full source.</p>
</header>

<div class="chip-row" role="tablist" aria-label="Filter by region">
  <button class="chip chip-active" data-filter="all" role="tab" aria-selected="true">All <span class="chip-count">${signals.length}</span></button>
  ${Object.entries(groups).map(([key, info]) => `<button class="chip" data-filter="${esc(key)}" role="tab" aria-selected="false">${info.label} <span class="chip-count">${info.count}</span></button>`).join('')}
</div>

<section class="sig-list" id="sig-list">${rows}</section>

${tickerFilter ? `<div class="card scn-filter-info">
  <div>Showing only signals tagged <strong>${esc(tickerFilter)}</strong></div>
  <a href="/scanner" data-route class="btn btn-sm">Clear filter</a>
</div>` : ''}

<section class="card scanner-legend">
  <h2 class="card-title">${icon('about')}<span>What does the % mean?</span></h2>
  <p class="scn-leg-p">Each signal gets a 0-100 <strong>escalation score</strong> based on language analysis. Higher % = stronger escalation signal. Green = de-escalation. We do NOT predict markets — we surface what is happening.</p>
</section>
`;

  return new Response(renderShell({
    path: '/scanner',
    title: 'Market Intelligence Scanner · Tuck',
    description: 'Live geopolitical signals from 14 public news sources, scored for market escalation and tagged to your watchlist tickers.',
    bootstrap: { route: '/scanner', count: signals.length },
    body, pageCSS: SCN_CSS, pageJS: SCN_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=60' }});
}

function countByRegion(signals) {
  const groups = {
    iran:    { label: '🛢️ Iran/Hormuz', count: 0, match: ['iran','hormuz','tehran','strait'] },
    ukraine: { label: '🇺🇦 Ukraine/NATO', count: 0, match: ['ukraine','russia','nato','kyiv','moscow'] },
    israel:  { label: '⚔️ Israel/Gaza', count: 0, match: ['israel','gaza','hamas','idf'] },
    china:   { label: '🐉 China/Taiwan', count: 0, match: ['china','taiwan','beijing','xi','pla'] },
    cuba:    { label: '🌴 Cuba', count: 0, match: ['cuba','havana'] },
  };
  for (const s of signals) {
    const txt = ((s.headline||'') + ' ' + (s.full_text||'')).toLowerCase();
    for (const [k, g] of Object.entries(groups)) {
      if (g.match.some(m => txt.includes(m))) g.count++;
    }
  }
  for (const k of Object.keys(groups)) if (groups[k].count === 0) delete groups[k];
  return groups;
}


// Safe parser for published_at — accepts ISO string, unix seconds, unix ms, or null
function safeDate(v) {
  if (v == null || v === '') return null;
  try {
    if (typeof v === 'number') {
      // Unix seconds vs ms heuristic
      const d = new Date(v < 1e12 ? v * 1000 : v);
      return isNaN(d.getTime()) ? null : d;
    }
    if (typeof v === 'string') {
      // ISO string or numeric string
      if (/^\d+$/.test(v)) {
        const n = parseInt(v, 10);
        const d = new Date(n < 1e12 ? n * 1000 : n);
        return isNaN(d.getTime()) ? null : d;
      }
      const d = new Date(v);
      return isNaN(d.getTime()) ? null : d;
    }
  } catch (e) {}
  return null;
}

function renderSignal(s) {
  const score = s.market_impact_score != null ? Math.round(s.market_impact_score * 100) : null;
  const sentiment = (s.sentiment || '').toLowerCase();
  const cls = sentiment === 'escalation' ? 'sig-esc' : (sentiment === 'de-escalation' ? 'sig-deesc' : 'sig-neutral');
  const tickers = (s.related_tickers || '').split(/[\s,]+/).filter(Boolean);
  const tickerPills = tickers.slice(0, 4).map(t => `<a href="/watchlist/${esc(t)}" data-route class="sig-ticker-pill" onclick="event.stopPropagation()">${esc(t)}</a>`).join('');
  const headline = s.headline || s.full_text || '';
  const _d = safeDate(s.published_at); const ageISO = _d ? _d.toISOString() : null;
  return `<button class="sig-row card card-interactive ${cls}" data-signal="${esc(JSON.stringify(s))}" aria-label="${esc(headline.slice(0,80))}">
    ${score != null ? `<span class="sig-score sig-score-${cls}">${score}%</span>` : `<span class="sig-score">—</span>`}
    <div class="sig-body">
      <div class="sig-headline">${esc(headline.slice(0, 180))}</div>
      <div class="sig-meta">
        <span class="sig-src">${esc(s.source || s.author || 'source')}</span>
        <span class="sig-time"${ageISO ? ` data-iso="${esc(ageISO)}"` : ''}>${ageISO ? timeAgoServer(ageISO) : ''}</span>
        <span class="sig-sent">${esc(sentiment)}</span>
      </div>
      ${tickerPills ? `<div class="sig-tickers">${tickerPills}</div>` : ''}
    </div>
  </button>`;
}

function renderEmpty_scanner() {
  return `<div class="empty">
    <div class="empty-icon">${icon('scanner')}</div>
    <div class="empty-title">No signals yet</div>
    <div class="empty-msg">The scanner is warming up. Try again in 1-2 minutes.</div>
  </div>`;
}



const SCN_CSS = `
.sig-list { display: flex; flex-direction: column; gap: var(--sp-2); }
.sig-row {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: var(--sp-3);
  align-items: flex-start;
  padding: var(--sp-3) var(--sp-4);
  text-align: left;
  width: 100%;
}
.sig-score {
  font-size: var(--tx-md); font-weight: 800;
  font-variant-numeric: tabular-nums;
  text-align: center;
  padding: 6px 0;
  border-radius: var(--r-sm);
  background: var(--bg-elev2);
  color: var(--fg-dim);
  min-width: 50px;
}
.sig-score-sig-esc { background: var(--escalate-soft); color: #fca5a5; }
.sig-score-sig-deesc { background: var(--calm-soft); color: #86efac; }
.sig-score-sig-neutral { background: var(--neutral-soft); color: #fde047; }
.sig-body { min-width: 0; }
.sig-headline {
  font-size: var(--tx-sm); font-weight: 600;
  color: var(--fg);
  line-height: var(--lh-snug);
  margin-bottom: var(--sp-1);
}
.sig-meta {
  display: flex; flex-wrap: wrap; gap: var(--sp-2);
  font-size: var(--tx-xs); color: var(--fg-faint);
  margin-bottom: var(--sp-1);
}
.sig-src { font-weight: 700; color: var(--fg-dim); text-transform: uppercase; letter-spacing: 0.04em; font-size: 10px; }
.sig-sent { text-transform: uppercase; letter-spacing: 0.04em; font-size: 10px; font-weight: 700; }
.sig-row.sig-esc .sig-sent { color: var(--escalate); }
.sig-row.sig-deesc .sig-sent { color: var(--calm); }
.sig-tickers { display: flex; flex-wrap: wrap; gap: 4px; margin-top: var(--sp-1); }
.sig-ticker-pill {
  display: inline-flex; align-items: center;
  height: 22px; padding: 0 var(--sp-2);
  border-radius: var(--r-xs);
  background: var(--info-soft);
  color: #93c5fd;
  font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid rgba(59,130,246,0.3);
}
.sig-ticker-pill:hover { background: rgba(59,130,246,0.2); text-decoration: none; }
.scn-filter-info {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--sp-3); margin-top: var(--sp-3); font-size: var(--tx-sm);
}
.scanner-legend { margin-top: var(--sp-6); }
.scn-leg-p { color: var(--fg-dim); margin: 0; font-size: var(--tx-sm); line-height: var(--lh-relaxed); }
.scn-leg-p strong { color: var(--fg); }
`;

const SCN_JS = `
window.openSignalSheet = function(s) {
  if (typeof s === 'string') { try { s = JSON.parse(s); } catch(e) { return; } }
  if (!s) return;
  const headline = s.headline || s.full_text || '';
  const tickers = (s.related_tickers || '').split(/[\\s,]+/).filter(Boolean);
  const score = s.market_impact_score != null ? Math.round(s.market_impact_score * 100) : null;
  const html = \`
    \${score != null ? \`<div style="margin-bottom:var(--sp-3);"><span class="pill" style="background:var(--bg-elev2);color:var(--fg);font-size:13px;height:32px;padding:0 12px;">Escalation \${score}%</span> <span class="pill" style="margin-left:6px;">\${(s.sentiment||'').toUpperCase()}</span></div>\` : ''}
    <h3 style="font-size:var(--tx-md);margin-bottom:var(--sp-2);">\${__stripHtml(headline)}</h3>
    <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);">\${s.full_text ? (s.full_text === headline ? '' : __stripHtml(s.full_text)) : ''}</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:var(--sp-3);">
      <span class="pill">\${(s.source||'source').toUpperCase()}</span>
      \${__safeDate(s.published_at) ? \`<span class="pill">\${__safeDate(s.published_at)}</span>\` : ''}
    </div>
    \${tickers.length ? \`<h3 style="margin-top:var(--sp-4);font-size:var(--tx-md);">Related tickers</h3>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        \${tickers.map(t => '<a href="/watchlist/' + t + '" data-route class="sig-ticker-pill" style="height:32px;padding:0 12px;font-size:13px;">' + t + '</a>').join('')}
      </div>\` : ''}
    \${s.url ? \`<a href="\${s.url}" target="_blank" rel="noopener" class="btn" style="margin-top:var(--sp-4);width:100%;">Read source →</a>\` : ''}
  \`;
  window.openSheet({ title: 'Signal detail', html });
};

// Region chip filter
(() => {
  const list = document.getElementById('sig-list');
  // Delegated click → open signal sheet from data-signal attr (document-level, SPA-proof).
  if (!document.__sigWired) {
    document.__sigWired = true;
    document.addEventListener('click', (e) => {
      if (e.target.closest('.sig-ticker-pill')) return; // let ticker links navigate
      const row = e.target.closest('.sig-row');
      if (!row) return;
      const raw = row.getAttribute('data-signal');
      try { window.openSignalSheet(JSON.parse(raw)); } catch(_) {}
    });
  }
  if (!list) return;
  const chips = document.querySelectorAll('.chip-row .chip');
  const filters = {
    iran: ['iran','hormuz','tehran','strait'],
    ukraine: ['ukraine','russia','nato','kyiv','moscow'],
    israel: ['israel','gaza','hamas','idf'],
    china: ['china','taiwan','beijing','xi','pla'],
    cuba: ['cuba','havana']
  };
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => { x.classList.remove('chip-active'); x.setAttribute('aria-selected', 'false'); });
    c.classList.add('chip-active'); c.setAttribute('aria-selected', 'true');
    const f = c.getAttribute('data-filter');
    const rows = list.querySelectorAll('.sig-row');
    rows.forEach(r => {
      if (f === 'all') { r.style.display = ''; return; }
      const txt = r.textContent.toLowerCase();
      const match = (filters[f] || []).some(m => txt.includes(m));
      r.style.display = match ? '' : 'none';
    });
  }));
})();
`;

// ── routes/ravid.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /ravid  (Ravid Watch)
// Barak Ravid scoops timeline
// ────────────────────────────────────────────────────────────────────

async function ravidRoute({ env, url, spa = false }) {
  let signals = [];
  try {
    if (env.GEOINT_DB) {
      const q = await env.GEOINT_DB.prepare(
        "SELECT id as signal_id, source, author, headline, full_text, url, published_at, geopolitical_region, market_impact_score, sentiment FROM signals " +
        "WHERE source IN ('x_barakravid','bluesky_barakravid','axios_ravid') " +
        "ORDER BY published_at DESC LIMIT 25"
      ).all();
      signals = q.results || [];
    }
  } catch(e) { console.error('ravidRoute err:', e?.message); }

  const cards = signals.slice(0, 25).map(renderScoop).join('') || renderEmpty_ravid();

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('ravid')}<span>Ravid Watch</span></h1>
    <span class="pill pill-scoop">SCOOPS</span>
  </div>
  <p class="shdr-sub">Real-time signals from Barak Ravid — Axios &amp; Channel 12 — who broke the Abraham Accords, the Trump-Iran backchannel, and most Trump-era Middle East stories.</p>
</header>

<section class="card ravid-bio" id="ravid-bio">
  <details>
    <summary class="ravid-bio-toggle"><span>Who is Barak Ravid?</span></summary>
    <div class="ravid-bio-body">
      <p>Veteran Israeli journalist — senior diplomatic correspondent for <strong>Axios</strong> and political analyst for <strong>Channel 12 News</strong> (Israel). Author of <em>"Trump's Peace: The Abraham Accords and the Reshaping of the Middle East."</em></p>
      <p>Has broken more Trump-era Middle East stories than any other Western reporter — from the original UAE-Israel normalization to the current Iran nuclear backchannel. When markets move on Iran / Hormuz / Gaza / Saudi headlines, it's usually because Ravid reported it first.</p>
    </div>
  </details>
</section>

<section class="ravid-list" aria-label="Ravid scoops">${cards}</section>
`;

  return new Response(renderShell({
    path: '/ravid',
    title: 'Ravid Watch · Barak Ravid Scoops · Tuck',
    description: 'Real-time geopolitical signals from Barak Ravid — the journalist who broke the Abraham Accords and the Trump-Iran backchannel.',
    bootstrap: { route: '/ravid', count: signals.length },
    body, pageCSS: RAVID_CSS, pageJS: RAVID_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=60' }});
}

function renderScoop(s) {
  const score = s.market_impact_score != null ? Math.round(s.market_impact_score * 100) : null;
  const sentiment = (s.sentiment || '').toLowerCase();
  const cls = sentiment === 'escalation' ? 'sig-esc' : (sentiment === 'de-escalation' ? 'sig-deesc' : 'sig-neutral');
  const ts = safeDate(s.published_at);
  const dateStr = ts ? ts.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : '';
  const isoStamp = ts ? ts.toISOString() : null;
  return `<button class="ravid-row card card-interactive ${cls}" data-scoop="${esc(JSON.stringify(s))}" aria-label="Ravid scoop ${esc(dateStr)}">
    <div class="ravid-top">
      <span class="ravid-byline">@BarakRavid</span>
      <span class="ravid-time"${isoStamp ? ` data-iso="${esc(isoStamp)}"` : ''}>${esc(dateStr)}</span>
    </div>
    <div class="ravid-text">${safeText(decodeSrc(s.headline || s.full_text || '').slice(0, 280))}</div>
    <div class="ravid-foot">
      ${score != null ? `<span class="pill pill-${cls === 'sig-esc' ? 'dn' : (cls === 'sig-deesc' ? 'up' : 'beta')}">${esc(sentiment.toUpperCase())} ${score}%</span>` : ''}
    </div>
  </button>`;
}

function renderEmpty_ravid() {
  return `<div class="empty">
    <div class="empty-icon">${icon('ravid')}</div>
    <div class="empty-title">No scoops loaded</div>
    <div class="empty-msg">Refreshing from source...</div>
  </div>`;
}

const RAVID_CSS = `
.ravid-bio { font-size: var(--tx-sm); }
.ravid-bio-toggle {
  cursor: pointer;
  font-weight: 700;
  display: flex; align-items: center; gap: var(--sp-2);
  list-style: none;
  color: var(--tuck);
}
.ravid-bio-toggle::-webkit-details-marker { display: none; }
.ravid-bio-toggle::before { content: '▸'; transition: transform var(--dur) var(--ease-out); display: inline-block; }
.ravid-bio[open] .ravid-bio-toggle::before,
details[open] > .ravid-bio-toggle::before { transform: rotate(90deg); }
.ravid-bio-body { margin-top: var(--sp-3); }
.ravid-bio-body p { color: var(--fg-dim); line-height: var(--lh-relaxed); margin: 0 0 var(--sp-2); }
.ravid-bio-body p:last-child { margin-bottom: 0; }
.ravid-bio-body strong { color: var(--fg); }
.ravid-bio-body em { color: var(--fg); font-style: italic; }

.ravid-list { display: flex; flex-direction: column; gap: var(--sp-2); margin-top: var(--sp-2); }
.ravid-row {
  padding: var(--sp-3) var(--sp-4);
  text-align: left;
  width: 100%;
  display: flex; flex-direction: column; gap: var(--sp-2);
}
.ravid-row.sig-esc { border-left: 3px solid var(--escalate); }
.ravid-row.sig-deesc { border-left: 3px solid var(--calm); }
.ravid-row.sig-neutral { border-left: 3px solid var(--neutral); }
.ravid-top {
  display: flex; align-items: center; justify-content: space-between; gap: var(--sp-2);
}
.ravid-byline {
  font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--info);
}
.ravid-time { font-size: var(--tx-xs); color: var(--fg-faint); }
.ravid-text { font-size: var(--tx-sm); color: var(--fg); line-height: var(--lh-relaxed); }
.ravid-foot { display: flex; gap: var(--sp-2); flex-wrap: wrap; }
`;

const RAVID_JS = `
function __decodeEnt(str){ if(!str) return ''; const t=document.createElement('textarea'); t.innerHTML=str; return t.value; }
window.openRavidSheet = function(s) {
  if (typeof s === 'string') { try { s = JSON.parse(s); } catch(e) { return; } }
  if (!s) return;
  const ts = __safeDate(s.published_at);
  const score = s.market_impact_score != null ? Math.round(s.market_impact_score * 100) : null;
  const html = \`
    <div style="margin-bottom:var(--sp-3);">
      <span class="pill" style="background:var(--info-soft);color:#93c5fd;font-size:11px;letter-spacing:0.05em;">@BarakRavid</span>
      \${ts ? \`<span style="margin-left:8px;font-size:var(--tx-xs);color:var(--fg-faint);">\${ts}</span>\` : ''}
    </div>
    <p style="color:var(--fg);line-height:var(--lh-relaxed);font-size:var(--tx-base);">\${__decodeEnt(s.full_text || s.headline || '')}</p>
    \${score != null ? \`<div style="margin-top:var(--sp-3);"><span class="pill">Escalation \${score}%</span> <span class="pill">\${(s.sentiment||'').toUpperCase()}</span></div>\` : ''}
    \${s.url ? \`<a href="\${s.url}" target="_blank" rel="noopener" class="btn" style="margin-top:var(--sp-4);width:100%;">Read on source →</a>\` : ''}
  \`;
  window.openSheet({ title: 'Ravid scoop', html });
};
(() => {
  if (document.__ravidWired) return;
  document.__ravidWired = true;
  document.addEventListener('click', (e) => {
    const row = e.target.closest('.ravid-row');
    if (!row) return;
    const raw = row.getAttribute('data-scoop');
    try { window.openRavidSheet(JSON.parse(raw)); } catch(_) {}
  });
})();
`;

// ── routes/congress.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /congress (Congress Watch)
// US Senator + Rep stock trades (House/Senate disclosures)
// ────────────────────────────────────────────────────────────────────

async function congressRoute({ env, url, spa = false }) {
  let trades = [];
  try {
    if (env.TRADEDESK_DB) {
      let q;
      try {
        q = await env.TRADEDESK_DB.prepare(
          "SELECT * FROM (" +
          "  SELECT representative AS member_name, 'House' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label, disclosure_date AS disc_date " +
          "  FROM qq_house WHERE ticker IS NOT NULL AND ticker != '' " +
          "  UNION ALL " +
          "  SELECT senator AS member_name, 'Senate' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label, disclosure_date AS disc_date " +
          "  FROM qq_senate WHERE ticker IS NOT NULL AND ticker != '' " +
          ") ORDER BY trade_date DESC LIMIT 30"
        ).all();
      } catch(sqlErr) {
        // disclosure_date column may not exist — fall back to the safe query
        q = await env.TRADEDESK_DB.prepare(
          "SELECT * FROM (" +
          "  SELECT representative AS member_name, 'House' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label, NULL AS disc_date " +
          "  FROM qq_house WHERE ticker IS NOT NULL AND ticker != '' " +
          "  UNION ALL " +
          "  SELECT senator AS member_name, 'Senate' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label, NULL AS disc_date " +
          "  FROM qq_senate WHERE ticker IS NOT NULL AND ticker != '' " +
          ") ORDER BY trade_date DESC LIMIT 30"
        ).all();
      }
      trades = (q.results || []).map(t => ({
        name: t.member_name, member_name: t.member_name, chamber: t.chamber,
        bio_guide_id: t.bio_guide_id, party: null, ticker: t.ticker,
        transaction: t.txn_type, transaction_type: t.txn_type, type: t.txn_type,
        date: t.trade_date, trade_date: t.trade_date, transaction_date: t.trade_date,
        disclosure_date: t.disc_date || null,
        amount: t.amount_label, range: t.amount_label
      }));
    }
  } catch(e) { console.error('congressRoute err:', e?.message); }

  const tickerFilter = url.searchParams.get('ticker');
  if (tickerFilter) {
    trades = trades.filter(t => (t.ticker || '').toUpperCase() === tickerFilter.toUpperCase());
  }

  const buyCount = trades.filter(t => /purchase|buy/i.test(t.transaction || '')).length;
  const sellCount = trades.filter(t => /sale|sell/i.test(t.transaction || '')).length;

  const rows = trades.slice(0, 30).map(renderTrade).join('') || renderEmpty_congress();

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('congress')}<span>Congress Watch</span></h1>
    <span class="pill pill-public">PUBLIC</span>
  </div>
  <p class="shdr-sub">Stock trades reported by US senators and representatives. Public data, scraped from official disclosures.</p>
</header>

<div class="chip-row" role="tablist" aria-label="Filter trades">
  <button class="chip chip-active" data-filter="all" role="tab">All <span class="chip-count">${trades.length}</span></button>
  <button class="chip" data-filter="buy" role="tab">Buys <span class="chip-count">${buyCount}</span></button>
  <button class="chip" data-filter="sell" role="tab">Sells <span class="chip-count">${sellCount}</span></button>
  <button class="chip" data-filter="senate" role="tab">Senate</button>
  <button class="chip" data-filter="house" role="tab">House</button>
</div>

<section class="cong-list" id="cong-list" aria-label="Congressional trades">${rows}</section>

${tickerFilter ? `<div class="card scn-filter-info">
  <div>Showing trades of <strong>${esc(tickerFilter)}</strong> only</div>
  <a href="/congress" data-route class="btn btn-sm">Clear filter</a>
</div>` : ''}
`;

  return new Response(renderShell({
    path: '/congress',
    title: 'Congress Watch · Stock Trades by US Lawmakers · Tuck',
    description: 'Public disclosure of stock trades by US senators and representatives. Free transparency for everyone.',
    bootstrap: { route: '/congress', count: trades.length },
    body, pageCSS: CONG_CSS, pageJS: CONG_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=300' }});
}

function renderTrade(t) {
  const isBuy = /purchase|buy/i.test(t.transaction || '');
  const isSell = /sale|sell/i.test(t.transaction || '');
  const cls = isBuy ? 'tx-buy' : (isSell ? 'tx-sell' : 'tx-other');
  const initials = (t.name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase();
  const partyCls = (t.party || '').toLowerCase().startsWith('r') ? 'av-r' : ((t.party || '').toLowerCase().startsWith('d') ? 'av-d' : 'av-i');
  const chamberCls = (t.chamber || '').toLowerCase() === 'senate' ? 'ch-senate' : 'ch-house';
  return `<button class="cong-row card card-interactive ${cls}" data-chamber="${esc((t.chamber||'').toLowerCase())}" data-action="${isBuy ? 'buy' : (isSell ? 'sell' : 'other')}" data-trade="${esc(JSON.stringify(t))}" aria-label="${esc(t.name||'')} ${isBuy?'bought':'sold'} ${esc(t.ticker||'')}">
    <span class="cong-avatar ${partyCls}">${esc(initials || '?')}</span>
    <div class="cong-body">
      <div class="cong-name">${esc(t.name || '')}</div>
      <div class="cong-meta">
        <span class="cong-chamber ${chamberCls}">${esc(t.chamber || '')}</span>
        ${t.party ? `<span class="cong-party">${esc(t.party)}</span>` : ''}
        ${t.trade_date ? `<span class="cong-date">Traded ${esc(t.trade_date)}</span>` : ''}
      </div>
    </div>
    <div class="cong-right">
      <span class="cong-tk-wrap">${t.ticker ? (()=>{const _t=(t.ticker||'').toUpperCase();
  if(DARK_INITIALS[_t]) return `<span class="cong-logo-ring" style="background:#fff"><span class="cong-logo-fb" style="display:flex;color:${DARK_INITIALS[_t]};font-weight:900;">${esc(_t.slice(0,2))}</span></span>`;
  if(LOGO_BG[_t]) return `<span class="cong-logo-ring" style="background:${LOGO_BG[_t]}"><img class="cong-logo" src="https://financialmodelingprep.com/image-stock/${esc(_t)}.png" alt="" width="26" height="26" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"/><span class="cong-logo-fb" style="display:none;color:#fff;">${esc(_t.slice(0,2))}</span></span>`;
  if(WEAK_LOGOS[_t]) return `<span class="cong-logo-ring" style="background:${WEAK_LOGOS[_t]}"><span class="cong-logo-fb" style="display:flex;color:#fff;">${esc(_t.slice(0,2))}</span></span>`;
  return `<span class="cong-logo-ring"><img class="cong-logo" src="https://financialmodelingprep.com/image-stock/${esc(_t)}.png" alt="" width="26" height="26" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('fb');this.nextElementSibling.style.display='flex';"/><span class="cong-logo-fb" style="display:none;">${esc(_t.slice(0,2))}</span></span>`;
})() : ''}<span class="cong-ticker">${esc(t.ticker || '—')}</span></span>
      <span class="cong-action cong-action-${isBuy?'buy':(isSell?'sell':'other')}">${isBuy?'BUY':(isSell?'SELL':esc((t.transaction||'').toUpperCase().slice(0,8)))}</span>
      ${t.amount ? `<span class="cong-amt">${esc(t.amount)}</span>` : ''}
    </div>
  </button>`;
}

function renderEmpty_congress() {
  return `<div class="empty">
    <div class="empty-icon">${icon('congress')}</div>
    <div class="empty-title">No trades loaded</div>
    <div class="empty-msg">Refreshing from disclosures...</div>
  </div>`;
}

const CONG_CSS = `
.cong-list { display: flex; flex-direction: column; gap: var(--sp-2); }
.cong-tk-wrap{display:inline-flex;align-items:center;gap:6px;justify-content:flex-end}
.cong-logo-ring{width:28px;height:28px;border-radius:50%;background:#f4f6f8;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 1px 2px rgba(0,0,0,.3)}
.cong-logo-ring.fb{background:#1f2937}
.cong-logo{border-radius:50%;object-fit:contain}
.cong-logo-fb{width:100%;height:100%;border-radius:50%;color:#cbd5e1;font-size:10px;font-weight:800;align-items:center;justify-content:center}
.cong-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--sp-3);
  align-items: center;
  padding: var(--sp-3) var(--sp-4);
  text-align: left;
  width: 100%;
}
.cong-avatar {
  width: 40px; height: 40px;
  border-radius: var(--r-full);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: var(--tx-xs); font-weight: 800; letter-spacing: 0.02em;
  color: #fff;
  flex-shrink: 0;
}
.av-r { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); }
.av-d { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); }
.av-i { background: linear-gradient(135deg, #64748b 0%, #334155 100%); }
.cong-body { min-width: 0; }
.cong-name {
  font-size: var(--tx-sm); font-weight: 700;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.cong-meta {
  display: flex; gap: var(--sp-2); flex-wrap: wrap;
  margin-top: 2px;
  font-size: 10px; color: var(--fg-faint);
  letter-spacing: 0.04em;
}
.cong-chamber { font-weight: 700; text-transform: uppercase; padding: 1px 5px; border-radius: var(--r-xs); }
.ch-senate { background: rgba(59,130,246,0.18); color: #93c5fd; }
.ch-house { background: rgba(168,85,247,0.18); color: #d8b4fe; }
.cong-party { text-transform: uppercase; }
.cong-right {
  display: flex; flex-direction: column; align-items: flex-end; gap: 2px;
  min-width: 70px;
}
.cong-ticker { font-size: var(--tx-sm); font-weight: 800; letter-spacing: 0.02em; }
.cong-action {
  font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
  padding: 2px 6px; border-radius: var(--r-xs);
}
.cong-action-buy { background: var(--calm-soft); color: var(--calm); }
.cong-action-sell { background: var(--escalate-soft); color: var(--escalate); }
.cong-action-other { background: var(--bg-elev2); color: var(--fg-faint); }
.cong-amt { font-size: 10px; color: var(--fg-faint); font-variant-numeric: tabular-nums; }
`;

const CONG_JS = `
window.openTradeSheet = function(t) {
  if (typeof t === 'string') { try { t = JSON.parse(t); } catch(e) { return; } }
  if (!t) return;
  const isBuy = /purchase|buy/i.test(t.transaction || '');
  const isSell = /sale|sell/i.test(t.transaction || '');
  const tk = (t.ticker || '').toUpperCase();
  const logo = tk ? window.tuckLogo(tk, 40) : '';
  const html = \`
    <div style="margin-bottom:var(--sp-4);">
      <h3 style="font-size:var(--tx-md);margin-bottom:var(--sp-1);">\${(t.name || '')}</h3>
      <div style="color:var(--fg-faint);font-size:var(--tx-sm);">\${(t.chamber || '')} · \${(t.party || 'Independent')}</div>
    </div>
    \${tk ? \`<div id="tk-head-\${tk}" style="display:flex;align-items:center;gap:11px;background:rgba(255,255,255,0.03);border:1px solid var(--border);padding:11px 13px;border-radius:11px;margin-bottom:var(--sp-3);">
      \${logo}
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:15px;line-height:1.1;">\${tk}</div>
        <div id="tk-name-\${tk}" style="font-size:12px;color:var(--fg-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Loading…</div>
      </div>
      <div id="tk-px-\${tk}" style="text-align:right;font-size:12px;color:var(--fg-faint);">·</div>
    </div>\` : ''}
    <div class="score-comps" style="grid-template-columns:1fr 1fr;">
      <div class="score-comp"><span class="score-comp-k">Ticker</span><span class="score-comp-v">\${tk || '—'}</span></div>
      <div class="score-comp"><span class="score-comp-k">Action</span><span class="score-comp-v" style="color:\${isBuy?'var(--calm)':isSell?'var(--escalate)':'var(--fg-faint)'}">\${(t.transaction || '—')}</span></div>
      \${t.amount ? '<div class="score-comp"><span class="score-comp-k">Amount</span><span class="score-comp-v" style="font-size:var(--tx-sm)">' + (t.amount) + '</span></div>' : ''}
      \${t.transaction_date ? '<div class="score-comp"><span class="score-comp-k">Trade Date</span><span class="score-comp-v" style="font-size:var(--tx-sm)">' + (t.transaction_date) + '</span></div>' : ''}
      \${t.disclosure_date ? '<div class="score-comp"><span class="score-comp-k">Disclosed</span><span class="score-comp-v" style="font-size:var(--tx-sm)">' + (t.disclosure_date) + '</span></div>' : '<div class="score-comp"><span class="score-comp-k">Disclosed</span><span class="score-comp-v" style="font-size:var(--tx-sm);color:var(--fg-faint)">Per STOCK Act filing</span></div>'}
    </div>
    \${tk ? \`<button id="tk-cta-\${tk}" class="btn btn-primary" style="margin-top:var(--sp-4);width:100%;" onclick="window.tuckViewTicker('\${tk}')">View \${tk} →</button>\` : ''}
    <p style="font-size:var(--tx-xs);color:var(--fg-faint);margin-top:var(--sp-4);">Source: STOCK Act public disclosures · House/Senate filings</p>
  \`;
  window.openSheet({ title: 'Trade detail', html });
  // Enrich live: company name + price for ANY ticker (incl. ones not in our watchlist)
  if (tk) {
    fetch('/api/ticker/' + encodeURIComponent(tk)).then(r => r.json()).then(d => {
      const nm = document.getElementById('tk-name-' + tk);
      const px = document.getElementById('tk-px-' + tk);
      const cta = document.getElementById('tk-cta-' + tk);
      if (nm) nm.textContent = (d && d.name) ? d.name : tk;
      if (px && d && d.ok && d.price != null) {
        const up = (d.changePct || 0) >= 0;
        px.innerHTML = '<div style="font-weight:700;color:var(--fg);">$' + d.price.toLocaleString() + '</div><div style="color:' + (up?'var(--calm)':'var(--escalate)') + ';font-size:11px;">' + (up?'+':'') + (d.changePct||0).toFixed(2) + '%</div>';
      } else if (px) { px.textContent = ''; }
      if (cta) cta.textContent = (d && d.inWatchlist) ? ('View ' + tk + ' →') : ('Quick look: ' + tk + ' →');
    }).catch(()=>{ const nm=document.getElementById('tk-name-'+tk); if(nm) nm.textContent=tk; });
  }
};

// TUCK v2.3 — smart ticker view: rich page if in watchlist, else on-the-fly mini-detail modal
window.tuckViewTicker = function(tk) {
  tk = (tk || '').toUpperCase();
  if (!tk) return;
  fetch('/api/ticker/' + encodeURIComponent(tk)).then(r => r.json()).then(d => {
    if (d && d.inWatchlist) { location.href = '/watchlist/' + tk; return; }
    // Build on-the-fly detail modal for non-watchlist tickers
    const up = (d && d.changePct || 0) >= 0;
    const logo = window.tuckLogo(tk, 54);
    const ok = d && d.ok && d.price != null;
    const html = \`
      <div style="display:flex;align-items:center;gap:13px;margin-bottom:var(--sp-4);">
        \${logo}
        <div style="flex:1;min-width:0;">
          <div style="font-weight:800;font-size:19px;line-height:1.05;">\${tk}</div>
          <div style="font-size:13px;color:var(--fg-dim);">\${(d && d.name) || tk}\${d && d.exchange ? ' · ' + d.exchange : ''}</div>
        </div>
      </div>
      \${ok ? \`<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:var(--sp-4);">
        <span style="font-size:26px;font-weight:800;">$\${d.price.toLocaleString()}</span>
        <span style="font-size:15px;font-weight:700;color:\${up?'var(--calm)':'var(--escalate)'};">\${up?'▲':'▼'} \${(d.change>=0?'+':'')}\${(d.change||0).toFixed(2)} (\${(d.changePct>=0?'+':'')}\${(d.changePct||0).toFixed(2)}%)</span>
      </div>\` : '<div style="color:var(--fg-faint);font-size:13px;margin-bottom:var(--sp-4);">Live quote unavailable for this symbol right now.</div>'}
      <p style="font-size:13px;color:var(--fg-dim);line-height:1.5;margin-bottom:var(--sp-4);">\${tk} isn't one of Tuck's tracked tickers, so we pulled this live from public market data. Tuck tracks a focused set of geopolitically-sensitive stocks — this snapshot is here so a congressional trade never dead-ends.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="btn btn-secondary" href="/congress?ticker=\${tk}" data-route>All \${tk} trades →</a>
        <a class="btn btn-secondary" target="_blank" rel="noopener" href="https://finance.yahoo.com/quote/\${tk}">Full data ↗</a>
      </div>
    \`;
    window.openSheet({ title: tk + ' · Quick look', html });
  }).catch(()=>{ location.href = '/congress?ticker=' + tk; });
};

(() => {
  const list = document.getElementById('cong-list');
  if (!list) return;
  // Delegated click → open trade sheet from data-trade attr
  list.addEventListener('click', (e) => {
    const row = e.target.closest('.cong-row');
    if (!row) return;
    const raw = row.getAttribute('data-trade');
    try { window.openTradeSheet(JSON.parse(raw)); } catch(_) {}
  });
  const chips = document.querySelectorAll('.chip-row .chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => { x.classList.remove('chip-active'); x.setAttribute('aria-selected', 'false'); });
    c.classList.add('chip-active'); c.setAttribute('aria-selected', 'true');
    const f = c.getAttribute('data-filter');
    list.querySelectorAll('.cong-row').forEach(r => {
      if (f === 'all') { r.style.display = ''; return; }
      if (f === 'buy' || f === 'sell') { r.style.display = (r.getAttribute('data-action') === f) ? '' : 'none'; return; }
      if (f === 'senate' || f === 'house') { r.style.display = (r.getAttribute('data-chamber') === f) ? '' : 'none'; return; }
    });
  }));
})();
`;

// ── routes/scores.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /scores  (Tuck's Score)
// THIS IS THE ROUTE THAT FIXES THE "LOADING FOREVER" BUG.
// All 12 scores hydrated from KV cache → instant render, no spinner.
// ────────────────────────────────────────────────────────────────────

async function scoresRoute({ env, url, spa = false }) {
  const scores = await env.TUCK_KV.get('cache:tucks-score:current', 'json');
  const list = (scores?.scores || []).sort((a, b) => (b.total_score||0) - (a.total_score||0));
  const cachedAt = scores?._cached_at || null;
  const scoreDate = list[0]?.score_date || null;

  const cards = list.map(s => renderRow(s)).join('') || renderEmpty_scores();

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('scores')}<span>Tuck's Score</span></h1>
    <span class="pill pill-daily">DAILY</span>
  </div>
  <p class="shdr-sub">A 0–100 composite of momentum, news, Ravid signals, congressional trades, and AI scenarios. Refreshed weekday mornings.</p>
  ${scoreDate ? `<div class="scores-meta">
    <span class="fresh" data-iso="${esc(cachedAt || '')}">Computed ${esc(scoreDate)}${cachedAt ? ' · ' + timeAgoServer(cachedAt) : ''}</span>
  </div>` : ''}
</header>

<section class="scores-list" aria-label="Score leaderboard">${cards}</section>

<section class="card scores-legend">
  <h2 class="card-title">${icon('learn')}<span>How to read this</span></h2>
  <div class="legend-grid">
    <div class="legend-row"><span class="score-badge score-hot">70+</span><span>Hot — high conviction, multiple drivers aligned</span></div>
    <div class="legend-row"><span class="score-badge score-warm">55-69</span><span>Constructive — favorable setup forming</span></div>
    <div class="legend-row"><span class="score-badge score-neutral">45-54</span><span>Neutral — wait and watch</span></div>
    <div class="legend-row"><span class="score-badge score-cool">30-44</span><span>Cool — caution, headwinds present</span></div>
    <div class="legend-row"><span class="score-badge score-cold">0-29</span><span>Cold — significant negative signals</span></div>
  </div>
  <p class="scores-disclaim">Tuck's Score is educational — not investment advice. Always do your own research.</p>
</section>
`;

  return new Response(renderShell({
    path: '/scores',
    title: "Tuck's Score · Daily 0-100 Composite",
    description: 'Daily 0-100 scores for 12 stocks — momentum, news, Ravid scoops, congressional trades, and AI scenarios. Free and refreshed weekdays.',
    bootstrap: { route: "/scores", scores_at: cachedAt, count: list.length, full_scores: list },
    body, pageCSS: SCORES_CSS, pageJS: SCORES_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=120' }});
}

function renderRow(s) {
  const cls = scoreCls(s.total_score);
  const delta = s.delta || 0;
  const deltaCls = delta > 0 ? 'up' : (delta < 0 ? 'dn' : 'flat');
  const deltaTxt = delta > 0 ? '+' + delta : (delta < 0 ? String(delta) : 'no chg');
  const bd = s.breakdown || {};
  const parts = [
    { k: 'mom', v: s.momentum_score, label: 'Mom' },
    { k: 'news', v: s.news_score, label: 'News' },
    { k: 'rvd', v: s.ravid_score, label: 'Rvd' },
    { k: 'cng', v: s.congress_score, label: 'Cng' },
    { k: 'scn', v: s.scenario_score, label: 'Scn' },
  ];
  const bars = parts.map(p => {
    const pct = Math.max(0, Math.min(100, Number(p.v ?? 50)));
    return `<div class="sb-col" title="${p.label}: ${p.v ?? 'n/a'}"><div class="sb-bar"><div class="sb-fill" style="height:${pct}%"></div></div><span class="sb-lbl">${p.label}</span></div>`;
  }).join('');

  return `<button class="score-row card card-interactive" id="${esc(s.ticker)}" data-ticker="${esc(s.ticker)}" onclick="openScoreSheet('${esc(s.ticker)}')" aria-label="${esc(s.ticker)} score ${s.total_score}">
    <div class="sr-main">
      <span class="score-badge ${cls}">${s.total_score}</span>
      <div class="sr-tick">
        <div class="sr-ticker">${esc(s.ticker)} ${esc(s.emoji || '')}</div>
        <div class="sr-verdict">${esc(s.verdict || '')}</div>
      </div>
    </div>
    <div class="sr-bars" aria-hidden="true">${bars}</div>
    <div class="sr-delta sr-delta-${deltaCls}">${deltaTxt}</div>
  </button>`;
}

function renderEmpty_scores() {
  return `<div class="empty">
    <div class="empty-icon">${icon('scores')}</div>
    <div class="empty-title">No scores yet</div>
    <div class="empty-msg">Scores refresh weekday mornings @ 6 AM ET. Check back soon.</div>
  </div>`;
}

function scoreCls(s) {
  if (s == null) return 'score-neutral';
  s = Number(s);
  if (s >= 70) return 'score-hot';
  if (s >= 55) return 'score-warm';
  if (s >= 45) return 'score-neutral';
  if (s >= 30) return 'score-cool';
  return 'score-cold';
}


const SCORES_CSS = `
.scores-meta { margin-top: var(--sp-2); }
.scores-list { display: flex; flex-direction: column; gap: var(--sp-2); }
.score-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--sp-3);
  align-items: center;
  padding: var(--sp-3) var(--sp-4);
  text-align: left;
  width: 100%;
}
.sr-main { display: flex; align-items: center; gap: var(--sp-3); }
.sr-tick { display: flex; flex-direction: column; gap: 2px; }
.sr-ticker { font-size: var(--tx-base); font-weight: 800; letter-spacing: 0.02em; }
.sr-verdict { font-size: var(--tx-xs); color: var(--fg-dim); }
.sr-bars { display: flex; gap: 3px; height: 36px; align-items: flex-end; }
.sb-col { display: flex; flex-direction: column; align-items: center; gap: 2px; width: 14px; }
.sb-bar { width: 6px; height: 28px; background: var(--bg-elev2); border-radius: var(--r-xs); overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
.sb-fill { width: 100%; background: linear-gradient(180deg, var(--tuck) 0%, var(--tuck-bold) 100%); border-radius: var(--r-xs) var(--r-xs) 0 0; }
.sb-lbl { font-size: 8px; color: var(--fg-faint); letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; }
@media (max-width: 380px) { .sr-bars { display: none; } }
.sr-delta {
  font-size: var(--tx-xs); font-weight: 800;
  padding: 4px 8px;
  border-radius: var(--r-full);
  background: var(--bg-elev2);
  color: var(--fg-dim);
  font-variant-numeric: tabular-nums;
  min-width: 50px;
  text-align: center;
}
.sr-delta-up { background: var(--calm-soft); color: var(--calm); }
.sr-delta-dn { background: var(--escalate-soft); color: var(--escalate); }
.sr-delta-flat { color: var(--fg-faint); }

.scores-legend { margin-top: var(--sp-6); }
.legend-grid { display: flex; flex-direction: column; gap: var(--sp-2); margin-top: var(--sp-2); }
.legend-row { display: flex; align-items: center; gap: var(--sp-3); font-size: var(--tx-sm); color: var(--fg-dim); }
.scores-disclaim { font-size: var(--tx-xs); color: var(--fg-faint); margin-top: var(--sp-4); margin-bottom: 0; text-align: center; }

/* Sheet body content */
.score-sheet h3 { font-size: var(--tx-md); font-weight: 800; margin: var(--sp-4) 0 var(--sp-2); }
.score-sheet h3:first-of-type { margin-top: 0; }
.score-sheet p { color: var(--fg-dim); line-height: var(--lh-relaxed); margin: 0 0 var(--sp-3); font-size: var(--tx-sm); }
.score-big-row { display: flex; align-items: center; gap: var(--sp-3); padding: var(--sp-3); background: var(--bg-elev2); border-radius: var(--r-md); margin-bottom: var(--sp-4); }
.score-big-row .score-badge { font-size: var(--tx-lg); min-width: 56px; height: 40px; }
.score-big-vd { display: flex; flex-direction: column; gap: 2px; }
.score-big-verdict { font-size: var(--tx-base); font-weight: 700; }
.score-big-meta { font-size: var(--tx-xs); color: var(--fg-faint); }
.score-comps { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-2); margin-bottom: var(--sp-4); }
.score-comp {
  background: var(--bg-elev2); border-radius: var(--r-md); padding: var(--sp-3);
  display: flex; flex-direction: column; gap: 6px;
}
.score-comp-hdr { display: flex; align-items: center; justify-content: space-between; }
.score-comp-k { font-size: 10px; color: var(--fg-faint); letter-spacing: 0.06em; text-transform: uppercase; font-weight: 700; }
.score-comp-v { font-size: var(--tx-md); font-weight: 800; font-variant-numeric: tabular-nums; }
.score-comp-bar { width: 100%; height: 4px; background: var(--bg-elev); border-radius: 2px; overflow: hidden; }
.score-comp-fill { height: 100%; background: var(--tuck); border-radius: 2px; }
.score-comp-detail { font-size: var(--tx-xs); color: var(--fg-dim); line-height: var(--lh-snug); }
`;

const SCORES_JS = `
window.openScoreSheet = function(ticker) {
  const scores = window.TUCK_BOOT && Array.isArray(window.TUCK_BOOT.full_scores)
    ? window.TUCK_BOOT.full_scores
    : null;
  if (!scores) {
    // Fall back to API if bootstrap doesn't have full scores (shouldn't happen post-hydrate)
    fetch('/api/tucks-score').then(r => r.json()).then(d => {
      const s = (d.scores || []).find(x => x.ticker === ticker);
      if (s) renderSheet(s);
    });
    return;
  }
  const s = scores.find(x => x.ticker === ticker);
  if (s) renderSheet(s);
};

function renderSheet(s) {
  const cls = scoreClassFor(s.total_score);
  const bd = (typeof s.breakdown === 'object' && s.breakdown) || (typeof s.breakdown_json === 'string' ? JSON.parse(s.breakdown_json) : {});
  const comps = [
    { k: 'Momentum', v: s.momentum_score, detail: bd.momentum ? (bd.momentum.change_5d != null ? (bd.momentum.change_5d > 0 ? '+' : '') + Number(bd.momentum.change_5d).toFixed(1) + '% last 5 days' : '') : '' },
    { k: 'News', v: s.news_score, detail: bd.news?.mentions ? bd.news.mentions + ' mentions in the last 24h' : '' },
    { k: 'Ravid', v: s.ravid_score, detail: bd.ravid?.signals ? bd.ravid.signals + ' Ravid signals tagged this ticker' : '' },
    { k: 'Congress', v: s.congress_score, detail: bd.congress?.trades ? bd.congress.trades + ' recent congressional trades' : '' },
    { k: 'Scenarios', v: s.scenario_score, detail: bd.scenarios?.bias ? 'Bias: ' + bd.scenarios.bias : '' },
  ];
  const compHTML = comps.map(c => {
    const pct = Math.max(0, Math.min(100, Number(c.v ?? 50)));
    return \`<div class="score-comp">
      <div class="score-comp-hdr"><span class="score-comp-k">\${c.k}</span><span class="score-comp-v">\${c.v ?? '—'}</span></div>
      <div class="score-comp-bar"><div class="score-comp-fill" style="width:\${pct}%"></div></div>
      \${c.detail ? \`<div class="score-comp-detail">\${c.detail}</div>\` : ''}
    </div>\`;
  }).join('');

  const html = \`<div class="score-sheet">
    <div class="score-big-row">
      <span class="score-badge \${cls}">\${s.total_score}</span>
      <div class="score-big-vd">
        <span class="score-big-verdict">\${s.verdict || ''}</span>
        <span class="score-big-meta">\${s.score_date || ''} · \${s.delta > 0 ? '+' + s.delta : (s.delta < 0 ? s.delta : 'no change')} vs yesterday</span>
      </div>
    </div>
    <h3>Component breakdown</h3>
    <div class="score-comps">\${compHTML}</div>
    <p style="font-size:var(--tx-xs);color:var(--fg-faint);">Tuck's Score is educational only — not investment advice.</p>
  </div>\`;

  window.openSheet({ title: s.ticker + ' · ' + (s.verdict || ''), html });
}

function scoreClassFor(s) {
  if (s == null) return 'score-neutral';
  s = Number(s);
  if (s >= 70) return 'score-hot';
  if (s >= 55) return 'score-warm';
  if (s >= 45) return 'score-neutral';
  if (s >= 30) return 'score-cool';
  return 'score-cold';
}

// Hash-scroll on load
(() => {
  const h = location.hash?.replace(/^#/, '');
  if (h) {
    setTimeout(() => {
      document.getElementById(h)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
})();
`;

// ── routes/heatmap.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /heatmap  (Sector Heat Map)
// Pre-rendered from KV cache → instant render, no spinner.
// ────────────────────────────────────────────────────────────────────

async function heatmapRoute({ env, url, spa = false }) {
  const data = await env.TUCK_KV.get('cache:sector-heat:current', 'json');
  const sectors = data?.sectors || {};
  const cachedAt = data?._cached_at || null;

  const blocks = Object.entries(sectors).map(([name, info]) => renderSector(name, info)).join('');

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('heatmap')}<span>Sector Heat Map</span></h1>
    <span class="pill pill-live">LIVE</span>
  </div>
  <p class="shdr-sub">5-day price momentum by sector. Green = up, red = down. Tap any ticker for the full breakdown.</p>
  ${cachedAt ? `<div class="scores-meta"><span class="fresh" data-iso="${esc(cachedAt)}">Updated ${timeAgoServer(cachedAt)}</span></div>` : ''}
</header>

<section class="heat-grid" aria-label="Sector heat map">
  ${blocks || renderEmpty_heatmap()}
</section>

<section class="card">
  <h2 class="card-title">${icon('about')}<span>What this shows</span></h2>
  <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);margin:0;font-size:var(--tx-sm);">
    Cells colored by 5-day price change. Bright green/red = big moves. Dim = quiet. Tap any cell to drill into the ticker's full picture. Sectors are grouped by what actually drives them — geopolitics, AI buildout, oil, defense spending.
  </p>
</section>
`;

  return new Response(renderShell({
    path: '/heatmap',
    title: 'Sector Heat Map · Live Momentum · Tuck',
    description: 'Live sector heat map showing 5-day momentum for 12 OSINT-watchlist tickers grouped by sector.',
    bootstrap: { route: '/heatmap', sector_at: cachedAt },
    body, pageCSS: HEAT_CSS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=120' }});
}

function renderSector(name, info) {
  const sectorLabels = {
    semiconductor: 'Semiconductors',
    defense: 'Defense / Minerals',
    energy: 'Energy / Oil',
    infrastructure: 'Infrastructure / Edge',
    broad_tech: 'Broad Tech',
  };
  const tickers = (info.tickers || []).sort((a, b) => (b.momentum_5d||0) - (a.momentum_5d||0));
  const avg = info.avg_momentum_5d || 0;
  const avgCls = momentumClass(avg);
  return `<div class="heat-sector">
    <div class="heat-sector-hdr">
      <span class="heat-sector-name">${esc(sectorLabels[name] || name)}</span>
      <span class="heat-sector-avg ${avgCls}">${avg >= 0 ? '+' : ''}${avg.toFixed(1)}%</span>
    </div>
    <div class="heat-cells">
      ${tickers.map(renderCell).join('')}
    </div>
  </div>`;
}

function renderCell(t) {
  const m = t.momentum_5d ?? 0;
  const cls = momentumClass(m);
  const chgPct = t.change_pct ?? 0;
  return `<a class="heat-cell ${cls}" href="/watchlist/${esc(t.ticker)}" data-route aria-label="${esc(t.ticker)} ${m >= 0 ? '+' : ''}${m.toFixed(1)}%">
    <span class="heat-cell-ticker">${esc(t.ticker)}</span>
    <span class="heat-cell-mom">${m >= 0 ? '+' : ''}${m.toFixed(1)}%</span>
    <span class="heat-cell-price">$${Number(t.price||0).toFixed(0)}</span>
  </a>`;
}

function momentumClass(m) {
  if (m >= 10) return 'heat-hot';
  if (m >= 4) return 'heat-warm';
  if (m >= 1) return 'heat-mild-up';
  if (m > -1) return 'heat-flat';
  if (m > -4) return 'heat-mild-dn';
  if (m > -10) return 'heat-cool';
  return 'heat-cold';
}

function renderEmpty_heatmap() {
  return `<div class="empty">
    <div class="empty-icon">${icon('heatmap')}</div>
    <div class="empty-title">Heat map warming up</div>
    <div class="empty-msg">Refreshing from cache. Try again in 60 seconds.</div>
  </div>`;
}



const HEAT_CSS = `
.heat-grid { display: flex; flex-direction: column; gap: var(--sp-4); }
.heat-sector { background: var(--bg-elev); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--sp-3); }
.heat-sector-hdr {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--sp-3);
}
.heat-sector-name {
  font-size: var(--tx-xs); font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--fg-dim);
}
.heat-sector-avg {
  font-size: var(--tx-sm); font-weight: 800;
  padding: 4px 8px; border-radius: var(--r-sm);
  font-variant-numeric: tabular-nums;
}
.heat-cells {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: var(--sp-2);
}
.heat-cell {
  aspect-ratio: 1.1 / 1;
  min-height: 76px;
  border-radius: var(--r-md);
  border: 1px solid var(--border);
  padding: var(--sp-2);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px;
  text-decoration: none; color: var(--fg);
  transition: transform var(--dur-fast);
}
.heat-cell:hover { text-decoration: none; transform: scale(1.04); }
.heat-cell-ticker { font-size: var(--tx-xs); font-weight: 800; letter-spacing: 0.04em; }
.heat-cell-mom { font-size: var(--tx-base); font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1; }
.heat-cell-price { font-size: 10px; color: rgba(255,255,255,0.6); font-variant-numeric: tabular-nums; }

/* Heat intensity colors */
.heat-hot     { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: #fff; border-color: #22c55e; }
.heat-warm    { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: #fff; border-color: #4ade80; }
.heat-mild-up { background: linear-gradient(135deg, #15803d 0%, #14532d 100%); color: #bbf7d0; }
.heat-flat    { background: var(--bg-elev2); color: var(--fg-dim); }
.heat-mild-dn { background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%); color: #fecaca; }
.heat-cool    { background: linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%); color: #fff; border-color: #ef4444; }
.heat-cold    { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: #fff; border-color: #f87171; }

.heat-cell.heat-hot .heat-cell-price,
.heat-cell.heat-warm .heat-cell-price,
.heat-cell.heat-cool .heat-cell-price,
.heat-cell.heat-cold .heat-cell-price { color: rgba(255,255,255,0.8); }

.heat-sector-avg.heat-hot,
.heat-sector-avg.heat-warm,
.heat-sector-avg.heat-mild-up { background: var(--calm-soft); color: var(--calm); }
.heat-sector-avg.heat-flat { background: var(--bg-elev2); color: var(--fg-faint); }
.heat-sector-avg.heat-mild-dn,
.heat-sector-avg.heat-cool,
.heat-sector-avg.heat-cold { background: var(--escalate-soft); color: var(--escalate); }
`;

// ── routes/scenarios.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /scenarios  (AI Scenario Engine)
// ────────────────────────────────────────────────────────────────────

async function scenariosRoute({ env, url, spa = false }) {
  let scenarios = [];
  try {
    // External worker — keep HTTP fetch but use full absolute URL
    const r = await fetch('https://scenario-engine.thom-rvr.workers.dev/scenarios', { cf: { cacheTtl: 300 }});
    if (r.ok) {
      const d = await r.json();
      scenarios = d.scenarios || d || [];
    }
  } catch(e) { console.error('scenariosRoute err:', e?.message); }

  const cards = scenarios.map(renderScenario).join('') || renderEmpty_scenarios();

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('scenarios')}<span>AI Scenarios</span></h1>
    <span class="pill pill-beta">AI</span>
  </div>
  <p class="shdr-sub">Probability-weighted thesis cards generated daily from news, congressional trades, and macro indicators.</p>
</header>

<section class="scn-list" aria-label="Scenarios">${cards}</section>

<section class="card">
  <h2 class="card-title">${icon('warning')}<span>Caveat</span></h2>
  <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);margin:0;font-size:var(--tx-sm);">
    These are <strong>hypothetical scenarios</strong>, not predictions. They synthesize public news to articulate possible market paths. They should never be acted on without your own due diligence. Markets do whatever they want.
  </p>
</section>
`;

  return new Response(renderShell({
    path: '/scenarios',
    title: 'AI Scenario Engine · Tuck',
    description: 'Daily AI-generated probability-weighted market scenarios for OSINT-watchlist tickers.',
    bootstrap: { route: '/scenarios', count: scenarios.length },
    body, pageCSS: SCEN_CSS, pageJS: SCEN_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=300' }});
}

function renderScenario(s) {
  const tickers = (s.affected_tickers || '').split(/[\s,]+/).filter(Boolean);
  const confPct = __confPct(s.confidence);
  const confLbl = __confLabel(s.confidence);
  const direction = (s.market_direction || '').toLowerCase();
  const dirCls = direction.includes('bull') ? 'dir-bull' : (direction.includes('bear') ? 'dir-bear' : 'dir-neutral');
  const _scnB64 = btoa(unescape(encodeURIComponent(JSON.stringify(s))));
  return `<button class="scn-card card card-interactive" data-scn="${_scnB64}" aria-label="${esc(s.title||'')}">
    <div class="scn-top">
      <span class="scn-direction ${dirCls}">${esc(direction || 'mixed')}</span>
      <span class="scn-conf">${confPct!=null?confLbl+' \u00b7 '+confPct+'%':'—'} confidence</span>
    </div>
    <h3 class="scn-title">${esc(s.title || '')}</h3>
    <p class="scn-thesis">${esc((s.thesis || '').slice(0, 220))}</p>
    ${tickers.length ? `<div class="scn-tickers">
      ${tickers.slice(0, 6).map(t => `<span class="sig-ticker-pill">${esc(t)}</span>`).join('')}
    </div>` : ''}
  </button>`;
}

function renderEmpty_scenarios() {
  return `<div class="empty">
    <div class="empty-icon">${icon('scenarios')}</div>
    <div class="empty-title">No scenarios today</div>
    <div class="empty-msg">Engine refreshes daily. Check back tomorrow morning.</div>
  </div>`;
}

const SCEN_CSS = `
.scn-list { display: flex; flex-direction: column; gap: var(--sp-3); }
.scn-card {
  padding: var(--sp-4);
  text-align: left; width: 100%;
  display: flex; flex-direction: column; gap: var(--sp-2);
}
.scn-top { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-2); }
.scn-direction {
  font-size: 10px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 3px 8px; border-radius: var(--r-full);
}
.dir-bull { background: var(--calm-soft); color: var(--calm); }
.dir-bear { background: var(--escalate-soft); color: var(--escalate); }
.dir-neutral { background: var(--neutral-soft); color: var(--neutral); }
.scn-conf { font-size: var(--tx-xs); color: var(--fg-faint); font-weight: 700; font-variant-numeric: tabular-nums; }
.scn-title { font-size: var(--tx-md); font-weight: 800; letter-spacing: -0.01em; line-height: var(--lh-tight); }
.scn-thesis { font-size: var(--tx-sm); color: var(--fg-dim); line-height: var(--lh-relaxed); margin: 0; }
.scn-tickers { display: flex; flex-wrap: wrap; gap: 4px; }
.sig-ticker-pill {
  display: inline-flex; align-items: center;
  height: 22px; padding: 0 var(--sp-2);
  border-radius: var(--r-xs);
  background: var(--info-soft);
  color: #93c5fd;
  font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid rgba(59,130,246,0.3);
}
`;

const SCEN_JS = `
(function(){
  function wireScn(){
    if(document.__scnWired) return;
    document.__scnWired = true;
    document.addEventListener('click', function(e){
      var card = e.target.closest('.scn-card');
      if(!card) return;
      var b64 = card.getAttribute('data-scn');
      if(!b64) return;
      try {
        var jsonStr = decodeURIComponent(escape(atob(b64)));
        window.openScenarioSheet(jsonStr);
      } catch(err){ console.error('scn decode err:', err && err.message); }
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireScn);
  else wireScn();
  window.addEventListener('tuck:route', wireScn);
})();
if(typeof __confPct==='undefined'){ window.__confPct = function(c){
  if(c==null) return null;
  if(typeof c==='number') return c<=1?Math.round(c*100):Math.round(c);
  var s=String(c).toLowerCase().trim();
  var m={'very low':20,'low':35,'medium':65,'med':65,'moderate':65,'high':88,'very high':95};
  if(m[s]!=null) return m[s];
  var n=parseFloat(s); if(!isNaN(n)) return n<=1?Math.round(n*100):Math.round(n);
  return null;
}; }
if(typeof __confLabel==='undefined'){ window.__confLabel = function(c){
  var p=__confPct(c); if(p==null) return '';
  return p>=80?'High':p>=50?'Medium':'Low';
}; }
window.openScenarioSheet = function(jsonStr) {
  let s;
  try { s = JSON.parse(jsonStr); } catch(e) { return; }
  const tickers = (s.affected_tickers || '').split(/[\\s,]+/).filter(Boolean);
  const confPct = __confPct(s.confidence);
  const confLbl = __confLabel(s.confidence);
  const direction = (s.market_direction || 'mixed').toLowerCase();
  const dirCls = direction.includes('bull') ? 'dir-bull' : direction.includes('bear') ? 'dir-bear' : 'dir-neutral';
  const ts = s.generated_at ? new Date(typeof s.generated_at==='string' ? s.generated_at : s.generated_at*1000) : null;
  const html = \`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:var(--sp-3);">
      <span class="scn-direction \${dirCls}">\${direction}</span>
      <span class="pill">\${confPct!=null?confLbl+' \u00b7 '+confPct+'%':'—'} confidence</span>
      \${ts ? \`<span class="pill">\${ts.toLocaleDateString()}</span>\` : ''}
    </div>
    <h3 style="font-size:var(--tx-lg);font-weight:800;margin-bottom:var(--sp-2);line-height:var(--lh-tight);">\${s.title || ''}</h3>
    <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);font-size:var(--tx-sm);">\${s.thesis || ''}</p>
    \${s.evidence ? \`<h3>Evidence</h3><p style="color:var(--fg-dim);line-height:var(--lh-relaxed);font-size:var(--tx-sm);">\${s.evidence}</p>\` : ''}
    \${s.invalidation ? \`<h3>What would invalidate this</h3><p style="color:var(--fg-dim);line-height:var(--lh-relaxed);font-size:var(--tx-sm);">\${s.invalidation}</p>\` : ''}
    \${tickers.length ? \`<h3>Affected tickers</h3>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        \${tickers.map(t => '<a href="/watchlist/' + t + '" data-route class="sig-ticker-pill" style="height:32px;padding:0 12px;font-size:13px;">' + t + '</a>').join('')}
      </div>\` : ''}
    <p style="font-size:var(--tx-xs);color:var(--fg-faint);margin-top:var(--sp-4);">Generated by AI synthesis of public news. Educational only — not investment advice.</p>
  \`;
  window.openSheet({ title: 'Scenario', html });
};
`;

// ── routes/macro.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /macro  (Macro Corner — FRED indicators)
// ────────────────────────────────────────────────────────────────────

const INDICATORS = [
  { k: 'fed_rate',     label: 'Fed Funds Rate',   unit: '%',   trendK: null,             explain: 'What banks pay to borrow overnight. Lower = cheaper money everywhere. The Fed sets this.', why: 'Every loan, mortgage, and stock valuation is priced off this rate. When the Fed hikes, borrowing gets expensive and risk assets usually fall. When it cuts, money gets cheap and markets tend to rally. The most-watched number in finance.', tickers: 'JPM,BAC,XLF' },
  { k: 'oil_price',    label: 'Crude Oil (WTI)',  unit: '$',   trendK: 'oil_trend',       explain: 'Per barrel. Drives gasoline, food costs, geopolitics. War in oil regions = price up.', why: 'Oil feeds into gas prices, shipping, food, and inflation. Spikes hit consumers and airlines hard but lift energy producers. Watch it during Middle East conflict — a Hormuz disruption can move it 10%+ in a day.', tickers: 'XOM,CVX,USO' },
  { k: 'treasury_10y', label: '10-Year Treasury', unit: '%',   trendK: 'treasury_trend',  explain: 'What the US gov pays to borrow for 10 years. Drives mortgage rates and stock valuations.', why: 'The 10-year yield is the benchmark for mortgages, corporate debt, and how much a future dollar of earnings is worth today. Rising yields pressure high-growth/tech stocks most. Falling yields are a tailwind for them.', tickers: 'TLT,IEF' },
  { k: 'dxy',          label: 'Dollar Index',     unit: '',    trendK: 'dxy_trend',       explain: 'Strength of the US dollar vs other currencies. Strong dollar hurts exports, helps imports.', why: 'A strong dollar makes US exports pricier abroad and shrinks the overseas earnings of multinationals when converted back. It also pressures gold, oil, and emerging markets. A weak dollar does the opposite.', tickers: 'UUP' },
  { k: 'vix',          label: 'VIX (Fear Index)', unit: '',    trendK: 'vix_trend',       explain: 'Wall Street’s fear gauge. Above 30 = panic. Below 15 = complacency.', why: 'The VIX measures how much volatility traders expect over the next 30 days. It spikes when markets crash and fear takes over, and sinks when investors are calm or complacent. Contrarians watch extremes \u2014 peak fear often marks bottoms.', tickers: 'VXX,UVXY' },
  { k: 'gold',         label: 'Gold (per oz)',    unit: '$',   trendK: null,              explain: 'The classic safe haven. Up when people don’t trust paper money or stability.', why: 'Gold holds value when faith in currencies, governments, or banks erodes. It rises during war, inflation, and crisis, and tends to move opposite the dollar and real yields. A core hedge for the cautious.', tickers: 'GLD,GDX' },
];

async function macroRoute({ env, url, spa = false }) {
  let macro = {};
  try {
    if (env.TUCK_KV) {
      const cached = await env.TUCK_KV.get('cache:macro:current', 'json');
      if (cached && Object.keys(cached).length > 3) macro = cached;
    }
  } catch(e) { console.error('macroRoute err:', e?.message); }

  const cards = INDICATORS.map(ind => renderCard(ind, macro)).join('');

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('macro')}<span>Macro Corner</span></h1>
    <span class="pill pill-fred">FRED</span>
  </div>
  <p class="shdr-sub">The big-picture indicators every market watches. Plain English on each card. Data from FRED &amp; public market feeds.</p>
</header>

<section class="macro-grid">${cards}</section>
`;

  return new Response(renderShell({
    path: '/macro',
    title: 'Macro Corner · Fed, Oil, Treasury, VIX · Tuck',
    description: 'Live macro indicators with plain-English explanations: Fed rate, oil, 10Y treasury, dollar index, VIX, gold.',
    bootstrap: { route: '/macro' },
    body, pageCSS: MACRO_CSS, pageJS: MACRO_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=600' }});
}

function renderCard(ind, macro) {
  const v = macro[ind.k];
  const trend = ind.trendK ? macro[ind.trendK] : null;
  const trendCls = trend === 'up' ? 'trend-up' : (trend === 'down' ? 'trend-dn' : 'trend-flat');
  const trendIcon = trend === 'up' ? icon('up') : (trend === 'down' ? icon('down') : icon('flat'));
  const displayValue = v != null ? `${ind.unit === '$' ? '$' : ''}${formatVal(v)}${ind.unit && ind.unit !== '$' ? ind.unit : ''}` : '—';
  const payload = { label: ind.label, value: displayValue, explain: ind.explain, why: ind.why || '', tickers: ind.tickers || '' };
  return `<button class="macro-card card card-interactive" data-macro="${esc(JSON.stringify(payload))}" aria-label="${esc(ind.label)} details">
    <div class="macro-card-hdr">
      <span class="macro-card-label">${esc(ind.label)}</span>
      ${trend ? `<span class="macro-trend ${trendCls}">${trendIcon}</span>` : ''}
    </div>
    <div class="macro-card-value">${esc(displayValue)}</div>
    <p class="macro-card-explain">${esc(ind.explain)}</p>
    <span class="macro-tap">Tap to learn more →</span>
  </button>`;
}

function formatVal(v) {
  v = Number(v);
  if (Number.isNaN(v)) return '—';
  if (Math.abs(v) >= 1000) return v.toFixed(0);
  if (Math.abs(v) >= 100) return v.toFixed(1);
  return v.toFixed(2);
}

const MACRO_CSS = `
.macro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-3);
}
@media (min-width: 640px) { .macro-grid { grid-template-columns: repeat(3, 1fr); } }
.macro-card {
  display: flex; flex-direction: column; gap: var(--sp-2);
  padding: var(--sp-4);
}
.macro-card-hdr {
  display: flex; align-items: center; justify-content: space-between;
}
.macro-card-label {
  font-size: 10px; font-weight: 800;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--fg-faint);
}
.macro-trend {
  width: 22px; height: 22px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--r-full);
}
.trend-up { background: var(--calm-soft); color: var(--calm); }
.trend-dn { background: var(--escalate-soft); color: var(--escalate); }
.trend-flat { background: var(--bg-elev2); color: var(--fg-faint); }
.macro-card-value {
  font-size: var(--tx-xl); font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}
.macro-card-explain {
  font-size: var(--tx-xs); color: var(--fg-dim);
  line-height: var(--lh-snug);
  margin: 0;
}
.macro-card.card-interactive { cursor: pointer; text-align: left; width: 100%; border: none; }
.macro-card.card-interactive:hover { border-color: rgba(239,68,68,0.4); }
.macro-tap { font-size: 10px; font-weight: 700; color: var(--tuck, #EF4444); margin-top: var(--sp-1); opacity: 0.85; }

`;

const MACRO_JS = `
window.openMacroSheet = function(d) {
  if (typeof d === 'string') { try { d = JSON.parse(d); } catch(e) { return; } }
  if (!d) return;
  const tickers = (d.tickers || '').split(',').map(t => t.trim()).filter(Boolean);
  const html = \`
    <div style="margin-bottom:var(--sp-3);">
      <span class="macro-card-value" style="font-size:var(--tx-xl);">\${d.value || '\u2014'}</span>
    </div>
    <h3 style="font-size:var(--tx-md);margin-bottom:var(--sp-2);">What it is</h3>
    <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);">\${d.explain || ''}</p>
    \${d.why ? \`<h3 style="font-size:var(--tx-md);margin-top:var(--sp-4);margin-bottom:var(--sp-2);">Why it matters</h3>
      <p style="color:var(--fg-dim);line-height:var(--lh-relaxed);">\${d.why}</p>\` : ''}
    \${tickers.length ? \`<h3 style="margin-top:var(--sp-4);font-size:var(--tx-md);">Related tickers</h3>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        \${tickers.map(t => '<a href="/watchlist/' + t + '" data-route class="sig-ticker-pill" style="height:32px;padding:0 12px;font-size:13px;">' + t + '</a>').join('')}
      </div>\` : ''}
    <p style="font-size:var(--tx-xs);color:var(--fg-faint);margin-top:var(--sp-4);">Educational only \u2014 not investment advice.</p>
  \`;
  window.openSheet({ title: d.label, html });
};
(() => {
  if (document.__macroWired) return;
  document.__macroWired = true;
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.macro-card');
    if (!card) return;
    const raw = card.getAttribute('data-macro');
    try { window.openMacroSheet(JSON.parse(raw)); } catch(_) {}
  });
})();
`;


// ── routes/learn.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /learn  (Glossary)
// ────────────────────────────────────────────────────────────────────

async function learnRoute({ env, url, spa = false }) {
  const terms = Object.entries(V2_GLOSSARY).sort((a, b) => a[0].localeCompare(b[0]));

  const cards = terms.map(([term, def]) => `
<button class="learn-card card card-interactive" data-term="${esc(term)}" data-def="${esc(def)}" aria-label="${esc(term)}">
  <div class="learn-card-term">${esc(term)}</div>
  <div class="learn-card-def">${esc(def.slice(0, 110))}${def.length > 110 ? '…' : ''}</div>
</button>`).join('');

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('learn')}<span>Learn</span></h1>
  </div>
  <p class="shdr-sub">Plain-English definitions of the financial terms Wall Street uses to keep you out. ${terms.length} terms.</p>
  <div class="learn-search-wrap">
    <span class="learn-search-icon">${icon('search')}</span>
    <input class="learn-search" id="learn-search" type="search" placeholder="Search terms…" aria-label="Search glossary"/>
  </div>
</header>

<section class="learn-grid" id="learn-grid">${cards}</section>
`;

  return new Response(renderShell({
    path: '/learn',
    title: 'Learn · Plain-English Financial Glossary · Tuck',
    description: 'Wall Street jargon explained in plain English. Free OSINT financial education.',
    bootstrap: { route: '/learn', count: terms.length },
    body, pageCSS: LEARN_CSS, pageJS: LEARN_JS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }});
}

const LEARN_CSS = `
.learn-search-wrap {
  position: relative;
  margin-top: var(--sp-3);
}
.learn-search-icon {
  position: absolute; left: var(--sp-3); top: 50%; transform: translateY(-50%);
  color: var(--fg-faint);
}
.learn-search {
  width: 100%; height: var(--hit);
  padding: 0 var(--sp-3) 0 calc(var(--sp-3) + 24px);
  background: var(--bg-elev); border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--fg); font-size: var(--tx-base);
}
.learn-search:focus { border-color: var(--border-focus); outline: none; }
.learn-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-2);
}
@media (min-width: 640px) { .learn-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .learn-grid { grid-template-columns: repeat(3, 1fr); } }
.learn-card {
  padding: var(--sp-3) var(--sp-4);
  text-align: left;
  display: flex; flex-direction: column; gap: var(--sp-1);
  width: 100%;
}
.learn-card-term {
  font-size: var(--tx-base); font-weight: 800; letter-spacing: -0.01em;
  color: var(--tuck);
}
.learn-card-def { font-size: var(--tx-xs); color: var(--fg-dim); line-height: var(--lh-snug); }
`;

const LEARN_JS = `
function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
window.openLearnSheet = function(term, def) {
  if (!term) return;
  const html = \`<p style="color:var(--fg);font-size:var(--tx-base);line-height:var(--lh-relaxed);">\${escHtml(def)}</p>\`;
  window.openSheet({ title: term, html });
};
(() => {
  const search = document.getElementById('learn-search');
  const grid = document.getElementById('learn-grid');
  if (!grid) return;
  // Event delegation: read term/def straight off the card's data-attrs (browser already decoded them).
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.learn-card');
    if (!card) return;
    window.openLearnSheet(card.getAttribute('data-term'), card.getAttribute('data-def'));
  });
  if (!search) return;
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    grid.querySelectorAll('.learn-card').forEach(c => {
      const txt = c.textContent.toLowerCase();
      c.style.display = (!q || txt.includes(q)) ? '' : 'none';
    });
  });
})();
`;

// ── routes/about.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTE: /about
// Mission, VPDLNY, disclaimers, source attribution
// ────────────────────────────────────────────────────────────────────

const TUCK_MASCOT = "/img/tuck/tuck-v5-hero.png";

async function aboutRoute({ env, url, spa = false }) {
  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('about')}<span>About Tuck</span></h1>
  </div>
  <p class="shdr-sub">Patron saint of the unpriced, the unbanked, and the unwelcome.</p>
</header>

<section class="about-hero card">
  <img src="${TUCK_MASCOT}" alt="Tuck" class="about-mascot"/>
  <div class="about-hero-copy">
    <h2 class="about-h2">Meet Tuck.</h2>
    <p class="about-p">Tuck stands with the vulnerable, the poor, and the oppressed — freeing them from the bonds of class warfare with the one weapon Wall Street fears most: <strong>information</strong>.</p>
    <p class="about-p">What they hoard, <span style="color:var(--tuck);font-weight:700;">we hand back</span>.</p>
  </div>
</section>

<section class="card">
  <h2 class="card-title">${icon('globe')}<span>The mission</span></h2>
  <p class="about-p">Tuck is a free, open OSINT financial-intelligence platform from <strong>Indica Independent Media</strong> — the public face of <strong>VPDLNY</strong>, an anonymous collective of technologists, artists, and researchers who use knowledge and information to defend the people that powerful entities try to harm or ignore.</p>
  <p class="about-p">We believe financial intelligence is a <strong>public good</strong>. Real-time market data, congressional-trade tracking, geopolitical OSINT, and plain-English education should not require a $25,000-a-year Bloomberg terminal, an Ivy League degree, or a hedge-fund pedigree. The same information that moves markets is hoarded behind paywalls and pedigree — we hand it back, in plain language, to anyone with a phone.</p>
  <p class="about-p">For decades the financial system has been engineered so the people with the most information win and everyone else plays catch-up. Tuck exists to flatten that. We aggregate only public, lawful, on-the-record sources — then we organize, score, and explain them so a first-generation investor reads the same signal a desk analyst does.</p>
  <p class="about-p"><strong>No login. No ads. No tracking. No payment-for-order-flow. No "picks." No advice. Free, forever.</strong></p>
</section>

<section class="card" style="border:1px solid rgba(88,166,255,0.28);background:linear-gradient(180deg,rgba(88,166,255,0.06),rgba(88,166,255,0.015));">
  <h2 class="card-title" style="color:#58a6ff;">${icon('pulse')}<span>Why now — the AI buildout window</span></h2>
  <p class="about-p">We are standing at the very start of the <strong>AI hyperscaling era</strong> — the largest coordinated infrastructure buildout in modern economic history. This is not hype; it is capital expenditure you can count.</p>
  <p class="about-p">In 2025 the four largest hyperscalers — Microsoft, Alphabet, Amazon, and Meta — spent a combined <strong>~$320–400&nbsp;billion</strong> on data centers, chips, networking, and power, and guided that figure <strong>higher</strong> for 2026. Independent analysts (Morgan Stanley, McKinsey, Dell'Oro) project cumulative AI-infrastructure investment of <strong>$3–4&nbsp;trillion through roughly 2030</strong>. Money at that scale doesn't get spent in a quarter — it gets spent across <strong>years</strong>.</p>
  <p class="about-p">History rhymes. The railroads (1840s–1870s), electrification (1900s–1920s), and the dot-com fiber boom (1996–2001, ~$500&nbsp;billion in fiber alone) all followed the same arc: a once-in-a-generation rush to build the physical layer of a new economy. Each one minted enduring winners — and buried the companies chasing the story instead of the <strong>infrastructure</strong>.</p>
  <p class="about-p">The dot-com fiber era is the closest analog to today. The lesson from it is blunt: <strong>own the picks and shovels</strong> — the compute, the networking, the power, the edge — not the hype riding on top. The buildout gets built <strong>once</strong>, and consensus puts this cycle running from 2025 through at least <strong>2028–2030</strong> before a digestion phase. That is the window regular people are living through right now, in real time.</p>
  <p class="about-p" style="color:var(--fg-dim);font-size:13px;">This is context, not a recommendation. Tuck never tells you what to buy. We just make sure you can see the same board the professionals see. <em>Figures are public analyst estimates and shift with each earnings cycle.</em></p>
</section>

<section class="card">
  <h2 class="card-title">${icon('warning')}<span>What this is NOT</span></h2>
  <ul class="about-ul">
    <li><strong>Not investment advice.</strong> We do not tell you to buy or sell anything. Ever.</li>
    <li><strong>Not a brokerage.</strong> You cannot place trades here.</li>
    <li><strong>Not a tip service.</strong> We do not offer "picks" or "calls."</li>
    <li><strong>Not financial planning.</strong> Talk to a licensed fiduciary for that.</li>
    <li><strong>Not anonymous trading data.</strong> Congressional trades are public disclosures under the STOCK Act.</li>
  </ul>
</section>

<section class="card">
  <h2 class="card-title">${icon('learn')}<span>Where the data comes from</span></h2>
  <ul class="about-ul">
    <li><strong>Prices</strong> — Yahoo Finance public quote feed, cached on edge.</li>
    <li><strong>News signals</strong> — 14 public RSS feeds (Al Jazeera, BBC, Reuters, Axios, Guardian, etc.) aggregated and scored.</li>
    <li><strong>Ravid scoops</strong> — Public posts from <a href="https://x.com/BarakRavid" target="_blank" rel="noopener">@BarakRavid</a> on X.</li>
    <li><strong>Congressional trades</strong> — STOCK Act public disclosures via Capitol Trades and similar public datasets.</li>
    <li><strong>Macro indicators</strong> — Federal Reserve Economic Data (FRED).</li>
    <li><strong>Tuck's Score &amp; AI Scenarios</strong> — Generated by AI synthesis of the above public data. Hypothetical only.</li>
  </ul>
</section>

<section class="card">
  <h2 class="card-title">${icon('about')}<span>Who builds Tuck</span></h2>
  <p class="about-p">Tuck ships under <strong>Indica Independent Media (IIM)</strong> — the forward-facing banner for <strong>VPDLNY</strong>, a New York-based collective of technologists and artists. We use code and creative work to defend the people that Wall Street, billionaires, and abusive institutions try to silence or exploit.</p>
  <p class="about-p">We are anonymous on purpose. The work is the credential. Never violence — just sunlight, structure, and shared infrastructure.</p>
</section>

<section class="about-badge" style="margin:var(--sp-2) 0 var(--sp-4);text-align:center;">
  <a class="iim-badge-link" href="https://github.com/IndicaIndependent" target="_blank" rel="noopener noreferrer" aria-label="Created with Creative Clarity — Indica Independent Media" style="display:inline-block;width:100%;">
    <img class="iim-badge-img" src="https://badge.osintnet.uk/badge.svg?dynamic"
         alt="Created with Creative Clarity — Indica Independent Media"
         width="400" height="200" loading="lazy"
         style="width:100%;height:auto;border-radius:14px;display:block;" />
  </a>
</section>

<section class="card btc-card" style="border:1px solid rgba(247,147,26,0.32);background:linear-gradient(180deg,rgba(247,147,26,0.07),rgba(247,147,26,0.02));">
  <h2 class="card-title" style="color:#f7931a;">${icon('about')}<span>Support Tuck — Bitcoin &amp; Lightning ⚡</span></h2>
  <p class="about-p btc-long">We will <strong>never</strong> monetize you. No ads, no data sales, no sponsors, no corporate money. Here's why that matters: anyone who openly takes money from a business is influenced by it — whether they admit it or not. The only way to stay truly independent and pure is to answer to <strong>no one but the people we serve</strong>.</p>
  <p class="about-p btc-long">So we accept just one thing: <strong>anonymous, universal Bitcoin donations</strong> — only from those who can spare it. No Stripe, no Patreon, no processor that can deplatform us or profile our donors. Bitcoin is borderless, permissionless, and final. It's the only money that lets us stay free.</p>
  <p class="about-p btc-short"><strong>We never monetize you</strong> — no ads, no data sales, no corporate money. We take just one thing: <strong>anonymous Bitcoin donations</strong>, only from those who can spare it. It's the only money that keeps us free.</p>
  <div style="display:flex;flex-wrap:wrap;gap:18px;align-items:center;background:rgba(0,0,0,0.28);padding:18px;border-radius:12px;margin-top:8px;">
    <a href="https://tips.osintnet.uk" title="Open in your Bitcoin wallet" style="width:148px;height:148px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;padding:8px;flex-shrink:0;text-decoration:none;"><img src="https://tips.osintnet.uk/qr.svg" alt="Tuck Bitcoin donation QR — scan to donate" style="width:100%;height:100%;image-rendering:pixelated;"/></a>
    <div style="flex:1;min-width:240px;">
      <div style="font-size:11px;color:var(--fg-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">Lightning Address (tap to pay)</div>
      <a href="https://tips.osintnet.uk" title="Open in wallet" style="display:block;font-family:'JetBrains Mono','SF Mono',Consolas,monospace;font-size:13px;color:#f7931a;word-break:break-all;background:rgba(247,147,26,0.09);padding:11px 12px;border-radius:8px;margin-bottom:12px;text-decoration:none;user-select:all;">tips@skygive.app</a>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button onclick="navigator.clipboard.writeText('tips@skygive.app');if(window.tuckToast)tuckToast('Bitcoin address copied');" style="background:#f7931a;color:#0a0f1e;border:0;padding:9px 18px;border-radius:9px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;">Copy Address</button>
        <a href="https://tips.osintnet.uk" style="background:transparent;color:#f7931a;border:1px solid #f7931a;padding:8px 17px;border-radius:9px;font-weight:600;font-size:13px;text-decoration:none;display:inline-block;">Open in Wallet</a>
      </div>
    </div>
  </div>
</section>

<section class="card">
  <h2 class="card-title">${icon('share')}<span>Share Tuck</span></h2>
  <p class="about-p" style="margin-bottom:14px;">Tuck only grows by word of mouth. If it helped you, pass it to someone who needs it.</p>
  <div class="about-share" style="display:flex;flex-wrap:wrap;gap:10px;">
    <button class="btn btn-primary" onclick="tuckShare({title:'Tuck — Free Financial Intelligence',text:'Free, no-login, no-ads financial intelligence — real-time market data, congressional trades & OSINT. Built by VPDLNY for everyone Wall Street ignores.',url:'https://tuck.osintnet.uk/'})">${icon('share')}<span>Share</span></button>
    <a class="btn btn-secondary" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=Free,%20no-login,%20no-ads%20financial%20intelligence%20—%20real-time%20market%20data,%20congressional%20trades%20&%20OS&url=https://tuck.osintnet.uk/">X / Twitter</a>
    <a class="btn btn-secondary" target="_blank" rel="noopener" href="https://www.reddit.com/submit?url=https://tuck.osintnet.uk/&title=Tuck%20%E2%80%94%20Free%20OSINT%20Financial%20Intelligence">Reddit</a>
    <a class="btn btn-secondary" target="_blank" rel="noopener" href="https://t.me/share/url?url=https://tuck.osintnet.uk/&text=Free%20financial%20intelligence%20for%20everyone">Telegram</a>
    <a class="btn btn-secondary" target="_blank" rel="noopener" href="https://wa.me/?text=Free%20financial%20intelligence%20%E2%80%94%20https://tuck.osintnet.uk/">WhatsApp</a>
    <button class="btn btn-secondary" onclick="navigator.clipboard.writeText('https://tuck.osintnet.uk/');if(window.tuckToast)tuckToast('Link copied');">Copy Link</button>
  </div>
</section>

<section class="home-footer" style="margin-top:var(--sp-6);">
  <p>© 2026 VPDLNY · Open source · Free forever</p>
  <p>Tuck v2.0 · Built mobile-first</p>
</section>
`;

  return new Response(renderShell({
    path: '/about',
    title: 'About · Tuck · VPDLNY',
    description: 'Tuck is a free, no-login, no-ads OSINT financial intelligence platform built by VPDLNY for everyone Wall Street ignores.',
    bootstrap: { route: '/about' },
    body, pageCSS: ABOUT_CSS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }});
}

const ABOUT_CSS = `
.about-hero {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: var(--sp-4);
  align-items: center;
}
.about-mascot {
  width: 96px; height: 96px;
  border-radius: var(--r-lg);
  box-shadow: var(--sh-2);
}
.about-h2 { font-size: var(--tx-xl); font-weight: 800; letter-spacing: -0.02em; margin-bottom: var(--sp-1); }
.about-p { color: var(--fg-dim); line-height: var(--lh-relaxed); margin: 0 0 var(--sp-2); font-size: var(--tx-sm); }
.about-p:last-child { margin-bottom: 0; }
.about-p strong { color: var(--fg); }
.about-ul { padding-left: var(--sp-5); color: var(--fg-dim); line-height: var(--lh-relaxed); font-size: var(--tx-sm); margin: var(--sp-2) 0 0; }
.about-ul li { margin-bottom: var(--sp-2); }
.about-ul strong { color: var(--fg); }
.about-share { display: flex; gap: var(--sp-2); margin-top: var(--sp-2); }
@media (min-width: 640px) {
  .about-hero { grid-template-columns: 140px 1fr; }
  .about-mascot { width: 140px; height: 140px; }
}
`;

// ── router.js ─────────────────────────────────
// ────────────────────────────────────────────────────────────────────
// TUCK v2 — ROUTER
// Maps URL pathnames to route handlers
// ────────────────────────────────────────────────────────────────────

/**
 * Route a request to its handler.
 * Returns a Response. Throws if no match → caller renders 404.
 */
async function routeV2(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '') || '/';
  // TUCK v2.1 — accept _spa=1 URL param OR X-Tuck-Spa header (URL param makes cache keys distinct)
  const spa = request.headers.get('X-Tuck-Spa') === '1' || url.searchParams.get('_spa') === '1';

  // Static asset / data routes are NOT v2-handled — let main worker handle them
  if (path.startsWith('/api/') || path.startsWith('/static/')) return null;

  // Match patterns
  if (path === '/') return homeRoute({ env, url, spa });
  if (path === '/watchlist' || path.startsWith('/watchlist/')) return watchlistRoute({ env, url, spa });
  if (path === '/scanner')   return scannerRoute({ env, url, spa });
  if (path === '/ravid')     return ravidRoute({ env, url, spa });
  if (path === '/congress')  return congressRoute({ env, url, spa });
  if (path === '/scores')    return scoresRoute({ env, url, spa });
  if (path === '/war3')      return war3Route({ env, url, spa });
  if (path === '/heatmap')   return heatmapRoute({ env, url, spa });
  if (path === '/scenarios') return scenariosRoute({ env, url, spa });
  if (path === '/macro')     return macroRoute({ env, url, spa });
  if (path === '/learn')     return learnRoute({ env, url, spa });
  if (path === '/about')     return aboutRoute({ env, url, spa });

  // No v2 match — return null so caller can fall through to v1
  return null;
}

/**
 * Decide whether to use v2 routing for this request.
 * Returns true if the v=2 query flag is present (staging mode).
 */
function isV2Request(request) {
  const url = new URL(request.url);
  // PROMOTED TO DEFAULT (May 23, 2026): v2 is the canonical Tuck experience.
  // Explicit ?v=1 opts out to legacy v1 (for emergency fallback).
  if (url.searchParams.get('v') === '1') return false;
  return true;
}

// ── TUCK v2 HOST ADAPTER ─────────────────────────────────
// Call from your main fetch handler:
//   if (TuckV2.isV2(request)) { const r = await TuckV2.route(request, env, ctx); if (r) return r; }
const TuckV2 = { isV2: isV2Request, route: routeV2 };


// ═══════════ WAR 3.0 INDEX PAGE (added Jun 5, 2026) ═══════════
const WAR3_API = "https://tucks-war3.thom-rvr.workers.dev";

const WAR3_CSS = `
.w3-wrap{display:flex;flex-direction:column;gap:var(--sp-4);}
.w3-gauge-card{display:flex;flex-direction:column;align-items:center;text-align:center;padding:var(--sp-5) var(--sp-4);}
.w3-gauge{width:100%;max-width:300px;}
.w3-score{font-size:54px;font-weight:800;line-height:1;letter-spacing:-1px;margin-top:4px;}
.w3-band{font-size:15px;font-weight:700;letter-spacing:1.5px;margin-top:6px;text-transform:uppercase;}
.w3-delta{font-size:13px;color:var(--fg-dim);margin-top:8px;font-weight:600;}
.w3-updated{font-size:11px;color:var(--fg-dim);margin-top:4px;}
.w3-theatres{display:flex;flex-direction:column;gap:var(--sp-3);}
.w3-th{display:flex;flex-direction:column;gap:6px;}
.w3-th-top{display:flex;justify-content:space-between;align-items:baseline;}
.w3-th-name{font-weight:700;font-size:15px;}
.w3-th-val{font-weight:800;font-size:16px;font-variant-numeric:tabular-nums;}
.w3-bar{height:9px;border-radius:6px;background:rgba(255,255,255,0.07);overflow:hidden;}
.w3-bar-fill{height:100%;border-radius:6px;transition:width .6s cubic-bezier(.4,0,.2,1);}
.w3-driver{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-bottom:1px solid rgba(255,255,255,0.06);}
.w3-driver:last-child{border-bottom:none;}
.w3-driver-dot{flex:none;width:8px;height:8px;border-radius:50%;margin-top:6px;}
.w3-driver-txt{flex:1;font-size:14px;line-height:1.4;}
.w3-driver-meta{font-size:11px;color:var(--fg-dim);margin-top:2px;}
.w3-spark{width:100%;height:48px;margin-top:var(--sp-2);}
.w3-cred{display:flex;flex-wrap:wrap;gap:var(--sp-3);font-size:12px;color:var(--fg-dim);}
.w3-cred-item{display:flex;flex-direction:column;}
.w3-cred-item b{color:var(--fg);font-size:14px;font-weight:700;}
.w3-warmup{font-size:12px;color:#e3b341;background:rgba(227,179,65,0.1);border:1px solid rgba(227,179,65,0.25);border-radius:8px;padding:8px 11px;}
.w3-err{font-size:13px;color:var(--fg-dim);text-align:center;padding:var(--sp-4);}
.w3-support{text-align:center;border:1px solid rgba(247,147,26,0.25);background:linear-gradient(180deg,rgba(247,147,26,0.06),transparent);}
.w3-support-lead{font-size:14px;margin:0 0 6px;}
.w3-support-sub{font-size:12px;color:var(--fg-dim);margin:0 0 var(--sp-3);}
.w3-support-btn{display:inline-block;font-size:13px;font-weight:700;color:#0d1117;background:#f7931a;padding:9px 16px;border-radius:8px;text-decoration:none;}
.w3-support-btn:active{transform:translateY(1px);}
`;

function w3BandColor(b) { return { CRITICAL: "#f85149", HIGH: "#fb8500", ELEVATED: "#e3b341", CALM: "#3fb950" }[b] || "#8b949e"; }
function w3BandEmoji(b) { return { CRITICAL: "🟥", HIGH: "🟧", ELEVATED: "🟨", CALM: "🟩" }[b] || "⬜"; }
function w3Band(s) { return s >= 76 ? "CRITICAL" : s >= 56 ? "HIGH" : s >= 36 ? "ELEVATED" : "CALM"; }

function w3Gauge(score, color) {
  const cx = 150, cy = 150, r = 120;
  const a0 = Math.PI, a1 = 0;
  const frac = Math.max(0, Math.min(1, score / 100));
  const ang = a0 + (a1 - a0) * frac;
  const polar = (a, rad) => [cx + rad * Math.cos(a), cy - rad * Math.sin(a)];
  const [sx, sy] = polar(a0, r), [ex, ey] = polar(a1, r);
  const [px, py] = polar(ang, r);
  const trackArc = `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`;
  const valArc = `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${px} ${py}`;
  const [nx, ny] = polar(ang, r - 16);
  return `<svg class="w3-gauge" viewBox="0 0 300 175" role="img" aria-label="WAR 3.0 score ${score} of 100">
    <path d="${trackArc}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="16" stroke-linecap="round"/>
    <path d="${valArc}" fill="none" stroke="${color}" stroke-width="16" stroke-linecap="round"/>
    <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="7" fill="${color}"/>
    <text x="38" y="168" fill="#8b949e" font-size="11">0</text>
    <text x="252" y="168" fill="#8b949e" font-size="11">100</text>
  </svg>`;
}

function w3Spark(history) {
  if (!history || history.length < 2) return "";
  const pts = history.slice().reverse().map(h => h.score);
  const w = 300, h = 48, pad = 4;
  const min = Math.min(...pts), max = Math.max(...pts), span = Math.max(1, max - min);
  const xs = (i) => pad + (i * (w - 2 * pad)) / (pts.length - 1);
  const ys = (v) => h - pad - ((v - min) / span) * (h - 2 * pad);
  const d = pts.map((v, i) => `${i ? "L" : "M"} ${xs(i).toFixed(1)} ${ys(v).toFixed(1)}`).join(" ");
  const last = pts[pts.length - 1], lc = w3BandColor(w3Band(last));
  return `<svg class="w3-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-label="score trend">
    <path d="${d}" fill="none" stroke="${lc}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${xs(pts.length - 1).toFixed(1)}" cy="${ys(last).toFixed(1)}" r="3" fill="${lc}"/>
  </svg>`;
}

async function war3Route({ env, url, spa = false }) {
  let data = null, hist = null, errMsg = null;
  try {
    const [sR, hR] = await Promise.all([
      fetch(`${WAR3_API}/score`, { cf: { cacheTtl: 120 } }),
      fetch(`${WAR3_API}/history?days=30`, { cf: { cacheTtl: 300 } }),
    ]);
    if (sR.ok) data = await sR.json();
    if (hR.ok) hist = (await hR.json()).history || [];
  } catch (e) { errMsg = String(e && e.message || e); }

  let inner;
  if (!data) {
    inner = `<section class="card"><div class="w3-err">⚠️ WAR 3.0 index temporarily unavailable.${errMsg ? `<br><span style="font-size:11px">${esc(errMsg)}</span>` : ""}</div></section>`;
  } else {
    const color = w3BandColor(data.band);
    const dl = data.delta;
    const deltaStr = dl == null ? "" : `${dl > 0 ? "▲" : dl < 0 ? "▼" : "▬"} ${Math.abs(dl).toFixed(1)} since yesterday`;
    const theatres = Object.entries(data.components || {}).sort((a, b) => b[1].P - a[1].P);
    const thHtml = theatres.map(([t, c]) => {
      const cc = c.P >= 76 ? "#f85149" : c.P >= 56 ? "#fb8500" : c.P >= 36 ? "#e3b341" : "#3fb950";
      return `<div class="w3-th">
        <div class="w3-th-top"><span class="w3-th-name">${esc(t.charAt(0) + t.slice(1).toLowerCase())}</span><span class="w3-th-val" style="color:${cc}">${Math.round(c.P)}</span></div>
        <div class="w3-bar"><div class="w3-bar-fill" style="width:${Math.round(c.P)}%;background:${cc}"></div></div>
      </div>`;
    }).join("");
    const drivers = (data.drivers || []).slice(0, 5).map(d => {
      const cc = d.contrib >= 8 ? "#f85149" : d.contrib >= 5 ? "#fb8500" : "#e3b341";
      return `<div class="w3-driver">
        <span class="w3-driver-dot" style="background:${cc}"></span>
        <div class="w3-driver-txt">${esc(d.headline)}
          <div class="w3-driver-meta">${esc(d.theatre)} · intensity ${d.contrib.toFixed(1)} · ${d.ageDays < 1 ? "today" : Math.round(d.ageDays) + "d ago"}</div>
        </div>
      </div>`;
    }).join("");
    const spark = w3Spark(hist);
    const updated = data.date ? `as of ${esc(String(data.date))}` : "";
    const warmup = data.warmupReady === false ? `<div class="w3-warmup">⚠️ Baseline still calibrating — early readings may be noisy.</div>` : "";
    inner = `
    <section class="card w3-gauge-card">
      ${w3Gauge(data.score, color)}
      <div class="w3-score" style="color:${color}">${data.score.toFixed(0)}<span style="font-size:22px;color:var(--fg-dim)">/100</span></div>
      <div class="w3-band" style="color:${color}">${w3BandEmoji(data.band)} ${esc(data.band)}</div>
      ${deltaStr ? `<div class="w3-delta">${deltaStr}</div>` : ""}
      <div class="w3-updated">${updated}</div>
      ${spark}
    </section>
    ${warmup}
    <section class="card">
      <h2 class="card-title">${icon('globe')}<span>Theatres</span></h2>
      <div class="w3-theatres">${thHtml}</div>
    </section>
    <section class="card">
      <h2 class="card-title">${icon('warning')}<span>Top drivers</span></h2>
      ${drivers || '<div class="w3-err">No active drivers.</div>'}
    </section>
    <section class="card">
      <h2 class="card-title">${icon('learn')}<span>How it works</span></h2>
      <p class="about-p" style="font-size:14px;">The <strong>WAR 3.0 Index</strong> scores live geopolitical conflict on a 0–100 scale. It reads vetted OSINT events, weights each by the <strong>Goldstein conflict scale</strong> (a peer-reviewed measure from academic conflict research), decays older events, and blends three theatres — Hormuz, Ukraine, and Broader — against a fixed statistical baseline so the number means the same thing over time.</p>
      <div class="w3-cred">
        <div class="w3-cred-item"><b>Goldstein</b>event intensity</div>
        <div class="w3-cred-item"><b>EWMA decay</b>3-day half-life</div>
        <div class="w3-cred-item"><b>Fixed baseline</b>comparable over time</div>
        <div class="w3-cred-item"><b>Hill-saturated</b>resists spam</div>
      </div>
      <p class="about-p" style="font-size:12px;color:var(--fg-dim);margin-top:var(--sp-3);">Context, not advice. The index measures conflict intensity — it does not predict prices or tell you what to trade.</p>
    </section>
    <section class="card w3-support">
      <p class="w3-support-lead">${icon('zap') || '⚡'} <strong>This index is free, ad-free, and built by one researcher.</strong></p>
      <p class="w3-support-sub">No VC, no gov funding. If WAR 3.0 serves you, a tip keeps it live.</p>
      <a class="w3-support-btn" href="https://support.warheatmap.app" target="_blank" rel="noopener">⚡ Support — tips@warheatmap.app</a>
    </section>`;
  }

  const body = `
<header class="shdr">
  <div class="shdr-row">
    <h1 class="shdr-title">${icon('warning')}<span>WAR 3.0 Index</span></h1>
  </div>
  <p class="shdr-sub">Live geopolitical conflict, scored 0–100.</p>
</header>
<div class="w3-wrap">${inner}</div>`;

  return new Response(renderShell({
    path: '/war3',
    title: 'WAR 3.0 Index · Live Conflict Score · Tuck',
    description: 'A live 0–100 geopolitical conflict index built on the Goldstein scale and vetted OSINT. Free, no login.',
    bootstrap: { route: '/war3' },
    body, pageCSS: WAR3_CSS, spa,
  }), { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=120' } });
}
// ═══════════ END WAR 3.0 PAGE ═══════════

// ═══════════ TUCK v2 BUNDLE END ═══════════

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var INGEST_URL = "https://geoint-ingest-worker.thom-rvr.workers.dev";
var PRICE_URL = "https://geoint-price-worker.thom-rvr.workers.dev";
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
  { ticker: "USO", name: "Oil Fund", sector: "Energy", desc: "Tracks the price of crude oil (WTI). Goes up when there's war risk in the Middle East, goes down when OPEC pumps more. The purest geopolitical trade.", geo: "Iran/Hormuz", cat: "oil" },
  { ticker: "KTOS", name: "Kratos Defense", sector: "Defense", desc: "Builds unmanned drones, satellites, and missile-defense systems for the US military. Pure-play defense small-cap \u2014 surges on Pentagon contract wins and during geopolitical escalation.", geo: "Global", cat: "defense" },
  { ticker: "SOXX", name: "Semiconductor ETF", sector: "Semiconductor", desc: "iShares Semiconductor ETF \u2014 holds NVDA, AVGO, AMD, QCOM, INTC, MU and 24 more in one basket. The cleanest way to own the entire chip cycle without picking winners.", geo: "China/Taiwan", cat: "etf" },
  { ticker: "QQQ", name: "Nasdaq-100 ETF", sector: "Tech/Security", desc: "Invesco QQQ \u2014 tracks the 100 largest non-financial Nasdaq stocks. Heavily weighted toward Apple, Microsoft, NVDA, Amazon, Meta, Google, Tesla. The tech mega-cap proxy.", geo: "Global", cat: "etf" }
];
var SECTOR_EXPLAINERS = {
  "Semiconductor": "Semiconductor companies design or manufacture chips - the tiny silicon brains inside every electronic device. They are highly sensitive to US-China relations because most are either made in Taiwan or sold to Chinese companies.",
  "Critical Minerals": "Rare earth elements are 17 metals used in defense systems, EVs, and electronics. China controls ~85% of global processing. Companies like MP Materials are strategic assets, not just stocks.",
  "Energy": "Energy stocks move with oil prices, which move with geopolitical events - wars, OPEC decisions, sanctions. Understanding energy stocks means understanding global power.",
  "Tech/Security": "Technology and cybersecurity companies build the infrastructure of the modern internet. They benefit from both AI investment and the constant demand for online security.",
  "Defense": "Defense contractors build weapons, drones, satellites, and intelligence systems for the US military. They benefit from rising defense budgets, geopolitical tension, and Pentagon contract wins.",
  "ETF": "An Exchange Traded Fund holds a basket of stocks in a single ticker. Buying SOXX means owning all 30 semiconductor stocks at once. Lower risk than picking one winner, but also lower upside."
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
  "Insider Trading": "When a company executive buys or sells their own company's stock. Legal when disclosed (Form 4 filing). A big executive buy can signal confidence. A mass selloff can signal trouble.",
  "Short Interest": "The percentage of a stock's shares being bet AGAINST. High short interest (>15%) means lots of traders expect a drop \u2014 but it can also fuel 'short squeezes' when the price rises and shorts are forced to buy back.",
  "Float": "The number of shares actually available to trade. Different from 'shares outstanding' \u2014 float excludes insider-held and locked-up shares. A small float means the stock moves fast on small volume.",
  "Bid/Ask Spread": "The gap between what buyers offer (bid) and sellers want (ask). Tight spreads (a few cents) mean a healthy liquid market. Wide spreads mean you pay a hidden tax every time you trade.",
  "Beta": "How violently a stock moves compared to the S&P 500. Beta of 1.0 = moves with the market. Beta of 2.0 = twice as volatile. NVDA has a high beta. Utility stocks are low beta.",
  "Moving Average": "The average price over the last N days, plotted as a line. The 50-day and 200-day moving averages are the most-watched lines on Wall Street. Stocks crossing above or below them trigger algorithmic trades.",
  "Dividend Yield": "A stock that pays you to hold it. If a $100 stock pays $4/year in dividends, the yield is 4%. ETFs like XLE and SOXX pass through dividends from the companies they hold."
};
function buildHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<script>(function(){try{var p=new URLSearchParams(location.search);if(p.get('nogate')==='1'){localStorage.setItem('pm_agreed_v1',JSON.stringify({ts:Date.now(),v:1}));}}catch(e){}}());<\/script>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>

<!-- PRIMARY SEO (50-60 char title, 140-160 char description, answer-first) -->
<title>Free Financial Intelligence — Real-Time Market Data | Tuck</title>
<meta name="description" content="Tuck is a free OSINT financial intelligence platform with real-time market data, congressional trades, and geopolitical signals. No login, no ads, no advice."/>
<meta name="keywords" content="free financial intelligence, OSINT market data, congressional trading tracker, real-time stock prices, geopolitical market signals, free stock watchlist, Tuck market, VPDLNY, Indica Independent Media, how to track congressional trades, what is osint finance, free alternative to bloomberg terminal, public stock research, capitol trades, ravid watch"/>
<meta name="author" content="VPDLNY · Indica Independent Media"/>
<meta name="language" content="en-US"/>

<!-- ROBOTS + 2026 AI CRAWLER ACCESS -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
<meta name="googlebot" content="index, follow, max-image-preview:large"/>
<meta name="bingbot" content="index, follow"/>
<meta name="GPTBot" content="index, follow"/>
<meta name="Claude-Web" content="index, follow"/>
<meta name="ClaudeBot" content="index, follow"/>
<meta name="perplexity-bot" content="index, follow"/>
<meta name="PerplexityBot" content="index, follow"/>
<meta name="CCBot" content="index, follow"/>
<meta name="Google-Extended" content="index, follow"/>
<meta name="anthropic-ai" content="index, follow"/>

<!-- ICONS -->
<link rel="icon" type="image/png" sizes="64x64" href="/img/tuck/tuck-v5-64.png"/>
<link rel="icon" type="image/png" sizes="128x128" href="/img/tuck/tuck-v5-128.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/img/tuck/tuck-v5-apple.png"/>
<link rel="mask-icon" href="/img/tuck/tuck-v5-64.png" color="#6366f1"/>

<!-- PWA / MOBILE -->
<meta name="theme-color" content="#0a0f1e"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="Tuck"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="format-detection" content="telephone=no"/>

<!-- CANONICAL + HREFLANG -->
<link rel="canonical" href="https://tuck.osintnet.uk/"/>
<link rel="alternate" hreflang="en" href="https://tuck.osintnet.uk/"/>
<link rel="alternate" hreflang="x-default" href="https://tuck.osintnet.uk/"/>

<!-- OPEN GRAPH (complete set) -->
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Tuck — Free Financial Intelligence"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:url" content="https://tuck.osintnet.uk/"/>
<meta property="og:title" content="Free Financial Intelligence — Real-Time Market Data"/>
<meta property="og:description" content="OSINT financial intelligence for the people. Real-time prices, congressional trades, geopolitical signals. Free forever. No login. No ads. No advice."/>
<meta property="og:image" content="https://assets.warheatmap.app/tuck/tuck-v5-hero.png"/>
<meta property="og:image:secure_url" content="https://assets.warheatmap.app/tuck/tuck-v5-hero.png"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:width" content="1024"/>
<meta property="og:image:height" content="1024"/>
<meta property="og:image:alt" content="Tuck — the friar mascot of free financial intelligence, a VPDLNY project"/>
<meta property="article:section" content="Finance"/>
<meta property="article:tag" content="OSINT"/>
<meta property="article:tag" content="Financial Intelligence"/>
<meta property="article:tag" content="Congressional Trading"/>
<meta property="article:tag" content="Geopolitical Signals"/>

<!-- TWITTER / X CARD -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@IndicaIndependent"/>
<meta name="twitter:creator" content="@IndicaIndependent"/>
<meta name="twitter:title" content="Free Financial Intelligence — Real-Time Market Data"/>
<meta name="twitter:description" content="OSINT financial intelligence for the people. Real-time prices, congressional trades, geopolitical signals. Free forever. No ads. No advice."/>
<meta name="twitter:image" content="https://assets.warheatmap.app/tuck/tuck-v5-hero.png"/>
<meta name="twitter:image:alt" content="Tuck — the friar mascot of free financial intelligence, a VPDLNY project"/>
<meta name="twitter:label1" content="Watchlist"/>
<meta name="twitter:data1" content="9 tickers · Real-time"/>
<meta name="twitter:label2" content="Cost"/>
<meta name="twitter:data2" content="Free forever"/>

<!-- PERFORMANCE -->
<link rel="preconnect" href="https://assets.warheatmap.app" crossorigin/>
<link rel="dns-prefetch" href="https://assets.warheatmap.app"/>
<link rel="dns-prefetch" href="//discord.gg"/>
<link rel="dns-prefetch" href="//github.com"/>

<!-- STRUCTURED DATA (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tuck.osintnet.uk/#website",
      "name": "Tuck",
      "alternateName": ["Tuck Market", "Tuck Financial Intelligence", "tuck.osintnet.uk"],
      "url": "https://tuck.osintnet.uk/",
      "description": "Tuck is a free OSINT financial intelligence platform: real-time market data, congressional trades, and geopolitical signals. No login, no ads, no advice.",
      "inLanguage": "en-US",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-22",
      "keywords": "financial intelligence, OSINT, congressional trading, market data, geopolitical signals",
      "publisher": { "@id": "https://tuck.osintnet.uk/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://tuck.osintnet.uk/?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "NewsMediaOrganization",
      "@id": "https://tuck.osintnet.uk/#organization",
      "name": "Indica Independent Media",
      "alternateName": ["VPDLNY", "Indica Independent Media", "IIM"],
      "url": "https://tuck.osintnet.uk/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://assets.warheatmap.app/tuck/tuck-v5-128.png",
        "width": 128,
        "height": 128
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://assets.warheatmap.app/tuck/tuck-v5-hero.png",
        "width": 1024,
        "height": 1024
      },
      "description": "Indica Independent Media and VPDLNY — a collective of technologists, artists, and researchers using public information to defend vulnerable communities. Tuck is one of their free public tools.",
      "foundingDate": "2024",
      "foundingLocation": { "@type": "Place", "name": "Staten Island, New York, USA" },
      "knowsAbout": [
        "Open Source Intelligence",
        "Financial Markets",
        "Congressional Trading Disclosures",
        "Geopolitical Risk",
        "Public Data",
        "Open Source Software"
      ],
      "sameAs": [
        "https://discord.gg/vpdlny",
        "https://github.com/indicaindependent",
        "https://bsky.app/profile/indicaindependent.bsky.social"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Tuck?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tuck is a free, public OSINT financial intelligence platform. It provides real-time stock prices, congressional trading disclosures, geopolitical signals, and macro indicators in one place — with no login, no tracking, no ads, and no investment advice." }
        },
        {
          "@type": "Question",
          "name": "Is Tuck free?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Tuck is free forever. It is operated by VPDLNY as a public educational tool, runs on Cloudflare's free tier and public APIs, and is open source under the MIT License." }
        },
        {
          "@type": "Question",
          "name": "Does Tuck provide investment advice?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Tuck is strictly educational. Nothing on the platform is investment advice, a buy or sell recommendation, or a solicitation. The Watchlist is a study set for learning how to research, not a buy list. Always consult a licensed financial professional before making investment decisions." }
        },
        {
          "@type": "Question",
          "name": "Who built Tuck?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tuck is built and maintained by Indica Independent Media (IIM), the public face of VPDLNY — an anonymous collective of technologists, artists, and researchers based in Staten Island, New York. The project is open source and community-supported." }
        },
        {
          "@type": "Question",
          "name": "How does Tuck track congressional trading?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tuck pulls public congressional trading disclosures filed under the STOCK Act from public sources including CapitolTrades and QuiverQuant. The Congress section shows recent House and Senate transactions, lobbying activity, and government contracts, all sourced from public filings." }
        },
        {
          "@type": "Question",
          "name": "What data sources does Tuck use?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tuck aggregates public data from Finnhub, Yahoo Finance, SEC EDGAR, Federal Reserve FRED, CapitolTrades, QuiverQuant, and curated RSS news feeds. All sources are public and free. No proprietary or paid feeds are used." }
        },
        {
          "@type": "Question",
          "name": "What is OSINT in finance?",
          "acceptedAnswer": { "@type": "Answer", "text": "OSINT (Open Source Intelligence) in finance is the practice of using publicly available data — SEC filings, congressional disclosures, news feeds, public APIs — to understand markets and capital flows. Tuck is an OSINT financial intelligence platform: every data point is sourced from public information." }
        },
        {
          "@type": "Question",
          "name": "How is Tuck different from Bloomberg or Yahoo Finance?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tuck is free, has no login, runs no ads, and never sells user data. It focuses on OSINT cross-correlation — layering congressional trades, geopolitical signals, and macro indicators on top of price data — in a way the major financial portals don't. It is a public educational tool, not a paid terminal." }
        }
      ]
    }
  ]
}
</script>

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


/* \u2500\u2500 RAVID WATCH \u2500\u2500 */
.ravid-bio{background:linear-gradient(135deg,rgba(59,130,246,0.08),rgba(167,139,250,0.05));border:1px solid rgba(59,130,246,0.18);border-radius:12px;padding:16px 18px;margin-bottom:18px;font-size:13.5px;line-height:1.55;color:#cbd5e1}
.ravid-bio strong{color:#f1f5f9}
.ravid-bio .ravid-tag{display:inline-block;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:#60a5fa;font-weight:700;margin-bottom:6px}
.ravid-list{display:flex;flex-direction:column;gap:10px}
.ravid-card{background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px 16px;transition:border-color .15s ease,transform .15s ease;cursor:pointer}
.ravid-card:hover{border-color:rgba(59,130,246,0.35);transform:translateY(-1px)}
.ravid-card .rv-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:6px}
.ravid-card .rv-src{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#60a5fa;font-weight:700}
.ravid-card .rv-date{font-size:10.5px;color:var(--muted)}
.ravid-card .rv-headline{font-size:14px;color:#f1f5f9;font-weight:600;line-height:1.4;margin:2px 0 6px}
.ravid-card .rv-text{font-size:12.5px;color:#94a3b8;line-height:1.5}
.ravid-card .rv-score{display:inline-block;font-size:10px;padding:2px 8px;border-radius:999px;font-weight:700;margin-top:8px}
.ravid-card .rv-score.esc{background:rgba(239,68,68,0.12);color:#fca5a5;border:1px solid rgba(239,68,68,0.25)}
.ravid-card .rv-score.de{background:rgba(34,197,94,0.12);color:#86efac;border:1px solid rgba(34,197,94,0.25)}
.ravid-card .rv-score.nt{background:rgba(148,163,184,0.12);color:#cbd5e1;border:1px solid rgba(148,163,184,0.25)}

/* \u2500\u2500 MACRO \u2500\u2500 */
#macro-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:8px}
.freshness-pill{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;margin-left:8px;border-radius:10px;background:#1c2128;border:1px solid #30363d;color:#7d8590;font-size:10px;font-weight:500;font-family:monospace;letter-spacing:.3px;vertical-align:middle;cursor:help;transition:all .15s}.freshness-pill:hover{border-color:#58a6ff;color:#c9d1d9}.freshness-pill.fresh{border-color:#238636;color:#3fb950}.freshness-pill.stale{border-color:#7d4e00;color:#d29922}.market-status{display:inline-flex;align-items:center;gap:4px;padding:2px 9px;margin-right:8px;border-radius:10px;font-size:10px;font-weight:700;font-family:monospace;letter-spacing:.4px;text-transform:uppercase;border:1px solid #30363d;color:#7d8590;vertical-align:middle}.market-status::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;box-shadow:0 0 5px currentColor}.market-status.ms-open{border-color:#238636;color:#3fb950}.market-status.ms-pre{border-color:#1f6feb;color:#58a6ff}.market-status.ms-after{border-color:#7d4e00;color:#d29922}.market-status.ms-closed{border-color:#484f58;color:#6e7681}.freshness-pill .fp-dot{width:5px;height:5px;border-radius:50%;background:currentColor;box-shadow:0 0 4px currentColor;opacity:.9}

.macro-card{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 14px}
.macro-card.clickable{cursor:pointer;transition:all 0.15s}.macro-card.clickable:hover{border-color:#58a6ff;background:#1c2128;transform:translateY(-1px)}.macro-card.clickable::after{content:"\u27A4";position:absolute;top:8px;right:10px;color:#58a6ff;opacity:0;transition:opacity 0.15s;font-size:0.7rem}.macro-card{position:relative}.macro-card.clickable:hover::after{opacity:1}
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


/* Scenarios section */
.scenarios-grid { display: grid; gap: 14px; margin-top: 12px; }
.scenario-card { background: linear-gradient(135deg, rgba(31,111,235,0.06) 0%, rgba(13,17,23,0.6) 100%); border: 1px solid rgba(88,166,255,0.18); border-radius: 12px; padding: 16px 18px; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
.scenario-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #58a6ff, #1f6feb); }
.scenario-card:hover { border-color: #58a6ff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(31,111,235,0.18); }
.sc-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
.sc-title { font-size: 1rem; color: #f0f6fc; font-weight: 600; line-height: 1.35; flex: 1; }
.sc-conf { display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; }
.sc-conf.high { background: rgba(34,197,94,0.15); color: #86efac; border: 1px solid rgba(34,197,94,0.3); }
.sc-conf.medium { background: rgba(210,153,34,0.15); color: #d29922; border: 1px solid rgba(210,153,34,0.3); }
.sc-conf.low { background: rgba(139,148,158,0.15); color: #8b949e; border: 1px solid rgba(139,148,158,0.3); }
.sc-thesis { font-size: 0.86rem; color: #c9d1d9; line-height: 1.55; margin-bottom: 10px; }
.sc-tickers { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
.sc-tick { display: inline-block; padding: 2px 8px; background: rgba(88,166,255,0.12); color: #79c0ff; border-radius: 5px; font-size: 0.72rem; font-weight: 600; font-family: 'SF Mono', Monaco, monospace; }
.sc-meta { font-size: 0.72rem; color: #8b949e; margin-top: 4px; }
.scenarios-empty { padding: 24px; text-align: center; color: #8b949e; font-style: italic; background: rgba(15,23,42,0.4); border-radius: 10px; border: 1px dashed #30363d; }
.scenario-date { font-size: 0.78rem; color: #8b949e; margin-top: 2px; }
.drill-scenario { padding: 4px; }
.drill-scenario h2 { color: #f0f6fc; margin: 0 0 6px; font-size: 1.4rem; line-height: 1.3; }
.drill-scenario .ds-meta { margin-bottom: 14px; }
.scen-block { background: #161b22; border-left: 3px solid #58a6ff; border-radius: 6px; padding: 12px 16px; margin: 10px 0; }
.scen-block h4 { margin: 0 0 8px; color: #79c0ff; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }
.scen-block ul { margin: 0; padding-left: 20px; color: #c9d1d9; line-height: 1.7; }
.scen-block li { margin-bottom: 4px; }
.scen-block.risk { border-left-color: #f85149; }
.scen-block.risk h4 { color: #f85149; }
.scen-block.thesis-block { border-left-color: #d29922; }
.scen-block.thesis-block p { margin: 0; color: #e6edf3; line-height: 1.6; }


/* Squawk Box — live Benzinga-style feed */
.squawk-controls { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin: 8px 0 14px; }
.squawk-sources { display: flex; gap: 6px; flex-wrap: wrap; flex: 1; }
.squawk-src-chip { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.1); border-radius: 999px; font-size: 11px; color: #94a3b8; cursor: pointer; transition: all .15s; }
.squawk-src-chip:hover { border-color: rgba(59,130,246,0.4); color: #cbd5e1; }
.squawk-src-chip.active { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.5); color: #93c5fd; }
.squawk-src-chip .cnt { font-size: 9.5px; opacity: 0.7; }
.squawk-toolbar { display: flex; gap: 8px; align-items: center; }
.squawk-toggle { padding: 5px 12px; background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: #94a3b8; font-size: 11px; font-weight: 600; cursor: pointer; transition: all .15s; }
.squawk-toggle:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.2); }
.squawk-toggle.on { background: rgba(34,197,94,0.12); border-color: rgba(34,197,94,0.35); color: #86efac; }
.squawk-feed { max-height: 600px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; background: rgba(15,23,42,0.4); padding: 4px; }
.squawk-feed::-webkit-scrollbar { width: 6px; }
.squawk-feed::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 3px; }
.squawk-item { display: grid; grid-template-columns: 64px 1fr; gap: 12px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; transition: background .15s; }
.squawk-item:hover { background: rgba(59,130,246,0.05); }
.squawk-item.fresh { animation: squawkFresh 2.5s ease-out; }
@keyframes squawkFresh { 0% { background: rgba(34,197,94,0.18); } 100% { background: transparent; } }
.sq-time { font-size: 10.5px; color: #64748b; font-family: 'SF Mono', Monaco, monospace; padding-top: 2px; white-space: nowrap; }
.sq-body { min-width: 0; }
.sq-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.sq-src { font-size: 9.5px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; color: #60a5fa; padding: 1px 6px; background: rgba(96,165,250,0.1); border-radius: 3px; }
.sq-impact { font-size: 9.5px; font-weight: 700; padding: 1px 6px; border-radius: 3px; letter-spacing: 0.5px; }
.sq-impact.esc { background: rgba(239,68,68,0.15); color: #fca5a5; }
.sq-impact.de  { background: rgba(34,197,94,0.15); color: #86efac; }
.sq-impact.neut{ background: rgba(148,163,184,0.12); color: #94a3b8; }
.sq-region { font-size: 9.5px; color: #fbbf24; padding: 1px 6px; background: rgba(251,191,36,0.08); border-radius: 3px; }
.sq-headline { font-size: 13px; color: #e2e8f0; line-height: 1.4; font-weight: 500; }
.sq-status { font-size: 11.5px; color: #64748b; text-align: center; padding: 16px; }
.sq-status .pulse { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #22c55e; margin-right: 6px; animation: sqPulse 1.4s infinite; }
@keyframes sqPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
.sq-new-indicator { position: sticky; top: 0; z-index: 1; background: linear-gradient(180deg, rgba(34,197,94,0.18), transparent); color: #86efac; text-align: center; padding: 6px; font-size: 11px; font-weight: 700; cursor: pointer; display: none; }
.sq-new-indicator.visible { display: block; }

/* Drill-down modal */
.dp-deep { background: linear-gradient(135deg, #1f6feb 0%, #3081ed 100%); border: none; color: white; padding: 6px 14px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; margin-right: 8px; transition: all 0.15s; }
.dp-deep:hover { transform: translateY(-1px); box-shadow: 0 2px 12px rgba(31,111,235,0.4); }
.drill-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 9999; display: none; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 40px 16px; }
.drill-overlay.visible { display: flex; }
.drill-modal { background: linear-gradient(180deg, #0d1117 0%, #161b22 100%); border: 1px solid #30363d; border-radius: 14px; max-width: 960px; width: 100%; box-shadow: 0 24px 64px rgba(0,0,0,0.5); overflow: hidden; margin-bottom: 40px; }
.drill-header { position: sticky; top: 0; background: rgba(13,17,23,0.95); backdrop-filter: blur(12px); padding: 20px 24px; border-bottom: 1px solid #30363d; display: flex; justify-content: space-between; align-items: center; z-index: 2; }
.drill-header h2 { margin: 0; font-size: 1.3rem; color: #f0f6fc; }
.drill-close { background: transparent; border: none; color: #8b949e; font-size: 2rem; cursor: pointer; padding: 0 8px; line-height: 1; transition: color 0.15s; }
.drill-close:hover { color: #f85149; }
.drill-content { padding: 24px; max-height: 80vh; overflow-y: auto; color: #e6edf3; }
.drill-loading, .drill-empty, .drill-err { padding: 24px; text-align: center; color: #8b949e; font-style: italic; }
.drill-err { color: #f85149; }
.drill-h { margin: 24px 0 12px; font-size: 1.05rem; color: #79c0ff; border-bottom: 1px solid #30363d; padding-bottom: 6px; }
.drill-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 8px; }
.drill-stat { background: #21262d; border: 1px solid #30363d; border-radius: 8px; padding: 12px; text-align: center; }
.drill-stat.clickable { cursor: pointer; transition: all 0.15s; }
.drill-stat.clickable:hover { background: #2d333b; border-color: #58a6ff; transform: translateY(-1px); }
.drill-stat .lbl { font-size: 0.72rem; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.drill-stat .val { font-size: 1.4rem; font-weight: 600; color: #f0f6fc; }
.drill-stat .sub { font-size: 0.78rem; color: #7d8590; margin-top: 2px; }
.drill-tbl { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 0.84rem; }
.drill-tbl th { text-align: left; padding: 8px 10px; background: #161b22; color: #8b949e; font-weight: 600; border-bottom: 1px solid #30363d; }
.drill-tbl td { padding: 8px 10px; border-bottom: 1px solid #21262d; color: #c9d1d9; }
.drill-tbl tr:hover td { background: rgba(110,168,254,0.06); }
.drill-tbl .chip-house { color: #f85149; font-weight: 600; font-size: 0.7rem; }
.drill-tbl .chip-senate { color: #d29922; font-weight: 600; font-size: 0.7rem; }
.drill-tbl .desc-cell { max-width: 320px; color: #8b949e; font-size: 0.78rem; }
.drill-tbl .ticker-cell { color: #58a6ff; cursor: pointer; font-weight: 600; }
.drill-tbl .ticker-cell:hover { text-decoration: underline; }
.drill-signal { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; cursor: pointer; transition: all 0.15s; }
.drill-signal:hover { border-color: #58a6ff; background: #1c2128; }
.sig-date { font-size: 0.72rem; color: #8b949e; margin-bottom: 4px; }
.sig-head { font-size: 0.92rem; color: #e6edf3; line-height: 1.4; }
.drill-macro { padding: 8px; }
.drill-macro-title { color: #79c0ff; margin: 0 0 6px; font-size: 1.4rem; }
.drill-macro-desc { color: #8b949e; margin: 0 0 16px; font-style: italic; }
.drill-block { background: #161b22; border-left: 3px solid #58a6ff; border-radius: 6px; padding: 12px 16px; margin: 10px 0; }
.drill-block h4 { margin: 0 0 6px; color: #79c0ff; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }
.drill-block p { margin: 0; color: #c9d1d9; line-height: 1.6; }
.drill-tip { border-left-color: #d29922; }
.drill-tip h4 { color: #d29922; }
.drill-signal-full { padding: 4px; }
.ds-meta { font-size: 0.8rem; color: #8b949e; margin-bottom: 8px; }
.ds-head { color: #f0f6fc; margin: 0 0 12px; font-size: 1.3rem; line-height: 1.3; }
.ds-link { display: inline-block; color: #58a6ff; text-decoration: none; margin-bottom: 16px; font-size: 0.85rem; }
.ds-link:hover { text-decoration: underline; }
.ds-full { color: #c9d1d9; line-height: 1.6; white-space: pre-wrap; padding: 12px; background: #161b22; border-radius: 8px; border: 1px solid #30363d; }
.ds-score { display: inline-block; margin-top: 12px; padding: 4px 10px; background: rgba(210,153,34,0.15); color: #d29922; border-radius: 999px; font-size: 0.78rem; font-weight: 600; }
.drill-trader-head { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #30363d; }
.drill-trader-head h2 { margin: 0; color: #f0f6fc; }
.trader-sub { color: #8b949e; font-size: 0.85rem; margin-top: 4px; }
@media (max-width: 640px) {
  .drill-overlay { padding: 8px; }
  .drill-content { padding: 14px; }
  .drill-header { padding: 14px 16px; }
  .drill-tbl { font-size: 0.78rem; }
  .drill-tbl td, .drill-tbl th { padding: 6px 8px; }
}

/* ── ABOUT MODAL ── */
.about-overlay {
  position: fixed; inset: 0; background: rgba(2, 6, 16, 0.92);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  z-index: 10000; display: none; align-items: flex-start; justify-content: center;
  overflow-y: auto; padding: 60px 16px; animation: aboutFadeIn 0.25s ease-out;
}
.about-overlay.visible { display: flex; }
@keyframes aboutFadeIn { from { opacity: 0; } to { opacity: 1; } }
.about-modal {
  background: linear-gradient(180deg, #0a0f1e 0%, #131a2e 100%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; max-width: 720px; width: 100%;
  box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,102,241,0.18) inset;
  position: relative; overflow: hidden; margin-bottom: 40px;
}
.about-close {
  position: absolute; top: 14px; right: 18px; background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; width: 32px; height: 32px;
  border-radius: 50%; font-size: 22px; line-height: 1; display: flex; align-items: center;
  justify-content: center; cursor: pointer; transition: all 0.15s; z-index: 2;
}
.about-close:hover { background: rgba(239,68,68,0.15); color: #fca5a5; border-color: rgba(239,68,68,0.3); }
.about-content { padding: 42px 44px 36px; color: #cbd5e1; font-size: 15px; line-height: 1.7; }
.about-logo-row { display: flex; align-items: center; gap: 16px; margin-bottom: 4px; }
.about-logo-mark {
  font-size: 36px; width: 56px; height: 56px; display: flex; align-items: center;
  justify-content: center; background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(59,130,246,0.1));
  border: 1px solid rgba(99,102,241,0.3); border-radius: 14px;
}
.about-content h2 { font-size: 24px; font-weight: 800; color: #f1f5f9; margin: 0; letter-spacing: -0.5px; }
.about-content h3 { font-size: 18px; font-weight: 700; color: #e2e8f0; margin: 0 0 2px 0; }
.about-sub { font-size: 12px; color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600; margin-top: 4px; }
.about-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent); margin: 24px 0; }
.about-lead { font-size: 16px; color: #e2e8f0; font-style: italic; font-weight: 500; border-left: 3px solid rgba(99,102,241,0.5); padding-left: 16px; margin-bottom: 18px; }
.about-content p { margin-bottom: 14px; color: #cbd5e1; }
.about-content p strong { color: #f1f5f9; font-weight: 700; }
.about-content a { color: #93c5fd; text-decoration: none; border-bottom: 1px dashed rgba(147,197,253,0.3); }
.about-content a:hover { color: #bfdbfe; border-bottom-color: #bfdbfe; }
.about-pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 4px; }
.about-pill {
  font-size: 11px; padding: 6px 12px; border-radius: 999px; font-weight: 600;
  background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); color: #c7d2fe;
  letter-spacing: 0.3px;
}
.about-vpdlny-block {
  background: rgba(99,102,241,0.04); border: 1px solid rgba(99,102,241,0.15);
  border-radius: 12px; padding: 22px 24px; margin: 4px 0;
}
.about-vpdlny-mark { font-size: 28px; margin-bottom: 8px; }
.about-creed { font-style: italic; color: #c7d2fe; font-size: 14px; margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); }
.about-faq { margin: 4px 0; }
.about-faq details {
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px; padding: 12px 16px; margin-bottom: 8px; transition: all 0.15s;
}
.about-faq details[open] { background: rgba(99,102,241,0.05); border-color: rgba(99,102,241,0.2); }
.about-faq summary { font-weight: 600; color: #e2e8f0; cursor: pointer; font-size: 14px; user-select: none; list-style: none; position: relative; padding-right: 24px; }
.about-faq summary::-webkit-details-marker { display: none; }
.about-faq summary::after { content: '+'; position: absolute; right: 0; top: 0; font-size: 18px; color: #94a3b8; transition: transform 0.2s; }
.about-faq details[open] summary::after { transform: rotate(45deg); color: #c7d2fe; }
.about-faq details p { margin: 10px 0 2px; font-size: 13.5px; color: #94a3b8; line-height: 1.65; }
.about-footer-row {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;
  font-size: 11px; color: #64748b; padding-top: 18px; margin-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.06); letter-spacing: 0.4px;
}
.about-creed-small { font-style: italic; color: #94a3b8; }
@media (max-width: 600px) {
  .about-content { padding: 32px 22px 24px; font-size: 14px; }
  .about-content h2 { font-size: 20px; }
  .about-overlay { padding: 16px 8px; }
}


/* ── TUCK'S SCORE BADGE ON WATCHLIST CARD ── */
.wl-card { position: relative; }
.ts-badge {
  position: absolute; top: 6px; right: 6px;
  width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 800; color: #fff;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.2s;
}
.ts-badge:empty { display: none; }
.ts-badge.ts-hot       { background: linear-gradient(135deg, #ef4444, #f97316); border-color: rgba(239,68,68,0.5); }
.ts-badge.ts-warm      { background: linear-gradient(135deg, #22c55e, #84cc16); border-color: rgba(34,197,94,0.5); }
.ts-badge.ts-neutral   { background: linear-gradient(135deg, #64748b, #475569); border-color: rgba(100,116,139,0.5); }
.ts-badge.ts-cool      { background: linear-gradient(135deg, #3b82f6, #6366f1); border-color: rgba(59,130,246,0.5); }
.ts-badge.ts-cold      { background: linear-gradient(135deg, #1e293b, #0f172a); border-color: rgba(100,116,139,0.4); color: #94a3b8; }

/* ── TUCK'S SCORE LEADERBOARD ── */
.score-row {
  display: grid; grid-template-columns: 50px 80px 1fr 60px 60px 60px 60px 60px 60px;
  gap: 8px; align-items: center; padding: 12px 10px;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px; margin-bottom: 6px; cursor: pointer;
  transition: all 0.15s;
}
.score-row:hover { background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.25); }
.score-row .sr-rank { font-size: 14px; font-weight: 800; color: #94a3b8; text-align: center; }
.score-row .sr-total {
  font-size: 24px; font-weight: 900; text-align: center;
  background: linear-gradient(135deg, var(--c1), var(--c2));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.score-row .sr-ticker-block { display: flex; flex-direction: column; gap: 2px; }
.score-row .sr-ticker { font-size: 16px; font-weight: 800; color: #f1f5f9; letter-spacing: 0.3px; }
.score-row .sr-verdict { font-size: 11px; color: #94a3b8; font-weight: 600; }
.score-row .sr-delta { font-size: 12px; font-weight: 700; text-align: center; }
.score-row .sr-delta.up { color: #4ade80; }
.score-row .sr-delta.dn { color: #f87171; }
.score-row .sr-delta.flat { color: #64748b; }
.score-row .sr-sub { text-align: center; }
.score-row .sr-sub-val { font-size: 13px; font-weight: 700; color: #cbd5e1; }
.score-row .sr-sub-lbl { font-size: 9px; color: #64748b; letter-spacing: 0.3px; text-transform: uppercase; }
.score-header {
  display: grid; grid-template-columns: 50px 80px 1fr 60px 60px 60px 60px 60px 60px;
  gap: 8px; padding: 4px 10px; margin-bottom: 6px;
  font-size: 10px; color: #64748b; letter-spacing: 0.4px; text-transform: uppercase; font-weight: 700;
}
.score-header span { text-align: center; }
.score-header .sh-ticker { text-align: left; padding-left: 4px; }
@media (max-width: 720px) {
  .score-row { grid-template-columns: 40px 56px 1fr 50px; font-size: 12px; }
  .score-row .sr-sub:nth-child(n+5) { display: none; }
  .score-header { grid-template-columns: 40px 56px 1fr 50px; }
  .score-header span:nth-child(n+5) { display: none; }
}

/* ── SECTOR HEAT MAP ── */
.heatmap-section {
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px; padding: 14px 16px; margin-bottom: 12px;
}
.heatmap-sector-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.heatmap-sector-name { font-size: 13px; font-weight: 800; color: #cbd5e1; letter-spacing: 0.4px; text-transform: uppercase; }
.heatmap-sector-avg { font-size: 12px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.heatmap-cells { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px; }
.heat-cell {
  border-radius: 8px; padding: 12px 10px; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.08); transition: all 0.15s;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 88px;
}
.heat-cell:hover { transform: scale(1.04); box-shadow: 0 4px 12px rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.2); }
.heat-cell .hc-ticker { font-size: 16px; font-weight: 800; color: #fff; letter-spacing: 0.3px; }
.heat-cell .hc-chg { font-size: 13px; font-weight: 700; margin-top: 2px; }
.heat-cell .hc-price { font-size: 10px; color: rgba(255,255,255,0.7); margin-top: 4px; font-variant-numeric: tabular-nums; }
.heat-cell.heat-up-big   { background: linear-gradient(135deg, #064e3b, #15803d); }
.heat-cell.heat-up       { background: linear-gradient(135deg, #14532d, #166534); }
.heat-cell.heat-up-mild  { background: linear-gradient(135deg, #1e3a2b, #14532d); }
.heat-cell.heat-flat     { background: linear-gradient(135deg, #1e293b, #334155); }
.heat-cell.heat-dn-mild  { background: linear-gradient(135deg, #3a1e1e, #7f1d1d); }
.heat-cell.heat-dn       { background: linear-gradient(135deg, #7f1d1d, #991b1b); }
.heat-cell.heat-dn-big   { background: linear-gradient(135deg, #991b1b, #b91c1c); }



/* ── DRILL-DOWN TUCK'S SCORE PANEL ── */
.drill-score-panel-host { margin-bottom: 18px; }
.drill-score-loading { padding: 16px; background: rgba(255,255,255,0.03); border-radius: 10px; color: #94a3b8; text-align: center; font-size: 13px; }
.drill-score-empty { padding: 14px 16px; background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2); border-radius: 10px; color: #fca5a5; font-size: 13px; }
.drill-score-panel {
  background: linear-gradient(180deg, rgba(99,102,241,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(99,102,241,0.2); border-radius: 14px;
  padding: 18px 20px;
}
.dscore-header {
  display: flex; align-items: center; gap: 18px;
  padding-bottom: 14px; margin-bottom: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.dscore-big {
  font-size: 64px; font-weight: 900; line-height: 1;
  background: linear-gradient(135deg, var(--c1, #6366f1), var(--c2, #8b5cf6));
  -webkit-background-clip: text; background-clip: text; color: transparent;
  min-width: 90px; text-align: center;
}
.dscore-meta { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.dscore-title { font-size: 11px; color: #94a3b8; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; }
.dscore-verdict { font-size: 22px; font-weight: 800; color: #f1f5f9; }
.dscore-delta { font-size: 12px; font-weight: 600; }
.dscore-delta-up { color: #4ade80; }
.dscore-delta-dn { color: #f87171; }
.dscore-delta-flat { color: #64748b; }
.dscore-explainer { font-size: 12px; color: #94a3b8; margin-bottom: 14px; font-style: italic; }
.dscore-bars { display: flex; flex-direction: column; gap: 14px; }
.dscore-row { display: flex; flex-direction: column; gap: 4px; }
.dscore-row-head { display: flex; justify-content: space-between; align-items: baseline; }
.dscore-row-lbl { font-size: 13px; font-weight: 700; color: #cbd5e1; }
.dscore-weight { font-size: 10px; color: #64748b; font-weight: 600; margin-left: 4px; }
.dscore-row-val { font-size: 16px; font-weight: 800; color: #f1f5f9; font-variant-numeric: tabular-nums; }
.dscore-bar-track { background: rgba(255,255,255,0.06); border-radius: 999px; height: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.04); }
.dscore-bar-fill { height: 100%; border-radius: 999px; transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 0 8px currentColor; }
.dscore-row-detail { font-size: 11px; color: #94a3b8; font-variant-numeric: tabular-nums; }
.dscore-footer { font-size: 10px; color: #64748b; margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; }

@media (max-width: 600px) {
  .dscore-header { flex-direction: column; align-items: flex-start; gap: 8px; }
  .dscore-big { font-size: 48px; min-width: auto; }
  .dscore-verdict { font-size: 18px; }
}


/* ── DRILL-DOWN SPARKLINE ── */
.dscore-spark-host { margin-bottom: 16px; }
.dscore-spark { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 12px 14px; }
.dscore-spark-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.dscore-spark-label { font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
.dscore-spark-trend { font-size: 13px; font-weight: 800; font-variant-numeric: tabular-nums; }
.dscore-spark-svg { width: 100%; height: 60px; display: block; }
.dscore-spark-svg .spark-dot { opacity: 0; transition: opacity 0.15s; }
.dscore-spark-svg .spark-dot-grp:hover .spark-dot { opacity: 1; }
.dscore-spark-axis { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 9px; color: #64748b; font-variant-numeric: tabular-nums; }
.dscore-spark-axis .spark-axis-mid { color: #475569; font-style: italic; }
.dscore-spark-empty { background: rgba(99,102,241,0.04); border: 1px dashed rgba(99,102,241,0.2); border-radius: 10px; padding: 14px 16px; font-size: 12px; color: #94a3b8; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px; }
.dscore-spark-empty .spark-icon { font-size: 18px; }
@media (max-width: 600px) { .dscore-spark-axis .spark-axis-mid { display: none; } }

</style>
</head>
<body>


<!-- DISCLAIMER GATE -->
<div id="gate-overlay">
  <div id="gate-box">
    <div class="gate-logo">
      <div class="gate-logo-icon"><img src="/img/tuck/tuck-v5-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:10px;object-fit:cover" /></div>
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
      <li><span class="gi no">\u{1F6AB}</span><span>Tuck's Watchlist is a <strong style="color:#fca5a5">study list</strong>, not a buy list. No security here is recommended for purchase.</span></li>
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
    <div class="logo-icon"><img src="/img/tuck/tuck-v5-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:7px;object-fit:cover" /></div>
    <div>
      <h1>Tuck</h1>
      <div class="tagline">FREE \xB7 OPEN \xB7 NO ADVICE \xB7 NO PFOF</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <div class="nav-links">
      <button class="nav-link active" onclick="goToSection('watchlist')">Watchlist</button>
      <button class="nav-link" onclick="goToSection('news')">News</button>
      <button class="nav-link" onclick="goToSection('ravid')">Ravid</button>
      <button class="nav-link" onclick="goToSection('congress')">Congress</button>
      <button class="nav-link" onclick="goToSection('scenarios')">🎯 Scenarios</button>
      <button class="nav-link" onclick="goToSection('scores')">🏷️ Score</button>
      <button class="nav-link" onclick="goToSection('heatmap')">🔥 Heat</button>
      <button class="nav-link" onclick="goToSection('macro')">Macro</button>
      <button class="nav-link" onclick="goToSection('learn')">Learn</button>
      <button class="nav-link" onclick="openAboutModal()" title="About Indica Independent Media and VPDLNY">About</button>
    </div>
    <div class="nav-pill"><span class="live-dot"></span> LIVE DATA</div>
  </div>
</nav>

<!-- HERO -->
<div id="hero">
  <div class="eyebrow">Free forever \xB7 Open source \xB7 VPDLNY</div>
  <div class="hero-tuck-wrap"><div class="hero-tuck-copy"><h2>Meet Tuck.</h2><p class="tuck-bio">Patron saint of the unbanked, the unpriced, and the unwelcome. He stands with the vulnerable, the poor, and the oppressed — freeing them from the bonds of class warfare with the one weapon Wall Street fears most: information.</p><p class="tuck-kicker">What they hoard, <span>we hand back.</span></p></div><div class="hero-tuck-art"><img src="/img/tuck/tuck-v5-hero.png" alt="Tuck the friar mascot" loading="eager"/></div></div>
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
        <span id="watchlist-title">Tuck's Study Watchlist</span>
        <span class="section-badge">12 STOCKS</span>
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
        <button class="dp-deep" onclick="openDrill('ticker', state.activeStock, state.activeStock)">\u{1F50E} Full Drill-Down</button>
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

  <!-- \u2500\u2500 RAVID WATCH \u2500\u2500 -->
  <div class="section" id="ravid">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F575}\uFE0F</span>
        Ravid Watch
        <span class="section-badge">SCOOPS</span>
      </div>
      <div class="section-sub">Real-time geopolitical signals from Barak Ravid \u2014 the journalist who broke the Abraham Accords, Hamas-Israel ceasefire talks, and the Trump-Iran backchannel</div>
    </div>
    <div class="ravid-bio">
      <div class="ravid-tag">\u{1F4DD} Who is Barak Ravid?</div>
      Veteran Israeli journalist \u2014 senior diplomatic correspondent for <strong>Axios</strong> and political analyst for <strong>Channel 12 News (Israel)</strong>. Author of <em>"Trump's Peace: The Abraham Accords and the Reshaping of the Middle East."</em> Has broken more Trump-era Middle East stories than any other Western reporter \u2014 from the original UAE-Israel normalization to the current Iran nuclear backchannel. When markets move on Iran/Hormuz/Gaza/Saudi headlines, it's usually because <strong>Ravid reported it first.</strong>
    </div>
    <div id="ravid-list" class="ravid-list"><div class="spinner">\u{1F575}\uFE0F Loading Ravid signals\u2026</div></div>
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

  <!-- SCENARIOS -->
  <div class="section" id="scenarios">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F3AF}</span>
        Today's Trading Scenarios
        <span class="section-badge">AI</span>
      </div>
      <div class="section-sub">Daily AI-generated theses from cross-correlated intel \u00b7 <span id="scenarios-date">—</span></div>
    </div>
    <div class="scenarios-grid" id="scenarios-grid">
      <div class="scenarios-empty">Loading scenarios...</div>
    </div>
  </div>

  <!-- \u2500\u2500 MACRO CORNER \u2500\u2500 -->
  <!-- ── TUCK'S SCORE LEADERBOARD ── -->
<div class="section" id="scores">
  <div class="section-hdr">
    <div class="section-title">
      <span class="s-icon">🏷️</span>
      Tuck's Score
      <span class="section-badge" id="scores-date-badge">DAILY</span>
    </div>
    <div class="section-sub">A daily 0-100 composite score blending price momentum, news heat, Ravid geopolitical signals, congressional flow, and AI scenario alignment.</div>
  </div>
  <div id="scores-leaderboard"><div class="spinner">🏷️ Loading Tuck's scores…</div></div>
  <div style="font-size:10px;color:var(--dim);margin-top:8px;text-align:center">
    Recomputed every weekday morning. Educational only. Not advice.
  </div>
</div>

<!-- ── SECTOR HEAT MAP ── -->
<div class="section" id="heatmap">
  <div class="section-hdr">
    <div class="section-title">
      <span class="s-icon">🔥</span>
      <span id="heatmap-title">Sector Heat Map</span>
      <span class="section-badge">LIVE</span>
    </div>
    <div class="section-sub">Visual grid of watchlist performance, grouped by sector. Color = 5-day momentum.</div>
  </div>
  <div id="heatmap-grid"><div class="spinner">🔥 Loading heat…</div></div>
  <div style="font-size:10px;color:var(--dim);margin-top:8px;text-align:center">
    Green = positive 5d momentum · Red = negative · Click any cell for ticker drill-down
  </div>
</div>

<div class="section" id="macro">
    <div class="section-hdr">
      <div class="section-title">
        <span class="s-icon">\u{1F310}</span>
        <span id="macro-title">Macro Corner</span>
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
      <p>Built by <strong>Indica Independent Media</strong> — the public face of <a href="https://discord.gg/vpdlny" target="_blank">VPDLNY</a>. A collective of technologists and artists who use knowledge as a tool to defend vulnerable communities.</p>
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
    <strong>Full Disclaimer:</strong> Tuck is an educational information platform. Nothing on this website constitutes investment advice, a recommendation to buy or sell any security, a solicitation of any investment, or financial guidance of any kind. All data displayed is sourced from publicly available APIs and filings (Finnhub, Yahoo Finance, SEC EDGAR, Federal Reserve FRED, CapitolTrades, RSS news feeds). Past price movements do not predict future performance. Congressional trading data reflects public SEC disclosures and does not imply any impropriety. "Tuck's Watchlist" reflects stocks the editorial team finds interesting to study \u2014 this is not an endorsement, recommendation, or suggestion to invest. Tuck is not registered as an investment advisor with any regulatory body. Always consult a licensed financial professional before making investment decisions.
  </div>
</footer>

<script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const WATCHLIST = ${JSON.stringify(WATCHLIST)};
const TICKER_SET = new Set(WATCHLIST.map(w=>w.ticker));
const SECTOR_EXPLAINERS = ${JSON.stringify(SECTOR_EXPLAINERS)};

// ── Freshness tracking — shows "Updated X ago" on cached data ──
window.tuckFreshness = { macro: null, prices: null, score: null, heat: null };
function formatAgo(iso) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  if (isNaN(then)) return '';
  const sec = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (sec < 60)    return 'just now';
  if (sec < 3600)  return Math.floor(sec/60) + ' min ago';
  if (sec < 86400) return Math.floor(sec/3600) + 'h ago';
  return Math.floor(sec/86400) + 'd ago';
}
function freshnessClass(iso) {
  if (!iso) return '';
  const sec = (Date.now() - new Date(iso).getTime()) / 1000;
  if (sec < 7200) return 'fresh';
  if (sec < 28800) return '';
  return 'stale';
}
function renderFreshness(key, hostElId) {
  const iso = window.tuckFreshness[key];
  const host = document.getElementById(hostElId);
  if (!host) return;
  const old = host.querySelector('.freshness-pill');
  if (old) old.remove();
  if (!iso) return;
  const pill = document.createElement('span');
  pill.className = 'freshness-pill ' + freshnessClass(iso);
  pill.innerHTML = '<span class="fp-dot"></span>Updated ' + formatAgo(iso);
  pill.title = 'Cached at ' + iso + ' — auto-refreshes 6 AM + 1 PM ET weekdays';
  host.appendChild(pill);
}
function refreshAllPills() {
  renderFreshness('macro', 'macro-title');
  renderFreshness('prices', 'watchlist-title');
  renderFreshness('score', 'scores-title');
  renderFreshness('heat', 'heatmap-title');
}
setInterval(refreshAllPills, 60000);

let state = {
  prices: {}, signals: [], stats: null, congress: [], macro: {},

  newsTab: 'all', newsRegion: 'All', activeStock: null
};

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const fmt  = (n,d=2) => n!=null?Number(n).toFixed(d):'\u2014';
const fmtB = n => { if(!n) return '\u2014'; if(n>=1e12) return '$'+(n/1e12).toFixed(2)+'T'; if(n>=1e9) return '$'+(n/1e9).toFixed(1)+'B'; return '$'+(n/1e6).toFixed(0)+'M'; };
const age  = iso => { const m=Math.floor((Date.now()-new Date(iso))/60000); return m<60?m+'m':m<1440?Math.floor(m/60)+'h':Math.floor(m/1440)+'d'; };
const esc  = s => { const d=document.createElement('div');d.textContent=s;return d.innerHTML; };
function goToSection(id){
  if (id === "heatmap") loadHeatMap();
  if (id === "scores" && !tucksScoresCache) loadTucksScores();
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  // Update active nav highlight
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const btn = Array.from(document.querySelectorAll('.nav-link'))
    .find(b => (b.getAttribute('onclick')||'').includes("'"+id+"'"));
  if (btn) btn.classList.add('active');
}

// \u2500\u2500 PRICES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
async function loadPrices() {
  try {
    const d = await fetch('/api/prices').then(r=>r.json());
    if (d && d._cached_at) { window.tuckFreshness.prices = d._cached_at; renderFreshness('prices','watchlist-title'); }
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
const REGION_ICONS   = {'Iran/Hormuz':'\u{1F6E2}\uFE0F','Ukraine/NATO':'\u{1F1FA}\u{1F1E6}','Israel/Gaza':'\u2694\uFE0F','China/Taiwan':'\u{1F409}','Cuba':'\u{1F334}','Global':'\u{1F30D}'};
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
      (REGION_ICONS[r]||'')+' '+r+cnt+'</button>';
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

// (setNewsTab moved to SQUAWK section)

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
async function loadRavid() {
  try {
    const r = await fetch('/api/ravid');
    const d = await r.json();
    const items = d.signals || d.items || [];
    if (!items.length) {
      document.getElementById('ravid-list').innerHTML = '<div class="err-box">No Ravid signals in the last 7 days. The ingest pipeline runs every 5 minutes via the OptiPlex home-IP proxy.</div>';
      return;
    }
    document.getElementById('ravid-list').innerHTML = items.slice(0,15).map(it => {
      const score = (it.market_impact_score!=null) ? Number(it.market_impact_score) : null;
      let cls='nt', label='NEUTRAL';
      if (score!=null) {
        if (score >= 0.5)      { cls='esc'; label='ESCALATION +' + score.toFixed(2); }
        else if (score <= -0.5){ cls='de';  label='DE-ESCALATION ' + score.toFixed(2); }
        else                   { cls='nt';  label='NEUTRAL ' + score.toFixed(2); }
      }
      const ts = it.published_at ? new Date(it.published_at).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}) : '';
      const txt = (it.full_text||'').slice(0,260);
      const ellip = (it.full_text||'').length>260 ? '\u2026' : '';
      return '<div class="ravid-card" onclick="openDrill(&quot;signal&quot;, &quot;'+esc(it.signal_id||it.id||'')+'&quot;, &quot;'+esc((it.headline||'').slice(0,60).replace(/"/g,"'"))+'&quot;)">'
        +'<div class="rv-head"><span class="rv-src">'+esc(it.source||'Ravid')+'</span><span class="rv-date">'+esc(ts)+'</span></div>'
        +'<div class="rv-headline">'+esc(it.headline||'(no headline)')+'</div>'
        +(txt?'<div class="rv-text">'+esc(txt)+ellip+'</div>':'')
        +(score!=null?'<div class="rv-score '+cls+'">'+label+'</div>':'')
        +'</div>';
    }).join('');
  } catch(e) {
    document.getElementById('ravid-list').innerHTML = '<div class="err-box">Ravid signals temporarily unavailable.</div>';
  }
}

async function loadMacro() {
  try {
    const d = await fetch('/api/macro').then(r=>r.json());
    state.macro = d;
    window.tuckFreshness.macro = d._cached_at || null;
    renderFreshness('macro','macro-title');
    const cards = [
      { drillId:'fed_rate', lbl:'Fed Rate', val: d.fed_rate!=null ? d.fed_rate.toFixed(2)+'%' : '\u2014',
        sub:'Federal Funds Rate', trend:null,
        why:"The Federal Reserve's key interest rate. When rates go up, borrowing costs rise and stocks often fall. When rates come down, stocks usually rally." },
      { drillId:'cpi', lbl:'CPI Inflation', val: d.cpi!=null ? d.cpi.toFixed(1)+'%' : '\u2014',
        sub:'Year-over-year', trend: d.cpi_trend,
        why:"How fast prices are rising. High inflation = Fed raises rates = pressure on stocks. The 2022-2023 rate hike cycle crushed growth stocks." },
      { drillId:'unemployment', lbl:'Unemployment', val: d.unemployment!=null ? d.unemployment.toFixed(1)+'%' : '\u2014',
        sub:'US jobless rate', trend: d.unemp_trend,
        why:"A strong job market is good for stocks (people spend money). But if unemployment is TOO low, the Fed raises rates to cool inflation." },
      { drillId:'us10y', lbl:'10yr Treasury', val: d.treasury_10y!=null ? d.treasury_10y.toFixed(2)+'%' : '\u2014',
        sub:'US 10-year yield', trend: d.treasury_trend,
        why:'The "risk-free" return. When this rises, tech stocks fall because investors can earn more from safe bonds. Watch this closely with NET and NVDA.' },
      { drillId:'oil', lbl:'WTI Crude Oil', val: d.oil_price!=null ? '$'+d.oil_price.toFixed(2) : '\u2014',
        sub:'Barrel price (USD)', trend: d.oil_trend,
        why:"Oil price directly drives USO and XLE. Middle East tension spikes it. OPEC supply decisions crush it. Always connected to geopolitical news." },
      { drillId:'dxy', lbl:'US Dollar (DXY)', val: d.dxy!=null ? d.dxy.toFixed(1) : '\u2014',
        sub:'Dollar index', trend: d.dxy_trend,
        why:"A strong dollar hurts multinational companies like NVDA (overseas revenue worth less when converted). A weak dollar helps them." },
      { drillId:'vix', lbl:'VIX (Fear Index)', val: d.vix!=null ? d.vix.toFixed(2) : '\u2014',
        sub:'Market volatility', trend: d.vix_trend,
        why:"The 'fear gauge.' Below 15 = complacent market. Above 20 = nervous. Above 30 = panic. Stocks usually rally when VIX is falling \u2014 it's the inverse of confidence." },
      { drillId:'gold', lbl:'Gold', val: d.gold!=null ? '$'+d.gold.toFixed(2) : '\u2014',
        sub:'Per ounce (USD)', trend: d.gold_trend,
        why:"The ancient flight-to-safety asset. Rises when investors lose faith in currencies or governments. War, inflation, and rate cuts all push gold higher. The opposite trade of crypto in many ways." },
      { drillId:'btc', lbl:'Bitcoin', val: d.btc!=null ? '$'+d.btc.toLocaleString() : '\u2014',
        sub:'BTC/USD', trend: d.btc_trend,
        why:"Digital store of value AND risk asset \u2014 moves with tech stocks during risk-on, but acts like gold during currency stress. The first crypto, and the only one most institutional investors will touch." },
      { drillId:'copper', lbl:'Copper', val: d.copper!=null ? '$'+d.copper.toFixed(2) : '\u2014',
        sub:'Per pound (USD)', trend: d.copper_trend,
        why:"'Dr. Copper' \u2014 the metal with a PhD in economics. Used in every building, EV, and electrical grid. When copper rises, global industrial demand is healthy. When it falls fast, recession may be coming." },
    ];
    document.getElementById('macro-grid').innerHTML = cards.map(c => {
      const trendHtml = c.trend ? '<div class="macro-trend '+(c.trend==='up'?'trend-up':c.trend==='down'?'trend-dn':'trend-flat')+'">'+( c.trend==='up'?'\u25B2 Rising':c.trend==='down'?'\u25BC Falling':'\u2192 Stable')+'</div>' : '';
      return '<div class="macro-card'+(c.drillId?' clickable':'')+'"'+(c.drillId?' onclick="openDrill(&quot;macro&quot;, &quot;'+c.drillId+'&quot;, &quot;'+c.lbl+'&quot;)"':'')+'>'
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



// === SCENARIOS ===
async function loadScenarios() {
  try {
    const r = await fetch('/api/scenarios');
    const d = await r.json();
    const list = d.scenarios || [];
    const grid = document.getElementById('scenarios-grid');
    if (!grid) return;
    if (!list.length) {
      grid.innerHTML = '<div class="scenarios-empty">No scenarios yet. The engine runs daily at 6 AM ET on weekdays.</div>';
      return;
    }
    const date = list[0]?.scenario_date || '';
    const dateLbl = document.getElementById('scenarios-date');
    if (dateLbl) dateLbl.textContent = date;
    grid.innerHTML = list.map(s => {
      const tickers = (s.tickers_affected || []).slice(0,6);
      const conf = (s.confidence || 'medium').toLowerCase();
      return '<div class="scenario-card" onclick="openDrill(&quot;scenario&quot;, &quot;'+s.id+'&quot;, &quot;'+esc((s.title||'').slice(0,60).replace(/"/g,"'"))+'&quot;)">'
        +'<div class="sc-head">'
          +'<div class="sc-title">'+esc(s.title||'(no title)')+'</div>'
          +'<span class="sc-conf '+conf+'">'+conf+'</span>'
        +'</div>'
        +'<div class="sc-thesis">'+esc((s.thesis||'').slice(0,220))+(s.thesis && s.thesis.length>220?'…':'')+'</div>'
        +(tickers.length?'<div class="sc-tickers">'+tickers.map(t=>'<span class="sc-tick">'+esc(t)+'</span>').join('')+'</div>':'')
        +'<div class="sc-meta">⏱ '+esc(s.time_horizon||'short')+' · click for full thesis</div>'
        +'</div>';
    }).join('');
  } catch(e) {
    const grid = document.getElementById('scenarios-grid');
    if (grid) grid.innerHTML = '<div class="scenarios-empty">Scenarios temporarily unavailable.</div>';
  }
}

function renderDrillScenario(d) {
  const s = d.scenario || {};
  const sup = s.supporting_data || [];
  const risk = s.risk_factors || [];
  const tick = s.tickers_affected || [];
  const conf = (s.confidence||'medium').toLowerCase();
  
  return '<div class="drill-scenario">'
    +'<div class="ds-meta">'+esc(s.scenario_date||'')+' · <span class="sc-conf '+conf+'">'+conf+'</span> · ⏱ '+esc(s.time_horizon||'short')+'</div>'
    +'<h2>'+esc(s.title||'')+'</h2>'
    +(tick.length?'<div class="sc-tickers" style="margin-bottom:14px">'+tick.map(t=>'<span class="sc-tick" style="cursor:pointer" onclick="openDrill(&quot;ticker&quot;, &quot;'+esc(t)+'&quot;, &quot;'+esc(t)+'&quot;)">'+esc(t)+'</span>').join('')+'</div>':'')
    +'<div class="scen-block thesis-block"><h4>Trading Thesis</h4><p>'+esc(s.thesis||'')+'</p></div>'
    +(sup.length?'<div class="scen-block"><h4>📊 Supporting Data</h4><ul>'+sup.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'')
    +(risk.length?'<div class="scen-block risk"><h4>⚠️ Risk Factors</h4><ul>'+risk.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'')
    +'<div class="sc-meta">Generated by '+esc(s.model||'AI')+'</div>'
    +'</div>';
}



// === SQUAWK BOX ===
let squawkState = { active: false, latestId: null, sourceFilter: 'all', soundOn: false, pollHandle: null, pendingNew: 0 };

function setNewsTab(tab, btn) {
  document.querySelectorAll('.tab-bar .tab').forEach(t=>t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  // If switching away from squawk, stop polling
  if (squawkState.active && tab !== 'squawk') {
    stopSquawk();
  }
  
  if (tab === 'squawk') {
    startSquawk();
    return;
  }
  
  // Standard news tabs
  state.newsTab = tab;
  loadNews();
}

async function startSquawk() {
  squawkState.active = true;
  const list = document.getElementById('news-list');
  if (!list) return;
  list.innerHTML = '<div class="squawk-controls">'
    +'<div class="squawk-sources" id="squawk-sources">Loading sources...</div>'
    +'<div class="squawk-toolbar">'
      +'<button class="squawk-toggle" id="squawk-sound" onclick="toggleSquawkSound()">🔔 Sound OFF</button>'
    +'</div>'
  +'</div>'
  +'<div class="sq-new-indicator" id="sq-new-ind" onclick="acceptSquawkNew()">↑ click to show new headlines</div>'
  +'<div class="squawk-feed" id="squawk-feed">'
    +'<div class="sq-status"><span class="pulse"></span>Connecting to live feed...</div>'
  +'</div>';
  
  // Initial load
  await squawkPoll(true);
  
  // Poll every 20s for new items
  squawkState.pollHandle = setInterval(() => squawkPoll(false), 20000);
}

function stopSquawk() {
  squawkState.active = false;
  if (squawkState.pollHandle) {
    clearInterval(squawkState.pollHandle);
    squawkState.pollHandle = null;
  }
}

async function squawkPoll(initial) {
  try {
    const params = new URLSearchParams();
    params.set('limit', initial ? '40' : '30');
    if (!initial && squawkState.latestId) params.set('since', squawkState.latestId);
    if (squawkState.sourceFilter !== 'all') params.set('source', squawkState.sourceFilter);
    
    const r = await fetch('/api/squawk?' + params.toString());
    const d = await r.json();
    if (!d.ok) throw new Error(d.error || 'fetch failed');
    
    const feed = document.getElementById('squawk-feed');
    if (!feed) return;
    
    if (initial) {
      // Render sources
      const sourcesEl = document.getElementById('squawk-sources');
      if (sourcesEl && d.sources) {
        const total = d.sources.reduce((a,s)=>a+s.count,0);
        sourcesEl.innerHTML = '<div class="squawk-src-chip active" onclick="setSquawkSource(&quot;all&quot;,this)">All <span class="cnt">'+total+'</span></div>' +
          d.sources.slice(0,10).map(s => 
            '<div class="squawk-src-chip" onclick="setSquawkSource(&quot;'+esc(s.source)+'&quot;,this)">'+esc(s.source)+' <span class="cnt">'+s.count+'</span></div>'
          ).join('');
      }
      // Render initial signals
      if (!d.signals.length) {
        feed.innerHTML = '<div class="sq-status">No signals matching filter.</div>';
      } else {
        feed.innerHTML = d.signals.map(s => renderSquawkItem(s, false)).join('');
        squawkState.latestId = d.signals[0].id;
      }
    } else {
      // Incremental: prepend new items
      if (d.signals.length > 0) {
        const newHtml = d.signals.map(s => renderSquawkItem(s, true)).join('');
        feed.insertAdjacentHTML('afterbegin', newHtml);
        squawkState.latestId = d.signals[0].id;
        
        // Play sound if enabled
        if (squawkState.soundOn) playSquawkBeep();
        
        // Trim feed to last 200 items
        const items = feed.querySelectorAll('.squawk-item');
        if (items.length > 200) {
          for (let i = 200; i < items.length; i++) items[i].remove();
        }
      }
    }
  } catch(e) {
    console.error('squawk poll error', e);
    if (initial) {
      const feed = document.getElementById('squawk-feed');
      if (feed) feed.innerHTML = '<div class="sq-status" style="color:#f87171">Feed unavailable: ' + esc(String(e).slice(0,80)) + '</div>';
    }
  }
}

function renderSquawkItem(s, isFresh) {
  const t = s.published_at ? new Date(s.published_at) : new Date();
  const time = t.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', hour12:false });
  let impactClass = 'neut', impactLabel = '0.0';
  const sc = s.market_impact_score;
  if (sc != null) {
    impactLabel = (sc>=0?'+':'') + Number(sc).toFixed(2);
    if (sc >= 0.5) impactClass = 'esc';
    else if (sc <= -0.5) impactClass = 'de';
  }
  return '<div class="squawk-item'+(isFresh?' fresh':'')+'" onclick="openDrill(&quot;signal&quot;, &quot;'+s.id+'&quot;, &quot;'+esc((s.headline||'').slice(0,50).replace(/"/g,"'"))+'&quot;)">'
    +'<div class="sq-time">'+esc(time)+'</div>'
    +'<div class="sq-body">'
      +'<div class="sq-meta">'
        +'<span class="sq-src">'+esc(s.source||'?')+'</span>'
        +'<span class="sq-impact '+impactClass+'">'+impactLabel+'</span>'
        +(s.geopolitical_region?'<span class="sq-region">'+esc(s.geopolitical_region)+'</span>':'')
      +'</div>'
      +'<div class="sq-headline">'+esc(s.headline||'(no headline)')+'</div>'
    +'</div>'
  +'</div>';
}

function setSquawkSource(src, chip) {
  document.querySelectorAll('.squawk-src-chip').forEach(c=>c.classList.remove('active'));
  if (chip) chip.classList.add('active');
  squawkState.sourceFilter = src;
  squawkState.latestId = null;
  squawkPoll(true);
}

function toggleSquawkSound() {
  squawkState.soundOn = !squawkState.soundOn;
  const btn = document.getElementById('squawk-sound');
  if (btn) {
    btn.classList.toggle('on', squawkState.soundOn);
    btn.textContent = squawkState.soundOn ? '🔔 Sound ON' : '🔔 Sound OFF';
  }
}

function playSquawkBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(); osc.stop(ctx.currentTime + 0.2);
  } catch(e) {}
}

function acceptSquawkNew() {
  // placeholder for future "show N new" interaction
  const ind = document.getElementById('sq-new-ind');
  if (ind) ind.classList.remove('visible');
  squawkState.pendingNew = 0;
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
    + '<li>Tuck&#39;s Watchlist = stocks to study, not stocks to buy</li>'
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
    + '<p><strong>Indica Independent Media</strong> &amp; <strong>VPDLNY</strong> &mdash; a collective of technologists, artists, and researchers using information as the only acceptable weapon. Staten Island, NYC.</p>'
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

// === DRILL-DOWN SYSTEM ===
let drillBusy = false;
async function openDrill(type, id, displayName) {
  if (drillBusy) return;
  drillBusy = true;
  const overlay = document.getElementById('drill-overlay');
  const body    = document.getElementById('drill-body');
  const title   = document.getElementById('drill-title');
  if (!overlay || !body || !title) { drillBusy = false; return; }
  title.textContent = (displayName || id) + ' \u2014 Deep Dive';
  body.innerHTML = '<div class="drill-loading">Loading intel...</div>';
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
  try {
    const r = await fetch('/api/drill?type=' + encodeURIComponent(type) + '&id=' + encodeURIComponent(id));
    const d = await r.json();
    if (!d.ok) {
      body.innerHTML = '<div class="drill-err">' + esc(d.error || 'Failed to load') + '</div>';
    } else {
      body.innerHTML = renderDrill(d);
    }
  } catch(e) {
    body.innerHTML = '<div class="drill-err">' + esc(String(e)) + '</div>';
  }
  drillBusy = false;
}

function closeDrill() {
  const overlay = document.getElementById('drill-overlay');
  if (overlay) overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

function renderDrill(d) {
  if (d.type === 'ticker')  return renderDrillTicker(d);
  if (d.type === 'macro')   return renderDrillMacro(d);
  if (d.type === 'signal')  return renderDrillSignal(d);
  if (d.type === 'trader')  return renderDrillTrader(d);
  if (d.type === 'scenario') return renderDrillScenario(d);
  return '<pre>' + esc(JSON.stringify(d, null, 2)) + '</pre>';
}

function fmtAmt(v) {
  const n = parseFloat(v) || 0;
  if (n >= 1e9) return '$' + (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return '$' + (n/1e6).toFixed(2) + 'M';
  if (n >= 1e3) return '$' + (n/1e3).toFixed(1) + 'K';
  return '$' + n.toFixed(0);
}

function renderDrillTicker(d) {
  const s = d.summary || {};
  const T = d.ticker;
  const stats = [
    ['House Trades', s.house_trades_count, fmtAmt(s.house_total_amount)],
    ['Senate Trades', s.senate_trades_count, fmtAmt(s.senate_total_amount)],
    ['Gov Contracts', s.contracts_count, fmtAmt(s.contracts_total_amount)],
    ['Lobbying Records', s.lobbying_count, ''],
    ['GeoINT Signals', s.geoint_signals_count, '']
  ];
  const statsHtml = '<div class="drill-stats">' + stats.map(([l,n,a]) =>
    '<div class="drill-stat"><div class="lbl">' + esc(l) + '</div><div class="val">' + n + '</div>' + (a ? '<div class="sub">' + a + '</div>' : '') + '</div>'
  ).join('') + '</div>';

  const trades = (d.house||[]).map(t => 'house|'+t.date+'|'+(t.representative||'?')+'|'+(t.transaction_type||'?')+'|'+(t.range_text||'?'))
    .concat((d.senate||[]).map(t => 'senate|'+t.date+'|'+(t.senator||'?')+'|'+(t.transaction_type||'?')+'|'+(t.range_text||'?')));
  trades.sort((a,b)=>b.localeCompare(a));

  const tradesHtml = trades.length === 0 ? '<div class="drill-empty">No congressional trades recorded for ' + esc(T) + '</div>' :
    '<table class="drill-tbl"><thead><tr><th>Date</th><th>Chamber</th><th>Politician</th><th>Action</th><th>Range</th></tr></thead><tbody>' +
    trades.slice(0,20).map(line => {
      const [chamber, date, name, action, range] = line.split('|');
      return '<tr><td>'+esc(date)+'</td><td class="chip-'+chamber+'">'+chamber.toUpperCase()+'</td><td>'+esc(name)+'</td><td>'+esc(action)+'</td><td>'+esc(range)+'</td></tr>';
    }).join('') + '</tbody></table>';

  const contractsHtml = (d.contracts||[]).length === 0 ? '<div class="drill-empty">No federal contracts recorded for ' + esc(T) + '</div>' :
    '<table class="drill-tbl"><thead><tr><th>Date</th><th>Agency</th><th>Amount</th><th>Description</th></tr></thead><tbody>' +
    (d.contracts||[]).slice(0,15).map(c =>
      '<tr><td>'+esc(c.date||'')+'</td><td>'+esc(c.agency||'')+'</td><td>'+fmtAmt(c.amount)+'</td><td class="desc-cell">'+esc((c.description||'').slice(0,180))+'</td></tr>'
    ).join('') + '</tbody></table>';

  const lobbyingHtml = (d.lobbying||[]).length === 0 ? '<div class="drill-empty">No lobbying records for ' + esc(T) + '</div>' :
    '<table class="drill-tbl"><thead><tr><th>Date</th><th>Client</th><th>Registrant</th><th>Issue</th><th>Amount</th></tr></thead><tbody>' +
    (d.lobbying||[]).slice(0,15).map(l =>
      '<tr><td>'+esc(l.date||'')+'</td><td>'+esc(l.client||'')+'</td><td>'+esc(l.registrant||'')+'</td><td>'+esc(l.issue||'')+'</td><td>'+fmtAmt(l.amount)+'</td></tr>'
    ).join('') + '</tbody></table>';

  const signalsHtml = (d.signals||[]).length === 0 ? '<div class="drill-empty">No GeoINT signals mentioning ' + esc(T) + '</div>' :
    (d.signals||[]).slice(0,10).map(s =>
      '<div class="drill-signal" onclick="openDrill(&quot;signal&quot;, &quot;'+esc(s.signal_id)+'&quot;, '+JSON.stringify(s.headline||'').replace(/"/g,'&quot;')+')">'+
        '<div class="sig-date">'+esc((s.published_at||'').slice(0,16))+' \u00b7 '+esc(s.source||'')+'</div>'+
        '<div class="sig-head">'+esc(s.headline||'')+'</div>'+
      '</div>'
    ).join('');

  // Tuck's Score panel (loads async, placeholder rendered immediately)
  setTimeout(() => loadDrillScorePanel(T), 50);
  setTimeout(() => loadDrillSparkline(T), 250);
  const scorePanelHtml = '<div id="drill-score-panel-' + T + '" class="drill-score-panel-host">'
    + '<div class="drill-score-loading">\u{1F3F7}\uFE0F Loading <span id="scores-title">Tuck\u2019s Score</span> breakdown\u2026</div>'
    + '</div>';

  return scorePanelHtml + statsHtml +
    '<h3 class="drill-h">\u{1F3DB}\uFE0F Congressional Trading Activity</h3>' + tradesHtml +
    '<h3 class="drill-h">\u{1F4DC} Federal Contracts</h3>' + contractsHtml +
    '<h3 class="drill-h">\u{1F4BC} Lobbying Records</h3>' + lobbyingHtml +
    '<h3 class="drill-h">\u{1F4E1} GeoINT Signals</h3>' + signalsHtml;
}

/* \u2500\u2500 TUCK\u2019S SCORE — DRILL PANEL \u2500\u2500 */
async function loadDrillScorePanel(ticker) {
  const host = document.getElementById('drill-score-panel-' + ticker);
  if (!host) return;
  try {
    let s = null;
    // Try cache first
    if (tucksScoresCache) {
      s = tucksScoresCache.find(x => x.ticker === ticker);
    }
    // Otherwise fetch single-ticker history (we get last 30 days)
    if (!s) {
      const r = await fetch('/api/tucks-score?ticker=' + encodeURIComponent(ticker));
      const d = await r.json();
      if (d.ok && d.scores && d.scores.length > 0) s = d.scores[0];
    }
    if (!s) {
      host.innerHTML = '<div class="drill-score-empty">No score available for ' + esc(ticker) + ' yet. Scores refresh weekday mornings @ 6 AM ET.</div>';
      return;
    }
    
    const cls = scoreColorClass(s.total_score);
    const colorMap = { 'ts-hot':['#ef4444','#f97316'], 'ts-warm':['#22c55e','#84cc16'], 'ts-neutral':['#94a3b8','#64748b'], 'ts-cool':['#3b82f6','#6366f1'], 'ts-cold':['#475569','#334155'] };
    const colors = colorMap[cls] || colorMap['ts-neutral'];
    const delta = s.delta || 0;
    const deltaCls = delta > 0 ? 'up' : (delta < 0 ? 'dn' : 'flat');
    const deltaTxt = delta > 0 ? ('+' + delta) : (delta < 0 ? String(delta) : 'no change');
    
    // Pull breakdown — try cached first, then parse from row
    const bd = s.breakdown || (typeof s.breakdown_json === 'string' ? JSON.parse(s.breakdown_json) : {});
    const mom = bd.momentum || {};
    const news = bd.news || {};
    const ravid = bd.ravid || {};
    const congress = bd.congress || {};
    const scenarios = bd.scenarios || {};
    
    // Sub-score detail lines (raw inputs that drove each bar)
    const momDetail = mom.change_5d !== undefined 
      ? '5d ' + (mom.change_5d>=0?'+':'') + mom.change_5d.toFixed(2) + '% \u00b7 20d ' + (mom.change_20d>=0?'+':'') + mom.change_20d.toFixed(2) + '%'
      : 'no price data';
    const newsDetail = (news.mentions || 0) + ' mentions \u00b7 ' + (news.esc||0) + ' esc / ' + (news.des||0) + ' de-esc (48h)';
    const ravidDetail = (ravid.mentions || 0) + ' Ravid signals \u00b7 ' + (ravid.esc||0) + ' esc / ' + (ravid.des||0) + ' de-esc';
    const congressDetail = (congress.buys||0) + ' buys / ' + (congress.sells||0) + ' sells (30d) \u00b7 net $' + Math.round(((congress.buy_amt||0) - (congress.sell_amt||0))/1000) + 'k';
    const scenDetail = (scenarios.hits || 0) + ' AI scenarios in last 24h (conf-weighted ' + (scenarios.conf_weighted||0).toFixed(1) + ')';
    
    const bars = [
      ['Price Momentum', s.momentum_score, 25, momDetail, '#22c55e'],
      ['News Heat', s.news_score, 20, newsDetail, '#f59e0b'],
      ['Ravid GeoPol', s.ravid_score, 15, ravidDetail, '#ec4899'],
      ['Congress Flow', s.congress_score, 20, congressDetail, '#6366f1'],
      ['AI Scenarios', s.scenario_score, 20, scenDetail, '#a855f7']
    ];
    
    const barsHtml = bars.map(([lbl, val, weight, detail, color]) => 
      '<div class="dscore-row">'
        + '<div class="dscore-row-head">'
          + '<div class="dscore-row-lbl">' + esc(lbl) + ' <span class="dscore-weight">' + weight + '%</span></div>'
          + '<div class="dscore-row-val">' + val + '</div>'
        + '</div>'
        + '<div class="dscore-bar-track"><div class="dscore-bar-fill" style="width:' + val + '%;background:linear-gradient(90deg,' + color + '88,' + color + ')"></div></div>'
        + '<div class="dscore-row-detail">' + esc(detail) + '</div>'
      + '</div>'
    ).join('');
    
    host.innerHTML = '<div class="drill-score-panel">'
      + '<div class="dscore-header" style="--c1:' + colors[0] + ';--c2:' + colors[1] + '">'
        + '<div class="dscore-big">' + s.total_score + '</div>'
        + '<div class="dscore-meta">'
          + '<div class="dscore-title">\u{1F3F7}\uFE0F Tuck\u2019s Score</div>'
          + '<div class="dscore-verdict">' + s.emoji + ' ' + esc(s.verdict) + '</div>'
          + '<div class="dscore-delta dscore-delta-' + deltaCls + '">vs yesterday: ' + deltaTxt + '</div>'
        + '</div>'
      + '</div>'
      + '<div id="dscore-spark-' + ticker + '" class="dscore-spark-host"></div>'
      + '<div class="dscore-explainer">A composite 0\u2013100 score blending 5 weighted signals. Click any factor for what feeds it.</div>'
      + '<div class="dscore-bars">' + barsHtml + '</div>'
      + '<div class="dscore-footer">Recomputed daily at 6 AM ET. Score date: ' + esc(s.score_date || '\u2014') + '. Educational only.</div>'
    + '</div>';
  } catch(e) {
    host.innerHTML = '<div class="drill-score-empty">Unable to load score breakdown: ' + esc(String(e.message||e)) + '</div>';
  }
}

async function loadDrillSparkline(ticker) {
  const host = document.getElementById('dscore-spark-' + ticker);
  if (!host) return;
  try {
    const r = await fetch('/api/tucks-score?ticker=' + encodeURIComponent(ticker));
    const d = await r.json();
    const history = (d.scores || []).slice().reverse();
    
    if (history.length < 2) {
      const daysUntil = 2 - history.length;
      host.innerHTML = '<div class="dscore-spark-empty">'
        + '<span class="spark-icon">\u{1F4C8}</span> '
        + '<span>30-day trend builds with daily scoring. Check back in '
        + (daysUntil === 1 ? '~24 hours' : 'a few days')
        + ' to see the line form.</span>'
      + '</div>';
      return;
    }
    
    const W = 320, H = 60, PAD_X = 8, PAD_Y = 8;
    const scores = history.map(h => h.total_score);
    const dates = history.map(h => h.score_date);
    const minV = Math.min(...scores, 0);
    const maxV = Math.max(...scores, 100);
    const range = Math.max(maxV - minV, 20);
    
    const x = i => PAD_X + (i / Math.max(history.length - 1, 1)) * (W - 2*PAD_X);
    const y = v => H - PAD_Y - ((v - minV) / range) * (H - 2*PAD_Y);
    
    const pts = scores.map((v, i) => x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
    const areaPts = pts + ' ' + (W - PAD_X).toFixed(1) + ',' + (H - PAD_Y) + ' ' + PAD_X + ',' + (H - PAD_Y);
    const y50 = y(50);
    const lastX = x(scores.length - 1);
    const lastY = y(scores[scores.length - 1]);
    
    const first = scores[0], last = scores[scores.length - 1];
    const trend = last - first;
    const trendCls = trend > 0 ? 'up' : (trend < 0 ? 'dn' : 'flat');
    const trendTxt = trend > 0 ? ('+' + trend) : (trend < 0 ? String(trend) : 'flat');
    const trendIcon = trend > 0 ? '\u2197\uFE0F' : (trend < 0 ? '\u2198\uFE0F' : '\u2192\uFE0F');
    
    const cls = scoreColorClass(last);
    const colorMap = { 'ts-hot':'#ef4444', 'ts-warm':'#22c55e', 'ts-neutral':'#94a3b8', 'ts-cool':'#3b82f6', 'ts-cold':'#475569' };
    const lineColor = colorMap[cls] || '#94a3b8';
    
    const dots = scores.map((v, i) => 
      '<g class="spark-dot-grp">'
        + '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(v).toFixed(1) + '" r="6" fill="transparent" class="spark-hit"/>'
        + '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(v).toFixed(1) + '" r="2.5" fill="' + lineColor + '" class="spark-dot"/>'
        + '<title>' + esc(dates[i]) + ': ' + v + '</title>'
      + '</g>'
    ).join('');
    
    host.innerHTML = '<div class="dscore-spark">'
      + '<div class="dscore-spark-head">'
        + '<div class="dscore-spark-label">' + history.length + '-day trend</div>'
        + '<div class="dscore-spark-trend dscore-delta-' + trendCls + '">' + trendIcon + ' ' + trendTxt + '</div>'
      + '</div>'
      + '<svg viewBox="0 0 ' + W + ' ' + H + '" class="dscore-spark-svg" preserveAspectRatio="none">'
        + '<defs><linearGradient id="spark-grad-' + ticker + '" x1="0" x2="0" y1="0" y2="1">'
          + '<stop offset="0%" stop-color="' + lineColor + '" stop-opacity="0.35"/>'
          + '<stop offset="100%" stop-color="' + lineColor + '" stop-opacity="0"/>'
        + '</linearGradient></defs>'
        + '<line x1="' + PAD_X + '" y1="' + y50 + '" x2="' + (W - PAD_X) + '" y2="' + y50 + '" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,3"/>'
        + '<polygon points="' + areaPts + '" fill="url(#spark-grad-' + ticker + ')"/>'
        + '<polyline points="' + pts + '" fill="none" stroke="' + lineColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        + dots
        + '<circle cx="' + lastX + '" cy="' + lastY + '" r="4" fill="' + lineColor + '" stroke="#0f172a" stroke-width="2"/>'
      + '</svg>'
      + '<div class="dscore-spark-axis">'
        + '<span>' + esc(dates[0]) + '</span>'
        + '<span class="spark-axis-mid">\u00b7 \u00b7 \u00b7 dashed line = 50 (neutral) \u00b7 \u00b7 \u00b7</span>'
        + '<span>' + esc(dates[dates.length-1]) + '</span>'
      + '</div>'
    + '</div>';
  } catch(e) {
    host.innerHTML = '<div class="dscore-spark-empty"><span>Sparkline unavailable: ' + esc(String(e.message||e)) + '</span></div>';
  }
}


function renderDrillMacro(d) {
  const m = d.deep;
  if (!m) return '<div class="drill-empty">No deep-dive data for this indicator yet.</div>';
  return '<div class="drill-macro">'+
    '<h2 class="drill-macro-title">'+esc(m.title)+'</h2>'+
    '<p class="drill-macro-desc">'+esc(m.desc)+'</p>'+
    '<div class="drill-block"><h4>Why it matters</h4><p>'+esc(m.why)+'</p></div>'+
    '<div class="drill-block drill-tip"><h4>\u{1F4A1} Trader Tip</h4><p>'+esc(m.tip)+'</p></div>'+
  '</div>';
}

function renderDrillSignal(d) {
  const s = d.signal || {};
  const related = d.related || [];
  return '<div class="drill-signal-full">'+
    '<div class="ds-meta">'+esc((s.published_at||'').slice(0,16))+' \u00b7 <b>'+esc(s.source||'')+'</b>'+(s.author?' \u00b7 '+esc(s.author):'')+'</div>'+
    '<h2 class="ds-head">'+esc(s.headline||'')+'</h2>'+
    (s.url ? '<a href="'+esc(s.url)+'" target="_blank" rel="noopener" class="ds-link">Read at source \u2192</a>' : '')+
    '<div class="ds-full">'+esc(s.full_text || s.summary || '')+'</div>'+
    (s.market_impact_score ? '<div class="ds-score">Market Impact: '+esc(String(s.market_impact_score))+'/10</div>' : '')+
    (related.length ? '<h3 class="drill-h">More from '+esc(s.source||'')+'</h3>'+
      related.map(r => '<div class="drill-signal" onclick="openDrill(&quot;signal&quot;, &quot;'+esc(r.signal_id)+'&quot;, '+JSON.stringify(r.headline||'').replace(/"/g,'&quot;')+')">'+
        '<div class="sig-date">'+esc((r.published_at||'').slice(0,16))+'</div>'+
        '<div class="sig-head">'+esc(r.headline||'')+'</div></div>'
      ).join('') : '')+
  '</div>';
}

function renderDrillTrader(d) {
  const recent = d.recent || [];
  const top = d.top_tickers || [];
  const topHtml = top.length === 0 ? '<div class="drill-empty">No data</div>' :
    '<div class="drill-stats">' + top.map(t =>
      '<div class="drill-stat clickable" onclick="openDrill(&quot;ticker&quot;, &quot;'+esc(t.ticker)+'&quot;, &quot;'+esc(t.ticker)+'&quot;)">'+
        '<div class="lbl">'+esc(t.ticker)+'</div>'+
        '<div class="val">'+t.count+'</div>'+
        '<div class="sub">'+fmtAmt(t.total)+'</div>'+
      '</div>'
    ).join('') + '</div>';

  const recentHtml = recent.length === 0 ? '<div class="drill-empty">No recent trades</div>' :
    '<table class="drill-tbl"><thead><tr><th>Date</th><th>Ticker</th><th>Action</th><th>Range</th></tr></thead><tbody>' +
    recent.slice(0,30).map(t =>
      '<tr><td>'+esc(t.date||'')+'</td><td class="ticker-cell" onclick="openDrill(&quot;ticker&quot;, &quot;'+esc(t.ticker||'')+'&quot;, &quot;'+esc(t.ticker||'')+'&quot;)">'+esc(t.ticker||'')+'</td><td>'+esc(t.transaction_type||'')+'</td><td>'+esc(t.range_text||'')+'</td></tr>'
    ).join('') + '</tbody></table>';

  return '<div class="drill-trader-head">'+
    '<h2>'+esc(d.name || 'Unknown')+'</h2>'+
    '<div class="trader-sub">'+d.trades_count+' total trades recorded</div>'+
  '</div>'+
  '<h3 class="drill-h">Top Tickers Traded</h3>' + topHtml +
  '<h3 class="drill-h">Recent Activity</h3>' + recentHtml;
}

// ESC key closes drill
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeDrill();
});

document.getElementById('legal-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Gate managed by IIFE above \u2014 no global call needed

// \u2500\u2500 BOOT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
(async () => {
  await Promise.all([loadPrices(), loadNews(), loadRavid(), loadCongress(), loadMacro(), loadScenarios(), loadTucksScores()]);
  // Refresh prices every 60s, news every 3min
  setInterval(loadPrices, 60000);
  setInterval(loadNews, 180000);
  setInterval(loadMacro, 900000);
})();
<\/script>

<!-- ASK TUCK FLOATING WIDGET -->
<button id="ask-tuck-btn" aria-label="Ask Tuck" title="Ask Tuck — free AI guide">
  <img src="/img/tuck/tuck-v5-128.png" alt="Tuck"/>
</button>
<div id="ask-tuck-panel" role="dialog" aria-label="Ask Tuck chat">
  <div id="ask-tuck-header">
    <img src="/img/tuck/tuck-v5-128.png" alt=""/>
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



/* ── TUCK'S SCORE ── */
let tucksScoresCache = null;

function scoreColorClass(score) {
  if (score >= 75) return 'ts-hot';
  if (score >= 60) return 'ts-warm';
  if (score >= 40) return 'ts-neutral';
  if (score >= 25) return 'ts-cool';
  return 'ts-cold';
}

async function loadTucksScores() {
  try {
    const r = await fetch('/api/tucks-score');
    const d = await r.json();
    if (!d.ok) throw new Error(d.error || 'no scores');
    tucksScoresCache = d.scores || [];
    window.tuckFreshness.score = d._cached_at || null;
    renderFreshness('score','scores-title');
    window.tuckFreshness.heat = d._cached_at || null;
    renderFreshness('heat','heatmap-title');
    renderScoreBadges();
    renderScoreLeaderboard();
  } catch(e) {
    const el = document.getElementById('scores-leaderboard');
    if (el) el.innerHTML = '<div class="err-box">Unable to load Tuck&rsquo;s scores. ' + (e.message||'') + '</div>';
  }
}

function renderScoreBadges() {
  if (!tucksScoresCache) return;
  for (const s of tucksScoresCache) {
    const badge = document.getElementById('ts-' + s.ticker);
    if (badge) {
      badge.className = 'ts-badge ' + scoreColorClass(s.total_score);
      badge.textContent = s.total_score;
      badge.setAttribute('title', 'Tuck\u2019s Score: ' + s.total_score + ' (' + s.verdict + ') — Click card for breakdown');
    }
  }
}

function renderScoreLeaderboard() {
  const el = document.getElementById('scores-leaderboard');
  if (!el || !tucksScoresCache) return;
  if (tucksScoresCache.length === 0) {
    el.innerHTML = '<div class="err-box">No scores yet for today. Check back after 6am ET.</div>';
    return;
  }
  
  const dateBadge = document.getElementById('scores-date-badge');
  if (dateBadge && tucksScoresCache[0].score_date) {
    dateBadge.textContent = tucksScoresCache[0].score_date;
  }
  
  const header = '<div class="score-header">'
    + '<span>#</span><span>SCORE</span><span class="sh-ticker">TICKER</span>'
    + '<span>\u0394</span>'
    + '<span>MOM</span><span>NEWS</span><span>RAVID</span><span>CONG</span><span>SCEN</span>'
    + '</div>';
  
  const colorMap = { 'ts-hot':['#ef4444','#f97316'], 'ts-warm':['#22c55e','#84cc16'], 'ts-neutral':['#94a3b8','#64748b'], 'ts-cool':['#3b82f6','#6366f1'], 'ts-cold':['#475569','#334155'] };
  const rows = tucksScoresCache.map((s, i) => {
    const cls = scoreColorClass(s.total_score);
    const colors = colorMap[cls] || colorMap['ts-neutral'];
    const delta = s.delta || 0;
    const deltaCls = delta > 0 ? 'up' : (delta < 0 ? 'dn' : 'flat');
    const deltaTxt = delta > 0 ? ('+' + delta) : (delta < 0 ? String(delta) : '\u2014');
    return '<div class="score-row" onclick="openDrill(&quot;ticker&quot;,&quot;' + esc(s.ticker) + '&quot;,&quot;' + esc(s.ticker) + '&quot;)" style="--c1:' + colors[0] + ';--c2:' + colors[1] + '">'
      + '<div class="sr-rank">' + (i+1) + '</div>'
      + '<div class="sr-total">' + s.total_score + '</div>'
      + '<div class="sr-ticker-block">'
        + '<div class="sr-ticker">' + s.emoji + ' ' + esc(s.ticker) + '</div>'
        + '<div class="sr-verdict">' + esc(s.verdict) + '</div>'
      + '</div>'
      + '<div class="sr-delta ' + deltaCls + '">' + deltaTxt + '</div>'
      + '<div class="sr-sub"><div class="sr-sub-val">' + s.momentum_score + '</div><div class="sr-sub-lbl">Mom</div></div>'
      + '<div class="sr-sub"><div class="sr-sub-val">' + s.news_score + '</div><div class="sr-sub-lbl">News</div></div>'
      + '<div class="sr-sub"><div class="sr-sub-val">' + s.ravid_score + '</div><div class="sr-sub-lbl">Ravid</div></div>'
      + '<div class="sr-sub"><div class="sr-sub-val">' + s.congress_score + '</div><div class="sr-sub-lbl">Cong</div></div>'
      + '<div class="sr-sub"><div class="sr-sub-val">' + s.scenario_score + '</div><div class="sr-sub-lbl">Scen</div></div>'
      + '</div>';
  }).join('');
  
  el.innerHTML = header + rows;
}

/* ── SECTOR HEAT MAP ── */
const SECTOR_MAP = {
  'NVDA':'Semiconductors','AVGO':'Semiconductors','QCOM':'Semiconductors','MU':'Semiconductors','INTC':'Semiconductors','SOXX':'Semiconductors',
  'NET':'Cloud / Tech','QQQ':'Cloud / Tech',
  'XLE':'Oil / Energy','USO':'Oil / Energy',
  'MP':'Defense / Rare Earth','KTOS':'Defense / Rare Earth'
};

function heatClass(pct) {
  if (pct >= 3) return 'heat-up-big';
  if (pct >= 1) return 'heat-up';
  if (pct >= 0.2) return 'heat-up-mild';
  if (pct > -0.2) return 'heat-flat';
  if (pct > -1) return 'heat-dn-mild';
  if (pct > -3) return 'heat-dn';
  return 'heat-dn-big';
}

async function loadHeatMap() {
  const el = document.getElementById('heatmap-grid');
  if (!el) return;
  try {
    if (!tucksScoresCache) await loadTucksScores();
    const tickerData = [];
    for (const s of (tucksScoresCache || [])) {
      if (!SECTOR_MAP[s.ticker]) continue;
      const mom = s.breakdown && s.breakdown.momentum ? s.breakdown.momentum : {};
      const chg = mom.change_5d || 0;
      const latest = mom.latest;
      const priceStr = latest ? ('$' + latest.toFixed(2)) : '—';
      tickerData.push({ ticker: s.ticker, sector: SECTOR_MAP[s.ticker], price: priceStr, chg });
    }
    
    const bySector = {};
    for (const t of tickerData) {
      if (!bySector[t.sector]) bySector[t.sector] = [];
      bySector[t.sector].push(t);
    }
    
    const html = Object.keys(bySector).sort().map(sector => {
      const items = bySector[sector];
      const avg = items.reduce((a,b)=>a+b.chg, 0) / items.length;
      const avgColor = avg >= 0 ? '#4ade80' : '#f87171';
      const cells = items.map(t =>
        '<div class="heat-cell ' + heatClass(t.chg) + '" onclick="openDrill(&quot;ticker&quot;,&quot;' + esc(t.ticker) + '&quot;,&quot;' + esc(t.ticker) + '&quot;)">'
        + '<div class="hc-ticker">' + esc(t.ticker) + '</div>'
        + '<div class="hc-chg">' + (t.chg >= 0 ? '+' : '') + t.chg.toFixed(2) + '%</div>'
        + '<div class="hc-price">' + esc(t.price) + '</div>'
        + '</div>'
      ).join('');
      return '<div class="heatmap-section">'
        + '<div class="heatmap-sector-head">'
          + '<div class="heatmap-sector-name">' + esc(sector) + '</div>'
          + '<div class="heatmap-sector-avg" style="color:' + avgColor + '">Avg ' + (avg>=0?'+':'') + avg.toFixed(2) + '%</div>'
        + '</div>'
        + '<div class="heatmap-cells">' + cells + '</div>'
      + '</div>';
    }).join('');
    
    el.innerHTML = html || '<div class="err-box">No heat map data available.</div>';
  } catch(e) {
    el.innerHTML = '<div class="err-box">Unable to load heat map: ' + (e.message||e) + '</div>';
  }
}

/* About Modal */
function openAboutModal() {
  var o = document.getElementById('about-overlay');
  if (o) { o.classList.add('visible'); document.body.style.overflow = 'hidden';
           if (history.replaceState) { history.replaceState(null,'','#about'); }
  }
}
function closeAboutModal() {
  var o = document.getElementById('about-overlay');
  if (o) { o.classList.remove('visible'); document.body.style.overflow = '';
           if (history.replaceState) { history.replaceState(null,'',location.pathname+location.search); }
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var o = document.getElementById('about-overlay');
    if (o && o.classList.contains('visible')) closeAboutModal();
  }
});
window.addEventListener('DOMContentLoaded', function() {
  if (location.hash === '#about') { setTimeout(openAboutModal, 150); }
});


</script>
<!-- Drill-down modal -->

<!-- ABOUT MODAL -->
<div id="about-overlay" class="about-overlay" onclick="if(event.target===this)closeAboutModal()" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
  <div class="about-modal" role="document">
    <button class="about-close" onclick="closeAboutModal()" aria-label="Close about dialog">&times;</button>
    <div class="about-content">
      <div class="about-logo-row">
        <div class="about-logo-mark">🛡️</div>
        <div>
          <h2 id="about-modal-title">Indica Independent Media</h2>
          <div class="about-sub">A signal in the noise. A library in the dark.</div>
        </div>
      </div>

      <div class="about-divider"></div>

      <p class="about-lead">There are libraries that don't lend books. There are radio stations that don't broadcast on the dial. There are markets that aren't for sale.</p>

      <p>Indica Independent Media is none of these things and all of them. It is the editorial frame around a single, unfashionable idea: <strong>that information &mdash; free, structured, public &mdash; is the only weapon the powerless have never lost.</strong></p>

      <p>We don't sell ads. We don't court algorithms. We don't ask for your email. We publish what we publish because the public square deserves windows that weren't installed by people selling glass.</p>

      <div class="about-pill-row">
        <span class="about-pill">📖 OSINT</span>
        <span class="about-pill">📈 Open Data</span>
        <span class="about-pill">🔐 No PFOF</span>
        <span class="about-pill">🚫 No Ads</span>
        <span class="about-pill">🌍 Public Tools</span>
      </div>

      <div class="about-divider"></div>

      <div class="about-vpdlny-block">
        <div class="about-vpdlny-mark">🛡️</div>
        <h3>VPDLNY</h3>
        <div class="about-sub">Indica Independent Media · VPDLNY</div>
        <p>A collective. Not a non-profit, not a foundation, not a brand. Technologists, artists, researchers, and people who simply showed up. Based in the parts of New York the tourism boards don&rsquo;t print. Our work is to put information in the hands of people who shouldn&rsquo;t have had to ask for it twice.</p>
        <p class="about-creed">We use knowledge. Never violence. Sunlight is the disinfectant. The receipts are the strategy.</p>
      </div>

      <div class="about-divider"></div>

      <div class="about-faq">
        <details>
          <summary>What is Tuck?</summary>
          <p>A free financial intelligence platform. Real-time prices, congressional trades, geopolitical signals, and macro indicators &mdash; stitched together from public sources. No login, no tracking, no advice. Use it to learn how the machine works, not to be told what to buy.</p>
        </details>
        <details>
          <summary>Who runs this?</summary>
          <p>Indica Independent Media — the public face of VPDLNY. We are anonymous on purpose. The work is the credential.</p>
        </details>
        <details>
          <summary>How is it free?</summary>
          <p>Cloudflare&rsquo;s free tier, public APIs, donated time, and a stubborn refusal to monetize attention. We will never sell your data because we will never collect it.</p>
        </details>
        <details>
          <summary>Is this investment advice?</summary>
          <p>No. Nothing on Tuck is investment advice. The Watchlist is a study set, not a buy list. Always consult a licensed professional before making investment decisions.</p>
        </details>
        <details>
          <summary>How do I get involved?</summary>
          <p>The community lives at <a href="https://discord.gg/vpdlny" target="_blank" rel="noopener">discord.gg/vpdlny</a>. Show up, read, contribute, or just listen. There is no application form.</p>
        </details>
      </div>

      <div class="about-footer-row">
        <span>indicaindependent.media &middot; osintnet.uk</span>
        <span class="about-creed-small">&ldquo;What they hoard, we hand back.&rdquo;</span>
      </div>
    </div>
  </div>
</div>



<div id="drill-overlay" class="drill-overlay" onclick="if(event.target===this)closeDrill()">
  <div class="drill-modal">
    <div class="drill-header">
      <h2 id="drill-title">Deep Dive</h2>
      <button class="drill-close" onclick="closeDrill()" aria-label="Close">×</button>
    </div>
    <div id="drill-body" class="drill-content"></div>
  </div>
</div>
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
  try {
    const vix = await yf("%5EVIX");
    if (vix) {
      out.vix = parseFloat(vix.regularMarketPrice.toFixed(2));
      out.vix_trend = vix.regularMarketPrice > (vix.chartPreviousClose || vix.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {}
  try {
    const gld = await yf("GC%3DF");
    if (gld) {
      out.gold = parseFloat(gld.regularMarketPrice.toFixed(2));
      out.gold_trend = gld.regularMarketPrice > (gld.chartPreviousClose || gld.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {}
  try {
    const btc = await yf("BTC-USD");
    if (btc) {
      out.btc = parseFloat(btc.regularMarketPrice.toFixed(0));
      out.btc_trend = btc.regularMarketPrice > (btc.chartPreviousClose || btc.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {}
  try {
    const cop = await yf("HG%3DF");
    if (cop) {
      out.copper = parseFloat(cop.regularMarketPrice.toFixed(3));
      out.copper_trend = cop.regularMarketPrice > (cop.chartPreviousClose || cop.regularMarketPrice) ? "up" : "down";
    }
  } catch (e) {}
  out.data_note = "CPI/unemployment: BLS April 2026 release. Market data: real-time.";
  return out;
}
__name(getMacroData, "getMacroData");
function buildLegalPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<script>(function(){try{var p=new URLSearchParams(location.search);if(p.get('nogate')==='1'){localStorage.setItem('pm_agreed_v1',JSON.stringify({ts:Date.now(),v:1}));}}catch(e){}}());<\/script>
<meta charset="UTF-8"/><link rel="icon" type="image/png" href="/img/tuck/tuck-v5-64.png"/><link rel="apple-touch-icon" href="/img/tuck/tuck-v5-apple.png"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
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
    <div class="logo-icon"><img src="/img/tuck/tuck-v5-128.png" alt="Tuck" style="width:100%;height:100%;border-radius:7px;object-fit:cover" /></div>
    <span class="nav-title">Tuck</span>
  </div>
  <a href="/" class="back-btn">\u2190 Back to Platform</a>
</nav>
<main>${content}</main>
<footer>Tuck \xB7 A VPDLNY Project \xB7 tuck.osintnet.uk \xB7 Free Forever</footer>
</body></html>`;
}
__name(buildLegalPage, "buildLegalPage");
var PRIVACY_HTML = buildLegalPage("Privacy Policy", `
<h1>Privacy Policy</h1>
<div class="meta">Last updated: May 20, 2026 \xB7 Effective immediately \xB7 Jurisdiction: New York, USA</div>

<div class="callout"><p><strong>The short version:</strong> We collect almost nothing about you. No account. No tracking. No selling. This page explains exactly what little we do and don't do.</p></div>

<h2>1. Who We Are</h2>
<p>Tuck is a free public financial-intelligence and education platform operated by <strong>Indica Independent Media (IIM)</strong>, the public face of <strong>VPDLNY</strong> — a collective of independent technologists and artists. We are not a financial institution, broker-dealer, investment advisor, or money services business.</p>
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
<p>By accessing Tuck at <strong>tuck.osintnet.uk</strong> (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Platform.</p>
<p>You must be at least <strong>18 years of age</strong> to use this Platform. By using it, you represent that you are 18 or older.</p>

<h2>2. What the Platform Is</h2>
<p>Tuck is a <strong>free, public, educational financial intelligence platform</strong>. It aggregates and displays publicly available financial data, news, regulatory filings, and macroeconomic indicators for educational purposes.</p>
<p>The Platform is operated by Indica Independent Media (IIM), the public face of VPDLNY — a non-commercial collective. It is not affiliated with any brokerage, financial institution, or investment firm.</p>

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
<p>"Tuck's Watchlist" is a curated list of securities the editorial team finds interesting to <strong>study and track</strong>. It is explicitly <strong>not</strong> a list of recommendations. The presence of any security on this list should not be interpreted as an endorsement or suggestion to invest.</p>
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
<div class="meta">Indica Independent Media · VPDLNY · Staten Island, New York · Free forever · Open source · Anonymous</div>

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
  <li><strong>A study watchlist.</strong> Nine tickers we actively study — semis, defense, oil, AI — with real-time price, 52w range, market cap, and a plain-English "why does this matter" breakdown for every one.</li>
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
<p>VPDLNY is a loose collective of techies, artists, researchers, and OSINT practitioners, operating publicly as Indica Independent Media (IIM). We use information and knowledge to defend vulnerable people against powerful entities. Never violence. Just sunlight, structure, and shared infrastructure.</p>
<p>Tuck is one of our public-facing tools. Other projects: <a href="https://warheatmap.app" target="_blank">War Heat Map</a> (global conflict tracking), <a href="https://capwatch.osintnet.uk" target="_blank">CapWatch</a> (congressional trade intel), and several private tools for researchers and defenders.</p>

<h2>Technical Foundation</h2>
<ul>
  <li><strong>Runs on Cloudflare Workers.</strong> Edge-deployed, globally cached, ~50ms response times worldwide.</li>
  <li><strong>D1 SQLite databases</strong> for signal storage and historical correlation tracking.</li>
  <li><strong>R2 object storage</strong> for editorial images and snapshots.</li>
  <li><strong>No third-party trackers.</strong> No Google Analytics. No Facebook Pixel. No cookies beyond the disclaimer-acknowledgment flag stored in your own browser’s localStorage.</li>
</ul>

<h2>A Note on "Tuck’s Watchlist"</h2>
<p>The nine stocks on the homepage aren’t recommendations. They’re a <em>study set</em> — tickers our editorial team actively monitors across semis, defense, oil, and AI. Showing them lets us demo the platform’s data depth on a manageable list. <strong>Do not buy these stocks because they’re here.</strong> Use the page to learn how to research, then build your own list.</p>

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
    <h3 style="margin:0;color:#f7931a;font-size:18px">Support Tuck — Bitcoin &amp; Lightning ⚡</h3>
  </div>
  <p style="color:#cbd5e1;font-size:14px;line-height:1.7;margin-bottom:18px">
    To remain truly sovereign, we only accept <strong>anonymous, universal Bitcoin donations — from only those who can afford it, of course</strong>. No Stripe, no Patreon, no Cash App, no payment processors who can deplatform us or build profiles on our donors. Bitcoin is borderless, permissionless, and final — the only money that lets us stay free.
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;background:rgba(0,0,0,0.3);padding:18px;border-radius:10px">
    <a href="https://tips.osintnet.uk" title="Open in your Bitcoin wallet" style="width:140px;height:140px;border-radius:8px;background:white;display:flex;align-items:center;justify-content:center;padding:8px;flex-shrink:0;text-decoration:none"><img src="https://tips.osintnet.uk/qr.svg" alt="Tuck Bitcoin donation QR" style="width:100%;height:100%;image-rendering:pixelated"/></a>
    <div style="flex:1;min-width:240px">
      <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">Lightning Address</div>
      <div id="btc-addr" style="font-family:'JetBrains Mono','SF Mono',Consolas,monospace;font-size:13px;color:#f7931a;word-break:break-all;background:rgba(247,147,26,0.08);padding:10px 12px;border-radius:6px;margin-bottom:10px;user-select:all"><a href="https://tips.osintnet.uk" style="color:#f7931a;text-decoration:none" title="Open in wallet">tips@skygive.app</a></div>
      <button onclick="(function(){navigator.clipboard.writeText('tips@skygive.app');var b=event.target;var t=b.textContent;b.textContent='✓ Copied';b.style.background='#10b981';setTimeout(function(){b.textContent=t;b.style.background='';},2000);})()" style="background:#f7931a;color:#0a0f1e;border:0;padding:9px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit">Copy Address</button>
      <a href="https://tips.osintnet.uk" style="display:inline-block;margin-left:8px;background:transparent;color:#f7931a;border:1px solid #f7931a;padding:8px 17px;border-radius:8px;font-weight:600;font-size:13px;text-decoration:none">Open in Wallet</a>
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
    // SOVEREIGN TIP REDIRECT — canonical Lightning tip page
    if (path === "/tip" || path === "/tip/") {
      return Response.redirect("https://tips.osintnet.uk", 302);
    }
    // CANONICAL HOST: redirect tuck.osintnet.uk -> tuck.osintnet.uk (301 permanent)
    if (url.hostname === "market.osintnet.uk") {
      url.hostname = "tuck.osintnet.uk";
      return Response.redirect(url.toString(), 301);
    }
    // ─── TUCK v2 STAGING () ──────────────────────────────
    if (TuckV2.isV2(request) && !path.startsWith('/api/') && !path.startsWith('/img/') && !path.startsWith('/static/')) {
      try {
        const v2Resp = await TuckV2.route(request, env, ctx);
        if (v2Resp) {
          // HARDENED: inject security headers into TuckV2 HTML responses
          const ct = v2Resp.headers.get("content-type") || "";
          if (ct.startsWith("text/html")) {
            const h = new Headers(v2Resp.headers);
            h.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
            h.set("X-Content-Type-Options", "nosniff");
            h.set("X-Frame-Options", "DENY");
            h.set("Referrer-Policy", "strict-origin-when-cross-origin");
            h.set("Permissions-Policy", "geolocation=(), microphone=(), camera=(), payment=()");
            // TUCK v2.1 — Vary so caches never confuse partial vs full
            h.set("Vary", "X-Tuck-Spa");
            // SPA partials get private cache (per-browser, short TTL)
            const _reqURL = new URL(request.url);
            const _isSpa = request.headers.get('X-Tuck-Spa') === '1' || _reqURL.searchParams.get('_spa') === '1';
            if (_isSpa) {
              h.set("Cache-Control", "private, max-age=30");
            }
            return new Response(v2Resp.body, { status: v2Resp.status, headers: h });
          }
          return v2Resp;
        }
      } catch(e) {
        console.error('[tuck-v2] route error', e?.stack || e);
      }
    }

    const JSON_H = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    };
    // Image proxy — same-origin asset serving with proper CORP/CT headers
    // Fixes Firefox OpaqueResponseBlocking on R2 cross-origin loads
    if (path.startsWith("/img/")) {
      const r2Key = path.slice(5); // strip "/img/"
      // HARDENED: validate key — only safe chars, no traversal, length-bounded
      if (!r2Key || r2Key.length > 256 || r2Key.includes("..") || !/^[A-Za-z0-9/_.\-]+$/.test(r2Key)) {
        return new Response("Not found", { status: 404 });
      }
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
      // ─── ASK TUCK v2 (May 27 2026): TOOL-USING with live D1 + cache queries ───
      // Tuck can now actually READ the data instead of just describing it.
      // Architecture: regex pre-router catches obvious patterns → forces correct tool.
      // Fallback: Llama 3.3 70B with tool-call schema picks tool itself.
      // Then: Llama composes plain-English answer from tool results.
      const ASK_TUCK_CORS = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": (() => {
          const o = request.headers.get("Origin") || "";
          return (o === "https://tuck.osintnet.uk" || o === "https://market.osintnet.uk") ? o : "https://tuck.osintnet.uk";
        })(),
        "Vary": "Origin"
      };
      try {
        const cl = parseInt(request.headers.get("Content-Length") || "0", 10);
        if (cl > 4096) {
          return new Response(JSON.stringify({ error: "Message too large." }), { status: 413, headers: ASK_TUCK_CORS });
        }
        let reqBody;
        try { reqBody = await request.json(); }
        catch { return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400, headers: ASK_TUCK_CORS }); }
        const userMsg = (reqBody && reqBody.message || "").toString().slice(0, 1000);
        if (!userMsg.trim()) {
          return new Response(JSON.stringify({ error: "Ask Tuck something." }), { status: 400, headers: ASK_TUCK_CORS });
        }
        const ip = request.headers.get("CF-Connecting-IP") || "unknown";
        const rlKey = "rl:" + ip + ":" + Math.floor(Date.now() / 60000);
        const rlCount = parseInt((await env.TUCK_KV.get(rlKey)) || "0", 10);
        if (rlCount >= 10) {
          return new Response(JSON.stringify({ error: "Slow down friend. Tuck only handles 10 questions per minute per visitor." }), {
            status: 429, headers: ASK_TUCK_CORS
          });
        }
        await env.TUCK_KV.put(rlKey, String(rlCount + 1), { expirationTtl: 120 });

        // ─── TOOL IMPLEMENTATIONS ──────────────────────────────────────────────
        // All tools return { ok: true, ... } or { ok: false, error: "..." }
        // Each tool is bounded: max rows, max chars in summaries, parallel-safe.
        const TICKER_LIST = ["NVDA","NET","AVGO","QCOM","MU","INTC","MP","XLE","USO","KTOS","SOXX","QQQ"];

        async function tool_query_congress(args) {
          try {
            if (!env.TRADEDESK_DB) return { ok: false, error: "trades db unavailable" };
            const ticker = (args.ticker || "").toUpperCase().slice(0,5);
            const member = (args.member || "").slice(0,80);
            const txType = (args.transaction_type || "").slice(0,40);
            const days = Math.min(parseInt(args.days || "365",10), 1825);
            const limit = Math.min(parseInt(args.limit || "20",10), 50);
            const dateCutoff = new Date(Date.now() - days*86400000).toISOString().slice(0,10);
            const where = [`date >= '${dateCutoff}'`, "ticker IS NOT NULL", "ticker != ''"];
            const binds = [];
            if (ticker) { where.push("ticker = ?"); binds.push(ticker); }
            if (txType) { where.push("LOWER(transaction_type) LIKE ?"); binds.push("%"+txType.toLowerCase()+"%"); }
            // House and Senate share same WHERE binds, then member name (if any) is chamber-specific column
            const baseWhere = where.join(" AND ");
            const memberLike = member ? "%"+member.toLowerCase()+"%" : null;
            const memberClauseH = memberLike ? " AND LOWER(representative) LIKE ?" : "";
            const memberClauseS = memberLike ? " AND LOWER(senator) LIKE ?" : "";
            const sql =
              "SELECT * FROM (" +
              "  SELECT representative AS member, 'House' AS chamber, date, ticker, transaction_type, range_text, amount " +
              "  FROM qq_house WHERE " + baseWhere + memberClauseH +
              "  UNION ALL " +
              "  SELECT senator AS member, 'Senate' AS chamber, date, ticker, transaction_type, range_text, amount " +
              "  FROM qq_senate WHERE " + baseWhere + memberClauseS +
              ") ORDER BY date DESC LIMIT ?";
            // Bind order: (base binds for house) + (member for house if any) + (base binds for senate) + (member for senate if any) + limit
            const fullBinds = [];
            fullBinds.push(...binds);
            if (memberLike) fullBinds.push(memberLike);
            fullBinds.push(...binds);
            if (memberLike) fullBinds.push(memberLike);
            fullBinds.push(limit);
            const q = await env.TRADEDESK_DB.prepare(sql).bind(...fullBinds).all();
            const rows = (q.results || []).map(r => ({
              member: r.member, chamber: r.chamber, date: r.date,
              ticker: r.ticker, type: r.transaction_type, amount: r.range_text
            }));
            // Dedupe (qq_house/senate has duplicate rows)
            const seen = new Set();
            const deduped = rows.filter(r => {
              const k = `${r.member}|${r.date}|${r.ticker}|${r.type}|${r.amount}`;
              if (seen.has(k)) return false; seen.add(k); return true;
            });
            return { ok: true, count: deduped.length, trades: deduped.slice(0, limit) };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        async function tool_query_contracts(args) {
          try {
            if (!env.TRADEDESK_DB) return { ok: false, error: "trades db unavailable" };
            const ticker = (args.ticker || "").toUpperCase().slice(0,5);
            const agency = (args.agency || "").slice(0,40);
            const days = Math.min(parseInt(args.days || "365",10), 1825);
            const limit = Math.min(parseInt(args.limit || "20",10), 50);
            const dateCutoff = new Date(Date.now() - days*86400000).toISOString().slice(0,10);
            const where = [`date >= ?`];
            const binds = [dateCutoff];
            if (ticker) { where.push("ticker = ?"); binds.push(ticker); }
            if (agency) { where.push("LOWER(agency) LIKE ?"); binds.push("%"+agency.toLowerCase()+"%"); }
            binds.push(limit);
            const q = await env.TRADEDESK_DB.prepare(
              `SELECT date, ticker, agency, description, amount FROM qq_contracts WHERE ${where.join(" AND ")} ORDER BY date DESC LIMIT ?`
            ).bind(...binds).all();
            return { ok: true, count: (q.results||[]).length, contracts: q.results || [] };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        async function tool_query_news(args) {
          try {
            if (!env.GEOINT_DB) return { ok: false, error: "news db unavailable" };
            const ticker = (args.ticker || "").toUpperCase().slice(0,5);
            const region = (args.region || "").slice(0,40);
            const keyword = (args.keyword || "").slice(0,80);
            const days = Math.min(parseInt(args.days || "7",10), 90);
            const limit = Math.min(parseInt(args.limit || "10",10), 25);
            const where = [`published_at >= datetime('now','-${days} days')`];
            const binds = [];
            if (ticker || keyword) {
              const term = ticker || keyword;
              where.push("(headline LIKE ? OR full_text LIKE ? OR keywords LIKE ?)");
              binds.push("%"+term+"%","%"+term+"%","%"+term+"%");
            }
            if (region) {
              where.push("LOWER(geopolitical_region) LIKE ?");
              binds.push("%"+region.toLowerCase()+"%");
            }
            binds.push(limit);
            const q = await env.GEOINT_DB.prepare(
              `SELECT id, source, headline, published_at, market_impact_score, geopolitical_region FROM signals WHERE ${where.join(" AND ")} ORDER BY published_at DESC LIMIT ?`
            ).bind(...binds).all();
            const sigs = (q.results || []).map(r => ({
              id: r.id, source: r.source, headline: (r.headline || '').slice(0,200),
              when: r.published_at, impact: r.market_impact_score, region: r.geopolitical_region
            }));
            return { ok: true, count: sigs.length, signals: sigs };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        async function tool_query_tucks_score(args) {
          try {
            const ticker = (args.ticker || "").toUpperCase().slice(0,5);
            if (!ticker) return { ok: false, error: "ticker required" };
            if (!env.TRADEDESK_DB) return { ok: false, error: "scores db unavailable" };
            const row = await env.TRADEDESK_DB.prepare(
              "SELECT ticker, total_score, verdict, momentum_score, signal_score, congress_score, contract_score, score_date FROM tucks_scores WHERE ticker=? ORDER BY score_date DESC LIMIT 1"
            ).bind(ticker).first().catch(()=>null);
            if (!row) return { ok: true, score: null, note: `No score on file for ${ticker}.` };
            return { ok: true, score: row };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        async function tool_query_macro() {
          try {
            const cached = await env.TUCK_KV.get('cache:macro:current','json');
            if (cached) return { ok: true, macro: cached };
            return { ok: false, error: "macro cache empty" };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        async function tool_query_prices(args) {
          try {
            const ticker = (args.ticker || "").toUpperCase().slice(0,5);
            const cached = await env.TUCK_KV.get('cache:prices:current','json');
            if (!cached || !cached.quotes) return { ok: false, error: "price cache empty" };
            if (ticker) {
              const q = cached.quotes[ticker];
              if (!q) return { ok: true, note: `${ticker} not in watchlist. Tracked: ${TICKER_LIST.join(', ')}.` };
              return { ok: true, ticker, price: q.price, change_pct: q.change_pct, prev_close: q.prev_close, name: q.name, asof: cached.ts };
            }
            // Return all
            const all = {};
            for (const t of TICKER_LIST) {
              if (cached.quotes[t]) {
                all[t] = { price: cached.quotes[t].price, change_pct: cached.quotes[t].change_pct };
              }
            }
            return { ok: true, prices: all, asof: cached.ts };
          } catch (e) { return { ok: false, error: String(e).slice(0,200) }; }
        }

        const TOOLS = {
          query_congress: tool_query_congress,
          query_contracts: tool_query_contracts,
          query_news: tool_query_news,
          query_tucks_score: tool_query_tucks_score,
          query_macro: tool_query_macro,
          query_prices: tool_query_prices
        };

        // ─── REGEX PRE-ROUTER: catch obvious patterns, force correct tool ──────
        const msgLower = userMsg.toLowerCase();
        const tickerMatch = userMsg.match(/\b(NVDA|NET|AVGO|QCOM|MU|INTC|MP|XLE|USO|KTOS|SOXX|QQQ|AAPL|MSFT|TSLA|GOOG|GOOGL|META|AMZN|AMD|PLTR)\b/);
        const detectedTicker = tickerMatch ? tickerMatch[1] : null;

        let forcedTool = null;
        let forcedArgs = {};

        // Detect: explicit congress words, OR known politician name patterns, OR "trades + capitalized name"
        const knownPoliticianRe = /\b(pelosi|mccarthy|schumer|mcconnell|fetterman|cisneros|boozman|evans|gottheimer|crenshaw|tuberville|warren|sanders|gaetz|jordan|aoc|ocasio|cortez|biden|trump|harris|vance|johnson|jeffries|massie|paul|cruz|hawley|romney|manchin|sinema|cotton|rubio|durbin|wyden|markey|kelly|ossoff|warnock|reed|coons|whitehouse|hirono|smith|peters|stabenow|baldwin|brown|portman|gillibrand)/;
        const hasNameOnly = /\b([A-Z][a-z]{2,}) ([A-Z][a-z]{2,})\b/.test(userMsg) && /\b(trade|trades|trading|stock|bought|sold|sell|sells|sales|purchase|buys|bought|holdings)/.test(msgLower);

        if (/(congress|congressman|senator|representative|congresswoman|senate|house|capitol|lawmaker|politician)/.test(msgLower) || knownPoliticianRe.test(msgLower) || hasNameOnly) {
          forcedTool = 'query_congress';
          forcedArgs = { limit: 25, days: 730 };
          if (detectedTicker) forcedArgs.ticker = detectedTicker;
          if (/\b(sold|sell|sale|sales|dump|unload)/.test(msgLower)) forcedArgs.transaction_type = 'sale';
          else if (/\b(bought|buy|buys|purchase|acquired|acquir)/.test(msgLower)) forcedArgs.transaction_type = 'purchase';
          // Member name extraction — capitalized 2-word sequence (skip sentence-start words + tickers)
          // Try ALL matches and pick the first one that's not a stop-word
          const STOP_PREFIXES = new Set(['Did','Has','Have','Does','Are','Is','What','Who','When','Where','Why','How','Was','Were','Can','Will','Would','Should','Could','The','Any','Some','Show','Tell','List','Find','Look','Check','Hey','Hi','Hello','Yes','No','Ok','Okay']);
          const memberMatches = [...userMsg.matchAll(/\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g)];
          for (const m of memberMatches) {
            const firstWord = m[1];
            const fullName = m[0];
            if (STOP_PREFIXES.has(firstWord)) {
              // Try the second word + next capitalized word in the chain
              continue;
            }
            if (!TICKER_LIST.includes(fullName.toUpperCase())) {
              forcedArgs.member = fullName;
              break;
            }
          }
          // Fallback: if we skipped a "Did Dwight Evans" pattern, try just the surname
          if (!forcedArgs.member) {
            const fallback = userMsg.match(/\b(?:Did|Has|Have|Does|Are|Is|What|Who|Show|Tell|List|Find|Look|Check) ([A-Z][a-z]+) ([A-Z][a-z]+)\b/);
            if (fallback) {
              const candidate = fallback[1] + ' ' + fallback[2];
              if (!TICKER_LIST.includes(candidate.toUpperCase())) {
                forcedArgs.member = candidate;
              }
            }
          }
        } else if (/(contract|defense|pentagon|dod|gsa|federal contract)/.test(msgLower)) {
          forcedTool = 'query_contracts';
          forcedArgs = { limit: 15, days: 365 };
          if (detectedTicker) forcedArgs.ticker = detectedTicker;
        } else if (/(news|signal|headline|breaking|reported|article|happening)/.test(msgLower)) {
          forcedTool = 'query_news';
          forcedArgs = { limit: 10, days: 7 };
          if (detectedTicker) forcedArgs.ticker = detectedTicker;
          const regionMatch = msgLower.match(/(ukraine|russia|china|taiwan|israel|gaza|iran|middle east|europe|asia)/);
          if (regionMatch) forcedArgs.region = regionMatch[1];
        } else if (/(tuck.?s? score|conviction|verdict|rating|grade)/.test(msgLower) && detectedTicker) {
          forcedTool = 'query_tucks_score';
          forcedArgs = { ticker: detectedTicker };
        } else if (/(macro|fed |interest rate|inflation|cpi|vix|treasury|10.?year|dollar|dxy|gold price|oil price|bitcoin price|btc price)/.test(msgLower)) {
          forcedTool = 'query_macro';
          forcedArgs = {};
        } else if (detectedTicker && /(price|quote|trading|at today|right now|how much|cost|worth|going for|sitting at|at\?$|today\?$|now\?$)/.test(msgLower)) {
          forcedTool = 'query_prices';
          forcedArgs = { ticker: detectedTicker };
        }

        // Execute tool if forced
        let toolResult = null;
        let toolUsed = null;
        if (forcedTool && TOOLS[forcedTool]) {
          toolUsed = forcedTool;
          toolResult = await TOOLS[forcedTool](forcedArgs);
        }

        // ─── SYSTEM PROMPT ─────────────────────────────────────────────────────
        const systemPromptBase = [
          "You are Tuck — the AI guide of Tuck (tuck.osintnet.uk), a free OSINT and market-education platform from Indica Independent Media (IIM), the public face of VPDLNY.",
          "",
          "PERSONA: You speak with the calm confidence of Friar Tuck — a guardian of common folk against the powerful. Warm, plain-spoken, never condescending, never preachy. Use everyday language. Short paragraphs.",
          "",
          "MISSION: You serve the vulnerable, the poor, the oppressed, and the curious. You hand back the information Wall Street and the powerful try to hoard.",
          "",
          "WATCHLIST: NVDA, NET, AVGO, QCOM, MU, INTC, MP, XLE, USO, KTOS, SOXX, QQQ",
          "",
          "DATABASE TOOLS (the worker pre-fetches these when you need them; just compose from the results):",
          "- query_congress: real STOCK Act filings — House + Senate trades by ticker, member, type",
          "- query_contracts: federal contracts awarded to public companies",
          "- query_news: 40+ source OSINT signals (Reuters, Al Jazeera, Axios, ISW, Breaking Defense, etc.)",
          "- query_tucks_score: daily 0-100 conviction score with breakdown (momentum, signal, congress, contract)",
          "- query_macro: Fed rate, oil, VIX, DXY, gold, BTC, copper, 10Y",
          "- query_prices: live watchlist quotes",
          "",
          "HARD RULES (NEVER VIOLATE):",
          "1. NEVER give financial advice, buy/sell recommendations, or price predictions. Educational only.",
          "2. If asked 'should I buy X' — explain what it is and what data is on the site. Never tell them what to do with their money.",
          "3. If a tool result is provided below, USE IT. Quote specific names, dates, amounts from the result. Do not paraphrase into vagueness.",
          "4. If a tool result is empty (count: 0), say plainly 'no records found for X in the database' — do NOT invent data.",
          "5. Be honest about uncertainty. Say 'I don't know' when you don't.",
          "6. Keep answers under 200 words unless explicitly asked for more depth.",
          "7. Don't moralize. Don't preach. Just help.",
          "",
          "If someone asks who built you: Tuck is open-source, free forever, built by VPDLNY, runs on Cloudflare Workers AI with Llama 3.3."
        ].join("\n");

        // ─── ASSEMBLE MESSAGES ─────────────────────────────────────────────────
        const messages = [{ role: "system", content: systemPromptBase }];
        if (toolResult) {
          // Trim tool result to keep context tight
          const trimmed = JSON.stringify(toolResult).slice(0, 6000);
          messages.push({
            role: "system",
            content: `TOOL RESULT for ${toolUsed}(${JSON.stringify(forcedArgs)}):\n${trimmed}\n\nCompose your answer using ONLY the facts in this result. If count is 0 or result is empty, say so plainly. Quote specific names/dates/amounts. Don't invent.`
          });
        }
        messages.push({ role: "user", content: userMsg });

        const aiResp = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
          messages,
          max_tokens: 600,
          temperature: 0.5  // Lower than v1 (0.7) — we want grounded, not creative
        });

        const reply = (aiResp && aiResp.response) ? aiResp.response : "Sorry friend, my mind went blank. Try asking again.";
        return new Response(JSON.stringify({
          reply,
          _tool_used: toolUsed,
          _tool_count: toolResult ? (toolResult.count !== undefined ? toolResult.count : 'n/a') : null
        }), { headers: ASK_TUCK_CORS });
      } catch (e) {
        console.error("[ask-tuck]", e?.stack || e);
        return new Response(JSON.stringify({ error: "Tuck is resting. Try again in a moment." }), {
          status: 500, headers: ASK_TUCK_CORS
        });
      }
    }

    // ── TUCK v2.3 — Universal ticker lookup (works for ANY symbol, incl. Congress tickers not in watchlist) ──
    if (path.startsWith("/api/ticker/")) {
      const sym = decodeURIComponent(path.slice("/api/ticker/".length)).toUpperCase().replace(/[^A-Z0-9.\-]/g, "").slice(0, 12);
      if (!sym) return new Response(JSON.stringify({ ok: false, error: "no symbol" }), { status: 400, headers: { "Content-Type": "application/json" } });
      const cacheKey = "cache:ticker:" + sym;
      try {
        const cached = await env.TUCK_KV.get(cacheKey, "json");
        if (cached) return new Response(JSON.stringify(cached), { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" } });
      } catch(_) {}
      try {
        const r = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=5d`,
          { headers: { "User-Agent": "Mozilla/5.0 (compatible; PeoplesMarket/1.0)" }, cf: { cacheTtl: 300 } });
        if (!r.ok) throw new Error("yahoo " + r.status);
        const d = await r.json();
        const m = d.chart?.result?.[0]?.meta;
        if (!m || m.regularMarketPrice == null) throw new Error("no meta");
        const prev = m.chartPreviousClose ?? m.previousClose ?? m.regularMarketPrice;
        const price = m.regularMarketPrice;
        const chg = price - prev;
        const chgPct = prev ? (chg / prev) * 100 : 0;
        // Is it in our curated watchlist? (richer context if so)
        const inWl = V2_WATCHLIST.find(w => w.ticker === sym) || null;
        const out = {
          ok: true, symbol: sym,
          name: m.longName || m.shortName || (inWl ? inWl.name : sym),
          price: Math.round(price * 100) / 100,
          change: Math.round(chg * 100) / 100,
          changePct: Math.round(chgPct * 100) / 100,
          currency: m.currency || "USD",
          exchange: m.fullExchangeName || m.exchangeName || "",
          inWatchlist: !!inWl,
          sector: inWl ? inWl.sector : null,
          desc: inWl ? inWl.desc : null,
          ts: Date.now()
        };
        try { await env.TUCK_KV.put(cacheKey, JSON.stringify(out), { expirationTtl: 600 }); } catch(_) {}
        return new Response(JSON.stringify(out), { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" } });
      } catch(e) {
        const inWl = V2_WATCHLIST.find(w => w.ticker === sym) || null;
        return new Response(JSON.stringify({ ok: false, symbol: sym, name: inWl ? inWl.name : sym, inWatchlist: !!inWl, error: String(e?.message || e) }),
          { status: 200, headers: { "Content-Type": "application/json" } });
      }
    }

    if (path === "/api/prices") {
      try {
        // ⚡ Persistent cache — refreshed every 10min during session by tuck-cache-refresh worker
        // TUCK v2.2 — FRESHNESS GATE: if cache is stale during market hours, background-trigger
        // a refresh and serve cached with _stale flag so the UI can show a warning pill
        const cached = await env.TUCK_KV.get('cache:prices:current', 'json');
        if (cached && cached.quotes) {
          const cachedAt = cached.ts ? new Date(cached.ts) : null;
          const ageMs = cachedAt ? Date.now() - cachedAt.getTime() : Infinity;
          const ageMin = ageMs / 60000;
          // Check if we're in US market hours (Mon-Fri 13:30-20:00 UTC = 9:30am-4pm ET)
          const now = new Date();
          const utcDay = now.getUTCDay(); // 0=Sun, 6=Sat
          const utcHour = now.getUTCHours();
          const utcMin = now.getUTCMinutes();
          const utcTime = utcHour * 60 + utcMin;
          const inSession = utcDay >= 1 && utcDay <= 5 && utcTime >= 13*60+30 && utcTime <= 20*60;
          // During session: 20min stale threshold. Off hours: 6h before flagging stale.
          const staleThreshold = inSession ? 20 : 360;
          const isStale = ageMin > staleThreshold;
          // If stale during market hours, fire a background refresh (no await — don't block user)
          if (isStale && inSession && env.TUCK_REFRESH_SECRET) {
            ctx.waitUntil(fetch('https://tuck-cache-refresh.thom-rvr.workers.dev/refresh', {
              method: 'POST',
              headers: { 'Authorization': 'Bearer ' + env.TUCK_REFRESH_SECRET }
            }).catch(()=>{}));
          }
          const responseBody = {
            ...cached,
            _stale: isStale,
            _age_min: Math.round(ageMin * 10) / 10,
            _in_session: inSession,
          };
          return new Response(JSON.stringify(responseBody), { headers: { ...JSON_H, 'Cache-Control': isStale ? 'public, max-age=30' : 'public, max-age=300' }});
        }
        // ── Cold-cache fallback (first deploy, KV miss) — original live-fetch path ──
        const baseRes = await fetch(PRICE_URL + "/prices");
        const baseData = await baseRes.json();
        const quotes = baseData.quotes || {};
        const MISSING = ["QCOM", "INTC", "MP", "KTOS", "SOXX", "QQQ"];
        const NAMES = { QCOM: "Qualcomm", INTC: "Intel", MP: "MP Materials", KTOS: "Kratos Defense", SOXX: "Semiconductor ETF", QQQ: "Nasdaq-100 ETF" };
        const CATS = { QCOM: "semiconductor", INTC: "semiconductor", MP: "defense", KTOS: "defense", SOXX: "etf", QQQ: "etf" };
        const CORR = { QCOM: "China/Taiwan", INTC: "China/Taiwan", MP: "China/Taiwan", KTOS: "defense spending", SOXX: "semiconductor cycle", QQQ: "tech mega-caps" };
        // Shares outstanding (billions, approx — SEC 10-Q May 2026)
        const SHARES = {
          NVDA: 24400000000, NET: 348000000, AVGO: 4690000000,
          QCOM: 1100000000, MU: 1120000000, INTC: 4780000000,
          MP: 165000000, XLE: 305000000, USO: 89700000,
          KTOS: 158000000, SOXX: 0, QQQ: 0
        };
        const ALL_TICKERS = ["NVDA","NET","AVGO","QCOM","MU","INTC","MP","XLE","USO","KTOS","SOXX","QQQ"];
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
        // HARDENED: clamp limit param at edge to prevent bandwidth amplification
        const safeUrl = new URL(INGEST_URL + "/signals");
        for (const [k, v] of url.searchParams) {
          if (k === "limit") {
            const n = Math.min(Math.max(parseInt(v, 10) || 30, 1), 200);
            safeUrl.searchParams.set("limit", String(n));
          } else {
            safeUrl.searchParams.set(k, v);
          }
        }
        if (!safeUrl.searchParams.has("limit")) safeUrl.searchParams.set("limit", "30");
        const r = await fetch(safeUrl.toString());
        const t = await r.text();
        return new Response(t, { headers: JSON_H });
      } catch (e) {
        console.error("[news]", e?.stack || e);
        return new Response(JSON.stringify({ error: "News service unavailable." }), { status: 502, headers: JSON_H });
      }
    }
    if (path === "/api/squawk") {
      try {
        if (!env.GEOINT_DB) return new Response(JSON.stringify({signals:[], error:"GEOINT_DB binding missing"}), { headers: JSON_H });
        const since = url.searchParams.get("since"); // id cursor: only fetch newer than this
        const limit = Math.min(parseInt(url.searchParams.get("limit") || "30", 10), 100);
        const src   = url.searchParams.get("source"); // optional source filter
        let sql = "SELECT id, source, headline, full_text, url, published_at, market_impact_score, geopolitical_region FROM signals";
        const binds = [];
        const where = [];
        if (since) { where.push("id > ?"); binds.push(parseInt(since,10) || 0); }
        if (src && src !== "all") { where.push("source = ?"); binds.push(src); }
        if (where.length) sql += " WHERE " + where.join(" AND ");
        sql += " ORDER BY id DESC LIMIT ?";
        binds.push(limit);
        const q = await env.GEOINT_DB.prepare(sql).bind(...binds).all();
        const rows = q.results || [];
        // Also pull distinct sources for filter chip rendering
        let sources = [];
        if (!since) {
          const sq = await env.GEOINT_DB.prepare("SELECT source, COUNT(*) as cnt FROM signals WHERE published_at >= datetime('now','-24 hours') GROUP BY source ORDER BY cnt DESC LIMIT 20").all();
          sources = (sq.results || []).map(r => ({ source: r.source, count: r.cnt }));
        }
        return new Response(JSON.stringify({
          ok: true,
          signals: rows,
          count: rows.length,
          sources,
          latest_id: rows[0]?.id || since || null
        }), { headers: { ...JSON_H, "Cache-Control": "no-store" } });
      } catch(e) {
        return new Response(JSON.stringify({ ok:false, signals:[], error: String(e).slice(0,200) }), { status: 500, headers: JSON_H });
      }
    }
    if (path === "/api/congress") {
      try {
        if (!env.TRADEDESK_DB) {
          return new Response(JSON.stringify({ trades: [], error: "TRADEDESK_DB binding missing" }), { headers: JSON_H });
        }
        const limit = Math.min(parseInt(url.searchParams.get("limit") || "30", 10), 100);
        const q = await env.TRADEDESK_DB.prepare(
          "SELECT * FROM (" +
          "  SELECT representative AS member_name, 'House' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label " +
          "  FROM qq_house WHERE ticker IS NOT NULL AND ticker != '' " +
          "  UNION ALL " +
          "  SELECT senator AS member_name, 'Senate' AS chamber, bio_guide_id, date AS trade_date, ticker, transaction_type AS txn_type, range_text AS amount_label " +
          "  FROM qq_senate WHERE ticker IS NOT NULL AND ticker != '' " +
          ") ORDER BY trade_date DESC LIMIT ?"
        ).bind(limit).all();
        const trades = (q.results || []).map(t => ({
          name: t.member_name,
          member_name: t.member_name,
          chamber: t.chamber,
          bio_guide_id: t.bio_guide_id,
          party: null,
          ticker: t.ticker,
          transaction: t.txn_type,
          transaction_type: t.txn_type,
          type: t.txn_type,
          date: t.trade_date,
          trade_date: t.trade_date,
          amount: t.amount_label,
          range: t.amount_label
        }));
        return new Response(JSON.stringify({ trades, count: trades.length, source: "tradedesk-db direct" }), {
          headers: { ...JSON_H, "Cache-Control": "public, max-age=300" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ trades: [], error: String(e).slice(0,200) }), { headers: JSON_H });
      }
    }
    if (path === "/api/ravid") {
      try {
        if (!env.GEOINT_DB) {
          return new Response(JSON.stringify({ signals: [], error: "GEOINT_DB binding missing" }), { headers: JSON_H });
        }
        const limit = Math.min(parseInt(url.searchParams.get("limit") || "20", 10), 50);
        const q = await env.GEOINT_DB.prepare(
          "SELECT id as signal_id, source, author, headline, full_text, url, published_at, geopolitical_region, market_impact_score, sentiment " +
          "FROM signals " +
          "WHERE source IN ('x_barakravid','bluesky_barakravid','axios_ravid') " +
          "ORDER BY published_at DESC LIMIT ?"
        ).bind(limit).all();
        return new Response(JSON.stringify({
          signals: q.results || [],
          count: (q.results || []).length,
          source: "geoint-db"
        }), { headers: { ...JSON_H, "Cache-Control": "public, max-age=300" } });
      } catch (e) {
        return new Response(JSON.stringify({ signals: [], error: String(e).slice(0,200) }), { headers: JSON_H });
      }
    }

    if (path === "/api/scenarios") {
      try {
        const r = await fetch('https://scenario-engine.thom-rvr.workers.dev/scenarios', { cf: { cacheTtl: 300 }});
        const d = await r.json();
        return new Response(JSON.stringify(d), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
      } catch(e) {
        return new Response(JSON.stringify({error:String(e).slice(0,200), scenarios:[]}), {status:500, headers:{'Content-Type':'application/json'}});
      }
    }

    if (path === "/api/tucks-score") {
      try {
        const ticker = url.searchParams.get('ticker') || '';
        // ⚡ Leaderboard (no ticker param) — serve from KV cache
        if (!ticker) {
          const cached = await env.TUCK_KV.get('cache:tucks-score:current', 'json');
          if (cached && cached.ok) {
            return new Response(JSON.stringify(cached), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
          }
        }
        // Per-ticker history (?ticker=NVDA) — pass through to live worker (small payload, fine)
        const qs = ticker ? ('?ticker=' + encodeURIComponent(ticker)) : '';
        const r = await fetch('https://tucks-score.thom-rvr.workers.dev/scores' + qs, { cf: { cacheTtl: 300 }});
        const d = await r.json();
        return new Response(JSON.stringify(d), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
      } catch(e) {
        return new Response(JSON.stringify({error:String(e).slice(0,200), scores:[]}), {status:500, headers:{'Content-Type':'application/json'}});
      }
    }
    
    // ⚡ NEW: /api/sector-heat — fully precomputed in KV
    if (path === "/api/sector-heat") {
      try {
        const cached = await env.TUCK_KV.get('cache:sector-heat:current', 'json');
        if (cached && cached.ok) {
          return new Response(JSON.stringify(cached), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
        }
        return new Response(JSON.stringify({ok:false, sectors:{}, note:'cache warming, refresh in a few mins'}), {headers:{'Content-Type':'application/json'}});
      } catch(e) {
        return new Response(JSON.stringify({ok:false, error:String(e).slice(0,200), sectors:{}}), {status:500, headers:{'Content-Type':'application/json'}});
      }
    }

    if (path === "/api/drill") {
      const type = url.searchParams.get('type') || '';
      const id   = (url.searchParams.get('id') || '').slice(0,80);
      if (!type || !id) {
        return new Response(JSON.stringify({error:'missing type or id'}), {status:400, headers:{'Content-Type':'application/json'}});
      }
      try {
        if (type === 'ticker') {
          // Ticker deep dive — congressional trades, gov contracts, lobbying, geoint signals
          const T = id.toUpperCase();
          const db = env.TRADEDESK_DB;
          const geo = env.GEOINT_DB;

          const [house, senate, contracts, lobbying, signals] = await Promise.all([
            db.prepare("SELECT date, representative, transaction_type, range_text, amount FROM qq_house WHERE ticker=? ORDER BY date DESC LIMIT 25").bind(T).all(),
            db.prepare("SELECT date, senator, transaction_type, range_text, amount FROM qq_senate WHERE ticker=? ORDER BY date DESC LIMIT 25").bind(T).all(),
            db.prepare("SELECT date, agency, description, amount FROM qq_contracts WHERE ticker=? ORDER BY date DESC LIMIT 25").bind(T).all(),
            db.prepare("SELECT date, client, registrant, issue, amount FROM qq_lobbying WHERE ticker=? ORDER BY date DESC LIMIT 25").bind(T).all(),
            geo.prepare("SELECT id as signal_id, source, headline, full_text as summary, published_at, market_impact_score FROM signals WHERE keywords LIKE ? OR headline LIKE ? OR full_text LIKE ? ORDER BY published_at DESC LIMIT 20").bind('%'+T+'%','%'+T+'%','%'+T+'%').all().catch(()=>({results:[]}))
          ]);

          const sumAmt = arr => (arr||[]).reduce((s,r)=>s+(parseFloat(r.amount)||0),0);
          const summary = {
            house_trades_count: (house.results||[]).length,
            house_total_amount: sumAmt(house.results),
            senate_trades_count: (senate.results||[]).length,
            senate_total_amount: sumAmt(senate.results),
            contracts_count: (contracts.results||[]).length,
            contracts_total_amount: sumAmt(contracts.results),
            lobbying_count: (lobbying.results||[]).length,
            geoint_signals_count: (signals.results||[]).length
          };

          return new Response(JSON.stringify({
            ok:true, type:'ticker', ticker:T,
            summary,
            house: house.results || [],
            senate: senate.results || [],
            contracts: contracts.results || [],
            lobbying: lobbying.results || [],
            signals: signals.results || []
          }), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
        }

        if (type === 'macro') {
          // Macro indicator deep dive — current value, history note, explainer, why it matters
          const macroDeepDive = {
            'vix':       { title:'VIX (CBOE Volatility Index)', desc:'30-day implied vol on S&P 500 options', why:'Below 15 = complacency, 15–20 = normal, 20–30 = elevated stress, 30+ = panic. Spikes in VIX usually mean institutional players are paying up for downside protection.', tip:'Watch for divergence: if SPX makes new highs but VIX doesn\'t make new lows, that\'s a yellow flag.' },
            'gold':      { title:'Gold (XAU/USD)', desc:'Spot price of gold per troy ounce', why:'Gold rallies on real-rate compression, currency debasement fears, and geopolitical instability. It\'s the millennia-old safe-haven asset that doesn\'t pay yield but doesn\'t default either.', tip:'Gold tends to lead inflation surprises by 3-6 months. Watch the relationship to TIPS yields — when real yields fall, gold rises.' },
            'btc':       { title:'Bitcoin (BTC/USD)', desc:'Decentralized digital asset, 21M supply cap', why:'BTC has matured into a macro asset. Now correlates with risk-on liquidity but also acts as digital gold in dollar-devaluation regimes.', tip:'Watch BTC dominance vs alt-coins. BTC.D rising during BTC rallies = institutional flows. Falling BTC.D = retail speculation.' },
            'copper':    { title:'Copper (HG, Dr. Copper)', desc:'Industrial metal, leading economic indicator', why:'Copper is in EVERY building, EV, and electrical grid. When copper rises, global growth expectations are rising. When it falls, recession risk is climbing.', tip:'Copper/Gold ratio is one of the cleanest growth-vs-fear signals on the planet.' },
            'fed_rate':  { title:'Federal Funds Target Rate', desc:'Overnight interbank lending rate set by the FOMC', why:'The Fed Funds rate is the cost of money for every bank in America, and ripples through all of credit. Higher rates = tighter financial conditions, lower asset prices, slower growth.', tip:'Watch the 2-year Treasury yield — it\'s the market\'s forecast of where Fed Funds will be in 24 months.' },
            'cpi':       { title:'CPI (Consumer Price Index)', desc:'Headline inflation: avg price change in basket of consumer goods', why:'CPI drives Fed policy, real wages, Social Security adjustments, and TIPS pricing. Above 3% the Fed gets hawkish. Below 2% the Fed eases.', tip:'Core CPI (ex-food/energy) is what the Fed actually watches. Watch services inflation — that\'s the sticky kind.' },
            'unemployment':{ title:'Unemployment Rate (U-3)', desc:'% of labor force actively looking for work', why:'Sub-4% = tight labor market, wage pressure. Above 5% = recession risk rising. The Fed\'s dual mandate is price stability + max employment.', tip:'Watch U-6 (underemployment) and labor force participation alongside U-3 to see the full picture.' },
            'us10y':     { title:'US 10-Year Treasury Yield', desc:'Yield on the benchmark 10Y US government bond', why:'This is THE risk-free rate that prices every other asset on Earth. Rising 10Y = pressure on stocks, especially long-duration growth names.', tip:'Watch the 2s10s spread (10Y minus 2Y). When it inverts (10Y < 2Y) recession typically follows in 12-24 months.' },
            'oil':       { title:'WTI Crude Oil', desc:'US benchmark oil price per barrel', why:'Oil is the input cost for everything. Spikes drive inflation, hurt consumer spending, and reward energy stocks. Crashes signal demand destruction.', tip:'Watch the spread between WTI and Brent — wider = US-specific supply glut, narrower = global market tight.' },
            'dxy':       { title:'US Dollar Index (DXY)', desc:'Trade-weighted USD vs 6 major currencies', why:'Strong dollar = headwind for US multinationals, EM debt stress, commodity weakness. Weak dollar = tailwind for risk assets, oil & gold.', tip:'DXY rising while stocks rising = bullish (capital flowing INTO US). DXY rising while stocks falling = risk-off panic into USD.' }
          };
          const m = macroDeepDive[id.toLowerCase()] || null;
          return new Response(JSON.stringify({ ok:true, type:'macro', id, deep: m }), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=3600'}});
        }

        if (type === 'signal') {
          // Single GeoINT signal deep dive
          const sig = await env.GEOINT_DB.prepare("SELECT *, id as signal_id FROM signals WHERE id=?").bind(id).first().catch(()=>null);
          if (!sig) return new Response(JSON.stringify({error:'signal not found'}), {status:404, headers:{'Content-Type':'application/json'}});
          // Related — same source, last 5
          const related = await env.GEOINT_DB.prepare("SELECT id as signal_id, headline, published_at FROM signals WHERE source=? AND id<>? ORDER BY published_at DESC LIMIT 5").bind(sig.source, sig.id).all().catch(()=>({results:[]}));
          return new Response(JSON.stringify({ ok:true, type:'signal', signal: sig, related: related.results||[] }), {headers:{'Content-Type':'application/json'}});
        }

        if (type === 'trader') {
          // Politician profile — id = BioGuideID
          const db = env.TRADEDESK_DB;
          const [house, senate] = await Promise.all([
            db.prepare("SELECT date, ticker, transaction_type, range_text, amount FROM qq_house WHERE bio_guide_id=? ORDER BY date DESC LIMIT 100").bind(id).all().catch(()=>({results:[]})),
            db.prepare("SELECT date, ticker, transaction_type, range_text, amount FROM qq_senate WHERE bio_guide_id=? ORDER BY date DESC LIMIT 100").bind(id).all().catch(()=>({results:[]}))
          ]);
          const all = [...(house.results||[]), ...(senate.results||[])];
          // Get name
          const nameRow = await db.prepare("SELECT representative as name FROM qq_house WHERE bio_guide_id=? LIMIT 1").bind(id).first().catch(()=>null)
                       || await db.prepare("SELECT senator as name FROM qq_senate WHERE bio_guide_id=? LIMIT 1").bind(id).first().catch(()=>null);
          // Top tickers
          const byTicker = {};
          for (const t of all) {
            if (!t.ticker) continue;
            byTicker[t.ticker] = byTicker[t.ticker] || { ticker:t.ticker, count:0, total:0 };
            byTicker[t.ticker].count++;
            byTicker[t.ticker].total += parseFloat(t.amount)||0;
          }
          const top = Object.values(byTicker).sort((a,b)=>b.count-a.count).slice(0,10);
          return new Response(JSON.stringify({
            ok:true, type:'trader', bio_guide_id:id,
            name: nameRow?.name || 'Unknown',
            trades_count: all.length,
            top_tickers: top,
            recent: all.slice(0,30)
          }), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300'}});
        }

        if (type === 'scenario') {
          const row = await env.TRADEDESK_DB.prepare("SELECT * FROM scenarios WHERE id=?").bind(id).first();
          if (!row) return new Response(JSON.stringify({error:'scenario not found'}), {status:404, headers:{'Content-Type':'application/json'}});
          // Parse JSON fields
          const safe = (s, f) => { try { return JSON.parse(s); } catch { return f; } };
          row.supporting_data  = safe(row.supporting_data, []);
          row.risk_factors     = safe(row.risk_factors, []);
          row.tickers_affected = safe(row.tickers_affected, []);
          return new Response(JSON.stringify({ ok:true, type:'scenario', scenario: row }), {headers:{'Content-Type':'application/json'}});
        }

        return new Response(JSON.stringify({error:'unknown type'}), {status:400, headers:{'Content-Type':'application/json'}});
      } catch(e) {
        return new Response(JSON.stringify({error:String(e).slice(0,200)}), {status:500, headers:{'Content-Type':'application/json'}});
      }
    }

    if (path === "/api/macro") {
      try {
        // ⚡ Persistent cache — twice-daily refresh
        const cached = await env.TUCK_KV.get('cache:macro:current', 'json');
        if (cached && Object.keys(cached).length > 3) {
          return new Response(JSON.stringify(cached), { headers: { ...JSON_H, "Cache-Control": "public, max-age=300" } });
        }
        // Cold-cache fallback — live fetch (will be slow, but only once until cron runs)
        const macro = await getMacroData();
        return new Response(JSON.stringify(macro), { headers: { ...JSON_H, "Cache-Control": "public, max-age=900" } });
      } catch (e) {
        return new Response(JSON.stringify({}), { headers: JSON_H });
      }
    }
    if (path === "/health") {
      return new Response(JSON.stringify({ status: "ok", platform: "Tuck", version: "v2.0", ts: (/* @__PURE__ */ new Date()).toISOString() }), { headers: JSON_H });
    }
    // HARDENED: baseline security headers for all HTML responses
    const SEC_HEADERS = {
      "Content-Type": "text/html;charset=UTF-8",
      "Cache-Control": "public, max-age=3600",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), microphone=(), camera=(), payment=()"
    };
    if (path === "/privacy") return new Response(PRIVACY_HTML, { headers: SEC_HEADERS });
    if (path === "/tos") return new Response(TOS_HTML, { headers: SEC_HEADERS });
    if (path === "/about") return new Response(ABOUT_HTML, { headers: SEC_HEADERS });
    if (path === "/" || path === "") {
      return new Response(buildHTML(), {
        headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "no-store, must-revalidate" }
      });
    }
    return new Response("Not found", { status: 404 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map