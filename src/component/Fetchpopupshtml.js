import axios from "axios";
import { map } from "lodash";
import { useEffect, useState } from "react";
import Popper from "../popper";
import useStore from "../store";

import PopupManager from "./PopupManager";
const FetchpopupRules = () => {
  
  const Rule=useStore((state)=>state.Rules)
  const [loading,setLoading]=useState(true)
  const campain=useStore((state)=>state.campain)
  
  const setRule=useStore((state)=>state.setRules)
  
  const getRules=async()=>{

    try {
     

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/Event/${campain.event}`)
        
        setRule(result.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
    
  }


  const handelLoad=()=>{
    return map(Rule.events,(item,i)=>{
      
      return(<div><Popper type={item.position} id={i} html={item._html} show={item.active}/>
      <PopupManager/>
      </div> )
   })
   }
  useEffect(()=>{
     
     getRules()
     
  },[])

  return(
    <>
   {!loading ? handelLoad() :null}
   </>
  )
 
  
   
}

export default FetchpopupRules