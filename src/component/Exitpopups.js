// import useStore from "../store";
import Structure from "./structure";

const Exitpopups = ({html}) => {

    console.log("in html",html)
    // const campaign=useStore((state)=>state.campain)
    // const setCampain=useStore((state)=>state.setCampain)
   
    document.onmouseout=(event)=>{
        if(event.clientY<=0){
            console.log(event.clientY)
          return <Structure html={html}/>
            //    setCampain({...campaign,active:false})
//                let main=document.getElementById('root');
//                let  div=document.createElement('div');
//                div.innerHTML=`${html}`
//                main.appendChild(div)
//            const close= document.getElementById('close')

// //on click event for close the popups
//            close.addEventListener("click",()=>{
//              return div.style.display='none'
//            })    
//                return main
//             }

        }
    }
 
}

export default Exitpopups