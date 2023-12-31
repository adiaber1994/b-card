var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cardsRouter = require("./routes/cards");
const cors = require('cors')
const headers = require("./middleware/headers");
const auth = require("./middleware/auth");

var app = express();



app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//app.use(headers);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
// app.use('/orders', ordersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // SEND the error page
  console.log(err.message)
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
