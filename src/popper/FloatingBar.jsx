import React, { useState } from 'react';

import styles from './css/floatingBar';




const FloatingBar = (props) => {
    const[show,setShow]=useState(true)

    const display = (props.show[props.event]&&show === true) ? { ...styles.slideInWrapper, ...styles.show } : { ...styles.slideInWrapper };

    return (
        <div style={display}>
          <span style={styles.crClose} onClick={()=>setShow(false)} >&times;</span>
          <div dangerouslySetInnerHTML={{ __html:props.html }} ></div>
        </div>
    )
  
}

export default FloatingBar;

 