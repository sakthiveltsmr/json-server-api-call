import {Exitintent} from "./Event/Exit"
import {Banner}from "./Event/Banner"
import {Coupon}from "./Event/Coupon"
import {Addtocart}from "./Event/Addtocart"
import {Welcome} from "./Event/Welcome"



export class PopupManager{

   
   
   

    constructor(type,config){

        switch(type){
            case "Exitintent":{
                  this.Exit=new Exitintent()
               return this.Exit.Register(config)
            }
            case "Banner":{
                  this.Banner=new Banner()
                return this.Banner.Register(config)
            }
            case "Welcome":
                {
                    this.Welcome=new Welcome()
                    return this.Welcome.Register(config)
                }
            case "Addtocart":{
                this.Addtocart=new Addtocart()
               return  this.Addtocart.Register(config) 
            }
                
            case "Coupon":{
                this.Coupon=new Coupon()
                return this.Coupon.Register(config)
            }
               
            default:
               return ()=>null

        }
    }
}