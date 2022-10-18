import map from "lodash/map"
import useStore from "./store"
export const PopupsManager={

  
    OnExitIntent:(props)=>{
        const html=useStore((state)=>state.html)
        const setHtml=useStore((state)=>state.setHtml)
        console.log("type",props.type)
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                if(!props.show){
               return map(html.events,(item)=>{
                if(item.type===props.type){
                    const values={...item,active:true}
                 return setHtml({...html,values})
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