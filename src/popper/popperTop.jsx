import React, { useState } from 'react';

import styles from './css/slideInDown';


const PopperTop = (props) => {
    const[show,setShow]=useState(true)

    const display = (props.show&&show === true) ? { ...styles.slideInWrapper, ...styles.show } : { ...styles.slideInWrapper };

    return (
        <div style={display} >
          <span style={styles.crClose} onClick={()=>setShow(false)}>&times;</span>
          <div dangerouslySetInnerHTML={{ __html:props.html }} ></div>
        </div>
    )

}

export default PopperTop
        

