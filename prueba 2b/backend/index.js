'use strict'
var mongoose=require('mongoose'); //cargar el modulo mongoose
var port=3700;
var app=require('./app');
//esto es una promesa
mongoose.connect('mongodb://localhost:27017/gizpirit')
    .then(()=>{
        console.log("Conexion establecida con la bdd");
        app.listen(port,()=>{
            console.log("Conexion establecida en el url:localhost:3700");
        })
    })
    .catch(err=>console.log(err));
