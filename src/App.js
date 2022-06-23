import React from 'react';
import './App.css';

import Home from './components/Home';
import Flow from './components/Flow';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/current-flow":
      component = <Flow />
      break
  }
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
