import state from './state.js'
import * as timer from './timer.js'
import { increment, decrement } from './elements.js'

export function play() {
  state.isRunning = !state.isRunning
  timer.countDown()
}

export function pause() {
  state.isRunning = false
}

export function reset() {
  timer.updateDisplay()
}

increment.addEventListener('click', timer.addTime)
decrement.addEventListener('click', timer.removeTime)