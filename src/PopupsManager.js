import { Exitintent } from './Event/Exit'
import { Banner } from './Event/Banner'
import { Coupon } from './Event/Coupon'
import { Addtocart } from './Event/Addtocart'
import { Welcome } from './Event/Welcome'

export class PopupManager {
   Exit=new Exitintent()
   Banner=new Banner()
   Coupon=new Coupon()
   Addtocart=new Addtocart()
   Welcome=new Welcome()

   register(type,config){
       switch(type){
        case "Exitintent":
            return this.Exit.Register(config)
        case "Banner":
           return this.Banner.Register(config)
        case "Welcome":
            return this.Welcome.Register(config)
        case "Coupon":
           return this.Coupon.Register(config)
        case "Addtocart":
            return this.Addtocart.Register(config)
        default:
           return ()=>null
       }
       
    
   }
}
