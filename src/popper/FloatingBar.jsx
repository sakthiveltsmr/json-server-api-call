import React, { useState } from 'react';

import styles from './css/floatingBar';

import { Frequency } from '../RulesManager/Frequency';


const FloatingBar = (props) => {
    const[show,setShow]=useState(true)
    const[count,setCount]=useState(1)
    const frequency=new Frequency()
  

    const rule=JSON.parse(window.localStorage.getItem('fact_'+props.event))
    
   let facts={}
    const display = (props.show[props.event]&&show === true) ? { ...styles.slideInWrapper, ...styles.show } : { ...styles.slideInWrapper };
     const hidden=()=>{
      setCount(count+1);
      window.localStorage.setItem(props.event,count);
      setShow(false);
     
      frequency.Register(rule,facts,props.event)
     
     }
    return (
        <div style={display}>
          <span style={styles.crClose} onClick={()=>hidden()} >&times;</span>
          <div dangerouslySetInnerHTML={{ __html:props.html }} ></div>
        </div>
    )
  
}

export default FloatingBar;

 