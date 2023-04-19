import './App.css';

function App() {

  const clickHandler = () => {

  };

  return (
    <>
      <header className="App">
        <h1>RADIO FACTORIA</h1>
      </header>
      <form>
        <input placeholder='Escribe el nombre de la radio'></input>
        <button onClick={clickHandler}>buscar</button>
      </form>
    </>
    
  );
}

export default App;
