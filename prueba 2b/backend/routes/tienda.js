'use strict'
var express=require('express');
var ConsecionarioController=require('../controllers/tienda');
var multipart=require('connect-multiparty');
var multiPartMiddleware=multipart({uploadDir:'./uploads'})

var router= express.Router();
//ver informacion de autos
router.get('/autos',ConsecionarioController.getAutos);
//guardar datos de un autos
router.post('/guardar-auto',ConsecionarioController.saveAuto);
//obtener dato de un auto
router.get('/auto/:id',ConsecionarioController.getAuto);
//actualizar
router.put('/auto/:id',ConsecionarioController.updateAuto);
//eliminar
router.delete('/auto/:id',ConsecionarioController.deleteAuto);
//agregar imagenes
router.post('/subir-imagen/:id',multiPartMiddleware,ConsecionarioController.uploadImagen);
//obtener imagen o recuperar
router.get('/get-imagen/:imagen',ConsecionarioController.getImagen);
//buscar por nombre
router.get('/auto-nombre/:id',ConsecionarioController.getAutoNombre);
module.exports=router;
