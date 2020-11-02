import React from 'react'

const TimeStamp = () => {
    
    var today = new Date();

    const timestring = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log(timestring)
    return(
        <span className="time">{timestring}</span>
    );

}

export default TimeStamp;