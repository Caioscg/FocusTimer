//*** Clock and stop button ***//

const stop = document.querySelector(".stop")
const clock = document.querySelector(".clock")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let timerPrompt = Number(minutesDisplay.textContent)
let timerTimeOut

function updateTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0") // string com 2 caracteres, preenchido com 0 antes (se ja não tiver 2)
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateTimer(timerPrompt, 0)

    clearTimeout(timerTimeOut)
}

stop.addEventListener("click", () => {
    resetControls()

    resetTimer()
})

clock.addEventListener("click", () => {
    timerPrompt = prompt("Digite a quantidade de minutos:") || 0

    updateTimer(timerPrompt, 0)
})

function resetControls() {
    play.classList.remove('hide')
    pause.classList.add('hide')

    clock.classList.remove('hide')
    stop.classList.add("hide")
}

export {clock, stop, minutesDisplay ,secondsDisplay, timerTimeOut, updateTimer, resetControls}