import './style.css'
import { setupCounter } from './counter.js'
import { setupChain } from './chain.js'
// import data from './data.json'


// console.log(data,'data')

document.querySelector('#app').innerHTML = `
  <button id="counter" type="button"></button>
  <div id="chain"></div>
`

setupCounter(document.querySelector('#counter'))

function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  date = dd+'/'+mm+'/'+yyyy;
  return date
}

function Last7Days () {
  var result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d) )
  }

  return result
}

setupChain(document.querySelector('#chain'),Last7Days())

