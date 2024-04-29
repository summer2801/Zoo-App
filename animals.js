//Functionality for the animals section
function showText(id) {
    const textBox = document.getElementById("text" + id)
    const text = document.getElementsByClassName("text")
    for (b of text) {
        b.style.transitionDelay = "1s"
        b.style.transitionDuration = "1s"
        b.style.opacity = "100%"
    }
    textBox.style.opacity = "100%"
    textBox.style.width = "300px"
}

function hideText(id) {
    const textBox = document.getElementById("text" + id)
    const text = document.getElementsByClassName("text")
    for (b of text) {
        b.style.transitionDelay = "0s"
        b.style.transitionDuration = "0s"
        b.style.opacity = "0%"
    }
    textBox.style.opacity = "0%"
    textBox.style.width = "0px"
}
