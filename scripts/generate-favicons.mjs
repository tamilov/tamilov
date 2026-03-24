import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

const svg = readFileSync(join(publicDir, "favicon.svg"));

await Promise.all([
  sharp(svg).resize(192, 192).png().toFile(join(publicDir, "favicon-192.png")),
  sharp(svg).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png")),
]);

console.log("✓ PNG favicons generated");
