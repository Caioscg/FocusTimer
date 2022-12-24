import {clock, stop, minutesDisplay ,secondsDisplay, timerTimeOut, updateTimer, resetControls} from './clock.js'

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