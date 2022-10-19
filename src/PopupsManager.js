import  map  from "lodash/map"
import useStore from "./store";
// import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:({show, type})=>{
        
        const Rule=useStore((state)=>state.Rules)
        const setRule=useStore((state)=>state.setRules)
        
        document.addEventListener("mouseout",(e)=>{
           
            if(e.clientY<=0){
             if(!show){
            const event= map(Rule.events,(item)=>{
            return item.type === type ? { ...item, active:true } : item
            })
            
          setRule({...Rule,events:event})

            }
         }
        
           
            
    })
        
    },

    OnWelcomeIntent:({show, type})=>{

        const Rule=useStore((state)=>state.Rules)
        const setRule=useStore((state)=>state.setRules)

        document.addEventListener("mouseenter",()=>{
           

            if(!show){
                const event= map(Rule.events,(item)=>{
                    return item.type === type ? { ...item, active:true } : item
                    })
                    
                  setRule({...Rule,events:event})
               
            }
            
        })
    },

    OnBannerIntent:({show,type})=>{

        const Rule=useStore((state)=>state.Rules)
        const setRule=useStore((state)=>state.setRules)

       if(!show){
        const event= map(Rule.events,(item)=>{
            return item.type === type ? { ...item, active:true } : item
            })
            
          setRule({...Rule,events:event})
        
       }
    },

    OnAddtocartIntent:({show,type})=>{

        const Rule=useStore((state)=>state.Rules)
        const setRule=useStore((state)=>state.setRules)

        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
      

            if(!show){
                const event= map(Rule.events,(item)=>{
                    return item.type === type ? { ...item, active:true } : item
                    })
                    
                  setRule({...Rule,events:event})  

                 
            }
        })
    },

    OnCouponIntent:({show, type})=>{
        // const Rule=useStore((state)=>state.Rules)
        // const setRule=useStore((state)=>state.setRules)
        document.addEventListener("mouseenter",()=>{
        console.log("OnCouponIntent");

            setTimeout(()=>{
                if(!show){
                    // const event= map(Rule.events,(item)=>{
                    //     return item.type === type ? { ...item, active:true } : item
                    //     })
                        
                    //   setRule({...Rule,events:event})  
                }
                
            },5000)
        })
    }


}