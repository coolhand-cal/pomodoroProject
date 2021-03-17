import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {secondsToDuration, toHours, minutesToDuration} from '../utils/duration';
function Controls ({timerActive, setTimer, session, setSession, focus, setCount, setMode, setActivityTimer}) {

  const x = document.createElement("AUDIO")
  x.setAttribute(`src`,"./alarm-clock-small-beeps");

    const playPause = () => {
        if(!session) startSession();
      
        setTimer((prevState) => !prevState);
        
      }

    const stopSession = () => {
      setTimer(false);
      setSession(false);
      setActivityTimer(focus);
    }

    const startSession = () => {
      setCount(focus * 60);
      setActivityTimer(focus);
      setMode(`Focusing`);
      setSession(true);
    }
    return ( 
        <div
className="btn-group btn-group-lg mb-2"
role="group"
aria-label="Timer controls"
>
<button
  type="button"
  className="btn btn-primary"
  data-testid="play-pause"
  title="Start or pause timer"
  onClick={playPause}
>
  <span
    className={classNames({
      oi: true,
      "oi-media-play": !timerActive,
      "oi-media-pause": timerActive,
    })}
  />
</button>
{/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
<button
  type="button"
  className="btn btn-secondary"
  title="Stop the session"
  onClick={stopSession}
>
  <span className="oi oi-media-stop" />
</button>
</div>)
}

export default Controls;
