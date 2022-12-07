import React from 'react';
import styles from './dateInput.module.css'


import InputMask from 'react-input-mask';


function DateInput(props){
    return(
        <div>
            
            <InputMask 
            className={styles.dateNumber}
            mask='99/99'
            value={props.value}
            onChange={props.onChange}
            placeholder="00/00"
            />
          
        </div>

     
    
       
    )

}

export default DateInput;