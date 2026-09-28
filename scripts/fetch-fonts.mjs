/**
 * Downloads the Satoshi webfonts from Fontshare into src/fonts/satoshi.
 *
 * The Fontshare Free Font License allows self-hosting for our own website but forbids
 * redistributing the font files through a public repository, so the files are git-ignored
 * and fetched before `dev` and `build` instead of being committed.
 */
import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const WEIGHTS = [400, 500, 700];
const CSS_URL = `https://api.fontshare.com/v2/css?f[]=satoshi@${WEIGHTS.join(",")}&display=swap`;
const OUT_DIR = path.join(process.cwd(), "src", "fonts", "satoshi");

const fileFor = (weight) => path.join(OUT_DIR, `Satoshi-${weight}.woff2`);

async function exists(file) {
  try {
    return (await stat(file)).size > 0;
  } catch {
    return false;
  }
}

async function main() {
  const missing = [];
  for (const weight of WEIGHTS) {
    if (!(await exists(fileFor(weight)))) missing.push(weight);
  }
  if (missing.length === 0) return;

  const css = await (await fetch(CSS_URL)).text();
  const faces = css.split("@font-face").filter((block) => block.includes("'Satoshi'"));

  await mkdir(OUT_DIR, { recursive: true });

  for (const weight of missing) {
    const face = faces.find((block) => block.includes(`font-weight: ${weight};`));
    const url = face?.match(/url\('([^']+\.woff2)'\)/)?.[1];
    if (!url) throw new Error(`Satoshi ${weight} woff2 URL not found in Fontshare CSS`);

    const response = await fetch(url.startsWith("//") ? `https:${url}` : url);
    if (!response.ok) throw new Error(`Failed to download Satoshi ${weight}: ${response.status}`);
    await writeFile(fileFor(weight), Buffer.from(await response.arrayBuffer()));
  }
}

await main();
