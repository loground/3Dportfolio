import React from 'react';
import styles from '@/styles/BurningText.module.css';
import { useRouter } from 'next/router';
import DottedButton from '@/components/DottedButton';

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
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <mark className="px-2 text-white bg-black-600 rounded dark:bg-black"> Marketing </mark>
            Journey
          </h1>
          <p className="text-2xl text-left mt-20">
            After finishing the university with marketing major I decided to come back to homeland
            and get deeper into Social Media Marketing. My journey started from online courses and
            led to first freelance clients.
          </p>
          <p className="text-2xl text-left mt-10">
            In 2019 I have met with my friends from the same industry. They were working with
            different big clients and we decided to get together and started our own agency named
            <em className="font-bold bg-white"> FIRE.</em>
          </p>
          <p className="text-2xl text-left mt-10">
            We operated for 6 months as a company and then decided to give it away as we had
            personal diversity about different thing in work. That was the time when I left
            marketing and all and started working more in building of skateparks
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row gap-20">
              <button
                onClick={burnThePage}
                className="bg-gradient-to-b from-yellow-500 via-red-500 to-red-700 text-white py-4 px-6 rounded-md shadow-md hover:from-red-700 hover:to-yellow-500 transition duration-300 mt-5">
                Burn That Information🔥
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
