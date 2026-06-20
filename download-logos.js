import https from 'https';
import fs from 'fs';

const logos = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Pendidikan_Nasional_%28Indonesia%29.svg', dest: 'public/logos/tutwuri.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Kementerian_Agama_Republik_Indonesia.png', dest: 'public/logos/kemenag.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', dest: 'public/logos/ibm.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_BSI.png', dest: 'public/logos/bsi.png' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        fs.unlink(dest, () => reject(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  for (const logo of logos) {
    try {
      await download(logo.url, logo.dest);
      console.log(`Downloaded ${logo.dest}`);
    } catch (e) {
      console.error(e);
    }
  }
}

run();
