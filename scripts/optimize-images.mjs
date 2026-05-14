import sharp from 'sharp';
import { readdir, stat, writeFile, rename, unlink, readFile } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'public', 'assets', 'projets');
const MAX_DIMENSION = 1200;
const QUALITY = 85;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (['.webp', '.jpg', '.jpeg', '.png'].includes(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const before = (await stat(filePath)).size;
  // Read entire file into memory first so no file handles remain open
  const fileBuffer = await readFile(filePath);
  const image = sharp(fileBuffer);
  const meta = await image.metadata();

  if (!meta.width || !meta.height) return;

  const label = filePath.replace(ASSETS_DIR, '');

  if (meta.width <= MAX_DIMENSION && meta.height <= MAX_DIMENSION) {
    console.log(`  skip  ${label} (${meta.width}x${meta.height}, already ≤${MAX_DIMENSION}px)`);
    return;
  }

  const resized = image.resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: 'inside',
    withoutEnlargement: true,
  });

  const ext = extname(filePath).toLowerCase();
  let output;
  if (ext === '.webp') {
    output = resized.webp({ quality: QUALITY });
  } else if (ext === '.png') {
    output = resized.png({ quality: QUALITY });
  } else {
    output = resized.jpeg({ quality: QUALITY });
  }

  const buffer = await output.toBuffer();
  const after = buffer.length;
  const saving = Math.round((1 - after / before) * 100);

  if (after < before) {
    const tmp = filePath + '.tmp';
    await writeFile(tmp, buffer);
    await unlink(filePath);
    await rename(tmp, filePath);
    console.log(`  ✓  ${label}  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${saving}%)`);
  } else {
    console.log(`  skip  ${label} (already optimal)`);
  }
}

const files = await getFiles(ASSETS_DIR);
console.log(`Found ${files.length} images in ${ASSETS_DIR}\n`);

let totalBefore = 0;
let totalSaved = 0;

for (const f of files) {
  const before = (await stat(f)).size;
  await optimizeImage(f);
  const after = (await stat(f)).size;
  totalBefore += before;
  totalSaved += (before - after);
}

console.log(`\nDone! Total saved: ${Math.round(totalSaved/1024)} KB / ${Math.round(totalBefore/1024)} KB total (-${Math.round(totalSaved/totalBefore*100)}%)`);
