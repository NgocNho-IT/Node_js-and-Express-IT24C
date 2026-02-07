function getAll(req, res) {
    res.send('List of all books from controller');
}

function add(req, res) {
    res.send('Add a new book from controller');
}

module.exports = {
    getAll,
    add
}