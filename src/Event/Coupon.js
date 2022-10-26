export class Coupon {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  Eventcall() {
    document.addEventListener('mouseenter', () => {
      this.event.forEach((event) => {
        return event.onRun()
      })
    })
  }
}
