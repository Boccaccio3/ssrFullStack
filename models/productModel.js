const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    imagen: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    }, 
    edicion: { 
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

module.exports = mongoose.model('Product', productSchema);