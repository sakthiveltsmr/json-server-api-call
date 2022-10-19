import useStore from "../store"
import map from "lodash/map"



export const Action=({type})=>{
    console.log("types",type)
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)

    // console.log("Rule",Rule);
    // console.log(first)

   
    const Active=(type)=>{
        const event= map(Rule.events,(item,i)=>{
          return item.type===type? {...item,active:true}:item
        })  
       setRule({...Rule,events:event})
       return event;
    }
   
    
 return <>{Active(type)}</>
  // return null
   
    
  
      
}