import React , {useState}from 'react';
import {useContext} from 'react';
import {ExpContext} from './globalstate.js';
export default function Balance(){
   
    const {trans} = useContext(ExpContext);
    
    const amount = trans.map(t => t.amount);
    let total=0;
    if(amount.length>0){
    total = amount.reduce((acc,state)=>acc+=state).toFixed(2);};
    
    return (
        <div className="Bal">
            <h3><span>Balance:</span> <span  className={total>0?'positive':'negative'}>{total} Rs.</span></h3>
        </div>
    )

}