const express = require('express');
const siteRouter = express.Router();
const siteController = require('../controllers/siteController.js')

siteRouter.get('/', siteController.home)
siteRouter.get('/about', siteController.about)

module.exports = siteRouter;