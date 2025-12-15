/**
 * Script optimize và di chuyển ảnh vào thư mục public
 * Sử dụng Sharp để resize và compress ảnh
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cấu hình
const INPUT_DIR = './generated_images';
const OUTPUT_DIR = './public';
const QUALITY = 85; // Quality 85% - cân bằng tốt nhất

// Định nghĩa kích thước cho từng loại ảnh
const imageSizes = {
  // Full width backgrounds (16:9)
  'island-overview-from-sea.jpg': { width: 1920, height: 1080 },
  'coastal-cliffs-waves.jpg': { width: 1280, height: 720 },
  'starry-night-sky.jpg': { width: 1920, height: 1080 },
  'lighthouse-silhouette.jpg': { width: 1920, height: 1080 },
  'fresnel-lens-light.jpg': { width: 1920, height: 1080 },
  'stormy-ocean-dark.jpg': { width: 1920, height: 1080 },
  'giant-waves-10m.jpg': { width: 1920, height: 1080 },
  'storm-waves-closeup.jpg': { width: 1280, height: 720 },
  'dark-storm-clouds.jpg': { width: 1280, height: 720 },
  'lighthouse-light-in-storm.jpg': { width: 1920, height: 1080 },
  'vintage-background.jpg': { width: 1920, height: 1080 },
  'night-sea-lighthouse.jpg': { width: 1920, height: 1080 },
  'ocean-at-night-dark.jpg': { width: 1920, height: 1080 },
  'island-through-mist.jpg': { width: 1920, height: 1080 },
  'crossroads-symbolic.jpg': { width: 1920, height: 1080 },
  'middle-aged-man-sea.jpg': { width: 1280, height: 720 },
  'lighthouse-golden-hour.jpg': { width: 1920, height: 1080 },
  
  // Portrait images (3:4)
  'island-rocky-terrain.jpg': { width: 800, height: 1067 },
  'ocean-view-from-island.jpg': { width: 800, height: 1067 },
  'cliffs-at-sunset.jpg': { width: 800, height: 1067 },
  'spiral-staircase-interior.jpg': { width: 800, height: 1200 },
  'elderly-vietnamese-woman.jpg': { width: 800, height: 1067 },
  'rescue-at-sea.jpg': { width: 800, height: 1000 },
  'elderly-man-70-portrait.jpg': { width: 800, height: 1067 },
  
  // Square images (1:1)
  'rocky-shore-closeup.jpg': { width: 800, height: 800 },
  'fresnel-lens-closeup.jpg': { width: 800, height: 800 },
  'gallery-mountain.jpg': { width: 800, height: 800 },
  'gallery-sunrise.jpg': { width: 800, height: 800 },
  'gallery-forest.jpg': { width: 800, height: 800 },
  'gallery-tree.jpg': { width: 800, height: 800 },
  'dawn-after-storm.jpg': { width: 800, height: 800 },
  'campfire-warm-light.jpg': { width: 800, height: 800 },
  'hope-symbol-light.jpg': { width: 800, height: 800 },
  
  // Small sepia images
  'memory-sepia-1.jpg': { width: 320, height: 240 },
  'memory-sepia-2.jpg': { width: 280, height: 200 },
  'memory-sepia-3.jpg': { width: 260, height: 200 },
  
  // Panorama
  'gallery-sunset.jpg': { width: 1600, height: 800 },
};

// Hàm format size
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Hàm optimize ảnh
async function optimizeImage(filename) {
  const inputPath = path.join(INPUT_DIR, filename);
  const outputPath = path.join(OUTPUT_DIR, filename);
  
  // Kiểm tra file có tồn tại không
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  SKIP: ${filename} - File không tồn tại`);
    return null;
  }
  
  const size = imageSizes[filename];
  if (!size) {
    console.log(`⚠️  SKIP: ${filename} - Không có config kích thước`);
    return null;
  }
  
  try {
    // Lấy thông tin file gốc
    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size;
    
    // Optimize ảnh
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    // Lấy thông tin file đã optimize
    const outputStats = fs.statSync(outputPath);
    const outputSize = outputStats.size;
    const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}`);
    console.log(`   ${formatBytes(inputSize)} → ${formatBytes(outputSize)} (giảm ${reduction}%)`);
    
    return {
      filename,
      inputSize,
      outputSize,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`❌ ERROR: ${filename} - ${error.message}`);
    return null;
  }
}

// Main function
async function main() {
  console.log('🚀 BẮT ĐẦU OPTIMIZE VÀ DI CHUYỂN ẢNH\n');
  console.log(`📁 Input:  ${INPUT_DIR}`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🎨 Quality: ${QUALITY}%\n`);
  console.log('━'.repeat(60));
  
  // Tạo thư mục output nếu chưa có
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Lấy danh sách tất cả file cần optimize
  const filenames = Object.keys(imageSizes);
  const results = [];
  
  // Optimize từng ảnh
  for (const filename of filenames) {
    const result = await optimizeImage(filename);
    if (result) {
      results.push(result);
    }
    console.log(''); // Dòng trống
  }
  
  // Tổng kết
  console.log('━'.repeat(60));
  console.log('\n📊 TỔNG KẾT:\n');
  
  const totalInput = results.reduce((sum, r) => sum + r.inputSize, 0);
  const totalOutput = results.reduce((sum, r) => sum + r.outputSize, 0);
  const avgReduction = results.reduce((sum, r) => sum + r.reduction, 0) / results.length;
  
  console.log(`✅ Đã optimize: ${results.length}/${filenames.length} ảnh`);
  console.log(`📦 Tổng dung lượng gốc: ${formatBytes(totalInput)}`);
  console.log(`📦 Tổng dung lượng mới: ${formatBytes(totalOutput)}`);
  console.log(`📉 Giảm trung bình: ${avgReduction.toFixed(1)}%`);
  console.log(`💾 Tiết kiệm: ${formatBytes(totalInput - totalOutput)}`);
  
  // Danh sách file bị thiếu
  const missing = filenames.filter(f => !results.find(r => r.filename === f));
  if (missing.length > 0) {
    console.log(`\n⚠️  File còn thiếu (${missing.length}):`);
    missing.forEach(f => console.log(`   - ${f}`));
  }
  
  console.log('\n✨ HOÀN THÀNH!\n');
}

// Chạy script
main().catch(error => {
  console.error('❌ LỖI:', error);
  process.exit(1);
});
