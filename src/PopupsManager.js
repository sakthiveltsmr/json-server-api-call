import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:({show, type })=>{
        
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                if(!show){
                Action(type)
                console.log("mouse exit")
            }
                
            }
            }
           
            
        )
        
    },

    OnWelcomeIntent:(show)=>{
        document.addEventListener("mouseenter",()=>{
            return 
            
        })
    },

    OnBannerIntent:()=>{
        return console.log("banner")
    },

    OnAddtocartIntent:()=>{
        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
            return console.log("Addtocart")
        })
    },

    OnCouponIntent:()=>{
        document.addEventListener("mouseenter",()=>{
            setTimeout(()=>{
                return console.log("CouponIntent")
            },5000)
        })
    }


}