export default function () {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    buttonPressAudio.volume = 0.3
    kitchenTimer.volume = 0.05

    function buttonPress() {
        buttonPressAudio.play()
    }

    function timerEnd() {
        kitchenTimer.play()
    }

    bgAudio.loop = true
    bgAudio.volume = 0.4

    return {
        buttonPress,
        timerEnd,
        bgAudio
    }
}