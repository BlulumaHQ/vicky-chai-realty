// Hostnames that are platform/project URLs (not custom domains). HTML served on
// these gets X-Robots-Tag: noindex; every other host (custom domains) is untouched.
const PREVIEW_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isPlatformHost(host: string | null | undefined): boolean {
  if (!host) return false;
  const h = host.toLowerCase().split(":")[0].replace(/\.$/, "");
  return PREVIEW_SUFFIXES.some((s) => h.endsWith(s));
}

export function applyPlatformNoindex(request: Request, response: Response): Response {
  const ct = response.headers.get("content-type") ?? "";
  if (!ct.includes("text/html")) return response;
  if (!isPlatformHost(new URL(request.url).hostname)) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
