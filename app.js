import {CreateCircularPercent} from './pluginPercentCircle.js';

let ccSecond = new CreateCircularPercent('seconds')
let ccMinute = new CreateCircularPercent('minutes')
let ccHour = new CreateCircularPercent('hours')




function main(){
  let dt = new Date()
  
  let sec = dt.getSeconds()
  let mili = Date.now()%60000  
  
  let fraction = mili/60000
  let percent = (fraction*100).toFixed(1)
  
  ccSecond.setTitle('seconds')
  
  ccSecond.updateInfo(sec,percent)
  ccSecond.setCount(mili,60000)
  
  
  
  let min = dt.getMinutes()
  let miliMCount = 60000*60
  let miliM = Date.now()%miliMCount
  
  let percentMinute = (miliM/miliMCount*100).toFixed(1)
  ccMinute.setTitle('minutes')
  ccMinute.updateInfo(min,percentMinute)
  ccMinute.setCount(miliM,miliMCount)
  
  
  let hours = dt.getHours()
  let miliHCount = 60000*60*60
  let miliH = Date.now()%miliHCount
  
  let percentHour = (miliH/miliHCount*100).toFixed(1)
  ccHour.setTitle("hours")
  ccHour.updateInfo(hours,percentHour)
  ccHour.setCount(miliH,miliHCount)
}

setInterval(main,100)