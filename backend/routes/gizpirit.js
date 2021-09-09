'use strict'
var express=require('express');
var GizpiritController=require('../controllers/gizpirit');
var multipart=require('connect-multiparty');
var multiPartMiddleware=multipart({uploadDir:'./uploads'});

var router=express.Router();

//obetener productos
router.get('/productos',GizpiritController.getProductos);
//guardar producto
router.post('/guardar-producto',GizpiritController.saveProducto);
//obtener datos de un producto
router.get('/producto/:id',GizpiritController.getProducto);
//actualizar
router.put('/producto/:id',GizpiritController.updateProducto);
//eliminar
router.delete('/producto/:id',GizpiritController.deleteProducto);
//agregar imagen
router.post('/subir-imagen/:id',multiPartMiddleware,GizpiritController.uploadImagen);
//recuperar imagen
router.get('/get-imagen/:imagen',GizpiritController.getImagen);

module.exports=router;
