var express = require('express');
var os = require('os');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container ' + os.hostname() + '</body></html>');
});

router.get('/hello', function(req, res) {
  res.json({message:'Hello world'});
});

app.use('/api', router);
app.listen(80);