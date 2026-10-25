/*
 * new session: a framed three-row button in the ascii.rest manner, sized to
 * the sidebar, for mount() to play:
 *
 *   ╭──────────────────────────────╮
 *   │ [+] new session          ──> │
 *   ╰──────────────────────────────╯
 *
 * At rest it stands still. While `hot()` is true (hover or keyboard focus)
 * the frame turns heavy, a slanted glint keeps crossing it (heavy strokes,
 * shaded gaps, like the glint on an ascii.rest banner) and the arrow runs.
 */

const HEAVY = { '─': '━', '│': '┃', '╭': '┏', '╮': '┓', '╰': '┗', '╯': '┛' }
const BAND = 3 // glint width in cells
const SWEEP = 0.9 // seconds a glint takes to cross

const heavy = (ch) => HEAVY[ch] ?? ch

/**
 * @param {number} cols - width in cells (at least 18).
 * @param {string} label - the button's own label, shown lower-case.
 * @param {() => boolean} hot - read every frame: hovered or focused.
 */
export function newSessionPiece(cols, label, hot) {
  const inner = cols - 2
  const arrow = '──>'
  const left = ` [+] ${label.toLowerCase()}`
  const room = inner - arrow.length - 1
  const text = (left.length > room ? `${left.slice(0, room - 1)}…` : left.padEnd(room)) + arrow + ' '
  const rows = ['╭' + '─'.repeat(inner) + '╮', '│' + text + '│', '╰' + '─'.repeat(inner) + '╯']
  const travel = cols + BAND + 3

  return {
    meta: { name: 'new session', category: 'ui', note: 'a framed button with a passing glint', cols, rows: 3, fps: 20 },
    default: () => (t) => {
      const on = hot()
      const head = on ? Math.floor(((t % SWEEP) / SWEEP) * travel) : -99
      // the arrow's shaft runs while hot, its head stays: ━─> ─━>
      const run = on ? Math.floor(t * 8) % 2 : -1
      return rows.map((row, y) => {
        let out = ''
        for (let x = 0; x < row.length; x += 1) {
          let ch = row[x]
          if (run >= 0 && y === 1 && x >= inner - arrow.length && x < inner) {
            const k = x - (inner - arrow.length)
            if (k === run) ch = '━'
          }
          const d = head - y - x // slanted: lower rows trail
          if (d >= 0 && d < BAND) ch = ch === ' ' ? (y === 1 ? '░' : ch) : heavy(ch)
          else if (on && y !== 1) ch = heavy(ch)
          else if (on && (x === 0 || x === row.length - 1)) ch = heavy(ch)
          out += ch
        }
        return out
      }).join('\n')
    },
  }
}
