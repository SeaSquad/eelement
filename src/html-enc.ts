interface HtmlEncOptions {
  escapeQuotes: boolean;
}

export function escapeHtmlText(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
  } as const;
  return text.replace(/[&<>"']/g, (m) => map[m] as string);
}

export function escapeHtmlAttribute(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  } as const;
  return text.replace(/[&<>"'`]/g, (m) => map[m] as string);
}

/**
 * 5. CSS VALUES
 * Context: <div style="color: {css}">
 * Escapes: " ' \ ; ( ) #
 */
export function escapeCssValue(css: string): string {
  const map: Record<string, string> = {
    '"': '\\"',
    "'": "\\'",
    "\\": "\\\\",
    ";": "\\;",
    "!": "\\!",
    "(": "\\(",
    ")": "\\)",
    ",": "\\,",
    "#": "\\#",
  } as const;
  return css.replace(/["'\\;!(,)#]/g, (m) => map[m] as string);
}

/**
 * 6. JAVASCRIPT STRING LITERALS
 * Context: onclick="alert('{js}')"
 * Escapes for JS + HTML attribute
 */
export function escapeJsString(text: string, jsQuote: '"' | "'" = '"'): string {
  // First escape for HTML attribute
  let escaped = escapeHtmlAttribute(text);

  // Then escape for JavaScript string
  const jsMap: Record<string, string> = {
    "\\": "\\\\",
    "\n": "\\n",
    "\r": "\\r",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
    '"': '\\"',
    "'": "\\'",
  };

  return escaped.replace(
    /[\n\r\u2028\u2029\\"\\']/g,
    (m) => jsMap[m] as string,
  );
}

export function htmlEnc(
  str: string,
  options?: Partial<HtmlEncOptions>,
): string {
  const DefaultHtmlEncOptions: HtmlEncOptions = {
    escapeQuotes: false,
  };

  // Placeholder function for HTML encoding.
  // This is a basic implementation that doesn't cover all cases.
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&quot;");
}
