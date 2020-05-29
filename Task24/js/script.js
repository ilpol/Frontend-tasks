const circle = document.getElementsByClassName('circle')[0];

//Перетаскиваем ползунок на начало
const pump = document.getElementById('pump');
pump.value = pump.min;

function blow(val) {
  circle.style.height =  val + 'px';
  circle.style.width = val + 'px';    
}
