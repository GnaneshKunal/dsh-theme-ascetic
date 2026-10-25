/**
 * Density levels as CSS: the host's --dsw-font-* type tokens (chrome and
 * Markdown) re-declared with tighter sizes and line heights, plus the layout
 * variables the skin reads (row height, flow gap, column width).
 *
 * Markdown sizes keep following the user's text and code size settings
 * (--dsh-content-font-size / --dsh-code-font-size); only the leading shrinks.
 */

const FAM = 'var(--dsw-font-family)'
const CODE = 'var(--ds-font-family-code)'
const BODY = 'var(--dsh-content-font-size,14px)'
const SECONDARY = 'var(--dsh-content-font-size-secondary,13px)'
const CODE_SIZE = 'var(--dsh-code-font-size,11px)'
const CODE_DELTA = 'var(--dsh-code-font-delta,0px)'

const plus = (base, px) => (px === 0 ? base : `calc(${base} + ${px}px)`)

/** [chrome token suffix, font-weight] pairs per chrome size step. */
const CHROME = {
  s: [['s-14', 400], ['s-strong-14', 600]],
  xs: [['xs-13', 400], ['xs-strong-13', 600]],
  xxs: [['xxs-12', 400], ['xxs-strong-12', 600]],
  xxxs: [['xxxs-11', 400], ['xxxs-strong-11', 600]],
  base: [['base-16', 400], ['base-strong-16', 600]],
  m: [['m-18', 600]],
  l: [['l-20', 600]],
  xl: [['xl-24', 700]],
}

const LEVELS = {
  cozy: {
    vars: { row: '30px', nav: '32px', stack: '10px', gap: '12px', col: '.70', maxw: '960px', pad: '12px', status: '22px' },
    chrome: { s: [14, 21], xs: [13, 19], xxs: [12, 17], xxxs: [11, 14], base: [16, 24], m: [16, 26], l: [19, 28], xl: [23, 32] },
    md: { lead: 9, h1: [4, 12], h2: [2, 10], h3: [1, 9], table: 8, small: [12, 19], code: 7, codeSmall: 5 },
  },
  compact: {
    vars: { row: '26px', nav: '26px', stack: '6px', gap: '8px', col: '.80', maxw: '1040px', pad: '8px', status: '20px' },
    chrome: { s: [13, 19], xs: [12, 17], xxs: [11.5, 16], xxxs: [11, 14], base: [14, 20], m: [15, 22], l: [17, 24], xl: [20, 28] },
    md: { lead: 6, h1: [2, 8], h2: [1, 7], h3: [0, 6], table: 5, small: [11.5, 16], code: 5, codeSmall: 4 },
  },
  dense: {
    vars: { row: '22px', nav: '22px', stack: '3px', gap: '5px', col: '.88', maxw: '1180px', pad: '6px', status: '18px' },
    chrome: { s: [12.5, 17], xs: [11.5, 16], xxs: [11, 15], xxxs: [10.5, 13], base: [13, 18], m: [14, 20], l: [16, 22], xl: [18, 24] },
    md: { lead: 4, h1: [1, 6], h2: [1, 5], h3: [0, 4], table: 4, small: [11, 15], code: 4, codeSmall: 3 },
  },
}

/** One --dsw-font-<name> token: the shorthand and its five long-hand parts. */
function font(name, { style = 'normal', weight = 400, size, lead, family = FAM }) {
  const p = `--dsw-font-${name}`
  const head = [style !== 'normal' ? style : '', weight !== 400 ? String(weight) : ''].filter(Boolean).join(' ')
  return [
    `${p}: ${head ? head + ' ' : ''}${size} / ${lead} ${family};`,
    `${p}-font-family: ${family};`,
    `${p}-font-size: ${size};`,
    `${p}-font-style: ${style};`,
    `${p}-font-weight: ${weight};`,
    `${p}-line-height: ${lead};`,
  ].join('\n  ')
}

function levelCss(id, level) {
  const out = []
  const v = level.vars
  out.push(`--ax-row: ${v.row};`, `--ax-nav: ${v.nav};`, `--ax-stack: ${v.stack};`, `--ax-flow-gap: ${v.gap};`, `--ax-col: ${v.col};`, `--ax-maxw: ${v.maxw};`,
    `--ax-pad: ${v.pad};`, `--ax-status-h: ${v.status};`)
  for (const [step, tokens] of Object.entries(CHROME)) {
    const [size, lead] = level.chrome[step]
    for (const [name, weight] of tokens) out.push(font(name, { weight, size: `${size}px`, lead: `${lead}px` }))
  }
  const md = level.md
  const body = { size: BODY, lead: plus(BODY, md.lead) }
  out.push(
    font('markdown-base', body),
    font('markdown-base-strong', { ...body, weight: 700 }),
    font('markdown-base-italic', { ...body, style: 'italic' }),
    font('markdown-base-strong-italic', { ...body, style: 'italic', weight: 700 }),
    font('markdown-h1', { weight: 700, size: plus(BODY, md.h1[0]), lead: plus(BODY, md.h1[1]) }),
    font('markdown-h2', { weight: 700, size: plus(BODY, md.h2[0]), lead: plus(BODY, md.h2[1]) }),
    font('markdown-h3', { weight: 700, size: plus(BODY, md.h3[0]), lead: plus(BODY, md.h3[1]) }),
    font('markdown-h4', { weight: 700, size: BODY, lead: plus(BODY, md.lead) }),
    font('markdown-table', { size: SECONDARY, lead: plus(SECONDARY, md.table) }),
    font('markdown-table-head', { weight: 700, size: SECONDARY, lead: plus(SECONDARY, md.table) }),
    font('markdown-small', { size: `${md.small[0]}px`, lead: `${md.small[1]}px` }),
    font('markdown-small-strong', { weight: 700, size: `${md.small[0]}px`, lead: `${md.small[1]}px` }),
    font('markdown-small-italic', { style: 'italic', size: `${md.small[0]}px`, lead: `${md.small[1]}px` }),
    font('markdown-small-strong-italic', { style: 'italic', weight: 700, size: `${md.small[0]}px`, lead: `${md.small[1]}px` }),
    font('markdown-code', { size: `calc(12px + ${CODE_DELTA})`, lead: `calc(${12 + md.code}px + ${CODE_DELTA})`, family: CODE }),
    font('markdown-code-block', { size: CODE_SIZE, lead: plus(CODE_SIZE, md.code + 1), family: CODE }),
    font('markdown-code-block-small', { size: CODE_SIZE, lead: plus(CODE_SIZE, md.codeSmall), family: CODE }),
  )
  // `html body` outranks the host's own `body` declarations of these tokens.
  return `html[data-ascii][data-ascii-density="${id}"] body {\n  ${out.join('\n  ')}\n}`
}

export const DENSITY_CSS = Object.entries(LEVELS).map(([id, level]) => levelCss(id, level)).join('\n\n')

/** Sidebar row height of each level, for the density picker. */
export const DENSITY_ROWS = Object.fromEntries(Object.entries(LEVELS).map(([id, level]) => [id, level.vars.row]))
