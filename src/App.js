import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    // 親要素が1つである必要があるため、<React.Fragment></React.Fragment>または<></>で囲む
    <React.Fragment>
      <Header />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
