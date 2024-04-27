import * as sounds from './sounds.js'
import state from './state.js'

export function tree() {
  event.target.classList.toggle('primaryColor')
  state.treePlay = !state.treePlay

  if (!state.treePlay) {
    sounds.treeSound.pause()
    return
  }

  sounds.treeSound.play()

}

export function rain() {
  event.target.classList.toggle('primaryColor')
  state.rainPlay = !state.rainPlay

  if(!state.rainPlay) {
    sounds.rainSound.pause()
    return
  }

  sounds.rainSound.play()
}

export function coffee() {
  event.target.classList.toggle('primaryColor')
  state.coffePlay = !state.coffePlay

  if(!state.coffePlay) {
    sounds.coffeSound.pause()
    return
  }

  sounds.coffeSound.play()
}

export function fireplace() {
  event.target.classList.toggle('primaryColor')
  state.fireplacePlay = !state.fireplacePlay

  if(!state.fireplacePlay) {
    sounds.firePlaceSound.pause()
    return
  }

  sounds.firePlaceSound.play()
}