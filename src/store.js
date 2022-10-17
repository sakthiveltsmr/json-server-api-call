import create from "zustand";
 const useStore=create((set)=>({
    campain:{},
    html:[],
    setCampain:(data)=>{
        set({campain:data})
    },
    setHtml:(data)=>{
        set([{html:data}])
    }
 }))

 export default useStore