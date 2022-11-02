export class Spentonpage {
  event = {}

  Register(rule, facts) {
    this.event = { rule, facts }
    this.counter = 0
    this.location = window.location.href
    this.EventCall()
  }
  EventCall() {
    let Timer = setInterval(() => {
      if (this.location === window.location.href) {
        this.counter = ++this.counter

        if (this.event.rule.operator === 'greaterThanInclusive') {
          if (this.counter >= this.event.rule.value) {
            clearInterval(Timer)
            return (this.event.facts[this.event.rule.fact] = this.counter)
          }
        } else if (this.event.rule.operator === 'lessThanInclusive') {
          if (this.counter <= this.event.rule.value) {
            clearInterval(Timer)
            return (this.event.facts[this.event.rule.fact] = this.counter)
          }
        }
      } else {
        this.location = window.location.href
        this.counter = 0
      }
    }, 1000)
  }
}
