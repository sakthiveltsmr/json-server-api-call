

const Exitpopups = () => {

    document.onmouseout=(event)=>{

        if(event.clientY<=0){
           if(window.campainrules.active){
                window.campainrules.active=false;
               let main=document.getElementById('root');
               let  div=document.createElement('div');
               div.innerHTML=`${window.campainrules._html}`


           div.addEventListener("click",()=>{
             return div.style.display='none'
           })    
            
           main.appendChild(div)
               setTimeout(()=>{
                 div.style.display = "none";
               },5000)

               return main
            }else{
                
            }

        }
    }
}

export default Exitpopups