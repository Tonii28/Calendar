import './App.css';
import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import BigCalendar from './components/BigCalendar/BigCalendar';

const localizer = momentLocalizer(moment)

function App() {
  
  return (
    <div className="App">
   <BigCalendar/>
    </div>
  );
}

export default App;




