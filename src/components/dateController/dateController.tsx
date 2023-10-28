import React, { useState } from 'react';
import * as styles from './styles';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { Views } from 'react-big-calendar';

initializeIcons();



const DateController = ({ onNavigate, label}:any) => {

 
    
    const [weekNumber, setWeekNumber]=useState(40)
  return (
    <div style={styles.container}>
     <Icon iconName='ChevronLeftSmall' onClick={()=>onNavigate("PREV")} style={styles.directionIcon}/>
     <Icon iconName='Calendar'  style={styles.calendarIcon}/>
     <p style={styles.date}>{label}</p>
     <p style={styles.date}>•</p>
     <p style={styles.date}>W{weekNumber}</p>
     <Icon iconName='ChromeClose'  style={styles.icon}/>
     <Icon iconName='ChevronRightSmall' onClick={()=>onNavigate("NEXT")}  style={styles.directionIcon}/>
    </div>
  );
};

export default DateController;