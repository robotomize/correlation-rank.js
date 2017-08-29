const correlation = require('./dist/index');

/**
 * Correlation rank
 */
console.log(correlation.rank([1,2,3,4,5], [-5,25,10,20,100]));

/**
 * Determination rank
 */
console.log(correlation.determination([1,2,3,4,5], [-5,25,10,20,100]));