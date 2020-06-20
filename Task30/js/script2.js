window.addEventListener("message", function(event) {  
	let num = parseInt(event.data);
	let divNum = document.createElement("DIV");  
	divNum.innerHTML = num;                
	document.body.appendChild(divNum);
	num +=1;
	parent.postMessage(num, "*");
	complete = 1;
});