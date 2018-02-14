const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ guitars: '' });
});

app.get('/guitars/:id', (req, res) => {
  const guitars = {
    14: 'Fender',
    15: 'Gibson',
    16: 'Yamaha',
  };
  res.json({ name: guitars[req.params.id] });
});

app.get('/abel', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: 'My name is: ' });
});

app.listen(3005, () => {
  console.log('Server running on port 3005');
});
