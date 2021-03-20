import {createContext} from 'react';

export let DirectoryContext=createContext({
    userId:[],
    setUserId:()=>{}
})

export default DirectoryContext;