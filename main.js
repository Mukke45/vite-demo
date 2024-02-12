import './style.css'
import './minun-style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `Moi täällä ollaan`

setupCounter(document.querySelector('#counter'))
