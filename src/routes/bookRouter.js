const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController.js');
bookRouter.get('/all', bookController.getAll);

bookRouter.post('/add', bookController.add); //API

bookRouter.get('/add-book', bookController.addBook);// UI

bookRouter.get('/detail/:id', bookController.getDetailById);

bookRouter.get('/search', bookController.search);

module.exports = bookRouter;