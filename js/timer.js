import Sound from './sounds.js'
const sound = Sound()

export default function Timer({minutesDisplay, secondsDisplay, resetControls}) {  // dependências (factory)

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    let newMinutes = minutes

    function updateTimer(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0") // string com 2 caracteres, preenchido com 0 antes (se ja não tiver 2)
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
        updateTimer(minutes, 0)

        clearTimeout(timerTimeOut)
    }

    function countDown() {
        
        timerTimeOut =  setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            if (seconds <= 0) {
                if (minutes <= 0) {
                    resetControls()
                    updateTimer(newMinutes, 0)
                    sound.timerEnd()

                    return
                }

                seconds = 60
                --minutes
            }

            
            updateTimer(minutes, (seconds - 1))
            
            countDown()

        }, 1000)

    }

    function Clock() {
        newMinutes = prompt("Digite a quantidade de minutos:")

        if (!newMinutes) newMinutes = minutes

        minutes = newMinutes

        updateTimer(newMinutes, 0)
        updateMinutes(newMinutes)
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    return {
        countDown,
        resetTimer,
        updateTimer,
        updateMinutes,
        hold,
        Clock
    }

}