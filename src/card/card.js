import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './card.css';

function Card({users, id, title, tag, userId, status, priority}) {
  const available = users.find(user => user.id === userId).available;
  return (
    <div className="card">
      <div className="card-header">
        <div className='id'>{id}</div>
        <div className='user'>
          <FontAwesomeIcon icon={faUserCircle}/>
          <span className={`circle ${available ? 'green': 'gray'}`}></span>
        </div>
      </div>
      <p className='title'>
        <span className='status'>{status}</span>
        {title}
        </p>
      <div className='tags'>
          <FontAwesomeIcon icon={faCircleExclamation}/>
        {tag.map(t => <button>
          <span className='circle gray'></span>
          <div className='tag'>{t}</div>
        </button>)}
      </div>
    </div>
  );
}

export default Card;
