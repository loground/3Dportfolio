import Navbar from '@/components/Widgets/Navbar';
import React from 'react';
import Head from 'next/head';
import TestPosters from '@/components/Features/Modeling/PhotoGallery';

const items = [
  '/modeling/1.jpg',

  '/modeling/3.jpg',

  '/modeling/5.jpg',
  '/modeling/6.jpg',
  '/modeling/7.jpg',
  '/modeling/8.jpg',
  '/modeling/9.jpg',
  '/modeling/10.jpg',
  '/modeling/11.jpg',
  '/modeling/12.jpg',
  '/modeling/13.jpg',

  '/modeling/15.jpg',
  '/modeling/16.jpg',
  '/modeling/17.jpg',
];

const Facejob = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Modelinground</title>
        <meta name="Modeling" content="modeling" />
      </Head>
      <div style={{ height: '100svh', position: 'relative' }}>
        {/* <FlyingPosters className="" items={items} /> */}
        {/* <TestPosters className="" items={items} /> */}
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
};

export default Facejob;
