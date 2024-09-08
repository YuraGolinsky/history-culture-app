// server.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
