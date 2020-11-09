import React from 'react';
import './App.scss';
import {Card} from "./components/Card/Card";
import {CardForm} from "./components/CardForm/CardForm";

function App() {
  return (
    <div className="App">
      <Card/>
      <CardForm/>
    </div>
  );
}

export default App;
