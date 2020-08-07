var db = require('../db');
module.exports.index = function(req, res, next) {
    var page = parseInt(req.query.page) || 1;
    var perpage = 8;
    var start = (page - 1) * perpage;
    var end = page * perpage;
    res.render('products/index', {
        products: db.get('products').value().slice(start, end)
            //   products: db.get('products').drop(drop).take(perPage).value()
    });
};