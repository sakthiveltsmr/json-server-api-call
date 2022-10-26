export class Addtocart {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall(){
    let add=document.getElementById('addcart')
        add.addEventListener("click",()=>{
           this.event.forEach(event => {
                return event.onRun();
               })
        })

  }
}
