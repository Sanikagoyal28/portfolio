/**
 * Prefixes a root-relative asset path with the configured basePath.
 *
 * Needed because `next/image` with `unoptimized` (static export) does not
 * prepend basePath to local image `src`, which breaks images when the site is
 * hosted under a subpath (e.g. GitHub Pages at `/portfolio/`). Absolute URLs
 * (http/https) and already-prefixed paths are returned unchanged.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(src: string): string {
  if (!src.startsWith("/")) return src; // absolute URL (remote image)
  if (BASE_PATH && src.startsWith(`${BASE_PATH}/`)) return src; // already prefixed
  return `${BASE_PATH}${src}`;
}
