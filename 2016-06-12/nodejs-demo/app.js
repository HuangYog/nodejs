// 加载依赖库，原来这个类库都封装在connect中，现在需地注单独加载
var express = require('express'),
favicon = require('serve-favicon'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
session = require('express-session');

// 加载路由控制
var routes = require('./routes'),
users = require('./routes/users'),
movie = require('./routes/movie'),
http = require('http'),
path = require('path'),
ejs = require('ejs'),
SessionStore = require("connect-mongo")(session);


// 创建项目实例
var app = express();

// 定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/movie/add', movie.movieAdd);//增加
app.post('/movie/save', movie.doMovieAdd);//提交
app.get('/movie/:name', movie.movieAdd);//编辑查询
app.get('/movie/json/:name', movie.movieJSON);//JSON



// uncomment after placing your favicon in /public
// 定义icon图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// 定义日志和输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
app.use(cookieParser());

// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 匹配路径和路由
app.use('/', routes);
app.use('/users', users);

// 404错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// 生产环境，500错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// 输出模型app
module.exports = app;
