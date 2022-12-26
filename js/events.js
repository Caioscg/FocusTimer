import { buttonPlay,
    buttonPause,
    buttonClock,
    buttonStop,
    soundOn,
    soundOff } from './variables.js'

export default function( {sound, controls, timer} ) {

    //*** Timer ***//

    buttonStop.addEventListener("click", () => {
        sound.buttonPress()

        controls.resetControls()
        timer.resetTimer()
    })

    buttonClock.addEventListener("click", () => {
        sound.buttonPress()

        timer.Clock()
    })

    //*** Play and pause ***//

    buttonPlay.addEventListener("click", () => {
        sound.buttonPress()

        controls.Play()
        timer.countDown()

    })

    buttonPause.addEventListener("click", () => {
        sound.buttonPress()

        controls.Pause()
        timer.hold()
    })

    //*** Sound on and off ***//

    soundOn.addEventListener("click",() => {
        sound.bgAudio.pause()
        ToggleSoundButton()
    })
    soundOff.addEventListener("click", () => {
        sound.bgAudio.play()
        ToggleSoundButton()
    })

    function ToggleSoundButton() {
        soundOn.classList.toggle('hide')
        soundOff.classList.toggle('hide')
    }
}