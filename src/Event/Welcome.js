import { map } from "lodash"
import Rules from "../Rules.json"
export class Welcome {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {

    this.event.forEach((event) => {
    const result=Rules.find(e=>e.id===event.id)
    const data=  map(result.Rule.all||result.Rule.any,(i)=>{
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
         event.onRun(final)
      },+this.timeout)
    })

    // document.addEventListener("load",()=>{
    //     console.log("iam in")
    //     let data={
    //      stayonpage:5,
    //     currentUrl:window.location.href
    //     }

    //     setTimeout(()=>{
    //         this.event.forEach(event => {

    //             return event.onRun(data);

    //         })

    //     },5000)

    // })
  }
}
