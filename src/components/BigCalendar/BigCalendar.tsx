import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import "./styles.css"
import { EVENTS } from '../../constants/BigCalendar.constants';
import CustomEvent from '../CustomEvent/CustomEvent';
import DayHeader from '../DayHeader/DayHeader';
import MyDropdown from '../myDropdown/myDropdown';
import CustomToolbar from '../myToolbar/Toolbar';

const localizer = momentLocalizer(moment)

function BigCalendar() {

  const [currentView, setCurrentView] = useState('month');

  const handleViewChange = (view:any) => {
    setCurrentView(view);
  };
const components={
    event: (props:any)=>{
      
        return <CustomEvent props={props.event}/>
    },
    week: {
      header: (props:any)=>{
        return <DayHeader props={props}/>
      }, 
      toolbar: 
        
        CustomToolbar
      
    }
}


  return (
    <div className="App">
     <Calendar
      localizer={localizer}
      events={EVENTS}
      showAllEvents={true}
      defaultDate={new Date(2023, 9, 1)}
      step={30}
      timeslots={2}
      min={new Date(1972, 0, 1, 8, 0, 0)}
      max={new Date(1972, 0, 1, 18, 0, 0)}
      components={components}
    />
    </div>
  );
}

export default BigCalendar;




