import React from "react";
import classNames from "../utils/class-names";
import { minutesToDuration} from '../utils/duration';





function Interval ({intervalTime,updateTimer, name, updateCountDown, countDownTime, limitUp, limitDown, sessionActive, increment}) {
  

  const changeTime = (direction) => {
    
  if( direction==="up" &&!sessionActive && intervalTime < (parseInt(limitUp))){
    updateTimer(intervalTime +  parseInt(increment));
 

  } else if (direction==="down" &&!sessionActive && intervalTime >(parseInt(limitDown))) {
    updateTimer(intervalTime -parseInt(increment)) ;
  
  } 
   
  
  }
   
    return (
        <div className="input-group input-group-lg mb-2">    
    <span className="input-group-text" data-testid={`duration-${name.toLowerCase()}`}>
    {/* TODO: Update this text to display the current focus session duration */}
    {`${name} Duration`}: {minutesToDuration(intervalTime)}
  </span>
  <div className="input-group-append">
    {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
    <button
      type="button"
      className="btn btn-secondary"
      data-testid={`decrease-${name.toLowerCase()}`}
      onClick={() => changeTime("down")}

    >
      <span className="oi oi-minus" > -</span>
    </button>
    {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
    <button
      type="button"
      className="btn btn-secondary"
      data-testid={`increase-${name.toLowerCase()}`}
      onClick={() => changeTime("up")}
    >
      <span className="oi oi-plus" > +</span>
    </button>
  </div>
  </div>
    );
}

export default Interval;
