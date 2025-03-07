const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    pin: { type: String, required: true },
    balance: { type: Number, default: 0 },
    transactions: [{
        type: { type: String, enum: ['deposit', 'payment'], required: true },
        amount: { type: Number, required: true },
        date: { type: Date, defaul: Date.now }
    }]

});

module.exports = mongoose.model('Cliente', ClienteSchema);
