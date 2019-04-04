function sendRequest(){
	var ul = document.createElement('ul');
	document.getElementById('response').appendChild(ul);

	ul.setAttribute('id', 'lista');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = JSON.parse(this.response);
			for(let propiedad in response){
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(propiedad+": "+response[propiedad]));
				li.setAttribute('id', propiedad);
				ul.appendChild(li);
			}
			
		}
	}
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
	xhttp.send();
}

function sendPost(){
	var data = JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	});
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 201){
			console.log(this.response);
		}
	}
	xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
	xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	xhttp.send(data);
}

window.onload = function(){
	sendRequest();
}
