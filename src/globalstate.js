import React,{useState,createContext, useReducer} from 'react'
import Appreducer from './Appreducer.js';

const inistialstate = {
 transactions: [
  
    
 ]
}

export const ExpContext = createContext(inistialstate);

export const ExpProvider = ({children}) =>{
    
    const [state , dispatch] = useReducer(Appreducer,inistialstate);

    // const [transactions , setTrans] = useState();
    // const [balance,setBalance] = useState(0)  

    function Delete(id){
        
        dispatch(
            {
                type: 'DELETE',
                payload: id
            }
        );

        
    }

    function Add(transaction){
        
        dispatch(
            {
                type: 'ADD',
                payload: transaction
            }
        );
        
        
    }

    return(
        <ExpContext.Provider value={{trans: state.transactions, Delete ,Add}}>
        {children}
        </ExpContext.Provider>
    );
}



