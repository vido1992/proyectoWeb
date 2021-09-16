'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var AutoSchema=Schema({
    fabricante: String,
    nombre:String,
    tipo:String,
    precio:Number,
    imagen:String,

});

module.exports=mongoose.model('Producto',AutoSchema);
