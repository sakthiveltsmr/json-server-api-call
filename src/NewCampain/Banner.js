export default class Banner{
    event=[];

    constructor(config) {
        this.events.push(config);
        this.registerEvent();
      }
  
      
      registerEvent() {
          this.events.forEach(event => {
            event.onRun();
          })
        
      }
}