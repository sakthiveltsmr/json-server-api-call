import React, { useState } from 'react';

import styles from './css/topBar';



const TopBar = (props) => {

    const[show,setShow]=useState(true)
    
    
    const display = (props.show[props.event]&&show === true) ? { ...styles.slideInWrapper, ...styles.show } : { ...styles.slideInWrapper };
        
        document.documentElement.style.transition = "margin 0.3s ease 0s";
        
        if((props.show&&show === true)){ 
            document.documentElement.style.marginTop = "90px";
        }else{
            document.documentElement.style.marginTop = "0px";
        }

        return (
            <div style={display}>
              <span style={styles.crClose} onClick={()=>setShow(false)}>&times;</span>
              <div dangerouslySetInnerHTML={{ __html:props.html }} ></div>
            </div>
        )
}

export default TopBar