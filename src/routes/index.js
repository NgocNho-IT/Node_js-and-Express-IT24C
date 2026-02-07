const bookRouter = require('./bookRouter');
const siteRouter = require('./siteRouter')

function setupRoutes(app) {
    app.use('/books', bookRouter),
    app.use('/', siteRouter)
}

module.exports = setupRoutes;