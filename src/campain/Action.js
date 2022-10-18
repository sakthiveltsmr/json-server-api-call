import useStore from "../store"
import map from "lodash/map"
export const Action=(type)=>{
    console.log("types",type)
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
    const event= map(Rule.events,(item)=>{
        return item.type === type ? { ...item, active:true } : item
 
        })
        console.log("Rule",Rule)
      setRule({...Rule,events:event})

      
}