export class Exitintent {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }
  Eventcall() {
    document.addEventListener('mouseout', (e) => {
      if (e.clientY <= 0) {
        this.event.forEach((e) => {
          return e.onRun()
        })
      }
    })
  }
}
