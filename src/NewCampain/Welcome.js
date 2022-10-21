export default class Welcome{

    event=[];

    constructor(config) {
        this.events.push(config);
        this.registerEvent();
      }
  
      
      registerEvent() {
        
        document.addEventListener('mouseenter', () => {
          this.events.forEach(event => {
            event.onRun();
          })
        })
      }
}