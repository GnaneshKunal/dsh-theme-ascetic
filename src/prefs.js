/**
 * Per-device preferences in localStorage. Desktop serves the UI from the fixed
 * `dsh-app://app` origin, so the choice survives restarts; a private window or
 * blocked storage silently falls back to the defaults.
 */
import { PALETTE_CHOICES } from './palettes.js'

// The theme's first name: kept so settings saved before the rename carry over.
const KEY = 'dsh-ascii-compact:prefs'
/** Bumped when a default changes in a way earlier saves should pick up once. */
const SCHEMA = 2

export const DENSITIES = ['cozy', 'compact', 'dense']
export const HEROES = ['banner', 'chat', 'black-hole', 'earth', 'eclipse', 'galaxy', 'planet', 'torus-knot', 'matrix-rain', 'radar', 'synthwave', 'random', 'stock']
export const CHAT_STYLES = ['bubbles', 'terminal']
/** The longest logo text: past it the banner gets too small to read. */
export const LOGO_MAX = 12

export const DEFAULTS = Object.freeze({
  palette: 'paper',
  density: 'compact',
  hero: 'banner',
  crt: false,
  statusline: true,
  glyphs: true,
  brand: false,
  dock: false,
  chat: 'bubbles',
  intro: true,
  logo: 'DEEPSEEK',
})

function sanitize(raw) {
  const v = raw && typeof raw === 'object' ? raw : {}
  return {
    palette: PALETTE_CHOICES.includes(v.palette) ? v.palette : DEFAULTS.palette,
    density: DENSITIES.includes(v.density) ? v.density : DEFAULTS.density,
    hero: HEROES.includes(v.hero) ? v.hero : DEFAULTS.hero,
    crt: typeof v.crt === 'boolean' ? v.crt : DEFAULTS.crt,
    statusline: typeof v.statusline === 'boolean' ? v.statusline : DEFAULTS.statusline,
    glyphs: typeof v.glyphs === 'boolean' ? v.glyphs : DEFAULTS.glyphs,
    brand: typeof v.brand === 'boolean' ? v.brand : DEFAULTS.brand,
    dock: typeof v.dock === 'boolean' ? v.dock : DEFAULTS.dock,
    chat: CHAT_STYLES.includes(v.chat) ? v.chat : DEFAULTS.chat,
    intro: typeof v.intro === 'boolean' ? v.intro : DEFAULTS.intro,
    logo: logoText(v.logo),
  }
}

/**
 * Logo text as the banner fonts can draw it: capitals, digits and a little
 * punctuation, at most LOGO_MAX long. Anything else is dropped, and nothing
 * left brings DEEPSEEK back.
 */
export function logoText(raw) {
  const text = String(raw ?? '').toUpperCase()
    .replace(/[^0-9A-Z.,!?':\-+=/_ ]/g, '')
    .replace(/ +/g, ' ')
    .trim()
    .slice(0, LOGO_MAX)
    .trim()
  return text || DEFAULTS.logo
}

function load() {
  let raw = null
  try { raw = JSON.parse(localStorage.getItem(KEY) || 'null') } catch { /* unreadable: defaults */ }
  // Schema 2 made paper the default palette: an older save starts on it once.
  if (raw && typeof raw === 'object' && raw.schema !== SCHEMA) raw = { ...raw, palette: DEFAULTS.palette }
  return sanitize(raw)
}

let state = load()
const listeners = new Set()

export const prefs = {
  get: () => state,
  subscribe(fn) {
    listeners.add(fn)
    return () => { listeners.delete(fn) }
  },
  set(patch) {
    state = sanitize({ ...state, ...patch })
    try { localStorage.setItem(KEY, JSON.stringify({ schema: SCHEMA, ...state })) } catch { /* storage unavailable: keep in memory */ }
    for (const fn of listeners) fn(state)
  },
  /** Step a list-valued preference to its next (or previous) choice. */
  cycle(field, list, step = 1) {
    const i = list.indexOf(state[field])
    prefs.set({ [field]: list[(i + step + list.length) % list.length] })
  },
}

/**
 * Follow changes made by another window of the same origin.
 * @returns {() => void} disposer for ctx.effect.
 */
export function watchStorage() {
  const onStorage = (e) => {
    if (e.key !== KEY) return
    state = load()
    for (const fn of listeners) fn(state)
  }
  window.addEventListener('storage', onStorage)
  return () => { window.removeEventListener('storage', onStorage) }
}
