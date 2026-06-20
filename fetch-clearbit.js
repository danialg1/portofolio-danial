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
    await d('https://logo.clearbit.com/kemdikbud.go.id?size=512', 'public/logos/sd.png');
    await d('https://logo.clearbit.com/kemdikbud.go.id?size=512', 'public/logos/smp.png');
    await d('https://logo.clearbit.com/kemenag.go.id?size=512', 'public/logos/mas.png');
    await d('https://logo.clearbit.com/ibm.com?size=512', 'public/logos/ibm.png');
    await d('https://logo.clearbit.com/bsi.ac.id?size=512', 'public/logos/bsi.png');
}
run();
