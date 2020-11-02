import React , {useContext}from 'react'
import TimeStamp from './timestamp.js';
import {ExpContext} from './globalstate.js';


export  const TransItems = (props) => {
    
    const {Delete} = useContext(ExpContext);
    const sign = props.amount<0 ? 'minuss' : 'pluss';
    return(
    <li className={sign}>{props.name} <span>{props.amount} PKR <TimeStamp/> </span><button className="delete" onClick={()=>Delete(props.id)}>x</button></li>
    );
}