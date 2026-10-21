import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function walk(dir) {
  const files = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, e.name);
    files.push(...(e.isDirectory() ? await walk(file) : [file]));
  }
  return files;
}
let checked = 0;
for (const file of await walk(root)) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(file, 'utf8');
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(ref)) continue;
    let target = path.resolve(path.dirname(file), ref.split(/[?#]/)[0]);
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch { throw new Error(`Broken local reference in ${file}: ${ref}`); }
    checked++;
  }
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${anchor}"`)) throw new Error(`Missing anchor #${anchor} in ${file}`);
  }
}
console.log(`Checked ${checked} local references and all same-page anchors.`);
