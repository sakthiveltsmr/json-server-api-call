import React, { useState } from 'react';

import styles from './css/modal';

// import useStore from '../store';


const Modal = (props) => {
    const[show,setShow]=useState(true)
    
    let display = (props.show[props.event]&&show=== true) ? { ...styles.crModal, ...styles.crShowModal } : { ...styles.crModal };

    return (
        <div style={display}>
            <div style={styles.crModalContent}>
                <span style={styles.crClose} onClick={()=>setShow(false)}>&times;</span>
                <div dangerouslySetInnerHTML={{ __html:props.html }} ></div>
            </div>
        </div>
    )
}

export default Modal

       
  