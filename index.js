var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/environment');

global.ENV = config(process.env.NODE_ENV);

var app = express();

app.use(bodyParser.text({ type: 'text/html' }))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(ENV.PORT, function() {
  console.log('WebRTC front is listening on port ' + ENV.PORT);
});
