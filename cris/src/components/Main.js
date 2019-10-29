import React from "react";
import ReactDom from "react-dom";


function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    
    return (
      <h1>Good {timeOfDay}!</h1>
    )
  }
    /*function Main(){
 
    const today = new Date();
    const day = today.getDay();
    const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
    return
        let prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;
        if (hour===0 && prepand===' PM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Noon';
        } 
        else
        { 
        hour=12;
        prepand=' PM';
        } 
        } 
        if (hour===0 && prepand===' AM ')
        { 
            if (minute===0 && second===0)
            { 
            hour=12;
            prepand=' Midnight';
            } 
            else
            { 
            hour=12;
            prepand=' AM';
            } 
            } 
          console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
          
    */
   
    
    export default Main;