
/*jshint esversion: 8 */

module.exports = function towelSort (matrix) {
  let result  = [];
  let n = 0;
  
  if (!matrix  || matrix.length === undefined) {result  = [];} else {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnInd = i %2 === 0 ? j : (matrix[i].length - j - 1);
      //console.log(result, matrix[i][columnInd]);
      
      result[n]= matrix[i][columnInd];
      console.log(result, matrix[i][columnInd]);
      n++;
    } 
  }}
 return result;
};

  