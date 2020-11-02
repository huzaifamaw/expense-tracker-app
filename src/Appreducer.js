import React from 'react'

const Appreducer = (state,action) => {
    switch(action.type){
        case 'DELETE':
         const a = {transactions: state.transactions.filter(t=>t.id !== action.payload)}
         console.log(a.transactions)
        return a;
        case 'ADD':
        return{
            transactions: [...state.transactions,action.payload]
        };
    }
}
export default Appreducer;