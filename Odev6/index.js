const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {

    //ctx.type = 'html';

    if ('/' == ctx.path) {
        ctx.status = 200;
        ctx.body = '<h1>WELCOME TO THE INDEX PAGE</h1>'
    }
    else if ('/about' == ctx.path) {
        ctx.status = 200;
        ctx.body = '<h1>WELCOME TO THE ABOUT PAGE</h1>'
    }
    else if ('/contact' == ctx.path) {
        ctx.status = 200;
        ctx.body = '<h1>WELCOME TO THE CONTACT PAGE</h1>'
    }
    else {
        ctx.status = 404;
        ctx.body = '<h1>PAGE NOT FOUND</h1>'
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server started with port ${port}.`);
});
