//Formato JSON
var objeto = {
	nombre: "Pedro",
	apellido: "Plasencia",
	edad: 28,
	correo: "pjpv9011@gmail.com",
	telefono: "642123456",
	profesion: "web developer",
	trabaja: true,
	empresa: {
	  nombre: "Impacto Tecnológico",
	  pais: "España",
	  gremio: "Desarrollo"
	},
	habilidades:[
		"desarrollo",
		"formacion",
		"devops"
	  ]
  };

//acceso a propiedades
console.log(objeto.nombre+" "+objeto.apellido);
console.log(objeto['nombre']+ " "+ objeto['apellido']);
console.log(objeto.empresa.nombre);
console.log(objeto.empresa['nombre']);
console.log(objeto['empresa']['nombre']);
console.log(objeto.habilidades[0]);
console.log(objeto['habilidades'][1]);

//typeOf
console.log(typeof "");
console.log(typeof "string");
console.log(typeof 0);
console.log(typeof (4+8));

var car; //será undefined
objeto = undefined;
console.log(objeto);
objeto = null;
console.log(objeto);

//comprobamos null y undefined
console.log("comprobamos los tipos de undefined y null")
console.log(typeof undefined)
console.log(typeof null) 
console.log(undefined === null);
console.log(undefined == null);

//comprobamos datos primitivos
console.log("comprobando datos primitivos")
console.log(typeof "")
console.log(typeof 1)
console.log(typeof true)
console.log(typeof undefined)

//comprobar datos complejos
console.log("comprobando datos complejos")
console.log(typeof function(){})
console.log(typeof [])
console.log(typeof {})
console.log(typeof null)