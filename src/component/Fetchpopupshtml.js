import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../store";
import Rules from "./Rules"
// import Eventexecution from "./Eventexecution";
const Fetchpopupshtml = () => {
  const [html,setHtml]=useState([])
  const [loading,setLoading]=useState(false)
  const campain=useStore((state)=>state.campain)
  // const sethtml=useStore((state)=>state.setHtml)
 

  //getting html component according to campaign.types
  const getHtml=async()=>{

    try {
      // let a =[];

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/Event`)
        ///console.log("result.data", result.data)
        // a.push(result.data)
        setHtml(result.data)
        setLoading(true)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
     
     getHtml()
     
  },[])

  return(
    <>{console.log("1111111111111111111html", html)}
   {loading ? <Rules html={html}/>:null}
   </>
  )
 
  
   
}

export default Fetchpopupshtml