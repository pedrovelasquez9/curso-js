//namespace global
var MIAPP = MIAPP ||{};
MIAPP.event = {};

//Acceder a un método de un objeto
console.log(Math.random());

//Crear "clase" Persona
function Persona(primerNombre=""){
	this.primerNombre = primerNombre;
	console.log("la persona se llama: "+this.primerNombre);
}

//Crear función caminar en Persona
Persona.prototype.caminar = function(){
	console.log("estoy caminando");
}

//Crear función "diHola" en persona
Persona.prototype.diHola = function(){
	console.log("Hola, soy: "+ this.primerNombre);
}

//Crear clase estudiante
function Estudiante(primerNombre, asignatura){
	Persona.call(this,primerNombre);
	this.asignatura = asignatura;
}

//Heredar de persona
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

//Redefinir función "dihola" heredada
Estudiante.prototype.diHola = function(){
	console.log("Hola, soy "+this.primerNombre+" y estoy estudiando "+this.asignatura);
}

//Agregar método "diAdios" a estudiante
Estudiante.prototype.diAdios = function(){
	console.log('adios');
}

//Pruebas de uso de estudiante
var estudiante1 = new Estudiante("Carolina", "Física");
estudiante1.diHola();
estudiante1.caminar();
estudiante1.diAdios();

console.log('instancia', estudiante1 instanceof Persona)
console.log('instancia', estudiante1 instanceof Estudiante)

//Pruebas de uso de persona
var persona1 = new Persona("Alicia");
persona1.diHola();
var persona2 = new Persona("Sebastián");
persona2.diHola();
var persona3 = new Persona();
persona3.diHola();

//Abstracción
var foo = function(){}
console.log("Foo es una instancia de una función: "+ (foo instanceof Function));
console.log("Foo.prototype es una instancia de un objeto: "+ (foo.prototype instanceof Object));