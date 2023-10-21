import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Socials = () => {
  return (
    <div>
      <p className='text-white text-2xl ml-[87%]'> My socials:</p>
      <div className='flex flex-row mt-1 ml-[75%] gap-5'>
        <IconContext.Provider value={{ color: 'white', className: '', size: '3em' }}>
              <FaLinkedinIn />
              <FaInstagramSquare />
              <FaTwitterSquare />
              <FaGithubSquare />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Socials;
