import React from 'react';
import Hero from '@/components/Hero';
import TrippyScroll from '@/components/TrippyScroll';
import Skills from '@/components/Skills';
import PasswordInput from '@/components/PasswordInput';
import Socials from '@/components/Socials';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <TrippyScroll />
        <h1 className="text-white font-xl text-5xl mt-2 pl-5 md:pl-0 lg:pl-0">More about me:</h1>
        {isAuthenticated ? <Skills /> : <PasswordInput onPasswordCorrect={setIsAuthenticated} />}
      </div>
      <Socials />
    </div>
  );
};

export default Home;
