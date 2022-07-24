import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      Hello world. 123456
      <Card textTitle="Test title" textDescription="This is test description" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
