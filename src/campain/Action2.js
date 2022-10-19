import map from "lodash/map"

export const Action={

    ActiveEvent:(type,Rule,setRule)=>{

        console.log("welcome",setRule)
        
        const event=map(Rule.events,(item,i)=>{
            return item.type===type? {...item,active:true}:item
        })

        setRule({...Rule,events:event})

        console.log("propsrules",Rule)
        
    }
}