(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
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
  function main(args) {
    println('Hello JavaScript!');
    var p1 = new Person('Juanito', 21);
    var p2 = new Person('pepito', 22);
    println('Hello ' + p1.name);
  }
  var package$org = _.org || (_.org = {});
  var package$sample = package$org.sample || (package$org.sample = {});
  package$sample.Person = Person;
  package$sample.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('test', _);
  return _;
}(module.exports, require('kotlin')));
