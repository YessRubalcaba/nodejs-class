const operations = {
    /**
     * Get the area of a square
     * @param {number} side 
     */
    getArea: function (side) {
        return Math.pow(side, 2);
    },
    /**
     * Get the Perimeter of a square
     * @param {number} side 
     */
    getPerimeter: function (side) {
        return side * 4
    },
    /**
     * Get the Diagonal of a Diagonal
     * @param {number} side 
     */
    getDiagonal: function (side) {
        return Math.sqrt(Math.pow(side, 2) + Math.pow(side, 2));
    }
};

module.exports = operations;
