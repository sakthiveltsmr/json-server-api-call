

      
//  export  const popups=(html)=>{

     
    
//             div.innerHTML=(`${html}`);

//             main.appendChild(div)

//             return main
    
//   }

 export const CustomFnForPopUp = {
     main:document.getElementById(`root`),
     div:document.createElement('div'),

    onExistIntent: (html) => {
        this.div.innerHTML=(`${html}`);
        this.main.appendChild(this.div);
        return this.main
    },
    onWelcomeIntent:(html)=>{
        let a = this.div.innerHTML=(`${html}`);
        this.main.appendChild(a);
        return this.main
    }

 }