/** Primary brand typeface — self-host files under `public/fonts/bdo-grotesk/`. */
export const fontFamily = {
  sans: '"BDO Grotesk", Arial, Helvetica, sans-serif',
} as const;

/**
 * Drop at least one of these into `public/fonts/bdo-grotesk/`:
 * - `BDOGrotesk-Variable.woff2` (preferred, all weights)
 * - `BDOGrotesk-Regular.woff2` (minimum)
 */
export const bdoGroteskFontFiles = {
  variable: "/fonts/bdo-grotesk/BDOGrotesk-Variable.woff2",
  regular: "/fonts/bdo-grotesk/BDOGrotesk-Regular.woff2",
} as const;
