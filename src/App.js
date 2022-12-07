import React from 'react';
import './App.css';
import {useState} from 'react';
import CardInputs from './components/CardInputs.js';

import AllInputs from './components/Allinputs.js';




  function App() {

    const [cardNumber, setCardNumber]= useState('')
    const [name,setName]=useState('')
    const [date,setDate]=useState('')
    const [cvc,setCvc]=useState('')

    function handleInput2(event){
     return setCardNumber(event.target.value)
  }
  
  
  function handleInput1(event){

    return setName(event.target.value)
}




function handleInput4(event){
  return setCvc(event.target.value)
}

function handleInput3(event){
  console.log(event.target.value)
  return setDate(event.target.value)
}




  return (
   <>
     
     <CardInputs  cardNumber={cardNumber} setCardNumber={setCardNumber} handleInput2={handleInput2}
                  name={name} setName={setName} handleInput1={handleInput1}
                  date={date} setDate={setDate} 
                  cvc={cvc} setCvc={setCvc} handleInput4={handleInput4}
     />

     <AllInputs cardNumber={cardNumber} setCardNumber={setCardNumber} handleInput2={handleInput2}
                name={name} setName={setName} handleInput1={handleInput1}
                date={date} setDate={setDate} handleInput3={handleInput3}
                cvc={cvc} setCvc={setCvc} handleInput4={handleInput4}
                />
    
   </>
  
  );
}

export default App;
