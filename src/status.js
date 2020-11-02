import React , {useContext}from 'react'
import {ExpContext} from './globalstate.js';
 const Status = () =>{
    
  const {trans} = useContext(ExpContext);
  const amounts = trans.map(t => t.amount);
  let income =0;
  let expense=0;
  if(amounts.length > 0){
      income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  
    expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
    }else{
      
    }

    

  return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+{income} PKR</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">{expense} PKR</p>
        </div>
        </div>
    )
}

export default Status;