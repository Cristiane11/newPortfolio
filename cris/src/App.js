import React from 'react';
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import TodoItem from "./components/TodoItem";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <MyInfo/>
      <Footer/>
    </div>
  );
}

export default App;
