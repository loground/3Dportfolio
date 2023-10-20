import React from 'react';
import Hero from '@/components/Hero';
import TrippyScroll from '@/components/TrippyScroll';
import Skills from '@/components/Skills';
import PasswordInput from '@/components/PasswordInput';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='relative'>
        <Hero/>
      </div>
      <div className='relative'>
        <TrippyScroll/>
        <h1 className='text-white font-xl text-5xl mt-2'>
        More about me:
        </h1>
        {isAuthenticated ? (
         <Skills/>
        ) : (
          <PasswordInput onPasswordCorrect={setIsAuthenticated} />
        )}
        </div>
    </div>
  );
};

export default Home;
