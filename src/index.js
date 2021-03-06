import {runTimer} from './blocks/timer/timer'
import {runSlider} from './blocks/slider/slider'
import {useApplicationForm} from './blocks/application-form/application-form'
import './style.css'

runTimer()
window.addEventListener('resize', runSlider)
runSlider()
useApplicationForm()
