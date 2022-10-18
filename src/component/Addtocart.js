import React, { useState } from 'react'
import { popups } from '../common'

 const Addtocart = ({html}) => {

    const[show,setShow]=useState(true)

    const Add=()=>{

        let Addcart=document.getElementById('addcart')
        
        Addcart.addEventListener("click",()=>{

           if(show){
               setShow(false)
       
               
              return popups(html)
       
           }

        },false)
    }


  return (
    <div>{Add()}</div>
  )
}
export default Addtocart
  


