import fs from 'fs';

const logos = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Pendidikan_Nasional_%28Indonesia%29.svg', dest: 'public/logos/tutwuri.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Kementerian_Agama_Republik_Indonesia.png', dest: 'public/logos/kemenag.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', dest: 'public/logos/ibm.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/id/8/8c/Logo_BSI.png', dest: 'public/logos/bsi.png' }
];

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} for ${url}: ${text.substring(0, 100)}`);
  }
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
  console.log(`Saved ${dest} (${buffer.byteLength} bytes)`);
}

async function run() {
  for (const logo of logos) {
    await download(logo.url, logo.dest).catch(console.error);
  }
}
run();
