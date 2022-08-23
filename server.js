const express = require('express');
const { app, server } = require('./initServer');
const cors = require('cors');
const bodyParser = require("body-parser")
app.use(bodyParser.json())

//Server

app.use(cors());
app.use(express.json());

const urlRoutes = require('./routes/urls')

app.use('/', urlRoutes);


module.exports = { server };
