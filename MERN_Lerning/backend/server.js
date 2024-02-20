const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

require("dotenv").config();



const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());


const URI = process.env.ATLAS_URI;

mongoose.connect(URI);


const connection = mongoose.connection;

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})


const exerciseRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})