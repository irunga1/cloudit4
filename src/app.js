//includes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//charge routes
var form_routes = require('./routes/FormRoutes');
var op_routes = require('./routes/OperacionRoutes');
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//headers
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

//routes
app.use('/',form_routes);
app.use('/',op_routes);


module.exports =  app;