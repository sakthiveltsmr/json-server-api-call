
import map from"lodash/map"
import { useEffect, useState } from "react"


import { PopupsManager } from "../PopupsManager"
// import {PopupsManager}from "../NewCampain/PopupManager"
// import {Action} from "../campain/Action"
import useStore from "../store"

const Rules = () => {
    const [popup,setPopup]=useState({
        // Exitintent:false,
        // Welcome:false,
        // Banner:false,
        // Coupon:false,
        // Addtocart:false
      })

     

 const Rule=useStore((state)=>state.Rules)
 
// //  const Exit=useStore((state)=>state.setExit)
//  const CampaignRules=(type)=>{

//     console.log("type", type)
//     switch(type)
//     {
//     case "Exitintent":{

//         let rules = {...popup, Exitintent: true};

//         console.log("rules", rules);

//         let result =  PopupsManager.OnExitIntent({onRun:()=>{
//             // eslint-disable-next-line no-unused-expressions
//             rules
//         }});
//         if(result){
//             console.log("jkkkkkkkkkkkkkkkkkkk")
//             setPopup(rules)
//         }
//         console.log("popup", popup);

//         break;
//     }
//     case "Banner":
//         return PopupsManager.OnBannerIntent({onRun:()=>{
//             // setPopup({...popup,type:true})
//         }});
//     case "Welcome":
//         return PopupsManager.OnWelcomeIntent({onRun:()=>{
//             // setPopup({...popup,type:true})
//         }}); 
//     case "Addtocart":
//         return PopupsManager.OnAddtocartIntent({onRun:()=>{
//             // setPopup({...popup,type:true})
//         }});
            
//     default:
//          return null
//     };

      
//     //    })
        
       
//      };

useEffect(() => {
    return map(Rule.Rules,(item,i)=>{
        setPopup(popup[item.type]=false)

    switch(item.type)
    {
    case "Exitintent":{
        
        return PopupsManager.OnExitIntent({onRun:()=>{
            let a = {...popup}
            a[item.type] = true;
            setPopup({...a})
           
    }})
    
        
    }
    case "Banner":
        return PopupsManager.OnBannerIntent({onRun:()=>{
            setPopup({...popup,Banner:true})
        }});
    case "Welcome":
        return PopupsManager.OnWelcomeIntent({onRun:()=>{
            // setPopup({...popup,type:true})
        }}); 
    case "Addtocart":
        return PopupsManager.OnAddtocartIntent({onRun:()=>{
            // setPopup({...popup,type:true})
        }});
            
    default:
         return null
    };

   
        })

     }, [])

     useEffect( ()=>{
        console.log("popup",popup)
     }, [popup])
     
   
   
//  const renderCampaignRules=()=>{
//     return map(Rule.Rules,(item,i)=>{
//         let CampainRules=CampaignRules(item.type);
//         console.log("pppppppppppppp", popup)
//         return CampainRules()
//     });
//  };
  return null
    
   
  
};

export default Rules;