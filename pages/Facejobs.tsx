import Navbar from '@/components/Widgets/Navbar';
import { ImageTrailHero } from '@/components/Widgets/ImageTrailHero';
import Socials from '@/components/Widgets/Socials';
import React from 'react';
import Head from 'next/head';
import FlyingPosters from '@/components/Features/Modeling/PhotoGallery';

const items = [
  '/modeling/1.png',
  '/modeling/2.PNG',
  '/modeling/3.PNG',
  '/modeling/4.JPG',
  '/modeling/5.JPG',
  '/modeling/6.jpg',
  '/modeling/7.jpg',
  '/modeling/8.jpg',
  '/modeling/9.jpg',
  '/modeling/10.jpg',
  '/modeling/11.jpg',
  '/modeling/12.jpg',
  '/modeling/13.jpg',
  '/modeling/14.jpeg',
  '/modeling/15.jpg',
  '/modeling/16.png',
  '/modeling/17.png',
  '/modeling/18.png',
];

const Facejob = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Modelinground</title>
        <meta name="Modeling" content="modeling" />
      </Head>
      <div style={{ height: '100svh', position: 'relative' }}>
        <FlyingPosters className="" items={items} />
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
};

export default Facejob;
