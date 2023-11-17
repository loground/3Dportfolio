import React from 'react';
import Hero from '@/components/Features/MainPage/Hero';
import TrippyScroll from '@/components/Widgets/MainPage/TrippyScroll';
import PasswordInput from '@/components/Widgets/MainPage/PasswordInput';
import Socials from '@/components/Widgets/Socials';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Widgets/Navbar';

const Home = () => {
  const Skills = dynamic(() => import('@/components/Features/MainPage/Skills'), { ssr: false });
  const [isClient, setIsClient] = React.useState(false);
  const isBrowser = typeof window !== 'undefined';
  const storedAuth = isBrowser ? sessionStorage.getItem('isAuthenticated') : null;
  const initialAuthState = storedAuth ? JSON.parse(storedAuth) : false;

  const [isAuthenticated, setIsAuthenticated] = React.useState(initialAuthState);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }
  }, [isAuthenticated, isClient]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <TrippyScroll />
        <h1 className="text-white font-xl text-5xl mt-2 pl-5 md:pl-0 md:text-6xl lg:pl-0">
          More about me:
        </h1>
      </div>
      {isClient && (
        <div className="relative">
          {isAuthenticated ? <Skills /> : <PasswordInput onPasswordCorrect={setIsAuthenticated} />}
        </div>
      )}
      <Socials />
    </div>
  );
};

export default Home;
