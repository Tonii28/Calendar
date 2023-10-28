import React, { useEffect, useState } from 'react';
import "./styles.css"
import { EVENTS } from '../../constants/BigCalendar.constants';




function DayHeader(props:any) {
    let hoursMain=0;
    let minutesMain=0;
    let secondsMain=0;
    const devideDates=(time1:string, time2:string)=>{
        const timeString1 = time1;
        const timeString2 = time2;
        
        // Parse the time strings into Date objects
        const date1 = new Date(timeString1);
        const date2 = new Date(timeString2);
        
        // Calculate the time difference in milliseconds
        const timeDifference = date2.getTime() - date1.getTime();
        
        // Convert the time difference to hours, minutes, and seconds
        const millisecondsPerHour = 60 * 60 * 1000;
        const hours = Math.floor(timeDifference / millisecondsPerHour);
        const millisecondsPerMinute = 60 * 1000;
        const minutes = Math.floor((timeDifference % millisecondsPerHour) / millisecondsPerMinute);
        const seconds = Math.floor((timeDifference % millisecondsPerMinute) / 1000);
        
        return {hours,minutes,seconds}
        
        }


        
            EVENTS.forEach((el) => {
              if (
                el.start.getDate() === props.props.date.getDate() &&
                el.start.getMonth() === props.props.date.getMonth() &&
                el.start.getFullYear() === props.props.date.getFullYear()
              ) {
                const { hours, minutes, seconds } = devideDates(el.start, el.end);
               hoursMain+=hours
            minutesMain+=minutes
                secondsMain+=seconds
              }
            });
           

            function adjustTime(hours:number, minutes:number, seconds:number) {
                
                let adjustedHours = hours;
                let adjustedMinutes = minutes;
                let adjustedSeconds = seconds;
              
                // Check and adjust seconds
                if (adjustedSeconds >= 60) {
                  const additionalMinutes = Math.floor(adjustedSeconds / 60);
                  adjustedMinutes += additionalMinutes;
                  adjustedSeconds %= 60;
                }
              
                // Check and adjust minutes
                if (adjustedMinutes >= 60) {
                  const additionalHours = Math.floor(adjustedMinutes / 60);
                  adjustedHours += additionalHours;
                  adjustedMinutes %= 60;
                }
                
                return (adjustedHours+":"+(adjustedMinutes<10? "0"+adjustedMinutes : adjustedMinutes)+":"+(adjustedSeconds<10? "0"+adjustedSeconds : adjustedSeconds));
              }
          
            

        
    
    const [dayNumber, dayName]=props.props.label.split(" ")

    return (
    <div className="DayHeader">
     <p className='daynumber'>{dayNumber}</p>
     <div className='dayNameandDuration'><p className='dayName'>{dayName}</p><p className='duration'>{adjustTime(hoursMain,minutesMain,secondsMain)}</p></div>
    </div>
  );
}

export default DayHeader;




