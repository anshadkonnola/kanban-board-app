import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './card.css';

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <div className='id'>CAM-11</div>
        <div className='user'>
          <FontAwesomeIcon icon={faUserCircle}/>
          <span className='circle green'></span>
        </div>
      </div>
      <p className='title'>
        <span className='status'></span>
        Conduct Security Vulnerability Assessment
        </p>
      <div className='tags'>
          <FontAwesomeIcon icon={faCircleExclamation}/>
        <button>
          <span className='circle gray'></span>
          <div className='tag'>Feature Reuest</div>
        </button>
      </div>
    </div>
  );
}

export default Card;
