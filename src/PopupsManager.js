import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:(show, type)=>{
        console.log("shows",show)
        console.log("types",type)
        
        document.addEventListener("mouseout",(e)=>{
            console.log("events",e)
            if(e.clientY<=0){
                if(!show){
                    console.log("OnExitIntent");
                    Action(type)
            }

            }
            }
           
            
        )
        
    },

    OnWelcomeIntent:(show, type)=>{
        document.addEventListener("mouseenter",()=>{
            console.log("OnWelcomeIntent");

            if(!show){
                console.log("events onwelcome")
                Action(type)  
            }
            
        })
    },

    OnBannerIntent:(show,type)=>{
       if(!show){
        console.log("OnBannerIntent");

        Action(type)
       }
    },

    OnAddtocartIntent:(show,type)=>{
        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
        console.log("OnAddtocartIntent");

            if(!show){
                Action(type)  
            }
        })
    },

    OnCouponIntent:(show, type)=>{
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