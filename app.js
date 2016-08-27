var Koa = require('koa')
const convert = require('koa-convert')
var app = new Koa()
const path = require('path')
var route = require('koa-route')
var views = require('koa-views')
const serve = require('koa-static')
const compress = require('koa-compress')

//const lessMiddleware = require('koa-less');


app.use(convert(compress({
    filter: function (content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
})));

//app.use(convert(lessMiddleware(path.join(__dirname, 'public'))));
app.use(convert(serve(path.join(__dirname, 'public'))));

app.use(convert(views(path.join(__dirname, 'app/views'), {
    extension: 'jade'
})));

app.use(convert(route.get('/', function *() {
    yield this.render('index');
})));

app.listen(3001)