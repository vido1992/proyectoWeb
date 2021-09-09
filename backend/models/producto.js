'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductoSchema= Schema({
    modelo:String,
    marca:String,
    tipo:String,
    precio:Number,
    imagen:String
});

module.exports=mongoose.model('Producto',ProductoSchema);
