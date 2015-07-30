var getProducts = require('./mostSolditem');

var sales = getProducts.findProducts('./files/Nelisa Sales History.csv');
console.log(sales)