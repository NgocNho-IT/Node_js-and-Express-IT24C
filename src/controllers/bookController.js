function getAll(req, res) {
    const listBook = ['Java basic for beginer', 'Django basic for beginer', 'React basic']
    res.render('books/all', {listBook: listBook});
}

function add(req, res) {
    res.send('Add a new book from controller');
}

async function getDetailById(req, res) {
    const bookId = req.params.id;
    console.log('BookId', bookId);
    res.send(`Book ID: ${bookId}`)
}
    
async function search(req, res) {
    const bookData = req.query
    console.log('BookData', bookData);
    res.send(`Search book with data: ${JSON.stringify(bookData)}`)
}

module.exports = {
    getAll,
    add,
    getDetailById,
    search
}