window.addEventListener("message", function(event) {  
	let num = parseInt(event.data);
	console.log(num);
	num +=1;
	parent.postMessage(num, "*");
	complete = 1;
});