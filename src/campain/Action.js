import map from "lodash/map"

export const Action={

    ActiveEvent:(type,Rule,setRule)=>{

        
        const event=map(Rule.events,(item,i)=>{
            return item.type===type? {...item,active:true}:item
        })

        setRule({...Rule,events:event})

      
        
    }
}