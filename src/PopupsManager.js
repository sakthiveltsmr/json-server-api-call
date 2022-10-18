import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:({show, type })=>{
        
        document.addEventListener("mouseout",(e)=>{
            console.log("OnExitIntent");
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
            console.log("OnWelcomeIntent");

            if(!show){
                Action(type)  
            }
            
        })
    },

    OnBannerIntent:({show,type})=>{
       if(!show){
        console.log("OnBannerIntent");

        Action(type)
       }
    },

    OnAddtocartIntent:({show,type})=>{
        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
        console.log("OnAddtocartIntent");

            if(!show){
                Action(type)  
            }
        })
    },

    OnCouponIntent:({show, type})=>{
        document.addEventListener("mouseenter",()=>{
        console.log("OnCouponIntent");

            setTimeout(()=>{
                if(!show){
                    Action(type)
                    
                }
            },5000)
        })
    }


}