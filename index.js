//const (nombre de la cuncion) = require ('./(carpeta)/funcion') => Sirve para jalar la funcion de otro archivo 
const areaTriang = require('./functions/triangle-area')
const areaCircle = require('./functions/circle-area')
const squareOperations = require('./functions/square-operations');


console.log('Test');
console.log('El área de un triangulo es: ', areaTriang(5, 2));
console.log('El área de un circulo es:', areaCircle(4));
console.log('El área del cuadrado es: ', squareOperations.getArea(5));
console.log('El perimetro del cuadrado es: ', squareOperations.getPerimeter(5));
console.log('La diagonal del cuadrado es: ', squareOperations.getDiagonal(5));