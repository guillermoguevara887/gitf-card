require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
    res.send('Welcome to the API of Gift Card');

});
app.listen(PORT, () => {
    console.log(`listening on port on http://localhost:${PORT}`);

});