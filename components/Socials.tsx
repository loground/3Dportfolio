import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Socials = () => {
  return (
    <div>
      <p className='text-white text-2xl ml-[5%]'> My socials:</p>
      <div className='flex flex-row mt-2 ml-[0%] gap-5'>
        <IconContext.Provider value={{ color: 'white', className: '', size: '3em' }}>
              <Link href='https://www.linkedin.com/in/nikita-voronin-4b6758293/'>
              <FaLinkedinIn />
              </Link>
              <Link href='https://www.instagram.com/loground'>
              <FaInstagramSquare />
              </Link>
              <Link href='https://twitter.com/nickvrnn'>
              <FaTwitterSquare />
              </Link>
              <Link href='https://github.com/loground'>
              <FaGithubSquare />
              </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Socials;
