// Pages Function (server-side; the site's no-client-JS rule is untouched).
// While the site has no custom domain, the *.pages.dev copy must stay out of
// search indexes: X-Robots-Tag: noindex on every pages.dev host. The custom
// domain (pidc.vn) is unaffected. Remove this file at launch if the
// pages.dev host is retired, or keep it as a belt-and-braces guard.
export const onRequest = async (context) => {
  const response = await context.next();
  const host = context.request.url.hostname;
  if (host.endsWith('.pages.dev')) {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, { ...response, headers });
  }
  return response;
};
