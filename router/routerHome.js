const express = require('express');
const router = express.Router();

// esta ruta responde a '/' 

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/femenino", (req, res) => {
    res.render("femenino");
});

router.get("/alta", (req, res) => {
    res.render("alta");
});

router.get("/sucursales", (req, res) => {
    res.render("sucursales");
});

router.get("/nosotros", (req, res) => {
    res.render("nosotros");
});


module.exports = router; 