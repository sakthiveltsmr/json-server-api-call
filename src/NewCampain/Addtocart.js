export default class Addtocart {
    event=[];

    constructor(config) {
        this.events.push(config);
        this.registerEvent();
      }
  
      
      registerEvent() {
        let Cart=document.getElementById('addcart')
        Cart.addEventListener('click', () => {
          this.events.forEach(event => {
            event.onRun();
          })
        })
      }
    
}
     
  
    
   
    
