import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Widgets/Navbar';
import Image from 'next/image';

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
      <div className="flex flex-col justify-center gap-10 items-center">
        <h1 className="text-2xl text-center"> Nothing to see here, but click on pepe</h1>
        <Image
          src="/404/404.gif"
          alt="404"
          width={300}
          height={400}
          onClick={getBack}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Facejob;
