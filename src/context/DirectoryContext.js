import {createContext} from 'react';

export let DirectoryContext=createContext({
    userId:[],
    contact:[],
    setUserId:()=>{},
    setCont:()=>{}
})

export default DirectoryContext;