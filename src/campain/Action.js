import useStore from "../store"
import map from "lodash/map"
export const Action=({type})=>{
    console.log("action",type)
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
    const event= map(Rule.events,(item)=>{
        return item.type === type ? { ...item, active:true } : item
 
        })
      setRule({...Rule,events:event})
}