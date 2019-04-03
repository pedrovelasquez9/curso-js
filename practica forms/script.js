function enviarForm(){
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	var edad = document.getElementById('edad').value;
	var data = [nombre, apellido, telefono, email, edad]
	mostrarDatos(data);
}

function mostrarDatos(data){
	var ul = document.createElement('ul');
	document.getElementById('results').appendChild(ul);

	ul.setAttribute('id', 'lista');
	for(var i = 0; i<data.length; i++){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(data[i]))
		li.setAttribute('id', 'item'+i);
		ul.appendChild(li);
	}
}