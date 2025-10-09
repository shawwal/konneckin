const ORIGIN = "http://konneckin.com"

function absolutizeUrls(html: string) {
  return html
    .replace(/(src|href)="\/(?!\/)/g, (_m, attr) => `${attr}="${ORIGIN}/`)
    .replace(/url\(\s*\/(?!\/)/g, () => `url(${ORIGIN}/`)
}

export async function fetchExternalContent(url: string): Promise<string> {
  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  let html = await res.text()

  // remove scripts/styles for safety
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")

  // try to extract the main content region
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
  const elementorMatch = html.match(/<div[^>]*class=[^>]*"(?:[^"]*elementor[^"]*)"[^>]*>([\s\S]*?)<\/div>/i)

  let content = mainMatch?.[1] ?? articleMatch?.[1] ?? elementorMatch?.[1]
  if (!content) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    content = bodyMatch?.[1] ?? html
  }

  return absolutizeUrls(content)
}
