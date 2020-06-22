window.onbeforeunload = function() {
	return "Закрыть страницу?";
};

function callFrame() {
	let num = window.prompt();
	if (num === "") {
		alert("Вы ничего не ввели!");	
	}
	else if (Number.isNaN(+num)) {
		alert("Вы должны ввести число");
	}
	else {
		let win = window.frames.page2;
		win.postMessage(num, "*");
	}
}

window.addEventListener("message", function(event) {  
	let divNum = document.createElement("DIV");  
	divNum.innerHTML = event.data;        
	document.body.appendChild(divNum);	
});

