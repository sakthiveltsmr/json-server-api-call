import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../store";
import Rules from "./Rules"
import Popper from "../popper"
import { map } from "lodash";

const Fetchpopupshtml = () => {
  

  const Rule=useStore((state)=>state.Rules)
  const [loading,setLoading]=useState(true)
  const campain=useStore((state)=>state.campain)
  
  const setRule=useStore((state)=>state.setRules)
  
  const getRules=async()=>{

    try {
     

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/CampainRules/${campain.event}`)
        
        setRule(result.data)
        // Rules()
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  // const handelLoad=()=>{
  //   return map(Rule.Rules,(item,i)=>{
      
  //     return(<>
  //     {/* <Popper type={item.position} id={i} html={item._html} show={item.active}/> */}
  //     <Rules/>
  //     </> )
  //  })
  //  }

  useEffect(()=>{
     
     getRules()
     
  },[])

  return(
    <>
   {!loading ? <Rules/>:null}
   </>
  )
 
  
   
}

export default Fetchpopupshtml