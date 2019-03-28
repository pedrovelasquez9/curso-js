//Variables numéricas
var x = 5;
var y = 6;

var z = x + y;
console.log(z);

z = x-y;
console.log(z);

z = x*y;
console.log(z);

z = x/y;
console.log(z);

//variables de texto
var saludo = "hola mundo";
console.log(saludo);

//variable vacía
var mi_variable;
console.log(mi_variable);

//declarar más de una variable
var nombre = "Pedro", apellido="Plasencia", profesion = "dev";
console.log(nombre + " " + apellido + " " + profesion);
//redeclaración
var carName = "BMW"
var carName;
console.log(carName);
carName = "Mazda";
console.log(carName);

//Operaciones de múltiples valores
var x = 16 + 4 + "String";
console.log(x);

//Strings
var car = "BMW";
var car2 = 'BMW';
console.log(car + " " + car2);

//comillas dentro de comillas
var cita = 'Alguien dijo "algo"';
console.log(cita);

//Longitud de una cadena
var txt = "asdjaskdljaslkdjalksjdaklsjdalksdjas"
console.log(txt.length);

//indexOf
var txt = "Hola, mi nombre es Pedro Plasencia y soy desarrollador web full stack";
console.log(txt.indexOf('hello'));

//search
console.log(txt.search("Pedro"));

//slice
var frutas = "manzana, banana, kiwi";
var res = frutas.slice(0,7);
console.log(frutas);
console.log(res);

//substring
res = frutas.substring(0,7)
console.log(res);

//replace
var invitacion = "Por favor visita Microsoft";
var res = invitacion.replace('Microsoft', "Linux");
console.log(res);

//transformación
console.log(invitacion.toLowerCase());
console.log(invitacion.toUpperCase());

//concatenado
var txt1="hola", txt2="mundo", txt3 = txt1.concat(txt2);
console.log(txt3);

//trim
txt = "     hola mundo     ";
console.log(txt.trim());

//CharAt
var str = "Hello World";
console.log(str.charAt(0));
console.log(str.charCodeAt(0));

//split
console.log(invitacion.split(" "));