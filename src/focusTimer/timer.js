import state from "./state.js";
import { reset } from "./actions.js";
import * as el from './elements.js'


export function countDown() {
  if (!state.isRunning) {
    return
  }
  
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    reset()
    return
  }
  
  updateDisplay(minutes, seconds)
  setTimeout(() => countDown(), 1000)
}

export function addTime() {
  let minutes = Number(el.minutes.textContent)

  if(minutes > 55) {
    return
  }

  minutes += 5
  updateDisplay(minutes)
}

export function removeTime() {
  let minutes = Number(el.minutes.textContent)

  if (minutes < 5) {
    return
  }
  
  minutes -= 5
  updateDisplay(minutes)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  
  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
