import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Matrix } from './components/Matrix/Matrix';

function App() {
  let state = useState(0);
  let counter = state[0];
  let setCounter = state[1];

  return (
    <div className="container">
      <Matrix>

      </Matrix>
      {/* <p>
        {counter}
      </p>

      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        Boton
      </button> */}
    </div>
  );
}

export default App;
