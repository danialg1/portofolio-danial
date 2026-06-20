import fs from 'fs';

async function d(url, dest) {
    const res = await fetch(url, { headers: {'User-Agent': 'Mozilla/5.0'} });
    if (!res.ok) {
        console.error(`Failed ${url}: ${res.status}`);
        return;
    }
    const b = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(b));
    console.log(`Saved ${dest} - ${b.byteLength} bytes`);
}

async function run() {
    await d('https://www.kemdikbud.go.id/main/public/images/logo-kemdikbud.png', 'public/logos/sd.png');
    await d('https://www.kemdikbud.go.id/main/public/images/logo-kemdikbud.png', 'public/logos/smp.png');
    await d('https://pmb.bsi.ac.id/assets/images/logo-ubsi.png', 'public/logos/bsi.png');
}
run();
