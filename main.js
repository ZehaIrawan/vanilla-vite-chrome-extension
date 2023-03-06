import './style.css'
import { setupChain } from './chain.js'
// import data from './data.json'


// console.log(data,'data')
const date = new Date

document.querySelector('#app').innerHTML = `
  <h1>Jobmate</h1>
  <div>${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}</div>
  <div id="chain"></div>
`


function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  // date = dd+'/'+mm+'/'+yyyy;
  date = dd;
  return date
}

function Last7Days () {
  var result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d) )
  }

  return result.reverse()
}

setupChain(document.querySelector('#chain'),Last7Days())

