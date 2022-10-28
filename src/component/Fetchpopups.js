import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../store";
import Rules from "./Rules"

const Fetchpopups = () => {
  
  const [loading,setLoading]=useState(true)
  const campain=useStore((state)=>state.campain)
  
  const setRule=useStore((state)=>state.setCampainintent)
  
  const getRules=async()=>{

    try {
     

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/CampainRules/${campain.event}`)
        setRule(result.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  
  useEffect(()=>{
     
     getRules()
     
  },[])

  return(
    <>
   {!loading ? <Rules/>:null}
   </>
  )
 
  
   
}

export default Fetchpopups