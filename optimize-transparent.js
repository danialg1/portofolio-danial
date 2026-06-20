import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'C:\\Users\\dania\\Downloads\\PXL_20251007_041918639-removebg-preview.png';
const outputPath = 'd:\\Projects\\portofolio-danial\\public\\profil_transparent.webp';

async function optimizeImage() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return;
    }

    await sharp(inputPath)
      .rotate() // Auto-orient
      .resize({ width: 800, withoutEnlargement: true }) // Resize for performance
      .webp({ quality: 80, lossless: false }) // Compress to webp maintaining transparency
      .toFile(outputPath);
      
    console.log('Transparent image successfully optimized and saved to ' + outputPath);
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
