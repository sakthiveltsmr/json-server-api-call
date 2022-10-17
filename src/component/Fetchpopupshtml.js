import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../store";
import Rules from "./Rules"

const Fetchpopupshtml = () => {

  const [html,setHtml]=useState([])
  const [loading,setLoading]=useState(true)
  const campain=useStore((state)=>state.campain)
 
  const getHtml=async()=>{

    try {
     

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/Event/${campain.event}`)
        
        setHtml(result.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
     
     getHtml()
     
  },[])

  return(
    <>
   {!loading ? <Rules html={html}/>:null}
   </>
  )
 
  
   
}

export default Fetchpopupshtml