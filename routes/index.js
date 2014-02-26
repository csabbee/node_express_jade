/*global require, module*/
var errors = require('./errors');

module.exports = function (app) {
  'use strict';
  // home page
  app.get('/', function (req, res) {
    res.render('home.jade');
  });

  // error handlers
  errors(app);
};