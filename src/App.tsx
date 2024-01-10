import './App.css'

function App() {

  return (
    <>
      <h1>Breaking</h1>
      <h1>Bad</h1>
      <div className="middleContainer">
        <div className="inputContainer">
          <label>First Name</label>
          <input className="nameInput" />
        </div>
        <div className="inputContainer">
          <label>Last Name</label>
          <input className="nameInput" />
        </div>
      </div>
      <div className="footerContainer">
        <button >
          Breakify
        </button>
      </div>
    </>
  )
}

export default App
