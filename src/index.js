
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  if(arguments.length) {
    let result = [];
  for(i= 0; i < matrix.length; i++){
    for(j = 0; j < matrix[i].length; j++){
      if(i % 2 === 0) {
        result.push(matrix[i][j])
      } else {
        result.push(matrix[i][matrix[i].length - 1 - j])
      }
    }
  }
    return result;
  } else {
      return []
  }
  }

