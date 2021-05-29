
require('dotenv').config({ path: './.env' });
var express = require('express'),
  app = express(),
  port = `${process.env.PORT}`,
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if('OPTIONS' == req.method){
    res.sendStatus(200);
  }else{
    next();
  }
});

var router = require('./service/routes');
router(app);

const db = require("./service/schema");
db.sequelize.sync();

app.listen(port, function(){
  console.log('API server started on: ' + port);
});

