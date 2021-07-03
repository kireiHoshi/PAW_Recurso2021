var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require('cors');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var locationsRouter = require('./routes/locations');
var regionsRouter = require('./routes/regions');
var likesRouter = require('./routes/likes');
var dislikesRouter = require('./routes/dislikes');
var commentsRouter = require('./routes/comments');

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose
  .connect(
    "mongodb://localhost:27017/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(" connected to DB!");
  })
  .catch(() => console.log(" error connecting to DB!"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/locations', locationsRouter);
app.use('/regions', regionsRouter);
app.use('/likes', likesRouter);
app.use('/dislikes', dislikesRouter);
app.use('/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
