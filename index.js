//const (nombre de la cuncion) = require ('./(carpeta)/funcion') => Sirve para jalar la funcion de otro archivo 
const areaTriang = require('./functions/triangle-area')
const areaCircle = require('./functions/circle-area')
const squareOperations = require('./functions/square-operations');
const Matrix = require('./functions/matrix');



const matrixT = [
    [1, 9, 5],
    [3, 5, 9],
    [8, 5, 5]
];

const myMatrix = Matrix(matrixT)
/*console.log('TESTING SUBMATRIX:', matrixTest.getSubmatrix(matrixT, 0))
console.log('TESTING SUBMATRIX:', matrixTest.getSubmatrix(matrixT, 1))
console.log('TESTING SUBMATRIX:', matrixTest.getSubmatrix(matrixT, 2))*/

console.log(myMatrix.getDeterminant());