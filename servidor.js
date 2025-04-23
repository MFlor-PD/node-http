const http = require('node:http');
const { text } = require('./data.js');
const port = 3000;
const server = http.createServer((req, res) => {
  console.log('Request recived');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Lista de Libros</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 2rem;
          background-color: #f4f4f4;
        }
        div {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2, h3 {
          margin: 0.5rem 0 0;
        }
        span p, div p {
          margin: 0.2rem 0 0.8rem;
        }
      </style>
    </head>
    <body>
      <h1>Libros disponibles</h1>
      ${text}
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${server.address().port}`);
});

