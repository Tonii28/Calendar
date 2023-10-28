import React, { useState } from 'react';
import * as styles from './styles';

const MyDropdown = (props:any) => {
  
  const options = [
    'WEEK VIEW',
    'MONTH VIEW',
    'DAY VIEW',
     "AGENDA VIEW"
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleDropdownChange = (event:any) => {
    const [view, view2]=event.target.value.split(" ")
    setSelectedOption(view.toLowerCase());
    props.props(view.toLowerCase())
    
  };

  return (
    <div>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}  style={styles.container}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyDropdown;
