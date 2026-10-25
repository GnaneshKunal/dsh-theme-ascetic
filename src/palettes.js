/**
 * Palettes: a dozen ink and paper colours each, expanded into the host's
 * --dsw-alias-* / --dsw-specific-* token set by `tokensFor`. Everything else
 * (borders, hovers, scrollbars, diff tints) is derived from those inks, so a
 * palette stays one small object and every surface tracks it.
 */

/** @typedef {{ label: string, scheme: 'dark' | 'light', bg: string, bg1: string, bg2: string, bg3: string,
 *   ink: string, ink2: string, ink3: string, ink4: string, accent: string, onAccent: string,
 *   ok: string, warn: string, err: string, info: string }} Palette */

/** @type {Record<string, Palette>} */
export const PALETTES = {
  phosphor: {
    label: 'phosphor', scheme: 'dark',
    bg: '#0a0f0a', bg1: '#0e150e', bg2: '#132013', bg3: '#192a19',
    ink: '#b9f2ad', ink2: '#80c27a', ink3: '#5b915a', ink4: '#3e6641',
    accent: '#46ff7a', onAccent: '#031a08',
    ok: '#7dff9a', warn: '#e8d45c', err: '#ff6f5e', info: '#74e6ff',
  },
  amber: {
    label: 'amber', scheme: 'dark',
    bg: '#110c05', bg1: '#181107', bg2: '#21180b', bg3: '#2b200f',
    ink: '#ffd08a', ink2: '#d9a65c', ink3: '#a7793c', ink4: '#6f5229',
    accent: '#ffb000', onAccent: '#1a1000',
    ok: '#cde36c', warn: '#ffd75e', err: '#ff6e4a', info: '#ffe2ad',
  },
  ice: {
    label: 'ice', scheme: 'dark',
    bg: '#0b0e12', bg1: '#10151b', bg2: '#161d25', bg3: '#1d2631',
    ink: '#d4dde8', ink2: '#94a5b7', ink3: '#67788b', ink4: '#475360',
    accent: '#7fdbff', onAccent: '#04151d',
    ok: '#8fe3a6', warn: '#f2cd6b', err: '#ff7a7a', info: '#7fdbff',
  },
  mono: {
    label: 'mono', scheme: 'dark',
    bg: '#0c0c0c', bg1: '#121212', bg2: '#1a1a1a', bg3: '#232323',
    ink: '#e6e6e6', ink2: '#a9a9a9', ink3: '#7b7b7b', ink4: '#545454',
    accent: '#ffffff', onAccent: '#000000',
    ok: '#9fe39f', warn: '#e6c86e', err: '#ff7b72', info: '#b9c7ff',
  },
  vapor: {
    label: 'vapor', scheme: 'dark',
    bg: '#160f24', bg1: '#1b1330', bg2: '#241a3d', bg3: '#30234f',
    ink: '#f2e9ff', ink2: '#cbb9ea', ink3: '#9a86c2', ink4: '#6a5994',
    accent: '#ff5fd6', onAccent: '#1a0a1f',
    ok: '#72f1b8', warn: '#fede5d', err: '#fe4450', info: '#36f9f6',
  },
  // after well-loved editor schemes, darkened or lifted where text needed it
  gruvbox: {
    label: 'gruvbox', scheme: 'dark',
    bg: '#282828', bg1: '#2e2c2b', bg2: '#3c3836', bg3: '#504945',
    ink: '#ebdbb2', ink2: '#d5c4a1', ink3: '#a89984', ink4: '#7c6f64',
    accent: '#fe8019', onAccent: '#282828',
    ok: '#b8bb26', warn: '#fabd2f', err: '#fb4934', info: '#83a598',
  },
  nord: {
    label: 'nord', scheme: 'dark',
    bg: '#2e3440', bg1: '#343b49', bg2: '#3b4252', bg3: '#434c5e',
    ink: '#eceff4', ink2: '#d8dee9', ink3: '#a3adc2', ink4: '#6f7c96',
    accent: '#88c0d0', onAccent: '#2e3440',
    ok: '#a3be8c', warn: '#ebcb8b', err: '#e0828c', info: '#81a1c1',
  },
  dracula: {
    label: 'dracula', scheme: 'dark',
    bg: '#282a36', bg1: '#2d2f3d', bg2: '#363848', bg3: '#44475a',
    ink: '#f8f8f2', ink2: '#cfd0e0', ink3: '#9aa1c9', ink4: '#6272a4',
    accent: '#bd93f9', onAccent: '#21222c',
    ok: '#50fa7b', warn: '#f1fa8c', err: '#ff5555', info: '#8be9fd',
  },
  mocha: {
    label: 'mocha', scheme: 'dark',
    bg: '#1e1e2e', bg1: '#232334', bg2: '#2b2b3d', bg3: '#313244',
    ink: '#cdd6f4', ink2: '#bac2de', ink3: '#9399b2', ink4: '#6c7086',
    accent: '#f5c2e7', onAccent: '#1e1e2e',
    ok: '#a6e3a1', warn: '#f9e2af', err: '#f38ba8', info: '#89b4fa',
  },
  'tokyo-night': {
    label: 'tokyo-night', scheme: 'dark',
    bg: '#1a1b26', bg1: '#1f2130', bg2: '#24283b', bg3: '#2f3549',
    ink: '#c0caf5', ink2: '#a9b1d6', ink3: '#8189b3', ink4: '#565f89',
    accent: '#7aa2f7', onAccent: '#16161e',
    ok: '#9ece6a', warn: '#e0af68', err: '#f7768e', info: '#7dcfff',
  },
  'rose-pine': {
    label: 'rose-pine', scheme: 'dark',
    bg: '#191724', bg1: '#1f1d2e', bg2: '#26233a', bg3: '#312e47',
    ink: '#e0def4', ink2: '#c2bfdc', ink3: '#908caa', ink4: '#6e6a86',
    accent: '#ebbcba', onAccent: '#191724',
    ok: '#9ccfd8', warn: '#f6c177', err: '#eb6f92', info: '#c4a7e7',
  },
  everforest: {
    label: 'everforest', scheme: 'dark',
    bg: '#2d353b', bg1: '#323c41', bg2: '#3a454a', bg3: '#475258',
    ink: '#e4d9be', ink2: '#bfb59c', ink3: '#9da9a0', ink4: '#7a8478',
    accent: '#a7c080', onAccent: '#232a2e',
    ok: '#a7c080', warn: '#dbbc7f', err: '#e67e80', info: '#7fbbb3',
  },
  kanagawa: {
    label: 'kanagawa', scheme: 'dark',
    bg: '#1f1f28', bg1: '#24242f', bg2: '#2a2a37', bg3: '#363646',
    ink: '#dcd7ba', ink2: '#c8c093', ink3: '#9792a9', ink4: '#727169',
    accent: '#ffa066', onAccent: '#1f1f28',
    ok: '#98bb6c', warn: '#e6c384', err: '#e46876', info: '#7fb4ca',
  },
  paper: {
    label: 'paper', scheme: 'light',
    bg: '#f4f0e6', bg1: '#ece7da', bg2: '#e3ddcd', bg3: '#d9d2bf',
    ink: '#1d1c19', ink2: '#4b4840', ink3: '#76715f', ink4: '#a39d88',
    accent: '#b3261e', onAccent: '#fff8f0',
    ok: '#2f7d32', warn: '#9a6a00', err: '#b3261e', info: '#1f4fbf',
  },
  solarized: {
    label: 'solarized', scheme: 'light',
    bg: '#fdf6e3', bg1: '#f5eedb', bg2: '#eee8d5', bg3: '#e2dbc6',
    ink: '#073642', ink2: '#4f646c', ink3: '#6f8086', ink4: '#93a1a1',
    accent: '#1b6fae', onAccent: '#fdf6e3',
    ok: '#6c7f00', warn: '#9b7400', err: '#c9221f', info: '#1d8a83',
  },
  latte: {
    label: 'latte', scheme: 'light',
    bg: '#eff1f5', bg1: '#e6e9ef', bg2: '#dce0e8', bg3: '#ccd0da',
    ink: '#383a52', ink2: '#5c5f77', ink3: '#6c6f85', ink4: '#9ca0b0',
    accent: '#8839ef', onAccent: '#eff1f5',
    ok: '#2e7a1c', warn: '#a8650a', err: '#d20f39', info: '#1e66f5',
  },
  'rose-dawn': {
    label: 'rose-dawn', scheme: 'light',
    bg: '#faf4ed', bg1: '#f4ede6', bg2: '#f2e9e1', bg3: '#e6dcd3',
    ink: '#464261', ink2: '#575279', ink3: '#797593', ink4: '#9893a5',
    accent: '#a4506a', onAccent: '#faf4ed',
    ok: '#286983', warn: '#a86a10', err: '#a4506a', info: '#907aa9',
  },
}

