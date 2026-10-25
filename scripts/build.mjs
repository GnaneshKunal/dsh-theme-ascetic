/**
 * Bundle src/client.js (with ascii.rest and the CSS inlined) into the closure
 * factory the dsh web shell loads: window.__ModuleLoader__.load({ id, factory }).
 * React stays external — it arrives through the factory's `require`.
 *
 *   node scripts/build.mjs          production bundle
 *   node scripts/build.mjs --dev    keeps the __dshAsciiDebug probes
 */
import { build } from 'esbuild'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const pkg = JSON.parse(await readFile(`${root}package.json`, 'utf8'))
const dev = process.argv.includes('--dev')

const result = await build({
  entryPoints: [`${root}src/client.js`],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: 'chrome120',
  external: ['react'],
  loader: { '.css': 'text' },
  define: { __DEV__: String(dev) },
  minifySyntax: !dev,
  legalComments: 'inline',
  logLevel: 'warning',
})

const body = result.outputFiles[0].text
const out = `/* ${pkg.name} ${pkg.version} — built by scripts/build.mjs; bundles ascii.rest (MIT, @bas3line). */
window.__ModuleLoader__.load({ id: ${JSON.stringify(pkg.name)}, factory: (require) => {
'use strict';
var module = { exports: {} };
var exports = module.exports;
${body}
return module.exports; } });
`
await writeFile(`${root}lib/client.js`, out)
console.log(`lib/client.js ${(out.length / 1024).toFixed(1)} KiB${dev ? ' (dev)' : ''}`)
