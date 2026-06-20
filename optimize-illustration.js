import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'd:\\Projects\\portofolio-danial\\public\\illustration.png';
const output = 'd:\\Projects\\portofolio-danial\\public\\illustration.webp';

async function optimize() {
    try {
        await sharp(input)
            .webp({ quality: 80 })
            .toFile(output);
        console.log('Successfully optimized illustration to webp!');
    } catch (e) {
        console.error('Error optimizing image:', e);
    }
}
optimize();
