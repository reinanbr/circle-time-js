

const FULL_DASH_ARRAY = 339.292;
const HOURS_LIMIT = 12;
const MINUTES_SECONDS_LIMIT = 60;
const DAYS_LIMIT = 7;
const WEEKS_IN_MONTH_LIMIT = 5; // Assuming 5 weeks in a month max
const WEEKS_IN_YEAR_LIMIT = 52;
const DAYS_IN_MONTH_LIMIT = 31;
const DAYS_IN_YEAR_LIMIT = 365;
const MONTHS_IN_YEAR_LIMIT = 12;



export class CreateCircularPercent {

  constructor(containerId) {
    // Create the clock HTML structure
    this.containerId = containerId
    const divPainel = `<div class="clock-item">
<svg class="progress-ring" width="120" height="120">
<circle class="progress-ring__circle ${containerId}-circle" />
</svg>
<div class="clock__text" id="${containerId}-text">00</div>`
    let container = document.getElementById(containerId);
    container.innerHTML = divPainel
    this.container = container
    this.title = ''
  }

  setCircleDasharray(circle, fraction) {
    const circleDasharray = `${(fraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
    circle.style.strokeDasharray = circleDasharray;
  }
  setTitle(title){
  this.title = title
}
  updateInfo(i, percent){ 
    //this.container = document.getElementById(this.containerId);
    this.dayMonthCircle =
    this.container.querySelector(`.${this.containerId}-circle`);
 //   this.container.querySelector()
    this.monthYearDisplay = this.container.querySelector(`#${this.containerId}-text`);

    this.dayMonthCircle.style.strokeDasharray = FULL_DASH_ARRAY;
    this.monthYearDisplay.innerHTML = '<br>'+ String(i).padStart(2,
      '0')+`<br><small style='margin:0'>${this.title}</small > `+` <hr
      style='color:gray;margin:0'><small
      style='margin:0'><small>${percent}%</small></small>`;
  }
  setCount(i,max){
    this.setCircleDasharray(this.dayMonthCircle,
      i/max);
  }
}

