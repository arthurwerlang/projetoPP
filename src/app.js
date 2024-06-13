const express = require("express");
const dotenv = require("dotenv").config();
const router = require('./routes/dadosroutes');
const cors = require('cors');
const app = express();
 
app.set("port", process.env.PORT || 3002);
app.use(express.json());
app.use(cors());
app.use("/API_REECO", router);
 
module.exports = app;