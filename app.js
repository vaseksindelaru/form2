const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>peticion recibida con nodemon<h1>');
});

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});