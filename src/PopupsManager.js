
// import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:(props)=>{
        console.log("props",props)
        const events=[];
        events.push(props)
        document.addEventListener("mouseout",(e)=>{
            
            if(e.clientY<=0){
             
                events.forEach(event => {

                   
                   return event.onRun();
                  })
            
         }
        
           
            
    })
        return true;
    },

    OnWelcomeIntent:({show, type})=>{

       

        document.addEventListener("mouseenter",()=>{
           

            if(!show){
               
               
            }
            
        })
    },

    OnBannerIntent:({show,type})=>{

       
       if(!show){
        
        
       }
    },

    OnAddtocartIntent:({show,type})=>{

       

        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
      

            if(!show){
               

                 
            }
        })
    },

    OnCouponIntent:({show, type})=>{
       
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