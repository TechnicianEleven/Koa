module.exports = {
    'GET /register': async (ctx, next) => {
        ctx.render('register.html', {
            title: 'hha'
        });
    }
};
let mongoose = require('mongoose');
let testDB = 'myproject';

module.exports = {
    'POST /register': async (ctx, next) => {
        ctx.render('register.html', {
            title: 'hha'
        });
    }
};
