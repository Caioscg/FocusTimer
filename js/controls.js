export function Controls(buttonPlay, buttonPause, buttonClock, buttonStop) {

    function Play() {
        TogglePlayButton()

        buttonStop.classList.remove('hide')
        buttonClock.classList.add('hide')
    }

    function Pause() {
        TogglePlayButton()
    }

    function resetControls() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')

        buttonClock.classList.remove('hide')
        buttonStop.classList.add("hide")
    }

    function TogglePlayButton() {
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    }

    return {
        resetControls,
        Play,
        Pause
    }

}