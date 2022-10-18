import useStore from "../store"
import map from "lodash/map"
import { useEffect } from "react"

export const Action=(type)=>{
    console.log("types",type)
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
    const Active=()=>{
        const event= map(Rule.events,(item)=>{
            return item.type === type ? { ...item, active:true } : item
     
            })
            
          setRule({...Rule,events:event})

         
    }

    useEffect(()=>{

        Active(type)
        
        console.log("Rule",Rule)

    },[type])
    

  return null
   
    
  
      
}