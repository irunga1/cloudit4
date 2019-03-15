'use strict'
var express = require('express');
var op= require('../controllers/OperacionController');
//rutas
var api = express();
//lugares
api.post('/operacion', op.operate);

module.exports = api;