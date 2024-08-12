module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  
  return matrix.map((row, i) => {
      if (i % 2 == 0) {
          return row;
      } 
      else {
          return row.sort().reverse(); 
      }
  }).flat();
}
