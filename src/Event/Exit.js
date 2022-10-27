export class Exitintent {
  event = []

  Register(config) {
    this.event.push(config)
    this.Eventcall()
  }

  // a = {
  //   "qq": true,
  //   "aa": true
  // }

  // configs = [
  //   {
  //     onRun: function() {
  //       return { 1: true, 2: false }
  //     }
  //   },
  //   {
  //     onRun: function() {
  //       return { 1: false, 2: true }
  //     }
  //   }
  // ]

  //event.push(config)

   Eventcall() {


    document.addEventListener('mouseout',(e) => {
      if (e.clientY <= 0) {

       this.event.forEach((events)=> {

           events.onRun()
        })
      }
    })
  }
}
