export function Timer({minutesDisplay, secondsDisplay, timerTimeOut, resetControls}) {  // dependências (factory)

    function updateTimer(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0") // string com 2 caracteres, preenchido com 0 antes (se ja não tiver 2)
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
        updateTimer(timerPrompt, 0)

        clearTimeout(timerTimeOut)
    }

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

    return {
        countDown,
        resetTimer,
        updateTimer,
    }

}