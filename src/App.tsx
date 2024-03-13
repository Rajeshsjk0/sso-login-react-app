
import './App.css';

function App() {

  function handleOnClick() {
    alert('Button Clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to React with TypeScript
        </p>
        <button onClick={handleOnClick}>SSO Login</button>
      </header>
    </div>
  );
}

export default App;
