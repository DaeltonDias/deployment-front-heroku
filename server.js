const express = require('express');

const _port = (process.env.PORT || 3000);
const _folder = 'www';

const app = express();

// SERVE STATIC FILES
app.get('*.*', express.static(_folder, { maxAge: '1y' }));

// SERVE APLICATION PATHS
app.all('*', function (req, res) {
  res.status(200).sendFile('/', { root: _folder });
});

// START UP THE NODE SERVER
app.listen(_port, function () {
  console.log("Runing in http://localhost:" + _port);
});