const express = require('express');
const router = express.Router();

const Producto = require('../models/productModel')

router.get("/", async (req, res) => {

    const productos = await Producto.find();
    res.render("listado", {
        productos
    });
    
});

router.get("/alta", async (req, res) => {
    res.render("alta");
});

router.post("/register", async (req, res) => {

    let { marca, edicion, precio, imagen } = req.body;

    precio = parseInt(precio)

    const producto = {
        marca,
        edicion,
        precio,
        imagen
    }

    console.log(producto)

    const nuevoProducto = new Producto(producto);
    await nuevoProducto.save();
    
    res.render('isproduct', {
        mensaje: 'Producto agregado con éxito',
    })
});


module.exports = router;