var edad_max = 60;
var edad_min = 18;
var edad = 24;
var nombre = "David Plasencia";
var arreglo = [
	1,2,3,4,5,6,7,8,9,10, "Pedro"
];

var arreglo2 = [
	[1,2,3,4],
	[5,6,7,8],
	["a", "b", "c", "d"]
];
//if
if(edad < edad_min){
	console.log("el usuario no está autorizado");
}else if(edad > edad_max){
	console.log("el usuario no está autorizado");
}else{
	console.log("usuario autorizado");
}

if(edad >= edad_min && edad <= edad_max){
	console.log("usuario autorizado");
}else{
	console.log("usuario no autorizado");
}

if(nombre.indexOf("Pedro") > -1){
	console.log("usuario autorizado");
}else{
	console.log("usuario no autorizado");
}

if(arreglo.length > 5){
	console.log("el array es mayor a 5");
}else{
	console.log("el array no es mayor a 5");
}

if(arreglo.indexOf("Pedro") > -1){
	console.log("el usuario está en el array");
}else{
	console.log("el usuario no está en el array")
}

//for
var texto = "hola desde iteración";
for(var i = 0; i<10;i++){
	texto2 = texto+" "+i;
	console.log(texto2);
}

for(var i = 0; i<arreglo.length; i++){
	console.log("elemento del array en la posición "+i+": "+arreglo[i]);
}

for(var i = 0; i<arreglo2.length; i++){
	console.log(arreglo2[i]);
	for(var x = 0; x < arreglo2[i].length; x++){
		console.log(arreglo2[i][x]);
	}
}

//for in
var mi_objeto = {nombre:"Pedro", apellido:"Plasencia", edad:28, trabaja:true};
for (var x in mi_objeto) {
	console.log('nombre de la propiedad: '+x);
	console.log("valor de la propiedad: "+ mi_objeto[x]);
}

//while
var i = 0;
while(i<10){
	console.log("iterando la "+i+" vez dentro del while");
	i++;
}

//do while
do {
	console.log("iterando la "+i+" vez dentro del do while");
	i++;
}while(i<10);

//break
for(var i = 0; i < 10; i++){
	if(i===3){
		break;
	}
	console.log("vamos en la iteración "+i+" antes del break");
}

//continue
for(var i = 0; i<10;i++){
	if(i===3){
		continue;
	}
	console.log("iterando en la posición "+i+" del continue");
}

//switch
var day;
switch(new Date().getDay()){
	case 0:
		day = "Domingo"
		break;
	case 1:
		day = "lunes"
		break;
	case 2:
		day = "Martes"
		break;
	case 3:
		day = "miércoles"
		break;
	case 4:
		day = "jueves"
		break;
	case 5:
		day = "viernes"
		break;
	case 6:
		day = "sábado"
		break;
}
console.log("hoy es "+day);