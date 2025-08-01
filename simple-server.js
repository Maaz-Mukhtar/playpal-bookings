const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>PlayPal Test Server</title></head>
    <body style="font-family: system-ui; padding: 40px; text-align: center;">
      <h1>🎾 PlayPal Connection Test</h1>
      <p>Success! Simple Node.js server is working.</p>
      <p>Time: ${new Date().toLocaleString()}</p>
      <p>Request URL: ${req.url}</p>
    </body>
    </html>
  `);
});

const PORT = 3005;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Simple server running at http://localhost:${PORT}`);
  console.log(`✅ Also try: http://127.0.0.1:${PORT}`);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
});