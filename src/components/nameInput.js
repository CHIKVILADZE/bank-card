import React from 'react';
import styles from './nameInput.module.css';
import InputMask from 'react-input-mask';


function NameInput(props){
    return(
        <div >
       
        <InputMask 
        className={styles.nameInput}
        value={props.value}
        onChange={props.onChange}
        placeholder="JANE APPLESEED"
        />
      
   
       </div>
    
       
        
    )

}

export default NameInput;