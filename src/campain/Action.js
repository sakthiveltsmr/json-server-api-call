// import useStore from "../store"
// import map from "lodash/map"
import { useEffect } from "react"


export const Action=(type)=>{
    console.log("types",type)
    // const Rule=useStore((state)=>state.Rules)
    // const setRule=useStore((state)=>state.setRules)

    // console.log("Rule", Rule);

    const Active=(type)=>{
        

         console.log("check active")
    }
    // console.log("sample");
    useEffect(()=>{
      Active(type)
    },[type])
    

  // return null
   
    
  
      
}