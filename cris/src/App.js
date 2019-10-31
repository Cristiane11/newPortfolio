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
    <div className="contacts">
      <Nav/>
      <Main/>
      <ContactCard
          contact={{imgUrl:"https://www.yorkiepassion.com/wp-content/uploads/2014/06/yorkie-cost-factores-444x593.jpg",name:"Project 1", phone:"704-901-4329", email:"anything@gmail.com"}}
      />
      <ContactCard 
          contact={{ imgUrl:"https://i.pinimg.com/originals/30/fb/7f/30fb7f9b1e4ec30c2b1c7943e07f0000.jpg",name:"Project 2", phone:"201-555-9055", email:"anything@yahoo.com"}}
      
      />
      <ContactCard
          contact={{ imgUrl:"http://www.yorkiebabies.com/images/325_YorkieFemalesc_35_wm.jpg",name:"Project 3", phone:"704-901-9999", email:"anything@aol.com"}}
      />
      <ContactCard
          contact={{ imgUrl:"http://i1.wp.com/www.fcspreciousyorkies.com/wp-content/uploads/2013/11/2meshaupdatedfeb14kennelname.jpg?",name:"Project 4", phone:"704-901-6666", email:"anything@verizon.com"}}
      />

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
