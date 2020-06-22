window.addEventListener("message", function(event) {  
	let num = +event.data;
	let divNum = document.createElement("DIV");  
	divNum.innerHTML = num;                
	document.body.appendChild(divNum);
	num++;
	parent.postMessage(num, "*");
});