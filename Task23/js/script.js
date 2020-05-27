var dragged;

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
    event.target.src = "img/trashFull.png";
    const title1 = document.querySelector('.title1');
    title1.innerHTML = "<h1>Вам назначена премия!</h1>";
  }
}, false);

document.addEventListener('keydown', function(event) {

  const pig = document.querySelector('.pig');
  const flag = document.querySelector('.flag');
  const president = document.querySelector('.presPic');
  const flagCoords = flag.getBoundingClientRect();
  const pigCoords = pig.getBoundingClientRect();
  
  if (event.code === 'ArrowLeft') {
    alert("Только вперед!")
  } else if (event.code === 'ArrowRight') {
    pig.style.left = pig.offsetLeft + 10 + 'px';
    if (pigCoords.right>flagCoords.left + 180) {
      pig.style.display = "none";
      flag.style.display = "none";
      president.style.display = "block"
      const title2 = document.querySelector('.title2');
      title2.innerHTML = "<h1>Вы смогли выехать в период самоизоляции! Супер!</h1>"
    }
  } 
});

document.querySelector('.demo3').addEventListener('mouseover', handleMouseOver);
let circle1 = circle2 = circle3 = circle4 = circle5 = false;
function handleMouseOver(event) {
  if (event.target.classList.contains('circle1')) {
    circle1 = true;
  }
  if (event.target.classList.contains('circle2')) {
    circle2 = true;
  }
  if (event.target.classList.contains('circle3')) {
    circle3 = true;
  }
  if (event.target.classList.contains('circle4')) {
    circle4 = true;
  }
  if (event.target.classList.contains('circle5')) {
    circle5 = true;
  }
  
  if (circle1===true && circle2===true && circle3===true && circle4===true && circle5===true) {
    const title3 = document.querySelector('.title3');
    title3.innerHTML = "<h1>Вы восхитительны! Можете делать даже бесполезные вещи!</h1>";
  }
};

document.querySelector('.redButton').addEventListener('click', () => {
  const title4 = document.querySelector('.title4');
  title4.innerHTML = "<h1>Совершенно верно! Теперь проверьте свой счет.</h1>";  
  }
);

