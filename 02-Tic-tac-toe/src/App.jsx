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

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURN.X)

  const [winner, setWinner] = useState(null) //null significa que no hay ganador y false es empate

  const updateBoard = (index) => {

    // Si el indice tiene un valor, no se actualiza el tablero

    if (board[index]) return

    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn //acá se le asigna el valor del turno actual al cuadrado seleccionado
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
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
 
export default App
