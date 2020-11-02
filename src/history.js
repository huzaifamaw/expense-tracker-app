import React from 'react';
import {TransItems} from './trancitems.js';
import {ExpContext} from './globalstate.js';
import {useContext} from 'react';




function History(){

     const context = useContext(ExpContext);

    
    

    return (

        <div className="history">
            <h4 >
                History
            </h4>
            <hr/>
            <ul>
                {context.trans.map((t) =><TransItems id={t.id} name={t.name} amount={t.amount}/>  )}
            </ul>

            
        </div>

    )
}

export default History;