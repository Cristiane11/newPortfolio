import React from 'react';
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <ContacCard/>
      <ContacCard/>
      <ContacCard/>
      <ContacCard/>

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
