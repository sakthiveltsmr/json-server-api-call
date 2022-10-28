import create from "zustand";
 const useStore=create((set)=>({
    campain:{},
    exit:false,
    campainintent:[],
    setCampain:(data)=>{
        set({campain:data})
    },
    setCampainintent:(data)=>{
        set({campainintent:data})
    },
    setExit:(data)=>{
        set({exit:data})
    }
 }))

 export default useStore