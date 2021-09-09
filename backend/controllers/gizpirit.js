'use strict'
var Producto=require('../models/producto');
var fs=require('fs');
var path=require('path');

var controller={
    getProductos:function (req,res){
        Producto.find({}).sort().exec((err,productos)=>{
            if(err) return res.status(500).send({message:'Error en recuperar los datos'});
            if (!productos) return res.status(404).send({message:'No hay productos para mostrar'});
            return res.status(200).send({productos})
        })
    },
    saveProducto:function (req,res){
        var producto=new Producto();
        var params=req.body;
        producto.modelo=params.modelo;
        producto.marca=params.marca;
        producto.tipo=params.tipo;
        producto.precio=params.precio;
        producto.imagen=null;

        producto.save((err,productoStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar los datos'});
            if (!productoStored) return res.status(404).send({message:'No se ha guardado el producto'});
            return res.status(200).send({productos:productoStored})
        })
    },
    getProducto:function (req,res){
        var productoId=req.params.id;
        if(productoId==null) return res.status(404).send({message:'El producto no existe'});

        Producto.findById(productoId,(err,productos)=>{
            if(err) return res.status(500).send({message:'Error en recuperar los datos'});
            if (!productos) return res.status(404).send({message:'No hay productos para mostrar'});
            return res.status(200).send({productos})
        });
    },
    updateProducto:function (req,res){
        var productoId=req.params.id;
        var update=req.body;

        Producto.findByIdAndUpdate(productoId,update,{new:true},(err,productoUpdate)=>{
            if(err) return res.status(500).send({message:'Error en actualizar los datos'});
            if (!productoUpdate) return res.status(404).send({message:'No existe auto para actualizar'});
            return res.status(200).send({productoUpdate})
        });
    },
    deleteProducto:function (req,res){
        var productoId=req.params.id;
        Producto.findByIdAndRemove(productoId,(err,productoRemoved)=>{
            if(err) return res.status(500).send({message:'Error al eliminar los datos'});
            if (!productoRemoved) return res.status(404).send({message:'No se puede eliminar los datos'});
            return res.status(200).send({productoRemoved})
        });
    },
    uploadImagen:function (req,res){
        var productoId=req.params.id;
        var fileName="Imagen no subit";
        if(req.files){
            var filePath=req.files.imagen.path;
            var file_splite=filePath.split('\\');
            var fileName=file_splite[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png' || fileExt=='jpg'|| fileExt=='jpeg' ||fileExt=='gif'){
                Producto.findByIdAndUpdate(productoId,{imagen:fileName},{new:true},(err,productoUpdated)=>{
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if (!productoUpdated) return res.status(404).send({message:'El producto no existe y no se subio la imagen'});
                    return res.status(200).send({productoUpdated});
                });
            }else{
                fs.unlink(filePath,(err) => {
                    return res.status(200).send( {message:'La extension del archivo no es valida'});
                });
            }
        }else{
            return res.status(200).send( {message:fileName});
        }
    },
    getImagen:function (req,res){
        var file=req.params.imagen;
        var path_file='./uploads/'+file;
        fs.exists(path_file,(exists) => {
          if(exists){
              return res.sendFile(path.resolve(path_file));
          }  else{
              return res.status(200).send({message:'No existe la imagen'});
          }
        });
        },
}

module.exports=controller;
