const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController.js')
bookRouter.get('/all', bookController.getAll)

bookRouter.post('/add', bookController.add)

module.exports = bookRouter;