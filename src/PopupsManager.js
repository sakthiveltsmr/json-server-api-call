import map from "lodash/map"
import useStore from "./store"
export const PopupsManager={

  
    OnExitIntent:({show, type })=>{
        // console.log("object",props);
        const html=useStore((state)=>state.html)
      
        //console.log("type",show)
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                if(!show){
               const event= map(html.events,(item)=>{
               return item.type === type ? { ...item, active:true } : item
        
               })
              html.events = [...event]
                
                }
            }
            console.log("html",html)
            
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