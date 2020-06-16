function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const form = document.querySelector('.form');

function inputCookies() {	
	cookie =  document.cookie
	cookie = cookie.split('; ');
	var cookieObject = {};

	for (var i = 0; i < cookie.length; i++) {
	    var cur = cookie[i].split('=');
	    cookieObject[cur[0]] = cur[1];
	}
	
	for (let prop in cookieObject){
      let saved = getCookie(prop);
	  if (saved) {
	    if (prop.includes("course") && saved!="false"){	    	
	    	document.getElementById(prop).checked = "true";
	    }
	    else
	     document.getElementById(prop).value=saved;
	  } 		
	}
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objectData = Object.fromEntries(formData.entries());
    var inputElements = document.getElementsByClassName('radioBtn');
    
    for (let prop in objectData){
    	setCookie(prop, objectData[prop], 365);
    } 
      
    for(var i=0; inputElements[i]; ++i){    	
	    if(!inputElements[i].checked){
	      	setCookie(inputElements[i].id, "false", 365);	      	
	    }
	    else{
	    	setCookie(inputElements[i].id, "true", 365);
	    }
	}
});

inputCookies();