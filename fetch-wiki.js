import fs from 'fs';

async function fetchWikiImage(wikiStr, filename, dest) {
    const api = `https://${wikiStr}.wikipedia.org/w/api.php?action=query&titles=File:${filename}&prop=imageinfo&iiprop=url&format=json`;
    const res = await fetch(api, { headers: {'User-Agent': 'MyBot/1.0'} });
    const json = await res.json();
    const pages = json.query.pages;
    const pageId = Object.keys(pages)[0];
    
    if (pageId === '-1') {
        console.error(`Not found: ${filename}`);
        return;
    }
    
    const url = pages[pageId].imageinfo[0].url;
    console.log(`Downloading ${url} to ${dest}`);
    
    const imgRes = await fetch(url, { headers: {'User-Agent': 'MyBot/1.0'} });
    const buffer = await imgRes.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Saved ${dest} (${buffer.byteLength} bytes)`);
}

async function run() {
    try {
        await fetchWikiImage('commons', 'Logo_Pendidikan_Nasional_(Indonesia).svg', 'public/logos/sd.svg');
        await fetchWikiImage('commons', 'Logo_Pendidikan_Nasional_(Indonesia).svg', 'public/logos/smp.svg');
        await fetchWikiImage('commons', 'Kementerian_Agama_new_logo.png', 'public/logos/mas.png');
        await fetchWikiImage('id', 'Logo_BSI.png', 'public/logos/bsi.png');
    } catch (e) {
        console.error(e);
    }
}
run();
