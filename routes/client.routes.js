const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente.model');

//Router to register a new client

router.post('/register', async (req, res) => {
    const { name, phone, pin } = req.body;

    if (!name || !phone || !pin) {
        return res.status(400).json({ message: "All fields (name, phone, pin ) are required" });

    }
    try {
        const newClient = new Cliente({ name, phone, pin, balance: 0 });
        await newClient.save();
        res.status(201).json({ message: "Client registered successfully", client: newClient });

    } catch (error) {
        res.status(400).json({ message: "Error registering client", error });

    }
});

module.exports = router;