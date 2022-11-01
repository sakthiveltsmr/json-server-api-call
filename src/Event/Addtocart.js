import { map } from "lodash"
import Rules from "../Rules.json"
export class Addtocart {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall(){
    let add=document.getElementById('addcart')
    this.event.forEach((event) => {
      const result=Rules.find(e=>e.id===event.id)
      const data=map(result.Rule.all||result.Rule.any,(i)=>{
             return i
        })
        let fact={...data}
        let final={}
        Object.values(fact).map((e) => {
         
          if(e.fact === "currentUrl"){
            final[e.fact]=window.location.href;
          }else{
            this.timeout=e.value+"000";
              
              final[e.fact]=e.value
           
          }
        })
  
     setTimeout(()=>{
      add.addEventListener("click",()=>{
        return event.onRun(final);
       })
     },+this.timeout)
    
    })

  }
}
