// var $btn = $('button');
// $btn.on("click", function(event) {

var btn = document.querySelector('#button');
var parent = document.querySelector('#parent');
var form = document.querySelector('form');

btn.addEventListener("click", function(event) {
var userInput = document.querySelector('#userInput').value;
	var newPara = document.createElement('p');
	newPara.className = 'user';
	newPara.textContent = userInput;
	//console.log(userInput);
	parent.appendChild(newPara);
	event.preventDefault();
	form.reset();

if (userInput != '') {
	var newP = document.createElement('p');
	newP.className = 'computer';
	newP.textContent = 'nice to talk';
	parent.appendChild(newP);
}

});

	// event.preventDefault(); /*it will stop bubbling event and stop server to make get request */
	// console.log("search string with ajax");

	// var settings = {
	// 	url: 'http://omdbapi.com/',
	// 	data: {
	// 		t: questions, 
	// 		apiKey: '2f6435d9'
	// 	}
	// }

	// $.ajax(settings).done(function(response) { 
	// 	console.log(response);
	// 	var newParagraph = document.createElement('p');
	// 	newParagraph.textContent = response.Title
	// 	document.querySelector('div').appendChild(newParagraph);
	// });

	// console.log('after ajax function call');
// });

