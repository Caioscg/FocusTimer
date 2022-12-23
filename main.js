const stop = document.querySelector(".stop")
const clock = document.querySelector(".clock")

stop.addEventListener("click", () => {
    play.classList.remove('hide')
    pause.classList.add('hide')

    clock.classList.remove('hide')
    stop.classList.add("hide")
})

//*** Play and pause ***//
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")

play.addEventListener("click", () => {
    TogglePlayButton()

    stop.classList.remove('hide')
    clock.classList.add('hide')
})

pause.addEventListener("click", TogglePlayButton)

function TogglePlayButton() {
    play.classList.toggle('hide')
    pause.classList.toggle('hide')
}


//*** Sound on and off ***//
const soundOn = document.querySelector(".sound-on")
const soundOff = document.querySelector(".sound-off")

soundOn.addEventListener("click", ToggleSoundButton)
soundOff.addEventListener("click", ToggleSoundButton)

function ToggleSoundButton() {
    soundOn.classList.toggle('hide')
    soundOff.classList.toggle('hide')
}