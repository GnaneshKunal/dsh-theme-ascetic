/**
 * dsh-theme-ascetic — host half. The skin lives entirely in the browser half
 * (lib/client.js); the Loader only needs a mountable row on the host side.
 */
export const name = 'dsh-theme-ascetic'

export function apply() {
  // No host-side services: tokens, chrome, the status line and shortcuts are
  // browser-side concerns, discovered through the dsh.client manifest.
}
