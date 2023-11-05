import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Header({ grouping, setGrouping, ordering, setOrdering}) {
  const [display, setDisplay] = useState(false);


  return (
    <div className='header'>
      <div className='dropdown' onClick={() => {
        setDisplay(!display);
      }}>
        <FontAwesomeIcon icon={faSliders}/>
        Display
        <FontAwesomeIcon icon={display ? faAngleUp : faAngleDown}/>
      </div>
      {
        display &&
        <div className='dropdown-content'>
          <div className='element'>
            <span>Grouping</span>
            <select value={grouping} onChange={e => {
              setGrouping(e.target.value);
              setDisplay(false);
            }}>
              <option value='status' name='status'>Status</option>
              <option value='user' name='user'>User</option>
              <option value='priority' name='priority'>Priority</option>
            </select>
          </div>
          <div className='element'>
            <span>Ordering</span>
            <select value={ordering} onChange={e => {
              setOrdering(e.target.value);
              setDisplay(false);
            }}>
              <option value='priority'>Priority</option>
              <option value='title'>Title</option>
            </select>
          </div>
        </div>
      }
    </div>
  );
}

export default Header;
