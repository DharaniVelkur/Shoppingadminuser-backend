const express = require('express');
const dotenv = require('dotenv');
const app= express();
var cors = require('cors');
app.use(cors());
require('./db/conn');
const router = require('./routes/router');
dotenv.config();
app.use(express.json());

app.use(router);
app.listen(process.env.PORT,()=>{console.log("Server listening on port " + process.env.PORT)});