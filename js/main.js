import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import { buttonPlay,
        buttonPause,
        buttonClock,
        buttonStop,
        minutesDisplay,
        secondsDisplay } from './variables.js'

const sound = Sound()

const controls = Controls({  // passando as dependências para o clock.js
    buttonPlay,
    buttonPause,
    buttonClock,
    buttonStop
})

const timer = Timer({  // passando as dependências para o timer.js
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.resetControls,
})

Events({ sound, controls, timer })