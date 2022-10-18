import create from "zustand";
 const useStore=create((set)=>({
    campain:{},
    Rules:[],
    setCampain:(data)=>{
        set({campain:data})
    },
    setRules:(data)=>{
        set({Rules:data})
    }
 }))

 export default useStore