/**
 * Palette choices by kind, for the picker. `auto` follows the host's
 * light/dark preference (paper by day, phosphor by night); `host` keeps the
 * stock colours and only applies the ASCII geometry and type.
 */
export const PALETTE_GROUPS = [
  { label: 'light', items: ['paper', 'solarized', 'latte', 'rose-dawn'] },
  { label: 'dark', items: ['phosphor', 'amber', 'ice', 'mono', 'vapor', 'gruvbox', 'nord', 'dracula', 'mocha', 'tokyo-night', 'rose-pine', 'everforest', 'kanagawa'] },
  { label: 'light + dark', items: ['auto', 'host'] },
]

/** Every palette choice, the default first. */
export const PALETTE_CHOICES = PALETTE_GROUPS.flatMap((group) => group.items)

function rgb(hex) {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
}

/**
 * Expand one palette into a flat token map (token name → CSS colour).
 * @param {Palette} p
 * @returns {Record<string, string>}
 */
function flatTokens(p) {
  const line = (alpha) => `rgba(${rgb(p.ink)}, ${alpha})`
  const tint = (hex, alpha) => `rgba(${rgb(hex)}, ${alpha})`
  return {
    // surfaces
    '--dsw-alias-bg-base': p.bg,
    '--dsw-alias-bg-layer-1': p.bg,
    '--dsw-alias-bg-layer-2': p.bg1,
    '--dsw-alias-bg-layer-3': p.bg2,
    '--dsw-alias-bg-overlay': p.bg1,
    '--dsw-alias-bg-module-platform': p.bg1,
    '--dsw-alias-bg-multi-select': p.bg1,
    '--dsw-alias-bg-document-preview': p.bg1,
    '--dsw-alias-bg-skeleton': line(0.06),
    // borders
    '--dsw-alias-border-l1': line(0.10),
    '--dsw-alias-border-l2': line(0.18),
    '--dsw-alias-border-l2-darkmode-thin': line(0.18),
    '--dsw-alias-border-l3': line(0.26),
    '--dsw-alias-border-l4': line(0.36),
    // brand
    '--dsw-alias-brand-primary': p.accent,
    '--dsw-alias-brand-text': p.accent,
    '--dsw-alias-brand-primary-invert': p.onAccent,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': p.accent,
    // buttons
    '--dsw-alias-button-primary-fill': p.ink,
    '--dsw-alias-button-primary-hover': p.accent,
    '--dsw-alias-button-primary-dimmed': p.bg2,
    '--dsw-alias-label-primary-foreground': p.bg,
    '--dsw-alias-button-elevated-fill': p.bg1,
    '--dsw-alias-button-floating-fill': p.bg1,
    '--dsw-alias-button-floating-hover': p.bg2,
    '--dsw-alias-button-ghost-active-border': line(0.4),
    '--dsw-alias-button-ghost-active-fill': p.bg2,
    '--dsw-alias-button-ghost-active-hover': p.bg3,
    '--dsw-alias-button-info-fill': p.accent,
    '--dsw-alias-button-info-hover': p.ink,
    '--dsw-alias-button-contrast-fill': p.ink2,
    // text
    '--dsw-alias-label-primary': p.ink,
    '--dsw-alias-label-primary-dimmed': p.ink,
    '--dsw-alias-label-primary-bluish': p.ink,
    '--dsw-alias-label-primary-inverted': p.bg,
    '--dsw-alias-label-secondary': p.ink2,
    '--dsw-alias-label-tertiary': p.ink3,
    '--dsw-alias-label-caption': p.ink4,
    '--dsw-alias-label-dimmed': p.ink4,
    '--dsw-alias-label-deep-diving': p.accent,
    '--dsw-alias-label-deep-diving-shimmer': p.ink,
    '--dsw-alias-label-document-preview': p.ink2,
    '--dsw-alias-link': p.info,
    '--dsw-alias-menu-icon': p.ink2,
    // interaction tints
    '--dsw-alias-interactive-bg-hover': line(0.07),
    '--dsw-alias-interactive-bg-active': line(0.12),
    '--dsw-alias-interactive-bg-hover-accent': tint(p.accent, 0.16),
    '--dsw-alias-interactive-bg-hover-solid': p.bg2,
    '--dsw-alias-interactive-bg-hover-danger': tint(p.err, 0.12),
    // states
    '--dsw-alias-state-error-primary': p.err,
    '--dsw-alias-state-error-secondary': p.err,
    '--dsw-alias-state-success-primary': p.ok,
    '--dsw-alias-state-success-secondary': p.ok,
    '--dsw-alias-state-success-tertiary': tint(p.ok, 0.14),
    '--dsw-alias-state-warn-primary': p.warn,
    '--dsw-alias-state-warn-secondary': p.warn,
    '--dsw-alias-state-warn-tertiary': tint(p.warn, 0.16),
    '--dsw-alias-state-warn-label': p.warn,
    '--dsw-alias-state-business-primary': p.info,
    '--dsw-alias-state-business-tertiary': tint(p.info, 0.14),
    '--dsw-alias-state-idle-primary': p.ink4,
    // markdown
    '--dsw-alias-markdown-code-block': p.bg1,
    '--dsw-alias-markdown-code-block-banner': p.bg1,
    '--dsw-alias-markdown-inline-code': 'transparent',
    '--dsw-alias-markdown-citation': p.bg2,
    '--dsw-alias-markdown-tag': p.bg2,
    '--dsw-alias-markdown-placeholder': p.bg1,
    '--dsw-alias-markdown-code-segment-selected': p.bg,
    '--dsw-alias-markdown-code-segment-unselected': p.bg2,
    // diffs
    '--dsw-alias-code-diff-added': tint(p.ok, 0.10),
    '--dsw-alias-code-diff-deleted': tint(p.err, 0.10),
    '--dsw-alias-file-diff-added-bg': tint(p.ok, 0.12),
    '--dsw-alias-file-diff-added-gutter': tint(p.ok, 0.08),
    '--dsw-alias-file-diff-added-marker': p.ok,
    '--dsw-alias-file-diff-deleted-bg': tint(p.err, 0.12),
    '--dsw-alias-file-diff-deleted-gutter': tint(p.err, 0.08),
    '--dsw-alias-file-diff-deleted-marker': p.err,
    // menus, toasts, tooltips, scrollbars, settings
    '--dsw-alias-menu-group-header-fill': p.bg1,
    '--dsw-alias-toast-bg': p.ink,
    '--dsw-alias-toast-label': p.bg,
    '--dsw-alias-tooltip-bg': p.ink,
    '--dsw-alias-tooltip-key-bg': p.ink2,
    '--dsw-alias-scrollbar-bg-l1': line(0.22),
    '--dsw-alias-scrollbar-bg-l2': line(0.22),
    '--dsw-alias-scrollbar-hover-l1': line(0.42),
    '--dsw-alias-scrollbar-hover-l2': line(0.42),
    '--dsw-alias-settings-card-fill': p.bg,
    '--dsw-alias-settings-card-stroke': line(0.22),
    '--dsw-alias-switch-thumb': p.bg,
    '--dsw-alias-turn-trigger-bg': p.bg1,
    '--dsw-alias-turn-trigger-bg-hover': line(0.07),
    // chrome
    '--dsw-specific-bubble': 'transparent',
    '--dsw-specific-bubble-highlight': line(0.12),
    '--dsw-specific-input-major': p.bg,
    '--dsw-specific-login-input': p.bg1,
    '--dsw-specific-menu': p.bg1,
    '--dsw-specific-selector': p.bg1,
    '--dsw-specific-tip': p.bg1,
    '--dsw-specific-sidebar-fill': p.bg1,
    '--dsw-specific-sidebar-nav-item-active': line(0.12),
    '--dsw-specific-sidebar-nav-item-active-accent': tint(p.accent, 0.18),
    '--dsw-specific-sidebar-nav-item-hover': line(0.07),
  }
}

