import React from 'react';
import './Body.css';
import Slide from './slide';
import { priorityLevels, statusLevels, priorityIcons, statusIcons } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUserCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

function Body({ grouping, ordering, tickets, users }) {
  if(ordering === 'priority') tickets.sort((a, b) => b.priority - a.priority);
  else tickets.sort((a, b) => a.title.localeCompare(b.title));

  if(grouping === 'priority') {
    return (
      <div className='body'>
        {[4, 3, 2, 1, 0].map((level, idx) => {
          return (
            <Slide 
              key={idx}
              title={
                <div className='title-container'>
                  {priorityIcons[level]}
                  <div className='title-content'>
                    {priorityLevels[level]}&nbsp;&nbsp;&nbsp;&nbsp;
                    {tickets.filter(ticket => ticket.priority === level).length}
                  </div>
                  <div className='title-icons'>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              }
              items={tickets.filter(ticket => ticket.priority === level)}
              users={users}
              grouping={grouping}
            />
          );
        })}
      </div>
    );
  }
  else if(grouping === 'user') {
    return (
      <div className='body'>
        {users.map((user, idx) => {
          return (
            <Slide 
              key={idx}
              title={
                <div className='title-container'>
                  <div className='user'>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      color={user.color}
                    />
                    <span className={`circle ${user.available ? 'green': 'gray'}`}></span>
                  </div>
                  <div className='title-content'>
                    {user.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    {tickets.filter(ticket => ticket.userId === user.id).length}
                  </div>
                  <div className='title-icons'>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              }
              items={tickets.filter(ticket => ticket.userId === user.id)}
              users={users}
              grouping={grouping}
            />
          );
        })}
      </div>
    );
  }
  else if(grouping === 'status'){
    return (
      <div className='body'>
        {statusLevels.map((status, idx) => {
          return (
            <Slide 
              key={idx}
              title={
                <div className='title-container'>
                  {statusIcons[status]}
                  <div className='title-content'>
                    {status}&nbsp;&nbsp;&nbsp;&nbsp;
                    {tickets.filter(ticket => ticket.status === status).length}
                  </div>
                  <div className='title-icons'>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              }
              items={tickets.filter(ticket => ticket.status === status)}
              users={users}
              grouping={grouping}
            />
          );
        })}
      </div>
    );
  }
  else return null;
}

export default Body;
