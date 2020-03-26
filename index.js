//const (nombre de la cuncion) = require ('./(carpeta)/funcion') => Sirve para jalar la funcion de otro archivo 
const areaTriang = require('./functions/triangle-area')
const areaCircle = require('./functions/circle-area')


console.log('Test');
console.log('El área de un triangulo es: ', areaTriang(5, 2));

console.log('El área de un circulo es:', areaCircle(4));
