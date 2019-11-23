import React from 'react';
import { GlobalStyle } from './GlobalStyles/index'

import { Header } from './components/header/Index'
import { CenterPanel } from './components/centerPanel/Index'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <CenterPanel />
    </div>
  );
}

export default App;
