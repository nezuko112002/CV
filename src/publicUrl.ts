/** Files in /public — must use base URL so GitHub Pages (/repo/) resolves correctly */
export function publicUrl(path: string): string {
  const p = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${encodeURI(p)}`;
}
