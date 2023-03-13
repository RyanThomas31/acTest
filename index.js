require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 3000
app.use(
    express.json(),
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    Router
).listen(port, () => console.log(`your server is running at ${port}`));