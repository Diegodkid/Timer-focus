import './toggle-mode.js'
import * as FocusTimer from './focusTimer/index.js'
import { registerCards } from './Cards/index.js'

FocusTimer.start(25, 0)
registerCards()