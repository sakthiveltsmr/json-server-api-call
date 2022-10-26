export class Banner {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {
    document.addEventListener("scroll",()=>{
        this.event.forEach((event) => {
            return event.onRun()
          })
    })

  }
}
