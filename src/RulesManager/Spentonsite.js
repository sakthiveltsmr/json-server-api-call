import { getCookie, setCookie } from '../helper/utils'
export class Spentonsite {
  Register(rule, facts, id) {
    this.event = { rule ,facts,id}
    this.counter = 0
    this.EventCall()
  }
  EventCall() {
    const start = getCookie(this.event.id)
    const date = new Date()
    const now = date.getTime()
    if (start) {
      this.counter = Math.trunc((now - start) / 1000)
    } else {
      setCookie(this.event.id, now, parseInt(this.event.rule.value, 10))
      this.counter = 0
    }

    let Timer = setInterval(() => {
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
    }, 1000)
  }
}
