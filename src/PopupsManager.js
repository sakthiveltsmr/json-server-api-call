
export const PopupsManager={
  
    OnExitIntent:()=>{
        document.addEventListener("mouseout",(e)=>{
            if(e.clientY<=0){
                return console.log("haii")
            }
        })
    },

    OnWelcomeIntent:()=>{
        document.addEventListener("mouseenter",()=>{
            return console.log("welcomeIntent")
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