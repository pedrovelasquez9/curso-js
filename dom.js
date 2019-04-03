window.onload = function(){
	document.getElementById('hola').innerHTML = "Hola Mundo";
	var elementos_por_tag = document.getElementsByTagName('h1');
	console.log(elementos_por_tag);
	elementos_por_tag[0].style.setProperty('color', 'blue');
	elementos_por_tag[0].setAttribute('id','nuevoId');
	var nuevoElem = document.getElementById('nuevoId');
	console.log(nuevoElem);

	var ul = document.createElement('ul');
	document.getElementById('contenedor').appendChild(ul);

	ul.setAttribute('id', 'lista');
	for(var i = 0; i<10;i++){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode("item"+i))
		li.setAttribute('id', 'item'+i);
		ul.appendChild(li);
	}

	document.getElementById('btn').addEventListener('click', function(){
		alert('hola JS');
	});
}

function saludar(){
	console.log("hola mundo");
}

