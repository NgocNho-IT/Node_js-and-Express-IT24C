const { StatusCodes } = require('http-status-codes');
const { bookJoiSchema_add } = require('../helpers/joi_helpers');
const { writeBookToDB } = require('../model/index');

function getAll(req, res) {
    res.status(StatusCodes.OKE).send('List of all books from controller');
}

async function addBook(req, res) {
    res.render('books/add-book');
}

async function add(req, res) {
    const bookData = req.body;
    // console.log('BookData: ', bookData);
    const { error } = bookJoiSchema_add.validate(bookData);
    if (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)
    }
    try {
        const result = await writeBookToDB(bookData);
        res.status(StatusCodes.OK).send({result});
    } catch(e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error adding book: ' + e.message);
    }
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
    search,
    addBook
}