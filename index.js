const getTriangleArea = require('./functions/triangle-area');
const getCircleArea = require('./functions/circle-area');
const squareOperations = require('./functions/square-operations');

console.log('Test');

console.log('El area de mi triangulo es: ', getTriangleArea(5, 4));
console.log('El area de mi circulo es: ', getCircleArea(5));

console.log('El area del cuadrado es:', squareOperations.getArea(5.3));

console.log('El perimetro del cuadrado es:', squareOperations.getPerimeter(5.3));
console.log('La diagonal del cuadrado es:', squareOperations.getDiagonal(5.3));