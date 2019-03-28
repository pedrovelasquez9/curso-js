//tipos de números
var x1 = 34.00, x2 = 34, x3 = 123e5, x4 = 123e-5;
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);

//toString
console.log(x1.toString());

//parseInt o parseFloat
var x = "35";
console.log(parseInt(x));
console.log(parseFloat(x));

//toExponential
var x = 9.656;
console.log(x.toExponential(2));

//toFixed
console.log(x.toFixed());

//toPrecision
console.log(x.toPrecision(2));

//valueOf
console.log((100+23).valueOf());