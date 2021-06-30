// Congratulations!
// You are smart enough to decode my message, dumbass.
// Here's your prize: {https://raw.githubusercontent.com/ekeducation/join/main/video.gif}

let rickrollButton = document.getElementById("rickroll")
let mMain = document.getElementById("main_m")
let video = document.getElementById("video")
let rrGif = document.getElementById("gif")
let select = document.getElementById("select_m")
let selectDiv = document.getElementById("select")
let linkDiv = document.getElementById("link_m")
let msg = document.getElementById("msg")

let link = "https://youtu.be/dQw4w9WgXcQ"


rickrollButton.onclick = () => {
    window.localStorage.setItem("isFirstTime", "false")
    notFirstTimeUserVisit()
    window.open(link)
}

let parse = window.localStorage.getItem("isFirstTime")
let mIsFirstTime = JSON.parse(parse)

if (mIsFirstTime === false) {
    notFirstTimeUserVisit()
} else {
    firstTimeUserVisit()
}

let random = Math.floor(Math.random() * 10);
if (random < 3) {
    rrGif.src = "./video.gif"
}

function firstTimeUserVisit() {

}

function notFirstTimeUserVisit() {
    rrGif.style.display = "block"
    msg.innerHTML = "Ha! You've been rickrolled! Select your grade below and click 'Join Class' to, you know, join class (promise it'll work this time)."
}

function onSelectTagSelected() {
    let selectedValue = select.value
    console.log("Value changed: " + selectedValue)

    selectDiv.style.display = "none"
    linkDiv.style.display = "grid"

    if (mIsFirstTime === false) {
        switch (selectedValue) {
            case "c9": {
                console.log("c9")
                link = "https://classroom.google.com/c/MzY4Nzc4NjE2ODAx?cjc=hunwpfp"
                break
            }
            case "c0": {
                console.log("c0")
                link = "https://classroom.google.com/c/MzY4Nzc4NjE2ODk0?cjc=jrjfehw"
                break
            }
            case "as": {
                console.log("as")
                link = "https://classroom.google.com/c/MzY4Nzc4NjE2ODU3?cjc=rxz2qax"
                break
            }
        }
    }
}
