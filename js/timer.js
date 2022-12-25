export default function Timer({minutesDisplay, secondsDisplay, timerTimeOut, resetControls, minutes, newMinutes}) {  // dependências (factory)

    function updateTimer(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0") // string com 2 caracteres, preenchido com 0 antes (se ja não tiver 2)
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
        updateMinutes(minutes)
        updateTimer(minutes, 0)

        clearTimeout(timerTimeOut)
    }

    function countDown() {
        
        timerTimeOut =  setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let Minutes = Number(minutesDisplay.textContent)

            if (seconds <= 0) {
                if (Minutes <= 0) {
                    resetControls()
                    return
                }

                seconds = 3
                --Minutes
            }

            
            updateTimer(Minutes, (seconds - 1))
            
            countDown()

        }, 1000)

    }

    function updateMinutes(minutes) {
        minutes = newMinutes
    }

    return {
        countDown,
        resetTimer,
        updateTimer,
        updateMinutes
    }

}