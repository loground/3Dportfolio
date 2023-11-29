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
              <mark className="px-2 text-white bg-black-600 rounded dark:bg-black">
                {' '}
                Marketing{' '}
              </mark>
              Journey
            </h1>
          </div>
          <p className="text-2xl text-left text-black mt-10">
            After finishing the university with marketing major I came back to homeland and got into
            Social Media Marketing. Started from online courses and got first freelance clients.
          </p>
          <p className="text-2xl text-left text-black mt-10">
            In 2019 I have met with my friends from the same industry. We decided to get together
            and started our own agency named <br></br>
            <em className="font-bold bg-white"> OGON - (FIRE).</em>
          </p>
          <p className="text-2xl text-left text-black mt-10">
            We operated for 6 months as a company and then decided to stop, as we had personal
            diversity about work. That was the time when I left marketing and started working more
            in building.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row gap-20">
              <button
                onClick={burnThePage}
                className="bg-gradient-to-b from-yellow-500 via-red-500 to-red-700 text-white py-4 px-6 rounded-md shadow-md hover:from-red-700 hover:to-yellow-500 transition duration-300 mt-5 xl:py-4 xl:mb-2">
                Burn That🔥
              </button>
              <DottedButton text="Back to main" action={backToMainPage} />
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
