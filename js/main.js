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

//*** Clock timer ***//

function countDown() {
    
    timerTimeOut =  setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (seconds <= 0) {
            if (minutes <= 0) {
                resetControls()
                return
            }

            seconds = 3
            --minutes
        }

        
        updateTimer(minutes, (seconds - 1))
        
        countDown()

    }, 1000)

}

//*** Play and pause ***//
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")

play.addEventListener("click", () => {
    TogglePlayButton()

    stop.classList.remove('hide')
    clock.classList.add('hide')

    countDown()
})

pause.addEventListener("click", () => {
    TogglePlayButton()

    clearTimeout(timerTimeOut)
})

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