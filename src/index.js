module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (matrix[i][j] === 0) {
              for (let random = 1; random <= 9; random++) {
                  if (check(matrix, i, j, random)) {
                      matrix[i][j] = random;
                      if (solveSudoku(matrix)) {
                          return matrix;
                      }
                      matrix[i][j] = 0;
                  }
              }
              return false;
          }
      }
  }
  return true;
}

  function check(matrix, givRow, givCol, random) {
  let sqRow = Math.floor(givRow / 3) * 3;
  let sqCol = Math.floor(givCol / 3) * 3;
  /* check by row */
  for (let col = 0; col < 9; col++) {
      if (col != givCol && matrix[givRow][col] === random) {
          return false;
      }
  }
  /* check by column */
  for (let row = 0; row < 9; row++) {
      if (row != givRow && matrix[row][givCol] === random) {
          return false;
      }
  }
  /* ckeck by square */
  for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
          if (row != givRow && col != givCol && matrix[sqRow + row][sqCol + col] === random) {
              return false;
          }
      }
  }
  return true;
  }

