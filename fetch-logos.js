import fs from 'fs';

const logos = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Logo_Pendidikan_Nasional_%28Indonesia%29.svg/800px-Logo_Pendidikan_Nasional_%28Indonesia%29.svg.png', dest: 'public/logos/tutwuri.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_Kementerian_Agama_Republik_Indonesia.png/600px-Logo_Kementerian_Agama_Republik_Indonesia.png', dest: 'public/logos/kemenag.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png', dest: 'public/logos/ibm.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/id/thumb/8/8c/Logo_BSI.png/300px-Logo_BSI.png', dest: 'public/logos/bsi.png' }
];

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
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
