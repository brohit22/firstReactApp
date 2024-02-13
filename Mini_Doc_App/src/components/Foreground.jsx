// Foreground.jsx
import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'Dolor sit amet consectetur',
      filesize: '2.2mb',
      close: true,
      tag: { isOpen: false, tagTitle: 'Download Link', tagColor: 'blue' },
    },
    {
      desc: 'Adipisicing elit sed do eiusmod',
      filesize: '1.8mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Get Link', tagColor: 'blue' },
    },
  ];

  return (
    <div
      ref={ref}
      className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 '
    >
      {data.map((item, index) => (
        <Card key={index} data={item} refernce={ref} />
      ))}
    </div>
  );
};

export default Foreground;
