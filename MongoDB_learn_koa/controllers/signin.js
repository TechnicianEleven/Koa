// sign in:
let mongoose = require('mongoose');
let testDB = 'myproject';
let User = mongoose.model('User', {
    name: String,
    password: String,
});
module.exports = {
    'POST /signin': async(ctx, next) => {
        let currentUserName = '';
        let currentPassword = ''
        mongoose.connect("mongodb://localhost/" + testDB, (err) => {
            if (err) {
            } else {
            }
        })
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
        await User.find({
            name: username
        }, (err, docs)=> {
            //这里有一个问题，就是这个docs到底是一个什么
            //
            if(docs.length===0){
                // console.log(docs==='object')
                ctx.render('signin-failed.html', {
                    title:'fail'
                });
            }
            else if(docs[0].password === password) {
                // console.log(docs,docs.password)
                ctx.render('signin-ok.html', {
                    title: 'Sign In OK',
                    name: username
                });
            }
            else{
                ctx.render('signin-failed.html', {
                    title:'密码错误'
                });
            }

        })
        mongoose.disconnect()


    }
};