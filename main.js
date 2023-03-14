import './style.css'
import { setupChain } from './chain.js'
import thisweekData from './thisweek.json'

const abc = thisweekData.filter((item) => {return item.tags.includes('Finitive')})

console.log(abc,'abc')

const date = new Date

document.querySelector('#app').innerHTML = `
  <h1>Finitive</h1>
  <div>${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}</div>
  <div id="chain"></div>
`


function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  return `${yyyy}-${mm}-${dd}`
}

function Last7Days (categoryName) {
  var result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push({day:formatDate(d).split('-')[2], active: false })
      thisweekData.filter((item) => {return item.tags.includes(categoryName)}).map((item) => {
        if(formatDate(d).split('-').join('-') === item.at.split('T')[0].split('-').join('-')){
          result[i].active = true
        }
      })
  }

  return result.reverse()
}

setupChain(document.querySelector('#chain'),Last7Days('Finitive'))

