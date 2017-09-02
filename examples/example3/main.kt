import kotlin.browser.document

fun main(args: Array<String>) {

    val header = document.createElement("h1")
    header.appendChild(document.createTextNode("100% real no fake"))
    document.body?.appendChild(header)
}