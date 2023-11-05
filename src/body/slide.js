import React from 'react';
import Card from '../card/card';

const Slide = ({ title, items, users, grouping }) => {
  return (
    <div className='slide'>
        {title}
        {items.map((item, index) => (
          <Card 
            key={index}
            users={users}
            grouping={grouping}
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
