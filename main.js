import './style.css'
import { setupCounter } from './counter.js'
import data from './data.json'


console.log(data,'data')

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
