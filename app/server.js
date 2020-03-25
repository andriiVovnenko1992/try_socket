const Koa = require('koa');
const http = require('http');
const session = require('koa-session');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.keys = ['some secret hurr'];
app
    .use(session(app))
    .use(cors())
    .use(bodyParser());

const server = http.createServer(app);
server.listen(8000);
require('./socket')(server);
