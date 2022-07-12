const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name is required']
    },
    price: {
        type: Number,
        required: [true, 'product price is required']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 3
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company : {
        type: String,
        enum: ['caressa', 'ikea', 'marcos','liddy'],
        message: '{VALUE} is not supported'
    }
});

module.exports = mongoose.model('Product', ProductSchema);