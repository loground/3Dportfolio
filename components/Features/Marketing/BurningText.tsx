import React from 'react';
import styles from '@/styles/BurningText.module.css';
import { useRouter } from 'next/router';
import DottedButton from '@/components/Shared/DottedButton';
import Image from 'next/image';

const BurningText: React.FC = () => {
  const [isBurning, setIsBurning] = React.useState(false);
  const router = useRouter();

  const backToMainPage = () => {
    router.push('/');
  };

  const burnThePage = () => {
    setIsBurning(true);

    // Play the burn sound
    const burnSound = new Audio('/SMM/fire.mp3');
    burnSound.play();

    setTimeout(() => {
      router.push('/Brainjobs/Experience');
    }, 11500);
  };

  return (
    <div
      className={isBurning ? `${styles.content}` : 'h-full xl:h-[100vh] lg:h-[100vh] md:h-[100vh]'}>
      <div className={`${styles.backgroundHighlight}`}></div>

      <div className={`${styles.page}`}>
        <div className={isBurning ? `${styles.highlight}` : ''}></div>
        <div className={`${styles.text}`}>
          <div className="flex flex-row gap-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <mark className="px-2 text-white bg-black-600 rounded dark:bg-black">Marketing</mark>
              Journey
            </h1>
          </div>
          <p className="text-2xl text-left text-black mt-10">
            After finishing course in Marketing, I returned to my homeland and ventured into Social
            Media Marketing. I began by taking online courses and soon landed my first freelance
            clients.
          </p>
          <p className="text-2xl text-left text-black mt-10">
            In 2019, I connected with friends in the industry, and together, we founded our own
            agency, <br />
            <em className="font-bold bg-white">OGON - (FIRE).</em>
          </p>
          <p className="text-2xl text-left text-black mt-10">
            We operated successfully as a team for six months, but eventually, we chose to part ways
            due to differing visions. That experience marked my transition from marketing into a new
            path—working in construction and project building.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row gap-20">
              <DottedButton text="Back to main" action={backToMainPage} />
              <button
                onClick={burnThePage}
                className="bg-gradient-to-b font-bold from-yellow-500 via-red-500 to-red-700 text-white py-8 px-6 rounded-md shadow-md hover:from-red-700 hover:to-yellow-500 transition duration-300  xl:py-4 xl:mb-2">
                Burn That🔥
              </button>
            </div>
          </div>
        </div>
        <div className={isBurning ? `${styles.burn}` : ''}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={`${styles.flame}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurningText;
