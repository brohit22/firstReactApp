import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const Card = ({ data, refernce }) => {
  return (
    <motion.div
      drag
      dragConstraints={refernce}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 300 }}
      className=' relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex justify-between items-center px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='flex items-center justify-center w-7 h-7 bg-zinc-600 rounded-full'>
            {data.close ? (
              <MdClose />
            ) : (
              <MdOutlineFileDownload size={'.8em'} color='#fff' />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === 'blue' ? 'bg-blue-500' : 'bg-green-500'
            } flex items-center justify-center`}
          >
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
