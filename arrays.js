var arreglo = [1,2,3,5,"hola", "mundo"];
var arreglo_de_objetos = [
	{nombre:"pedro"}
];

var arreglo_de_arreglos = [
	[1,2,3],
	[4,5,6]
];

console.log(arreglo);
console.log(arreglo_de_objetos);
console.log(arreglo_de_arreglos);

//tostring
console.log(arreglo.toString());

//pop
console.log(arreglo.pop());

//push
console.log(arreglo.push("otro elemento"));

//shift
console.log(arreglo.shift());

//unshift
console.log(arreglo.unshift("cualquier cosa"))
console.log(arreglo);

//delete
delete arreglo[0];
console.log(arreglo);

//slice
arreglo.splice(0,0,"primer elemento");
console.log(arreglo);

//concat
var arreglo_mixto = arreglo.concat(arreglo_de_objetos);
console.log(arreglo_mixto);

//slice
arreglo_mixto = arreglo_mixto.slice(0,4);
console.log(arreglo_mixto);

//arreglos con propiedades
var arreglo_de_propiedades = [];
arreglo_de_propiedades['nombre'] = "Pedro";
arreglo_de_propiedades['apellido'] = "Plasencia";
console.log('arreglo de propiedades ', arreglo_de_propiedades);

//arreglo de usuarios
var users = ["Ana", "Zoila", "Beatriz", "Pedro", "Luis", "María", "Enrique", "Diana", "Reinaldo", "José"];

users.sort();
console.log("usuarios ordenados de forma alfabética: "+ users);
users.reverse();
console.log("usuarios tras aplicar reverse: "+users);

var numeros = [5,8,7,9,1,2,4,3,6,55];
numeros.sort();
console.log("arreglo numérico: ", numeros);

//foreach
var numeros = [5,8,7,9,1,2,4,3,6,55];
numeros.forEach(procesar);

function procesar(value, index, array){
	console.log("valor ", value);
	console.log("Indice ", index);
	console.log("arreglo ", array);
}

//map
var numeros_simples = [1,2,3,4,5,6,7,8,9];
var numeros_dobles = numeros_simples.map(duplicar);

function duplicar(value, index, array){
	return value * 2;
}

console.log("numeros simples: ", numeros_simples);
console.log("numeros dobles: ", numeros_dobles);

//filter
var edades = [20,15,16,80,56,24,13,19];
var mayores_18 = edades.filter(sacarMenores);

function sacarMenores(value, index, array){
	return value > 18;
}

console.log("edades iniciales: ", edades);
console.log("mayores de edad: ", mayores_18);

//reduce
var numeros = [25,14,2,3,65,4,8,9];
var reducidos = numeros.reduce(sumatoria);

function sumatoria(total, value, index, array){
	return total+value; 
}

console.log(reducidos);

//find
var numeros = [25,14,2,3,65,4,8,9];
var primero = numeros.find(function mayor18(value, index, array){
	return value < 18;
});

console.log("a encontrar: ", numeros);
console.log("encontrado: ", primero);

