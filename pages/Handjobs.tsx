import DottedButton from '@/components/DottedButton';
import BuildingCompanyPics from '@/components/BuildingCompanyCard';

import React from 'react';

import { useRouter } from 'next/router';

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
      <div className="flex flex-row gap-5 align-items-center pt-10 justify-center">
        <DottedButton text="Go back to main page" action={backToMainPage} />
        <DottedButton text="Move on to next page" action={moveToNextPage} />
      </div>
      <div>
        <p className=" flex justify-center text-white text-xl m-20">
          Building skateparks is more than just constructing concrete structures; it is a passion
          that fuels my creativity and determination. There is something incredibly fulfilling about
          shaping spaces where people, especially skateboarders, can express themselves freely.
          Every curve and slope designed is a canvas for endless possibilities, encouraging riders
          to push their limits and explore the bounds of their abilities. So here are the projects I
          worked with:
        </p>
      </div>
      <div>
        <p
          className="text-white font-xl text-4xl mt-10 ml-7 mt-2 md:ml-7 lg:ml-7 hover:cursor-pointer hover:text-gray-500"
          onClick={() => window.open('https://xsaramps.com/projects/', '_blank')}>
          XSA
        </p>
        <p className="text-white font-m text-xl ml-7 mt-2 md:ml-7 lg:ml-7 ">
          Building a concrete skatepark projects. Was involved into several projects in: Krasnodar,
          Simeiz and Armavir. All parks were built from scratch.
        </p>
        <div className="flex flex-row mt-2">
          <p className="text-white font-m text-2xl mt-1 ml-7">Skills:</p>
          <p className="text-white font-m text-xl mt-2 ml-2">
            wood processing, concrete work, planning, reading documentation, communication
          </p>
        </div>
        <BuildingCompanyPics card={cardXSA} />
      </div>
      <div>
        <p
          className="text-white font-xl text-4xl mt-10 ml-7 mt-2 md:ml-7 lg:ml-7 hover:cursor-pointer hover:text-gray-500"
          onClick={() => window.open('https://rampstroy.com', '_blank')}>
          Rampstroy
        </p>
        <p className="text-white font-m text-xl ml-7 mt-2 md:ml-7 lg:ml-7 ">
          Building a wooden skatepark projects with concrete elements. Was involved as regular
          worker with wooden constructions and as project manajer for concrete part. All parks were
          built for project called Moscow Seasons.
        </p>
        <div className="flex flex-row mt-2">
          <p className="text-white font-m text-2xl mt-1 ml-7">Skills:</p>
          <p className="text-white font-m text-xl mt-2 ml-2">
            wood processing, concrete work, planning, personnel Management, communication, material
            management, reports making.
          </p>
        </div>
        <BuildingCompanyPics card={cardRampstroy} />
      </div>
      <div>
        <p
          className="text-white font-xl text-4xl mt-10 ml-7 mt-2 md:ml-7 lg:ml-7 hover:cursor-pointer hover:text-gray-500"
          onClick={() => window.open('https://xsaramps.com/projects/', '_blank')}>
          NBD
        </p>
        <p className="text-white font-m text-xl ml-7 mt-2 md:ml-7 lg:ml-7 ">
          Building several concrete skateparks projects. Using colored concrete.
        </p>
        <div className="flex flex-row mt-2">
          <p className="text-white font-m text-2xl mt-1 ml-7">Skills:</p>
          <p className="text-white font-m text-xl mt-2 ml-2">
            wood processing, concrete work, planning, reading documentation, communication
          </p>
        </div>
        <BuildingCompanyPics card={cardNBD} />
      </div>
      <div>
        <p
          className="text-white font-xl text-4xl mt-10 ml-7 mt-2 md:ml-7 lg:ml-7 hover:cursor-pointer hover:text-gray-500"
          onClick={() => window.open('https://xsaramps.com/projects/', '_blank')}>
          Moses
        </p>
        <p className="text-white font-m text-xl ml-7 mt-2 md:ml-7 lg:ml-7 ">
          Wooden outdoorn and indoor skateparks
        </p>
        <div className="flex flex-row mt-2">
          <p className="text-white font-m text-2xl mt-1 ml-7">Skills:</p>
          <p className="text-white font-m text-xl mt-2 ml-2">
            wood processing, planning, reading documentation, communication
          </p>
        </div>
        <BuildingCompanyPics card={cardMoses} />
      </div>
      <div className="flex justify-center pb-10">
        <DottedButton text="Move on to next page" action={moveToNextPage} />
      </div>
    </div>
  );
};

export default Handjobs;

const cardXSA = [
  {
    url: '/skateparks/xsa/1.jpg',
    title: 'Krasnodar',
    id: 1,
  },
  { url: '/skateparks/xsa/6.jpg', title: 'Simeiz', id: 2 },
  {
    url: '/skateparks/xsa/4.jpg',
    title: 'Armavir',
    id: 3,
  },
  {
    url: '/skateparks/xsa/3.jpg',
    title: 'Simeiz',
    id: 3,
  },
  {
    url: '/skateparks/xsa/5.jpg',
    title: 'Armavir',
    id: 5,
  },
  {
    url: '/skateparks/xsa/2.jpg',
    title: 'Simeiz',
    id: 6,
  },
];

const cardRampstroy = [
  {
    url: '/skateparks/rampstroy/1.jpg',
    title: 'Moscow',
    id: 1,
  },
  {
    url: '/skateparks/rampstroy/6.jpg',
    title: 'Moscow',
    id: 2,
  },
  {
    url: '/skateparks/rampstroy/4.jpg',
    title: 'Moscow',
    id: 3,
  },
  {
    url: '/skateparks/rampstroy/3.jpg',
    title: 'Moscow',
    id: 4,
  },
  {
    url: '/skateparks/rampstroy/2.jpg',
    title: 'Moscow',
    id: 5,
  },
];

const cardNBD = [
  {
    url: '/skateparks/nbd/6.jpg',
    title: 'Moscow',
    id: 2,
  },
  {
    url: '/skateparks/nbd/4.jpg',
    title: 'Moscow',
    id: 3,
  },
  {
    url: '/skateparks/nbd/3.jpg',
    title: 'Nizhny Novgorod',
    id: 4,
  },
];

const cardMoses = [
  {
    url: '/skateparks/moses/1.jpeg',
    title: 'Kapotnya',
    id: 1,
  },
  {
    url: '/skateparks/moses/2.jpg',
    title: 'Kapotnya',
    id: 2,
  },
  {
    url: '/skateparks/moses/3.jpeg',
    title: 'Kapotnya',
    id: 3,
  },
  {
    url: '/skateparks/moses/5.png',
    title: 'Saint-Petersburg',
    id: 4,
  },
  {
    url: '/skateparks/moses/4.jpg',
    title: 'Saint-Petersburg',
    id: 4,
  },
];
