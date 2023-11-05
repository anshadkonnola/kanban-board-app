import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './card.css';
import { priorityIcons, statusIcons } from '../constants';

function Card({users, id, title, tag, userId, status, priority}) {
  const {available, color} = users.find(user => user.id === userId);
  const grouping = window.localStorage.getItem('grouping');
  return (
    <div className="card">
      <div className="card-header">
        <div className='id'>{id}</div>
        {grouping !== 'user' && <div className='user'>
          <FontAwesomeIcon
            icon={faUserCircle}
            color={color}
          />
          <span className={`circle ${available ? 'green': 'gray'}`}></span>
        </div>}
      </div>
      <div className='card-body'>
        {grouping !== 'status' && statusIcons[status]}
        <p className='title'>
          {title}
        </p>
      </div>
      <div className='tags'>
          {grouping !== 'priority' && priorityIcons[priority]}
        {tag.map((t, idx) => <button key={idx}>
          <div className='tag'>{t}</div>
        </button>)}
      </div>
    </div>
  );
}

export default Card;
