import React from 'react';
import Card from '../card/card';

const Slide = ({ title, items, users }) => {
  return (
    <div className='slide'>
      <div className='title'>
        <span>{title}</span>
      </div>
        {items.map((item, index) => (
          <Card 
            key={index}
            users={users}
            id={item.id}
            title={item.title}
            tag={item.tag}
            userId={item.userId}
            status={item.status}
            priority={item.priority}
          />
        ))}
    </div>
  );
};

export default Slide;
