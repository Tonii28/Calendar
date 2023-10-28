import React from 'react';
import { NavigateAction } from 'react-big-calendar';
import * as styles from './styles';
import DateController from '../dateController/dateController';
import { Icon } from '@fluentui/react';
import MyDropdown from '../myDropdown/myDropdown';


type CustomToolbarProps = {
  onNavigate: (view: NavigateAction, date?: Date) => void;
  label: string;
  onView:any
};

const CustomToolbar: React.FC<CustomToolbarProps> = (props:any) => {

  return (
    <div style={styles.container}>
      <p style={styles.today}>TODAY</p>
      <div style={styles.right}>
      <div style={styles.weekTotalContainer}>
      <p style={styles.weekTotalLabel}>WEEK TOTAL </p>
      <p style={styles.weekTotal}>41:05:33</p>
      </div>
      <DateController onNavigate={props.onNavigate} label={props.label}/>
      <Icon iconName='settings' style={styles.settingsIcon}/>
      <MyDropdown props={props.onView}/>
      </div>
    </div>
  );
};

export default CustomToolbar;