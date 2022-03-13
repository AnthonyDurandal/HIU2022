import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { useState } from 'react';
import AppContext from './AppContext';
import { Child } from './components/Child';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <AppContext.Provider value={{count: counter, setCount: setCounter}}>
      <Home></Home>
      <Child text={"first layer"}></Child>
    </AppContext.Provider>
  );
}

export default App;
