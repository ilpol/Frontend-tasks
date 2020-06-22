function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (!c.indexOf(name)) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const form = document.querySelector('.form');

function inputCookies() {	
  // разбиваем строку по '; ' на пары ключ/значение
  const cookiePairs = document.cookie.split('; ');
  cookiePairs.forEach(cookiePair => {
    // разбиваем по знаку '=' на ключ/значение
    const [key, value] = cookiePair.split('=');
    // пробуем найти элемент (т.к могут быть сторонние куки)
    const element = document.getElementById(key);
    // если элемент найден то восстанавалием значение в форму
    if (element) {
      if (key.includes('course') && +value){
        element.checked = "true";
      }
      else {
        element.value = value;
      }
    }
  });	
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const objectData = Object.fromEntries(formData.entries());
  var inputElements = document.getElementsByClassName('radio-btn');

  for (let prop in objectData) {
    setCookie(prop, objectData[prop], 365);
  } 
   Array.from(inputElements).forEach(elem => {
    if (!elem.checked) {
      setCookie(elem.id, "0", 365);         
    }
    else {
      setCookie(elem.id, "1", 365);
    }
  });
});

inputCookies();