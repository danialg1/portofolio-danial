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
    await d('https://upload.wikimedia.org/wikipedia/commons/0/07/Logo_Kementerian_Pendidikan_dan_Kebudayaan_Republik_Indonesia.svg', 'public/logos/sd.svg');
    await d('https://upload.wikimedia.org/wikipedia/commons/0/07/Logo_Kementerian_Pendidikan_dan_Kebudayaan_Republik_Indonesia.svg', 'public/logos/smp.svg');
    await d('https://bsi.ac.id/ubsi/assets/images/logo.png', 'public/logos/bsi.png');
}
run();
