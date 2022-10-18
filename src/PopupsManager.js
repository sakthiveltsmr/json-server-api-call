import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:({show, type })=>{
        
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                if(!show){
                Action(type)
                
            }
                
            }
            }
           
            
        )
        
    },

    OnWelcomeIntent:({show, type})=>{
        document.addEventListener("mouseenter",()=>{
            if(!show){
                Action(type)  
            }
            
        })
    },

    OnBannerIntent:({show,type})=>{
       if(!show){
        Action(type)
       }
    },

    OnAddtocartIntent:({show,type})=>{
        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
            if(!show){
                Action(type)  
            }
        })
    },

    OnCouponIntent:({show, type})=>{
        document.addEventListener("mouseenter",()=>{
            setTimeout(()=>{
                if(!show){
                    Action(type)
                    
                }
            },5000)
        })
    }


}