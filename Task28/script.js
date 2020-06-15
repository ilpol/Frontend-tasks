
function printMessage(text) {
	errorMessage = document.createElement("DIV");
	errorMessage.innerText = text;
	document.getElementById("wrap").appendChild(errorMessage);
}

async function toJson (res){
	let jsonText= await res.json();
	return jsonText;
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
			let successful = false;
			
			Promise.allSettled([fetch(methodGetInfo),fetch(methodGetDescription)]).then(results => {	    
			toJsonList = []
			results.forEach((result, num) => {
				if (result.status == "fulfilled") {		    		
					toJsonList.push(toJson(result['value']))           			    	      	
				}		       
			})
            
			Promise.allSettled(toJsonList).then(resultsJson => {
				resultsJson.forEach((result,num) => {              	
					if (result.status == "fulfilled") {
						if (result['value']["isSucceeded"]) {
							printMessage(result['value']["text"]);
							successful = true;
						}
					}
					else
						console.log("Can not parse json");
				})
			}).then(() => {
           		if (!successful)
           			console.log("Server error");
            })
	        })	  
		} 
	}
}

