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
      font-family: 'Segoe UI', Tahoma, sans-serif;
      margin: 0;
      padding: 2rem;
      background: linear-gradient(135deg, #f0f4f8, #d9e4ec);
      color: #333;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }

    div {
      background: #fff;
      border-radius: 10px;
      padding: 1.5rem;
      margin: 1rem auto;
      max-width: 700px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    div:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    h2 {
      color: #34495e;
      margin-bottom: 0.3rem;
    }

    h3 {
      color: #7f8c8d;
      font-weight: normal;
      margin-top: 0;
      margin-bottom: 0.8rem;
    }

    p {
      margin: 0.4rem 0;
      line-height: 1.4;
    }

    .tag {
      display: inline-block;
      background: #3498db;
      color: #fff;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-size: 0.85rem;
      margin-right: 0.5rem;
    }
  </style>
</head>
<body>
  <h1>📚 Libros Disponibles</h1>
  ${text}
</body>
</html>
`;


  res.end(html);
});

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${server.address().port}`);
});

