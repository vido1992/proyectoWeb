'use strict'
var mongoose=require('mongoose'); //carga el modulo mongoose
var port=3600;
var app=require('./app');
//promesa
mongoose.connect('mongodb://localhost:27017/gizpirit')
    .then(()=>{
        console.log("Conexion establecida con la BDD");
        app.listen(port,()=>{
            console.log("Conexion establecida en la url: localhost:3600");
        })
    })
    .catch(err=>console.log(err));
