import React from 'react';
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";

import './App.css';

function App() {
  return (
    <div className="App">
      <MyInfo/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
