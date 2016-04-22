var express = require('express');
var os = require('os');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./models/todo');
var connectionURL = 'mongodb://' 
		+ process.env.DATABASE_USER 
		+ ':' 
		+ process.env.DATABASE_PASS 
		+ '@database/' 
		+ process.env.DATABASE_NAME;

mongoose.connect(connectionURL);

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('<html><body>Hello World from Node.js container ' + os.hostname() + '</body></html>');
});

router.get('/hello', function(req, res) {
  res.json({message:'Hello world'});
});

router.route('/todos')
  .post(function(req, res) {
  	var todo = new Todo();
  	todo.name = req.body.name;

  	todo.save(function(err) {
  	  if (err) {
  	  	res.send(err);
  	  }

  	  res.json({message: 'Todo created!'});
  	});
  })
  .get(function(req, res) {
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err);
      }

      res.json(todos);
    });
  });

app.use('/api', router);
app.listen(8080);