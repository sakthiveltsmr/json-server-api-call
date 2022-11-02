
export class Welcome {
  event = []

  Register(config,fact) {
    this.event.push(config)
    this.fact=fact
    this.Eventcall()
  }
  
 
  Eventcall() {   
    this.event.forEach((event) => {
        event.onRun(this.fact)
   
    }) 
  }
}
