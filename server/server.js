"use strict";

const express = require("express");
const {join} = require("path");
require('dotenv').config()

// Constants
const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || "0.0.0.0";

// App
const app = express();
app.use(express.static(__dirname + '/../frontend'));
app.get('/', function(req, res) {
  res.sendFile(join(__dirname, '/index.html'));
});


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
