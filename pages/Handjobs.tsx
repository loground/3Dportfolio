import DottedButton from '@/components/Shared/DottedButton';
import BuildingCompanyPics from '@/components/Widgets/Building/BuildingCompanyCard';
import InfiniteMenu from '@/components/Widgets/Building/BuildingPlanet';

import React from 'react';

import { useRouter } from 'next/router';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';

const Handjobs = () => {
  const router = useRouter();

  const backToMainPage = () => {
    router.push('/');
  };

  const moveToNextPage = () => {
    router.push('/Footjobs');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Handsground</title>
        <meta name="Handjobs" content="HandsPage" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex flex-row text-white text-lg gap-5 md:gap-10 md:pt-8 align-items-center pt-10 justify-center">
        <button className="hover:text-xl" onClick={backToMainPage}>
          back
        </button>{' '}
        <button className="hover:text-xl" onClick={moveToNextPage}>
          next
        </button>
      </div>
      <div
        className="flex mt-10 mb-10"
        style={{
          backgroundImage: 'url("/skateparks/BuildingBG.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '80%',
          height: '400px',
        }}>
        <p className="flex justify-center text-white text-l md:text-xl xl:text-xl xl:mt-40 m-15 mt-40 ml-3 md:m-16">
          Building Is hella fun, I loved it a lot. Best times with best people creating something
          significant out of nothing is a pure magic. Teamwork, work under the pressure, nighshifts,
          everyday problem-solving. I miss it! Here are some of my works:
        </p>
      </div>
      <h1 className="text-white font-bold text-center text-3xl">
        Swipe the image to see different projects:
      </h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default Handjobs;

const items = [
  {
    image: '/skateparks/xsa/1.jpg',
    title: 'Krasnodar',
    id: 1,
    description: 'Assisted in setting up the original bowl coping.',
  },
  {
    image: '/skateparks/xsa/6.jpg',
    title: 'Simeiz',
    id: 2,
    description: 'Handled the entire concrete build from the ground up.',
  },
  {
    image: '/skateparks/xsa/4.jpg',
    title: 'Armavir',
    id: 3,
    description: 'Led full construction of a custom concrete park with colored surfaces.',
  },
  {
    image: '/skateparks/xsa/3.jpg',
    title: 'Simeiz',
    id: 4,
    description: 'Hand-shaped a custom skate table.',
  },
  {
    image: '/skateparks/xsa/5.jpg',
    title: 'Armavir',
    id: 5,
    description: 'Aerial drone view of the completed Armavir park.',
  },
  {
    image: '/skateparks/xsa/2.jpg',
    title: 'Simeiz',
    id: 6,
    description: 'Installed copings on a custom-built table.',
  },
  {
    image: '/skateparks/rampstroy/1.jpg',
    title: 'Moscow',
    id: 7,
    description:
      'Part of the "Moscow Seasons" wooden skatepark series with integrated concrete features.',
  },
  {
    image: '/skateparks/rampstroy/6.jpg',
    title: 'Moscow',
    id: 8,
    description: 'Another piece from the "Moscow Seasons" modular skatepark series.',
  },
  {
    image: '/skateparks/rampstroy/3.jpg',
    title: 'Moscow',
    id: 10,
    description:
      'Project from the wooden skatepark series with concrete elements for "Moscow Seasons".',
  },
  {
    image: '/skateparks/rampstroy/4.jpg',
    title: 'Moscow',
    id: 9,
    description: 'Continuation of the "Moscow Seasons" series — wood and concrete hybrid build.',
  },
  {
    image: '/skateparks/rampstroy/2.jpg',
    title: 'Moscow',
    id: 11,
    description:
      'Part of the wooden skatepark lineup for "Moscow Seasons" with concrete transitions.',
  },
  {
    image: '/skateparks/nbd/6.jpg',
    title: 'Moscow',
    id: 12,
    description: 'Complete concrete skatepark built from scratch.',
  },
  {
    image: '/skateparks/nbd/4.jpg',
    title: 'Moscow',
    id: 13,
    description: 'Legend grinding, 532.',
  },
  {
    image: '/skateparks/nbd/3.webp',
    title: 'Nizhny Novgorod',
    id: 14,
    description: 'Red concrete skatepark constructed from scratch.',
  },
  {
    image: '/skateparks/moses/1.jpeg',
    title: 'Kapotnya',
    id: 15,
    description: 'Built a modular wooden skatepark.',
  },
  {
    image: '/skateparks/moses/2.jpg',
    title: 'Kapotnya',
    id: 16,
    description: 'Another view of the modular wooden skatepark.',
  },
  {
    image: '/skateparks/moses/3.jpeg',
    title: 'Kapotnya',
    id: 17,
    description: 'Yet another angle of the wooden modular setup.',
  },
  {
    image: '/skateparks/moses/5.png',
    title: 'Saint Petersburg',
    id: 18,
    description: 'Custom-built wooden halfpipe.',
  },
  {
    image: '/skateparks/moses/4.jpg',
    title: 'Saint Petersburg',
    id: 19,
    description: 'Funbox design with multiple quarterpipes.',
  },
];
