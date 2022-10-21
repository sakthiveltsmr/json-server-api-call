
import { exitIntent } from './exitintent'
import { addtocart } from './Addtocart'
import { Welcome } from './Welcome'
import {Banner} from "./Banner"

export class PopupManager {
        exitIntent=new exitIntent()
        addtocart=new addtocart()
        Welcome=new Welcome()
        Banner=new Banner()
     register() {
              return {
                exitIntent: (config) => {
                  // do somthing with config
                  this.exitIntent.registerEvent(config)
                },
                addtocart: (config) => {
                  this.addtocart.registerEvent(config)
                },
                Welcome:(config)=>{
                    this.Welcome.registerEvent(config)
                },
                Banner:(config)=>{
                    this.Banner.registerEvent(config)
                }
              
            }
    

  }
}
