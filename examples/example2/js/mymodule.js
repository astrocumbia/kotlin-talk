(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mymodule'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mymodule'.");
    }
    root.mymodule = factory(typeof mymodule === 'undefined' ? {} : mymodule, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  Person.prototype.component1 = function () {
    return this.name;
  };
  Person.prototype.component2 = function () {
    return this.age;
  };
  Person.prototype.copy_bm4lxs$ = function (name, age) {
    return new Person(name === void 0 ? this.name : name, age === void 0 ? this.age : age);
  };
  Person.prototype.toString = function () {
    return 'Person(name=' + Kotlin.toString(this.name) + (', age=' + Kotlin.toString(this.age)) + ')';
  };
  Person.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.age) | 0;
    return result;
  };
  Person.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.age, other.age)))));
  };
  var PI;
  function sayHi() {
    return 'Hi';
  }
  function echo(text) {
    return text;
  }
  _.Person = Person;
  Object.defineProperty(_, 'PI', {
    get: function () {
      return PI;
    }
  });
  _.sayHi = sayHi;
  _.echo = echo;
  PI = 3.1416;
  Kotlin.defineModule('mymodule', _);
  return _;
}));
