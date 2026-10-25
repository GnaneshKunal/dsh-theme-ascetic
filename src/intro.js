/**
 * The boot intro: a retro-console splash laid over the host's own boot screen
 * and the app while it assembles.
 *
 *   logo   the logo banner (DEEPSEEK, or the user's own text) types itself in
 *          under CRT scanlines, takes a glint, and HARNESS fades in beneath;
 *   blink  the logo blinks three times;
 *   out    once the app has rendered, the splash fades away.
 *
 * Plain DOM rather than a slot: it has to cover the page before the React
 * shell mounts. It plays once per page load, never for reduced motion, and a
 * click or any key skips it. Everything it adds is removed when it ends or
 * when the plugin unloads.
 */
import { mount } from 'ascii.rest'
import { banner } from 'ascii.rest/banner'

const TYPE_STEP = 0.08
const GLINT_MS = 900
const BLINK_MS = 900
const OUT_MS = 600
const READY_WAIT_MS = 15000

const LOGO = { font: 'bold', shadow: 'single', color: ['#4d6bfe', '#9db1ff'], shadowColor: '#24346f' }

const wait = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })

/** The app is up once the shell rendered its root and the boot card left. */
function appReady() {
  return document.querySelector('[data-slot="root"]') !== null && document.querySelector('[data-dsh-boot]') === null
}

/**
 * Play the intro once.
 * @param {string} text - the logo, already in characters the banner draws.
 * @param {(error: unknown) => void} [onError] - reports a piece that failed to play.
 * @returns {() => void} disposer: stops and removes the splash at once.
 */
export function playIntro(text, onError = () => {}) {
  const root = document.createElement('div')
  root.className = 'ax-intro'
  root.dataset.asciiArt = ''
  root.dataset.phase = 'logo'
  root.setAttribute('role', 'presentation')

  const logoBox = document.createElement('div')
  logoBox.className = 'ax-intro-logo'
  const logo = document.createElement('canvas')
  logo.className = 'ax-intro-banner'
  logo.setAttribute('aria-hidden', 'true')
  // the canvas is as wide as DEEPSEEK's was per column, so a short logo stays that size
  try { logo.style.setProperty('--ax-logo-cols', String(banner(text, LOGO).meta.cols)) } catch { /* default width */ }
  const sub = document.createElement('div')
  sub.className = 'ax-intro-sub'
  sub.textContent = 'H A R N E S S'
  logoBox.append(logo, sub)
  const crt = document.createElement('div')
  crt.className = 'ax-intro-crt'
  const hint = document.createElement('div')
  hint.className = 'ax-intro-hint'
  hint.textContent = 'press any key'
  root.append(logoBox, crt, hint)
  document.body.append(root)

  // starting another banner stops the one before
  let stop = null
  const play = (piece) => {
    stop?.()
    stop = null
    try {
      stop = mount(logo, piece, { motion: true })
    } catch (error) {
      onError(error)
    }
  }

  let done = false
  let skipped = false
  const remove = () => {
    if (done) return
    done = true
    stop?.()
    stop = null
    root.remove()
    window.removeEventListener('keydown', skip, true)
    window.removeEventListener('pointerdown', skip, true)
  }
  const skip = (e) => {
    if (skipped) return
    skipped = true
    e.preventDefault()
    e.stopPropagation()
    root.dataset.phase = 'out'
    setTimeout(remove, OUT_MS / 2)
  }
  window.addEventListener('keydown', skip, true)
  window.addEventListener('pointerdown', skip, true)

  const run = async () => {
    play(banner(text, { ...LOGO, effect: 'type', type: { step: TYPE_STEP } }))
    await wait(text.length * TYPE_STEP * 1000 + 200)
    if (skipped) return

    play(banner(text, { ...LOGO, effect: 'glint', glint: { first: 0, sweep: GLINT_MS / 1000, every: 2.4 } }))
    root.dataset.sub = 'on'
    await wait(GLINT_MS)
    if (skipped) return

    root.dataset.phase = 'blink'
    await wait(BLINK_MS)
    if (skipped) return

    root.dataset.phase = 'hold'
    const started = Date.now()
    while (!appReady() && Date.now() - started < READY_WAIT_MS) {
      await wait(100)
      if (skipped) return
    }
    root.dataset.phase = 'out'
    await wait(OUT_MS)
    remove()
  }
  void run()
  return remove
}
