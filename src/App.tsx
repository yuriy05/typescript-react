import {useState} from 'react';
import './App.css';

function App() {

  const [increment, setIncrement] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <button>Set increment</button>
      </header>
    </div>
  );
}

export default App;
