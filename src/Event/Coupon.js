export class Coupon {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {
    document.addEventListener('mouseup', () => {
    this.event.forEach((event) => {
        setTimeout(()=>{
          return event.onRun()
        },5000)
      })
      
    })
  }
}
