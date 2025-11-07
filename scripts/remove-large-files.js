#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB in bytes
const OUT_DIR = path.join(process.cwd(), 'out');

function removeLargeFiles(dir) {
  let removedCount = 0;
  let totalSizeRemoved = 0;

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (stat.isFile()) {
        if (stat.size > MAX_FILE_SIZE) {
          const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
          console.log(`Removing large file: ${filePath} (${sizeMB} MB)`);
          fs.unlinkSync(filePath);
          removedCount++;
          totalSizeRemoved += stat.size;
        }
      }
    }
  }

  if (!fs.existsSync(OUT_DIR)) {
    console.log('Output directory does not exist. Skipping large file removal.');
    return;
  }

  console.log('Scanning for files larger than 25 MB...');
  walkDir(OUT_DIR);

  if (removedCount > 0) {
    const totalSizeMB = (totalSizeRemoved / (1024 * 1024)).toFixed(2);
    console.log(`\nRemoved ${removedCount} file(s) totaling ${totalSizeMB} MB`);
    console.log('These files exceeded Cloudflare Pages 25 MB limit.');
  } else {
    console.log('No files larger than 25 MB found.');
  }
}

removeLargeFiles(OUT_DIR);

