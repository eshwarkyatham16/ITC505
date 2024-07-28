document.addEventListener("DOMContentLoaded", () => {
  const boardSize = 5;
  const board = [];

  const gameBoard = document.getElementById("game-board");

  function createBoard() {
    for (let row = 0; row < boardSize; row++) {
      board[row] = [];
      for (let col = 0; col < boardSize; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", () => toggleCells(row, col));
        gameBoard.appendChild(cell);
        board[row][col] = cell;
      }
    }
    randomizeBoard();
  }

  function toggleCells(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);
    checkWin();
  }

  function toggleCell(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
      board[row][col].classList.toggle("is-off");
    }
  }

  function randomizeBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
      const row = Math.floor(Math.random() * boardSize);
      const col = Math.floor(Math.random() * boardSize);
      toggleCells(row, col);
    }
  }

  function checkWin() {
    const allOff = board
      .flat()
      .every((cell) => cell.classList.contains("is-off"));
    if (allOff) {
      alert("You win!");
    }
  }

  createBoard();
});
