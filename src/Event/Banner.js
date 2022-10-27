export class Banner {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {
    document.addEventListener("mousedown",()=>{
        this.event.forEach((event) => {
            return event.onRun()
          })
    })

  }
}
