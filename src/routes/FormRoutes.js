'use strict'
var express = require('express');
var form = require('../controllers/FormController');
//rutas
var api = express();
//controller methohd
api.get('/form', form.form1);
api.get('/',form.index);

module.exports = api;