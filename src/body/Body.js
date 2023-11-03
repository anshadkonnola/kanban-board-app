import React from 'react';
import './Body.css';
import Slide from './slide';
import { priorityLevels, statusLevels } from '../constants';

function Body({ grouping, ordering, tickets, users }) {
  if(ordering === 'priority') tickets.sort((a, b) => a.priority - b.priority);
  else tickets.sort((a, b) => a.title.localeCompare(b.title));

  if(grouping === 'priority') {
    return (
      <div className='body'>
        {[4, 3, 2, 1, 0].map((level, idx) => {
          return (
            <Slide 
              key={idx}
              title={priorityLevels[level]}
              items={tickets.filter(ticket => ticket.priority === level)}
              users={users}
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
              title={user.name}
              items={tickets.filter(ticket => ticket.userId === user.id)}
              users={users}
            />
          );
        })}
      </div>
    );
  }
  else { // grouping === 'status'
    return (
      <div className='body'>
        {statusLevels.map((status, idx) => {
          return (
            <Slide 
              key={idx}
              title={status}
              items={tickets.filter(ticket => ticket.status === status)}
              users={users}
            />
          );
        })}
      </div>
    );
  }
}

export default Body;
