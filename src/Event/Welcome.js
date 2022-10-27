export class Welcome{
    event=[]
   

    Register(config){
     this.event.push(config)
     this.Eventcall()
    }

    Eventcall(){
        document.addEventListener("mouseenter",()=>{
            this.event.forEach(event => { 
                // setTimeout(() => {
                   return event.onRun();
                // }, 5000);
               
               }) 
            
        })

    }
}