class TicTacToe {
  constructor(size) {
    this.size = size
    this.board = this.createBoard(size)
  }

  // Initialize the game board
  createBoard(size) {
    let board = []
    for (let i = 0; i < size; i++) {
      board.push(Array(size).fill(null))
    }
    return board
  }

  // Display the current state of the board
  displayBoard() {
    for (let i = 0; i < this.size; i++) {
      let row = this.board[i].map((cell) => cell || " ").join("|")
      console.log(row)
      if (i < this.size - 1) {
        console.log("-".repeat(this.size * 2 - 1))
      }
    }
  }

  // Place a token ('X' or 'O') on the board
  placeToken(row, col, token) {
    if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
      if (this.board[row][col] == null) {
        this.board[row][col] = token
        return true
      } else {
        console.log("Cell is already occupied.")
        return false
      }
    } else {
      console.log("Invalid position.")
      return false
    }
  }

  // Check for a win in rows
  checkRows() {
    for (let i = 0; i < this.size; i++) {
      let firstCell = this.board[i][0]
      if (firstCell != null) {
        let win = true
        for (let j = 1; j < this.size; j++) {
          if (this.board[i][j] != firstCell) {
            win = false
            break
          }
        }
        if (win) return firstCell
      }
    }
    return null
  }

  // Check for a win in columns
  checkColumns() {
    for (let j = 0; j < this.size; j++) {
      let firstCell = this.board[0][j]
      if (firstCell != null) {
        let win = true
        for (let i = 1; i < this.size; i++) {
          if (this.board[i][j] != firstCell) {
            win = false
            break
          }
        }
        if (win) return firstCell
      }
    }
    return null
  }

  // Check for a win in the primary diagonal
  checkDiagonal1() {
    let firstCell = this.board[0][0]
    if (firstCell != null) {
      let win = true
      for (let i = 1; i < this.size; i++) {
        if (this.board[i][i] != firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
    return null
  }

  // Check for a win in the secondary diagonal
  checkDiagonal2() {
    let firstCell = this.board[0][this.size - 1]
    if (firstCell != null) {
      let win = true
      for (let i = 1; i < this.size; i++) {
        if (this.board[i][this.size - i - 1] != firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
    return null
  }

  // Check if any player has won
  checkWin() {
    return (
      this.checkRows() ||
      this.checkColumns() ||
      this.checkDiagonal1() ||
      this.checkDiagonal2()
    )
  }

  // Check if the board is full
  isBoardFull() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] == null) {
          return false
        }
      }
    }
    return true
  }

  // Get the current state of the game
  getGameState() {
    let winner = this.checkWin()
    if (winner != null) {
      return `Player ${winner} wins!`
    } else if (this.isBoardFull()) {
      return "It's a draw!"
    } else {
      return "Game is ongoing."
    }
  }
}

// Example usage:

// Initialize a TicTacToe game with a board size of 3 (you can change this to any positive integer)
let game = new TicTacToe(3)

// Players take turns to place tokens on the board
game.placeToken(0, 0, "X")
game.placeToken(0, 1, "O")
game.placeToken(0, 2, "X")
game.placeToken(1, 1, "O")
game.placeToken(1, 0, "X")
game.placeToken(2, 2, "O")

// Display the current board
game.displayBoard()

// Get and display the state of the game
console.log(game.getGameState())
