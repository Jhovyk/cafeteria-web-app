import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
