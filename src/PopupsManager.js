import { Exitintent } from './Event/Exit'
import { Banner } from './Event/Banner'
import { Coupon } from './Event/Coupon'
import { Addtocart } from './Event/Addtocart'
import { Welcome } from './Event/Welcome'
import { PrepareFact } from './campain/PrepareFact'

export class PopupManager {
   
  fact={}
   
   Exit=new Exitintent()
   Banner=new Banner()
   Coupon=new Coupon()
   Addtocart=new Addtocart()
   Welcome=new Welcome()

   register(type,rule,id,config){
       new PrepareFact(rule,this.fact,id)

     
    console.log("finall",this.fact)
       switch(type){
        case "Exitintent":
            return this.Exit.Register(config,this.fact)  
        case "Banner":
           return this.Banner.Register(config)
        case "Welcome":
            return this.Welcome.Register(config,this.fact)
        case "Coupon":
           return this.Coupon.Register(config)
        case "Addtocart":
            return this.Addtocart.Register(config)
        default:
           return ()=>null
       }
       
    
   }
}
