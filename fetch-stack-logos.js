import fs from 'fs';
import path from 'path';

const logos = {
  'react': 'react',
  'tailwind': 'tailwindcss',
  'node': 'nodedotjs',
  'next': 'nextdotjs',
  'php': 'php',
  'laravel': 'laravel',
  'codeigniter': 'codeigniter',
  'kalilinux': 'kalilinux',
  'python': 'python',
  'postgresql': 'postgresql',
  'burpsuite': 'burpsuite',
  'figma': 'figma',
  'canva': 'canva',
  'premierepro': 'adobepremierepro',
  'capcut': 'capcut'
};

const dir = 'public/tech-logos';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function run() {
  for (const [name, slug] of Object.entries(logos)) {
    try {
      const url = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const svg = await res.text();
        // optionally add fill="currentColor" or keep raw
        fs.writeFileSync(path.join(dir, `${name}.svg`), svg);
        console.log(`Saved ${name}.svg`);
      } else {
        console.error(`Failed ${name}: ${res.status}`);
      }
    } catch (e) {
      console.error(`Error ${name}: ${e.message}`);
    }
  }
}
run();
