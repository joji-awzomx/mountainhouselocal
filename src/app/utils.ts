export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+$/, '');
}
