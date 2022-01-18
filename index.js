const express = require('express');
const app = express();
const port = 1313;

app.listen(port, () => {
  console.log(`Hello World from port ${port}.`);
});

app.get('/', (req, res) => {
  res.send(`Hello World GET / from port ${port}.`);
});

console.log(`Listening on port ${port}.`)