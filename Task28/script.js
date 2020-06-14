
function printMessage(text){
  errorMessage = document.createElement("DIV");
  errorMessage.innerText = text;
  document.getElementById("wrap").appendChild(errorMessage);
}

async function fetchStart() {
    const methodServiceAvailable = '/serviceavailable/';
    let responseServiceAvailable = await fetch(methodServiceAvailable);

	if (responseServiceAvailable.ok) { 
	  let jsonIs = await responseServiceAvailable.json();
	  if (!jsonIs["isSucceeded"])
	  	printMessage('Произошла ошибка');
	  else {
	  	let methodGetInfo = '/getinfo/';
	  	let methodGetDescription = '/getdescription/';

	  	let resGetInfo = await fetch(methodGetInfo);
	  	let jsonGetInfo = await resGetInfo.json();

	  	let resGetDescription = await fetch(methodGetDescription);
	  	let jsonGetDescription = await resGetDescription.json();

	  	if (resGetInfo.ok) {
	  		printMessage(jsonGetInfo["text"]);
	  	}
	  	
	  	if (resGetDescription.ok) {
	  		printMessage(jsonGetDescription["text"]);
	  	}

	  	if ((!resGetInfo.ok && !resGetDescription.ok) || (!jsonGetInfo["isSucceeded"] && !jsonGetDescription["isSucceeded"]))
	  		console.log("Server Error");  	
	  }
	  
	} else {
	  printMessage('Произошла ошибка');
	}
};

