import React, { useState } from 'react'

export const Addtocart = ({html}) => {

    const[show,setShow]=useState(true)

    const Add=()=>{

        let Addcart=document.getElementById('addcart')
        
        Addcart.addEventListener("click",()=>{

           if(show){
               setShow(false)
       
               let main= document.getElementById('root')
            let close=document.getElementById('Aclose')

            close.addEventListener("click",()=>{
               return data.style.display="none"
            })
                  const data=document.createElement('div')
                  data.innerHTML=(`${html}`)
                 main.appendChild(data)
              return main
       
           }

        })
    }


  return (
    <div>{Add()}</div>
  )
}

  


