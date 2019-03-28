//funciones
function multiplicacion(num1, num2){
	var resul = num1*num2;
	return resul;
}

var funcion = multiplicacion(3,2);

console.log(funcion);

//función que se invoca a sí misma
(function autoinvocable(){
	console.log('esta función se invoca a sí misma');
})();

//encadenado de funciones
function primera(param1, param2){
	var array = [param1, param2];
	segunda(array);
}

function segunda(param3){
	console.log(param3);
}

primera(1,2);