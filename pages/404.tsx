import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Widgets/Navbar';

const Facejob = () => {
  const router = useRouter();
  const getBack = () => {
    router.push('/');
  };
  return (
    <div
      className="max-w-4xl mx-auto text-white"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center"> Nothing to see here, but click on pepe</h1>
        <img
          className="w-full h-full hover:cursor-pointer"
          src="/404/404.gif"
          style={{ maxWidth: '100vw', maxHeight: '100vh' }}
          onClick={getBack}></img>
      </div>
    </div>
  );
};

export default Facejob;
