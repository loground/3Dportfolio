import React from 'react';
import Hero from '@/components/Features/MainPage/Hero';
import TrippyScroll from '@/components/Widgets/MainPage/TrippyScroll';
import PasswordInput from '@/components/Widgets/MainPage/PasswordInput';
import Socials from '@/components/Widgets/Socials';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import LetterGlitch from '../components/Widgets/MainPage/TrippyPassword';
import { motion } from 'framer-motion';

const Home = () => {
  const Skills = dynamic(() => import('@/components/Features/MainPage/Skills'));
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
      <Head>
        <title>Logroundfolio</title>
        <meta name="Main" content="MainPage" />
        <link rel="icon" href="/favic.png" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        {/* <TrippyScroll /> */}
        <LetterGlitch />
        <div className="flex justify-center items-center">
          {isClient &&
            (isAuthenticated ? (
              <h1 className="text-white w-[100%] pt-10 pb-10 font-xl text-5xl mt-2 pl-5 md:text-5xl bg-zinc-900 rounded-2xl p-2">
                Unlocked!🎉 Check this out 👇
                <p className="pt-5 text-3xl">That is what i did with my:</p>
              </h1>
            ) : (
              <h1 className="text-white pt-20 pb-10 md:pl-20 font-xl text-5xl mt-2 pl-5 md:text-6xl bg-zinc-900 rounded-2xl p-2">
                Enter password below to 🔒 unlock more content
              </h1>
            ))}
        </div>
      </div>
      {isClient && (
        <div className="relative">
          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 4, ease: [0.25, 0.1, 0.25, 1.0] }}>
              <Skills />
            </motion.div>
          ) : (
            <PasswordInput onPasswordCorrect={setIsAuthenticated} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
