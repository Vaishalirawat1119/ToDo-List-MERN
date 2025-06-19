const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/database')

app.post('/add', (req, res => {
    const task = req.body.task;
}))

app.listen(30001, () => {
    console.log('Server is running on port 30001');
})