window.onbeforeunload = function() {
  return "Закрыть страницу?";
};

function callFrame() {
  let num = window.prompt();
  let win = window.frames.page2;
  win.postMessage(num, "*");
}

window.addEventListener("message", function(event) {  
	let num = parseInt(event.data); 
	let divNum = document.createElement("DIV");  
	divNum.innerHTML = num; 
	console.log(num);               
	document.body.appendChild(divNum);
});

