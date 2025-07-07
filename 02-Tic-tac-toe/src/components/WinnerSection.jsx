import Square from './Square'
import {TURN} from '../const/Const'

export default function WinnerSection( {winner, setBoard, setTurn, setWinner} ) {
   if(winner === null) return null // Si no hay ganador, no se muestra nada

   return (

            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false 
                      ? 'Empate' 
                      : `Ganó:`
                  }
                </h2>

                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={() => {
                    setBoard(Array(9).fill(null))
                    setTurn(TURN.X)
                    setWinner(null)
                  }}>
                    Empezar de nuevo
                  </button>
                </footer>
              </div>
            </section>
    )
}