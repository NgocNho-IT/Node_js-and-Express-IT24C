async function home(req, res) {
    const books = [
        {subject: 'Sach 1', author: 'tac gia 1'}, 
        {subject: 'Sach 2', author: 'tac gia 2'},
        {subject: 'Sach 3', author: 'tac gia 3'}
    ];
    res.render('sites/home', {books, title: 'Home Page', message: '<h1> ABCDUSFUGIUFGIU </h1>'});
}

function about(req, res) {
    res.render('sites/about', {title: 'About Us'});
}

module.exports = {
    home,
    about
}