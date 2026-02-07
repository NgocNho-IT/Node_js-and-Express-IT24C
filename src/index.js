const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const setupRoutes = require('./routes/index.js');
const PORT = 3000;

//logger setup
app.use(morgan('dev'))

// View engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routing setup
setupRoutes(app)

module.exports = app