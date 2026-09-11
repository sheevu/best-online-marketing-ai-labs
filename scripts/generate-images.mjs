import fs from 'node:fs/promises';
import sharp from 'sharp';
import {createHash} from 'node:crypto';

await fs.mkdir('public/images', { recursive: true });
const versions = {};
for (const name of (await fs.readdir('public')).filter(name => name.endsWith('.webp'))) {
  const stem = name.replace(/\.webp$/, '');
  const hash = createHash('sha256').update(await fs.readFile(`public/${name}`)).update('webp-q68-v1').digest('hex').slice(0,12);
  versions[stem] = hash;
  for (const width of [160, 320, 480, 640, 960, 1280]) {
    await sharp(`public/${name}`).resize({width}).webp({quality: 68, effort: 6}).toFile(`public/images/${stem}-${hash}-${width}.webp`);
  }
}
await fs.writeFile('app/lib/image-versions.json', JSON.stringify(versions,null,2)+'\n');
console.log('Responsive images generated.');
