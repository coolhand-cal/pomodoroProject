import React from "react";
import {secondsToDuration, minutesToDuration} from '../utils/duration';



function Progress({intervalTime, count, mode, session, elapsed}) {

  if(session) {
  let percent = (elapsed / (intervalTime * 60)) *100;
  
    return (
        <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{mode} for {minutesToDuration(intervalTime)}  minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(count)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${percent}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    
    );
  }else return <p>Press play to start</p>
}

export default Progress;
