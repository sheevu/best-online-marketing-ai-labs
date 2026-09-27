import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const src = "C:/Users/sheev/.gemini/antigravity/brain/0074aa4a-35a7-4968-84a8-10ff515e0d57/.user_uploaded/media_1790499701641.png";

async function run() {
  console.log("Generating favicon and icon assets from:", src);

  // 1. apple-touch-icon.png (180x180)
  await sharp(src)
    .trim()
    .resize(164, 164, { fit: "contain" })
    .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/apple-touch-icon.png");
  console.log("Created public/apple-touch-icon.png");

  // 2. favicon-32x32.png
  await sharp(src)
    .trim()
    .resize(30, 30, { fit: "contain" })
    .extend({ top: 1, bottom: 1, left: 1, right: 1, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/favicon-32x32.png");
  console.log("Created public/favicon-32x32.png");

  // 3. favicon-16x16.png
  await sharp(src)
    .trim()
    .resize(15, 15, { fit: "contain" })
    .extend({ top: 1, bottom: 0, left: 1, right: 0, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/favicon-16x16.png");
  console.log("Created public/favicon-16x16.png");

  // 4. icon-192.png
  await sharp(src)
    .trim()
    .resize(176, 176, { fit: "contain" })
    .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/icon-192.png");
  console.log("Created public/icon-192.png");

  // 5. icon-512.png & brand-icon.png
  await sharp(src)
    .trim()
    .resize(472, 472, { fit: "contain" })
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/icon-512.png");

  await sharp(src)
    .trim()
    .resize(472, 472, { fit: "contain" })
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/brand-icon.png");
  console.log("Created public/icon-512.png & public/brand-icon.png");

  // 6. Multi-size favicon.ico (16, 32, 48)
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of sizes) {
    const buf = await sharp(src)
      .trim()
      .resize(Math.round(s * 0.92), Math.round(s * 0.92), { fit: "contain" })
      .extend({
        top: Math.floor((s - Math.round(s * 0.92)) / 2),
        bottom: Math.ceil((s - Math.round(s * 0.92)) / 2),
        left: Math.floor((s - Math.round(s * 0.92)) / 2),
        right: Math.ceil((s - Math.round(s * 0.92)) / 2),
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buf });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(pngBuffers.length, 4); // count

  let offset = 6 + 16 * pngBuffers.length;
  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += item.buf.length;
  }

  const icoBuf = Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buf)]);
  await fs.writeFile("public/favicon.ico", icoBuf);
  console.log("Created public/favicon.ico");

  // 7. favicon.svg (512x512 SVG with embedded base64 PNG)
  const base64Png = (
    await sharp(src)
      .trim()
      .resize(512, 512, { fit: "contain" })
      .png()
      .toBuffer()
  ).toString("base64");
  const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Png}" width="512" height="512" />
</svg>
`;
  await fs.writeFile("public/favicon.svg", svgContent, "utf8");
  console.log("Created public/favicon.svg");

  console.log("All favicon and icon assets generated successfully!");
}

run().catch((err) => {
  console.error("Error generating icons:", err);
  process.exit(1);
});
