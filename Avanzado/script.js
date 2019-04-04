//try catch

function tryCatch(){
	var mensaje, x;
	mensaje = document.getElementById('mensaje');
	mensaje.innerHTML = "";
	x = document.getElementById('demo').value;
	try {
		if(x == "") throw "El campo está vacío";
		if(isNaN(x)) throw "El valor no es numérico";
		if(x>10) throw "El valor supera el límite";
		if(x<5) throw "El valor está muy por debajo del límite";
	} catch (error) {
		mensaje.innerHTML = "Error: "+error;
	} finally {
		document.getElementById('demo').value = "";
	}
}

//Let
var global = 3;

function local(){
	let local = 4;
	let result = global + local;
	let array = [global, local, result];
	for(let i=0; i<array.length;i++){
		console.log(array[i]);
	}
}
console.log(local());

//const
const PI = 3.14;
var x = 10;
{
	const x = 12;
	console.log(x);
}
console.log(x);

//exponenciales
var x = 5;
var z = x ** 2;
z = Math.pow(x, 2);
console.log(z);

//parámetros por defecto
function mifuncion(param1, param2=10){
	return param1 + param2;
}

console.log(mifuncion(5));

//array.find
var numeros = [4,5,4,8,20,90,40];
var primero = numeros.find(function(value, index, array){
	return value > 10;
});
console.log(primero);

//array.findIndex
var indice = numeros.findIndex(function(value, index, array){
	return value > 10;
})
console.log(indice);

//Propiedades de number
var x = Number.EPSILON;
console.log(x);

//funciones de flecha o arrow functions
var x = function(x,y){
	return x*y;
}

var x = (x,y) => x*y;

//cookies
var date = new Date();
document.cookie = "username=Pedro";
//var cookie = document.cookie;
//console.log(cookie);

window.onload = function(){
	//enlaces
	var str = "Google";
	var enlace = str.link("https://google.es");
	var mensaje = document.getElementById('mensaje');
	mensaje.innerHTML = enlace;
	console.log(enlace);
}