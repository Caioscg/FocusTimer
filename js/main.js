import Controls from './controls.js'
import Timer from './timer.js'

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")

const buttonClock = document.querySelector(".clock")
const buttonStop = document.querySelector(".stop")

const soundOn = document.querySelector(".sound-on")
const soundOff = document.querySelector(".sound-off")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let newMinutes

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonClock,
    buttonStop
})

const timer = Timer({  // passando as dependências para o timer.js
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls: controls.resetControls,
    minutes,
    newMinutes
})

buttonStop.addEventListener("click", () => {
    controls.resetControls()

    timer.resetTimer()
})

buttonClock.addEventListener("click", () => {
    newMinutes = prompt("Digite a quantidade de minutos:") || 0

    timer.updateTimer(newMinutes, 0)
    updateTimer(minutes)
})

//*** Play and pause ***//

buttonPlay.addEventListener("click", () => {
    controls.Play()

    timer.countDown()
})

buttonPause.addEventListener("click", () => {
    controls.Pause()

    clearTimeout(timerTimeOut)
})

//*** Sound on and off ***//

soundOn.addEventListener("click", ToggleSoundButton)
soundOff.addEventListener("click", ToggleSoundButton)

function ToggleSoundButton() {
    soundOn.classList.toggle('hide')
    soundOff.classList.toggle('hide')
}