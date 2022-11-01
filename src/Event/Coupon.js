import { map } from "lodash"
import Rules from "../Rules.json"

export class Coupon {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {
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
  
     
        setTimeout(() => {
          document.addEventListener('mouseup',()=>{
           event.onRun(final)
          })
          
        },+this.timeout)
      })

    // document.addEventListener('mouseup', () => {
    //   let data={
    //     staytime:10,
    //     currentUrl:window.location.href
    //   } 
      
    // this.event.forEach((event) => {
    //     setTimeout(()=>{
    //       return event.onRun(data)
    //     },10000)
    //   })
      
    // })
  }
}
