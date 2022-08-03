const fs = require('fs');
const path = require('path');

module.exports = (filename, data) => {
  return new Promise((resolve) => {
    const outputDir = path.join(__dirname, '../output');

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    fs.writeFile(
      path.join(outputDir, filename),
      JSON.stringify(data),
      'utf8',
      function () {
        console.log(`${filename} is saved.`);
        resolve();
      }
    );
  });
};
