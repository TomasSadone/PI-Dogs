import React from 'react';
import { Tag } from '../Tag/Tag';

export const Tags = ({ temperaments, userCreated }) => {
  console.log(temperaments);
  return (
    <div className='flex wrap gap1'>
      {temperaments.map((temperament) => (
        <Tag
          temperament={userCreated ? temperament.name : temperament}
          key={userCreated ? temperament.id : temperament}
        />
      ))}
    </div>
  );
};
