import { Action } from "./campain/Action"


export const PopupsManager={

  
    OnExitIntent:({show, type})=>{
       
        
        document.addEventListener("mouseout",(e)=>{
           
            if(e.clientY<=0){
                if(!show){
                    console.log("OnExitIntent");
                  return  <Action type={type}/>
            }

            }
            }
           
            
        )
        
    },

    OnWelcomeIntent:({show, type})=>{
        document.addEventListener("mouseenter",()=>{
            console.log("OnWelcomeIntent");

            if(!show){
                console.log("events onwelcome")
              return  <Action type={type}/>
            }
            
        })
    },

    OnBannerIntent:({show,type})=>{
        console.log("shows",show)
        console.log("types",type)
       if(!show){
        console.log("OnBannerIntent");

       return <Action type={type}/>
       }
    },

    OnAddtocartIntent:({show,type})=>{
        let add=document.getElementById('addcart');
        add.addEventListener("click",()=>{
        console.log("OnAddtocartIntent");

            if(!show){
              return  <Action type={type}/>
            }
        })
    },

    OnCouponIntent:({show, type})=>{
        document.addEventListener("mouseenter",()=>{
        console.log("OnCouponIntent");

            setTimeout(()=>{
                if(!show){
                    return <Action type={type}/>
                    
                }
            },5000)
        })
    }


}