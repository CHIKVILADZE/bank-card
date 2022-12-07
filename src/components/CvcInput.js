import React from 'react';
import styles from './cvcInput.module.css';


import InputMask from 'react-input-mask';


function CvcInput(props){
    return(
     <div>   
        <InputMask 
        className={styles.cvcNumber}
        mask='999'
        value={props.value}
        onChange={props.onChange}
        placeholder="000"
        />
      
        </div>
    
       
    )

}

export default CvcInput;