export default class exitIntent{
    events = [];

    constructor(config) {
        console.log("config",config)
      this.events.push(config);

      this.registerEvent();
    }

    registerEvent() {
        document.addEventListener('mouseout', () => {
        //   this.events.forEach(event => {
        //     event.onRun();
        //   })
        })
    }
}
