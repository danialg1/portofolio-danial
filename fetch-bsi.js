import fs from 'fs';

async function fetchWikiImage(wikiStr, filename, dest) {
    const api = `https://${wikiStr}.wikipedia.org/w/api.php?action=query&titles=File:${filename}&prop=imageinfo&iiprop=url&format=json`;
    const res = await fetch(api, { headers: {'User-Agent': 'MyBot/1.0'} });
    const json = await res.json();
    const pages = json.query.pages;
    const pageId = Object.keys(pages)[0];
    
    const url = pages[pageId].imageinfo[0].url;
    console.log(`Downloading ${url} to ${dest}`);
    
    const imgRes = await fetch(url, { headers: {'User-Agent': 'MyBot/1.0'} });
    const buffer = await imgRes.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Saved ${dest}`);
}

async function run() {
    await fetchWikiImage('id', 'Logo_Universitas_Bina_Sarana_Informatika.png', 'public/logos/bsi.png');
}
run();
