

      
//  export  const popups=(html)=>{

     
    
//             div.innerHTML=(`${html}`);

//             main.appendChild(div)

//             return main
    
//   }

 export const CustomFnForPopUp = {
    root: document.getElementById('root'),
    div: document.createElement('div'),

    // onExistIntent: (html) => {
    //     console.log("this.main1111111111111", this.main);
    //     console.log("this.div1111111111111", this.div);

    //    let a= this.div.innerHTML=(`${html}`);
    //    let b= this.main.appendChild(a);
    //     return b
    // },
    onWelcomeIntent:(html)=>{
        console.log("this.main2222222222222222", this.root);
        console.log("this.div2222222222222", this.div);
        let a = this.div.innerHTML=(`${html}`);
       let b = this.main.appendChild(a);
       console.log("aaaaaaaaaa", a);
       console.log("bbbbbbbbbbbbb", b);
        return b
    }

 }