import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {secondsToDuration, toHours, minutesToDuration} from '../utils/duration';
import Interval from "./Interval.js"
import Controls from "./Controls";
import Progress from "./Progress";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focusTime, setfocus] = useState(25 );
  const [breakTime, setBreak] = useState(5);
  const [countDown, setCountDown] = useState(25 * 60);
  const [onbreak, setOnBreak] = useState(false);
  const [activity, setActivity] = useState(`Focusing`);
  const [inSession, setInSession] = useState(false);
  const [activityTime, setActivityTime] = useState(25);
  const [elapsedTime,setElapsedTime] = useState(0);
// setElapsed(intervalTime-count);
 

  

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      manageCountDown();
    },
    isTimerRunning ? 1000 : null
  );

    function manageCountDown () {
      if (isTimerRunning) setCountDown( countDown -1);
      if (countDown ===0) switchTimers()
      setElapsedTime((activityTime * 60) - countDown);
    }

    function switchTimers(){
     // const progress = document.querySelector(`.progress`);
      if(!onbreak) {
        setCountDown(breakTime*60);
        setActivity(`On Break`)
        setActivityTime(breakTime);
        setOnBreak(true);
       const sound = new Audio(`./alarm-clock-small-beeps.mp3`).play
       new Audio(`https://onlineclock.net/audio/options/default.mp3`).play();
      } 
      else {
        setCountDown(focusTime *60);
        setActivity(`Focusing`);
        setActivityTime(focusTime);
        setOnBreak(false);
       // new Audio(`./alarm-clock-small-beeps.mp3`).play
       new Audio(`https://onlineclock.net/audio/options/default.mp3`).play();
      }
    }
  

  function playPause() {
   
    setIsTimerRunning((prevState) => !prevState);
  }

 

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
         <Interval 
          intervalTime={focusTime} 
          updateTimer={setfocus} 
          name="Focus"
          updateCountDown={setCountDown}
          countDownTime={countDown}
          limitUp ="60"
          limitDown ="5"
          sessionActive = {inSession}
          increment="5"
          >
            
         </Interval>
        </div>
        <div className="col">
          <div className="float-right">
          <Interval 
          intervalTime={breakTime} 
          updateTimer={setBreak} 
          name="Break"
          updateCountDown={setCountDown}
          countDownTime={countDown}
          limitUp="15"
          limitDown="1"
          sessionActive = {inSession}
          increment="1">
          </Interval>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Controls 
          timerActive={isTimerRunning} 
          setTimer={setIsTimerRunning} 
          session={inSession}
          setSession={setInSession} 
          focus={focusTime}
          setCount={setCountDown}
          setMode={setActivity}
          setActivityTimer={setActivityTime}
          >
          </Controls>
         </div>
      </div>
      <Progress  
      className="progress" 
      intervalTime={activityTime} 
      count={countDown} 
      mode={activity}
      session={inSession}
      elapsed={elapsedTime} 
      >
      </Progress>
      </div>
  );
}

export default Pomodoro;
