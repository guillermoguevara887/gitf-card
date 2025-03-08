require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const clientRoutes = require('./routes/client.routes');

const Cliente = require('./models/Cliente.model')


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connection successful');
    }).catch(err => {
        console.log('Error connecting', err);
    });


app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
    res.send('Welcome to the API of Gift Card');

});

app.use('/clients', clientRoutes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);

});

async function createTestClient() {
    const client = new Cliente({
        name: "Doris Gomez",
        phone: "4586002643",
        pin: "1234",
        balance: 100

    });

    try {
        await client.save();
        console.log("Client save to MongoDb");
    } catch (error) {
        console.error("Error saving client: ", error)
    }
}

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB atlas");
    createTestClient();
}); 