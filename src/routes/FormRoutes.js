'use strict'
var express = require('express');
var form = require('../controllers/FormController');
//rutas
var api = express();
//lugares
api.get('/form', form.form1);

module.exports = api;