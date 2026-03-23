import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

const W = 1200;
const H = 630;

// Dot grid pattern — replicates the hero section radial dots
function buildDotGrid(cols, rows, gap, r, color, opacity) {
  let dots = "";
  for (let x = 0; x <= cols; x++) {
    for (let y = 0; y <= rows; y++) {
      dots += `<circle cx="${x * gap}" cy="${y * gap}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
    }
  }
  return dots;
}

const dots = buildDotGrid(
  Math.ceil(W / 32),
  Math.ceil(H / 32),
  32, 1.5, "#1A1A1A", 0.12
);

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#FAFAF8"/>

  <!-- Dot grid (hero-style) -->
  <g>${dots}</g>

  <!-- Yellow pill badge — top left -->
  <rect x="64" y="72" width="220" height="40" rx="20" fill="#F5A623" stroke="#1A1A1A" stroke-width="2.5"/>
  <circle cx="96" cy="92" r="6" fill="#1A1A1A"/>
  <text x="113" y="98" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="16" fill="#1A1A1A">Always Building</text>

  <!-- "Tamilov." — massive logotype -->
  <text
    x="64" y="290"
    font-family="Inter, Arial Black, sans-serif"
    font-weight="900"
    font-size="148"
    letter-spacing="-6"
    fill="#1A1A1A"
  >Tamilov.</text>

  <!-- Tagline -->
  <text
    x="66" y="360"
    font-family="Inter, Arial, sans-serif"
    font-weight="500"
    font-size="28"
    fill="#555555"
  >Digital products, systems and experiments.</text>

  <!-- Bottom separator line -->
  <rect x="64" y="488" width="${W - 128}" height="3" rx="1.5" fill="#1A1A1A" opacity="0.12"/>

  <!-- Bottom domain -->
  <text
    x="64" y="540"
    font-family="Inter, Arial, sans-serif"
    font-weight="600"
    font-size="20"
    fill="#888888"
  >tamilov.com</text>

  <!-- Bottom right — accent badge -->
  <rect x="${W - 240}" y="505" width="176" height="44" rx="8" fill="#1A1A1A"/>
  <text
    x="${W - 152}" y="533"
    font-family="Inter, Arial, sans-serif"
    font-weight="700"
    font-size="17"
    fill="#FAFAF8"
    text-anchor="middle"
  >Work Together →</text>

</svg>
`;

const outPath = join(publicDir, "og-image.png");

async function generate() {
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outPath);

  console.log(`✓ OG image saved → ${outPath}`);
}

generate().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
