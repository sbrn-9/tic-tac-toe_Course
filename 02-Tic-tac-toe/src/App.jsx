const TURN = {
  X: 'x',
  O: 'o',
}

const board = Array(9).fill(null)

function App() {

  return (
    <>
      <h1>Ta-te-ti</h1>

      <main className="board">

        <section className="game">
          {
            board.map((_ , index) => {
              return (
                <button
                  key={index}
                  className="square"
                  onClick={() => {
                    console.log(`Clicked square ${index}`)
                  }}
                >
                  { /* Render the current player's symbol here */ }
                </button>
              )
            })  
          }
        </section>

      </main>
    </>
  )
}
 
export default App
