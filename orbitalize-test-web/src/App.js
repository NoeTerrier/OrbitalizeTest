import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('Hello world!');

  const handleChangeText = () => {
    setText('Text changed!');
  };

  return (
    <div className="App">
      <header className="App-header">
      <p data-testid='labelTest'>{text}</p>
      <button onClick={handleChangeText} title='Button to test' data-testid='testButton'>CLICK HERE</button>

      <input data-testid='inputField'></input>
      </header>
    </div>
  );
}

export default App;
