package org.sample

data class Person(val name: String, val age: Int)

fun main(args: Array<String>) {
    println("Hello JavaScript!")

    val p1 = Person("Juanito", 21)
    val p2 = Person("pepito", 22)

    println("Hello ${p1.name}")
}