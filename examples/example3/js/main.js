(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
    }
    root.main = factory(typeof main === 'undefined' ? {} : main, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main(args) {
    var tmp$;
    var header = document.createElement('h1');
    header.appendChild(document.createTextNode('100% real no fake'));
    (tmp$ = document.body) != null ? tmp$.appendChild(header) : null;
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}));
