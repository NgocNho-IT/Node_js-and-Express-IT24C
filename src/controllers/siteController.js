function home(req, res) {
    res.render('sites/home');
}

function about(req, res) {
    res.render('sites/about');
}

module.exports = {
    home,
    about
}