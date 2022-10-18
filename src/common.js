

      
//  export  const popups=(html)=>{

     
    
//             div.innerHTML=(`${html}`);

//             main.appendChild(div)

//             return main
    
//   }

 export const CustomFnForPopUp = {
     main:document.getElementById(`root`),
     div:document.createElement('div'),

    onExistIntent: (html) => {
       let a= this.div.innerHTML=(`${html}`);
       let b= this.main.appendChild(a);
        return b
    },
    onWelcomeIntent:(html)=>{
        let a = this.div.innerHTML=(`${html}`);
       let b = this.main.appendChild(a);
        return b
    }

 }