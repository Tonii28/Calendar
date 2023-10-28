import React from "react";

import './styles.css';
import { Flex, Text } from "@chakra-ui/react";
import { EventType, EVENT_TYPE_COLORS, EVENT_TYPE_TEXT_COLORS } from "../../constants/BigCalendar.constants";

export default function CustomEvent(event:any) {
const giveMeDuration=(time1:string, time2:string)=>{
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

// Display the duration
return (hours+":"+(minutes<10? "0"+minutes : minutes)+":"+(seconds<10? "0"+seconds : seconds))
}
 
const giveMeEventColor=(type: any)=>{
if(type==EventType.PCT16){
  return EVENT_TYPE_COLORS.PCT16
}else if(type==EventType.PCT18){
  return EVENT_TYPE_COLORS.PCT18
}else if(type==EventType.AGTENG){
  return EVENT_TYPE_COLORS.AGTENG
}else if(type==EventType.AGTHRM){
  return EVENT_TYPE_COLORS.AGTHRM
}
}

const giveMeTypeColor=(type: any)=>{
  if(type==EventType.PCT16){
    return EVENT_TYPE_TEXT_COLORS.PCT16
  }else if(type==EventType.PCT18){
    return EVENT_TYPE_TEXT_COLORS.PCT18
  }else if(type==EventType.AGTENG){
    return EVENT_TYPE_TEXT_COLORS.AGTENG
  }else if(type==EventType.AGTHRM){
    return EVENT_TYPE_TEXT_COLORS.AGTHRM
  }
}


return (
  <div
  className="dobar" style={{backgroundColor:(giveMeEventColor(event.props.data.type))}}
>
  <div className="pomocni">
 <p className="dobartekst" >{event.props.data.description} (id: {event.props.data.id})</p>
 <p className="dobartekst1" style={{color: (giveMeTypeColor(event.props.data.type))}}>{event.props.data.type}</p>
 </div>
 <p className="dobartekst2">{giveMeDuration(event.props.start, event.props.end)}</p>
</div>
  );
}