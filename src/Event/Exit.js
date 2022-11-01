import { map } from "lodash"
import Rules from "../Rules.json"
export class Exitintent {
  event = []
  timeout
  currentTime=new Date()
 

  Register(config) {
    this.event.push(config)
    this.Eventcall()
    // this.Timeinterval()
  }

   Eventcall() {
     
    document.addEventListener('mouseout',(e) => {
      let eventTime=new Date()
      if (e.clientY <= 0) {
       this.event.forEach((events)=> {
           const result=Rules.find(e=>e.id===events.id)
        const data=  map(result.Rule.all||result.Rule.any,(i)=>{
               return i
          })
          let fact={...data}
          let final={}
          Object.values(fact).map((e) => {
           
            if(e.fact === "currentUrl"){
              final[e.fact]=window.location.href;
            }else{
              this.timeout=e.value;
                
                final[e.fact]=e.value
             
            }
          })
         
      let Time= setInterval(()=>{
        const total=eventTime-this.currentTime;
         
        const second=Math.floor(total/1000)
          if(+this.timeout<=second){
           
            events.onRun(final)
            clearInterval(Time)
          }


         },1000)
         
        
        })
      }
    })
  }


  
  
}
