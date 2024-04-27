import { cards } from './elements.js'
import * as functionCards from './actions.js'

export function registerCards() {
  cards.addEventListener('click', event => {
    const card = event.target.dataset.card

    if (typeof functionCards[card] !== 'function') {
      return
    }

    functionCards[card]()
  })
}
