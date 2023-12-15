export async function searchDirectory(
  dir: string,
  term: string,
  results: string[] = []
): Promise<string[]> {
  const moduleURL = import.meta.url;
  const modulePath = new URL(".", moduleURL).pathname;
  const path = `${modulePath}${dir}/`;
  for await (const it of Deno.readDir(path)) {
    if (!it.isDirectory) {
      const result = Deno.readTextFileSync(`${path}/${it.name}`);
      const matches = result.matchAll(new RegExp(`\\b${term}[a-z]*\\b`, "g"));
      results.push(...Array.from(matches, (match) => match[0]));
    } else {
      await searchDirectory(`${dir}/${it.name}`, term, results);
    }
  }
  return results;
}
