import { useState } from 'react'


const TURN = {
  X: 'x',
  O: 'o',
}

const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
    {children}
    </div>

  )
}

const WINER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
  ]

// Componente principal de la aplicación

export default  function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURN.X)

  const [winner, setWinner] = useState(null) //null significa que no hay ganador y false es empate

  // Función para verificar si hay un ganador
  const checkWinner = (newBoard) => {
    for (const combo of WINER_COMBOS) {
      const [a, b, c] = combo
      // Verifica si los cuadrados a, b y c tienen el mismo valor y no son nulos
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a] // Retorna el ganador (X o O)
      }
    }
    return null // Si no hay ganador, retorna null
  }

  // Función para actualizar el tablero y cambiar el turno
  const updateBoard = (index) => {

    // Si el indice tiene un valor, no se actualiza el tablero

    if (board[index] || winner) return

    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn //acá se le asigna el valor del turno actual al cuadrado seleccionado
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)

    // Verificar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner) // Si hay un ganador, se actualiza el estado del ganador
    }
  }


  
  
  return (
    
      <main className="board">
        <h1>Tic Tac Toe</h1>
        
         <section className="turn">
          <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
          <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
        </section>
        
        <section className="game">
          {
            board.map((_ , index) => {
              return (
                <Square
                  key={index} 
                  index={index} 
                  updateBoard={updateBoard}
                >
                {board[index]}
                </Square>
              )
            })  
          }
        </section>

      </main>
    
  )
}
 

