import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function writeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function createPng(width, height, isMaskable = false) {
  // Generate RGBA buffer
  // Medical green #0A8F6A (10, 143, 106)
  const rBg = 10, gBg = 143, bBg = 106;
  const rawData = Buffer.alloc((width * 4 + 1) * height);

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = width * 0.46;
  const crossLength = width * 0.28;
  const crossWidth = width * 0.09;

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Check if inside the cross
      const inHorizBar = Math.abs(dy) <= crossWidth && Math.abs(dx) <= crossLength;
      const inVertBar = Math.abs(dx) <= crossWidth && Math.abs(dy) <= crossLength;
      const inCross = inHorizBar || inVertBar;

      // Small central heartbeat or circular ring
      const inRing = dist >= outerRadius * 0.85 && dist <= outerRadius * 0.95;

      if (inCross) {
        // White cross
        rawData[offset++] = 255;
        rawData[offset++] = 255;
        rawData[offset++] = 255;
        rawData[offset++] = 255;
      } else if (inRing && !isMaskable) {
        // Accent ring
        rawData[offset++] = 200;
        rawData[offset++] = 255;
        rawData[offset++] = 235;
        rawData[offset++] = 220;
      } else {
        // Teal medical background
        if (isMaskable) {
          // Full bleed square
          rawData[offset++] = rBg;
          rawData[offset++] = gBg;
          rawData[offset++] = bBg;
          rawData[offset++] = 255;
        } else {
          // Rounded / antialiased circle
          if (dist <= outerRadius) {
            rawData[offset++] = rBg;
            rawData[offset++] = gBg;
            rawData[offset++] = bBg;
            rawData[offset++] = 255;
          } else {
            // Transparent outside circle
            rawData[offset++] = 0;
            rawData[offset++] = 0;
            rawData[offset++] = 0;
            rawData[offset++] = 0;
          }
        }
      }
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type (RGBA)
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const ihdrChunk = writeChunk('IHDR', ihdr);
  const idatChunk = writeChunk('IDAT', deflated);
  const iendChunk = writeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.resolve(process.cwd(), 'public/icons');
fs.mkdirSync(iconsDir, { recursive: true });

// Create 192x192, 512x512, maskable, apple-touch-icon
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), createPng(192, 192, false));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), createPng(512, 512, false));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192.png'), createPng(192, 192, true));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.png'), createPng(512, 512, true));
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), createPng(180, 180, false));

// Also root fallbacks
fs.writeFileSync(path.resolve(process.cwd(), 'public/apple-touch-icon.png'), createPng(180, 180, false));
fs.writeFileSync(path.resolve(process.cwd(), 'public/pwa-192x192.png'), createPng(192, 192, false));
fs.writeFileSync(path.resolve(process.cwd(), 'public/pwa-512x512.png'), createPng(512, 512, false));

console.log('PWA icons successfully generated.');
