const http = require('http');
const fs = require('fs');
const path = require('path');

const publicFolder = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const requestUrl = req.url.split('?')[0];
  const safeUrl = requestUrl === '/' ? '/index.html' : requestUrl;
  const filePath = path.join(publicFolder, path.normalize(safeUrl));

  if (!filePath.startsWith(publicFolder)) {
    res.statusCode = 400;
    res.end('Invalid request');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Static app running at http://127.0.0.1:${port}`);
});
