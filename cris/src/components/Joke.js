import React from "react";


function Joke(prosp){
    return(
    <div className="answer">
        <h1> What is Your Name? {prosp.answer.name}</h1>
        <h1> What is Your Last Name? {prosp.answer.lastName}</h1>
        </div>
    )
}
export default Joke;