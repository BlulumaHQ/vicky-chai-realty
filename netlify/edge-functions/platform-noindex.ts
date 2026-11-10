// Netlify static deploy: add X-Robots-Tag: noindex to HTML only on *.netlify.app.
// Custom domains pointed at the same Netlify site stay index-eligible.
export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(request.url).hostname.toLowerCase();
  const ct = response.headers.get("content-type") ?? "";
  if (!host.endsWith(".netlify.app") || !ct.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export const config = { path: "/*" };
