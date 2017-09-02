const mymodule = require('./mymodule.js')

var p1 = new mymodule.Person("Irvin", 24)

console.log("Hello " + p1.name)
console.log("PI " + mymodule.PI)
console.log(mymodule.sayHi())
console.log(mymodule.echo("100% js no fake"))