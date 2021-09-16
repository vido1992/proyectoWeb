'use strict'

var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var consecionario_routes=require('./routes/tienda');
//todo lo que llega se convierta en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//configuracion de cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST, OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST, OPTIONS,PUT,DELETE');
    next();
});
//rutas
/*app.get('/',(req,res)=>{
    res.status(200).send(
        "<h1>hola</h1>"
    );
})*/
module.exports=app;
app.use('/',consecionario_routes)
module.exports=app;
