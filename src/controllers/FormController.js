'use strict'
var path = require('path');
var utileria = require("../libs/utileria");

function form1(req,res){
    console.log(__dirname);
    var utObject = new utileria;
    var ndirname =utObject.removeLastString(__dirname);
    console.log(ndirname);
    res.sendFile(path.join(ndirname+ 'views/form.html'));
    //res.status(200).end("<h1><span>hola mundo</span></h1>");
}
function index(req,res) {
    console.log(__dirname);
    var utObject = new utileria;
    var ndirname =utObject.removeLastString(__dirname);
    console.log(ndirname);
    res.sendFile(path.join(ndirname+ 'views/index.html'));

}
module.exports = {
    form1,index
}