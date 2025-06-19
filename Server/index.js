const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.listen(30001, () => {
    console.log('Server is running on port 30001');
})