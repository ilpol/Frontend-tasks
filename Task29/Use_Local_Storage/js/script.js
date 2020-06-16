const form = document.querySelector('.form');

function inputLocalStorage() {	
  var saveData = localStorage.getItem('saveData');
  saveData = JSON.parse(saveData)

	for (let prop in saveData){
      let saved = saveData[prop];
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
    saveData = {}

    for (let prop in objectData){
      saveData[prop] = objectData[prop];    	
    } 
      
    for(var i=0; inputElements[i]; ++i){    	
	    if(!inputElements[i].checked){
	      	saveData[inputElements[i].id] = "false";	      	
	    }
	    else{
	    	saveData[inputElements[i].id] =  "true";
	    }
	}
localStorage.setItem('saveData', JSON.stringify(saveData));
});

inputLocalStorage();