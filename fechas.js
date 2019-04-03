var fecha_actual = new Date();
fecha_actual = new Date(2009,11,11);
fecha_actual = new Date(1554305741606);
fecha_actual = new Date("1968-05-25");
var fecha_formateada = fecha_actual.getDate()+"/"+(fecha_actual.getMonth()+1)+"/"+fecha_actual.getFullYear();
fecha_actual.setFullYear(2019);
console.log(fecha_actual);

//con moment
var fecha = moment();
fecha = fecha.subtract(1, "days");
fecha = fecha.format('DD/MM/YYYY');
console.log(fecha);
