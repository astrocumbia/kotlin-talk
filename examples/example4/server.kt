external fun require(module:String):dynamic


fun main(args: Array<String>) {

    //load modules
    val express = require("express")
    val app = express()

    val port = 8080

    app.get("/", { req, res ->
        res.type("text/plain")
        res.send("Kotlin rules")
    })

    app.listen(port, {
        println("Listening in port $port")
    })
}