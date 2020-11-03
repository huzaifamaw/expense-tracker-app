import React , {useState} from 'react';
import {useContext} from 'react';
import {ExpContext} from './globalstate.js';


export default function Input(){
    
    const context = useContext(ExpContext);
    const [text, setText] = useState("");
    const [num, setnum] = useState();
    // const addtrans = (e)=>{ 
    //     e.preventDefault();
    //     if(text.length>0 && num.length>0){
    //     setTrans([...transactions,{amount: num,name: text}])
    //     setText("");
    //     setnum("");
    //     }else{
    //         
    //     }
        
    // }

    
    const ChangePlease = (e)=>{

        e.preventDefault()

        if(text.length>0 && num.length>0){
        setText("")
        setnum("")
        context.Add({id: Math.random()*100000,name: text,amount: parseInt(num,10)})}
        else{
            alert("ENTER EVERY VALUE PLEASE!")
        }
        }
 
   
    return (
        <div className="inputfields">
            <h5>
                Add Transactions <br/><span className="sub">(negative for expense amount | positive for income)</span>
            </h5>
            <hr/>
            
            
            <form>
                <input required='required' type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Description"></input>
                <input required type="number" value={num} onChange={(e)=>{setnum(e.target.value)}} placeholder="Enter Amount"></input>
                <button type='submit' className="submit" onClick={ChangePlease}>Submit</button>
            </form>
        </div>
    )

}