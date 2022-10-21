import create from "zustand";
 const useStore=create((set)=>({
    campain:{},
    exit:false,
    Rules:[],
    setCampain:(data)=>{
        set({campain:data})
    },
    setRules:(data)=>{
        set({Rules:data})
    },
    setExit:(data)=>{
        set({exit:data})
    }
 }))

 export default useStore