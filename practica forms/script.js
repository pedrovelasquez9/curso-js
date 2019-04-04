function enviarForm(){
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	var edad = document.getElementById('edad').value;
	var data = [nombre, apellido, telefono, email, edad]
	var objeto = {
		nombre:nombre,
		apellido: apellido,
		tel:telefono,
		email:email,
		edad:edad
	};
	var existentes = window.localStorage.getItem('usuarios');
	if(existentes != null){
		existentes = JSON.parse(existentes);
	}else{
		existentes = [];
	}
	existentes.push(objeto);
	window.localStorage.setItem('usuarios', JSON.stringify(existentes));
	console.log(existentes);
}

function mostrarDatos(){
	var usuarios = window.localStorage.getItem('usuarios');
	usuarios = JSON.parse(usuarios);
	console.log(usuarios);
	var ul = document.createElement('ul');
	document.getElementById('results').appendChild(ul);

	ul.setAttribute('id', 'lista');
	for(var i = 0; i<usuarios.length; i++){
		for(var propiedad in usuarios[i]){
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(usuarios[i][propiedad]))
			li.setAttribute('id', 'item'+i);
			ul.appendChild(li);
		}
	}
}

window.onload = function(){
	mostrarDatos();
	var car = undefined;
	if(car != null){
		console.log("car");
	}
}