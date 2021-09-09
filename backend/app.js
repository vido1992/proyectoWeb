'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var gizpirit_routes=require('./routes/gizpirit');
//todo lo que llega se convierta a json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configuracion de cabeceraz
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST, OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST, OPTIONS,PUT,DELETE');
    next();
});


app.use('/',gizpirit_routes);

module.exports=app;
