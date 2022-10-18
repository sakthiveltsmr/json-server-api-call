import map from "lodash/map"
import useStore from "./store"
export const PopupsManager={

  
    OnExitIntent:(type,show)=>{
        const html=useStore((state)=>state.html)
        const setHtml=useStore((state)=>state.setHtml)
        console.log("type",type,"show",show)
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                if(!show){
               return map(html.events,(item)=>{
                if(item.type===type){
                 return setHtml({...html,active:true})
                }
               })
                
                }
            }
            console.log("html  from onexitintent",html)
        })
        
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