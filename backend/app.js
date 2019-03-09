const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost/twitterhelpdesk', { useNewUrlParser: true }, (error) => {
  if (error) {
    throw new Error('Error while connecting to database');
  }
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/oauth', authRoutes);
app.use('/api/v1', userRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;