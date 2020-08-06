var db = require('../db');
var shortid = require('short-id');
module.exports.index = function(req, res, next) {
    res.render('../views/users/index', {
        title: 'User',
        users: db.get('users').value(),

    });

};
module.exports.search = function(req, res, next) {
    var q = req.query.q;
    var matchUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', { users: matchUsers });
};
module.exports.create = function(req, res, next) {
    res.render('users/create');
}
module.exports.get = function(req, res, next) {
    var id = (req.params.id);
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    });
};
module.exports.postCreate = function(req, res, next) {
    req.body.id = shortid.generate();

    db.get('users').push(req.body).write();
    res.redirect('/users');
}