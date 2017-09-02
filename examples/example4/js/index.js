(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'index'.");
    }
    root.index = factory(typeof index === 'undefined' ? {} : index, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(req, res) {
    res.type('text/plain');
    return res.send('Kotlin rules');
  }
  function main$lambda_0() {
    println('Listening in port 8080');
  }
  function main(args) {
    var express = require('express');
    var app = express();
    var port = 8080;
    app.get('/', main$lambda);
    app.listen(port, main$lambda_0);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}));