/**
 * The override layer for `ctx.theme.overrideTokens`: every token with a value
 * for the light and the dark palette mode.
 * @param {string} choice - one of PALETTE_CHOICES.
 * @returns {Record<string, { light: string, dark: string }> | null} null for `host`.
 */
export function tokenLayer(choice) {
  if (choice === 'host') return null
  const light = flatTokens(choice === 'auto' ? PALETTES.paper : PALETTES[choice] ?? PALETTES.phosphor)
  const dark = flatTokens(choice === 'auto' ? PALETTES.phosphor : PALETTES[choice] ?? PALETTES.phosphor)
  const layer = {}
  for (const name of Object.keys(light)) layer[name] = { light: light[name], dark: dark[name] }
  return layer
}

/**
 * Stock DSH colours for the `host` preview, light and dark: the static scale
 * the host's alias tokens point at, which no palette layer overrides. Its own
 * accent is near-black / near-white, so the preview shows DeepSeek blue, the
 * colour its links and highlights carry.
 */
const HOST_PREVIEW = [
  { bg: 'var(--dsw-static-neutral-bluish-00)', bg2: 'var(--dsw-static-neutral-bluish-50)', ink2: 'var(--dsw-static-neutral-bluish-700)',
    ink: 'var(--dsw-static-neutral-bluish-1000)', accent: 'var(--dsw-static-deepseek-500)' },
  { bg: 'var(--dsw-static-neutral-bluish-950)', bg2: 'var(--dsw-static-neutral-bluish-850)', ink2: 'var(--dsw-static-neutral-bluish-300)',
    ink: 'var(--dsw-static-neutral-bluish-50)', accent: 'var(--dsw-static-deepseek-400)' },
]

/**
 * The colours a choice is previewed with: one palette, or the light and dark
 * pair it switches between (`auto`, `host`).
 * @param {string} choice - one of PALETTE_CHOICES.
 * @returns {Array<{ bg: string, bg2: string, ink2: string, ink: string, accent: string }>}
 */
export function previewOf(choice) {
  if (choice === 'host') return HOST_PREVIEW
  if (choice === 'auto') return [PALETTES.paper, PALETTES.phosphor]
  return [PALETTES[choice] ?? PALETTES.phosphor]
}

/**
 * The colour scheme a choice pins the document to, or null to follow the host.
 * @param {string} choice
 * @returns {'dark' | 'light' | null}
 */
export function pinnedScheme(choice) {
  return PALETTES[choice] ? PALETTES[choice].scheme : null
}
