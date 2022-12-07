import React from 'react';
import{useState} from 'react';
import icon from '../icon.svg';




function AllInputs(props) {

const [message, setMessage]=useState(" ")
const [message2, setMessage2] = useState("")
const [valid, setValid] = useState("")

const cardNumberValidation=()=>{
  const regex = new RegExp ("^9[0-9]{12}(?:[0-9]{3})?$"); 

  if (regex.test(props.cardNumber)){
        setMessage("")
        setValid (true)
       }else {
      setMessage("Wrong format, numbers only")
      
   }
  
   const regexDate = new RegExp ("^[0-9]{4}?$");
   if (regexDate.test(props.date)){
    setMessage2("")
    setValid (true)

   }else{
    setMessage2("Can’t be blank")
   
   }

   const regexCvc = new RegExp ("^[0-9]{3}?$");
   if (regexCvc.test(props.cvc)){
       setMessage2("")
       setValid (true)

   }else{
       setMessage2("Can’t be blank")
      
       
   }

}






    return(

      
      
    <div>
      { !valid  ?
       <div className="inputs">
          <h6>Cardholder Name</h6>
          <input className="nameInp" type="text" maxLength="20" onChange={props.handleInput1} placeholder='JANE APPLESEED'/>
          
          <h6>Card Number</h6>
          <input className="inp" type="change" maxLength="16"   onChange={props.handleInput2} placeholder='0000 0000 0000 0000'/>
          <p className='red'>{message}</p>
          
          <div className='datecvcbox'>
            <div className='datebox'>
              <h6>Exp. Date (MM/YY)</h6>
              <input className="dateinp" type="number" maxLength='5'  onChange={props.handleInput3} placeholder="00/00"/>
              <p>{message2}</p>
            </div>
            <div className='cvcbox'>
              <h6>CVC</h6>
              <input className="cvcinp" type="number" maxLength='3' onChange={props.handleInput4} placeholder="000"/>
              <p>{message2}</p>
            </div>
          </div>
          <button className='btn' onClick={cardNumberValidation}>Confirm</button>
        </div>
          :


      
        <div className='finish'>
       <img className="icon1" src={icon}/> 
          <h3>THANK YOU!</h3>
          <span>We’ve added your card details</span>
          <button className="continue">Continue</button>

        </div>
       
      }
    </div>       
    );
}

export default AllInputs;