import React from 'react';
import styles from './cardInput.module.css'
import InputMask from 'react-input-mask';
import cardlogo from '../cardlogo.svg'
import {useState} from 'react';



function CardInput(props){



    function handleInput3(event){
        console.log(event.target.value)
        return props.setDate(event.target.value)
      }
    
    

    
    return(
       <div>
          <div className={styles.cardfront}>  
             <div><img className={styles.logo} src={cardlogo}/></div>
                <InputMask 
                    className={styles.cardNumber}
                    mask='9999 9999 9999 9999'
                    value={props.cardNumber}
                    onChange={props.handleInput2}
                    placeholder="0000 0000 0000 0000"

                
                />
            
                <div className={styles.namedate}>
                    <InputMask
                        className={styles.name}
                        value={props.name}
                        onChange={props.handleInput1}
                        placeholder='JANE APPLESEED'

                  
                    />
                   <div>
                    <InputMask
                        className={styles.date}
                        mask='99/99'
                        value={props.date}
                        onChange={handleInput3}
                        placeholder="mm/yy"
                    />
                   </div>
                </div>


            </div>
            <div className={styles.cardback}>
                <InputMask
                    className={styles.cvc}
                    value={props.cvc}
                    mask='999'
                    onChange={props.handleInput4}
                
                />
            </div>

          </div>  
     
        
    )

}

export default CardInput;