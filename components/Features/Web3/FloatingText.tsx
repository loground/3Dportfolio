import React, { useEffect, useRef } from 'react';
import styles from '@/styles/FloatingText.module.css';
import { useAnimate } from 'framer-motion';
import DottedButton from '../../Shared/DottedButton';
import NFTCard from './NFTCard';
import { useRouter } from 'next/router';

const NFTCards = [
  {
    name: 'Foundation',
    img: '/crypto/nft.png',
    link: 'https://foundation.app/@vorksee',
  },
  {
    name: 'Objkt',
    img: '/crypto/rap.jpg',
    link: 'https://objkt.com/profile/tz1fJBkyZaj8FF54j3Brw66gFfFeDTZEF9By/created',
  },
  {
    name: 'Opensea',
    img: '/crypto/frogged.png',
    link: 'https://opensea.io/Vorksee/created',
  },
];

const FloatingText: React.FC = () => {
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const [scope, animate] = useAnimate();
  const router = useRouter();
  const [isAnimationComplete, setAnimationComplete] = React.useState(false);

  const moveToMarketing = () => {
    router.push('/Brainjobs/Marketing');
  };

  const handleAnimate1stButton = async () => {
    await animate('#main_header', { opacity: 0 }, { duration: 1.5 });
    await animate('#img', { rotate: '360deg', opacity: 1 });
    await animate('#first_text', { opacity: 1 });
    await animate('#first_button', { opacity: 0, y: '-200px' }, { duration: 1 });
    await animate('#second_button', { opacity: 1 });
  };

  const handleAnimate2ndButton = async () => {
    await animate('#second_button', { opacity: 0, y: '-200px' });
    await animate('#first_text', { opacity: 0 });
    await animate('#img', { y: '200px', opacity: 0 });
    await animate('#third_text', { y: '200px', opacity: 1 });
    await animate('#nftCardContainer', { opacity: 1 });
    await setAnimationComplete(true);
    await animate('#nft_button', { opacity: 1 });
  };

  useEffect(() => {
    const allText = textRefs.current;

    allText.forEach((el, idx) => {
      let delay = 0.3 * idx;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = `${allText.length - idx}`;
      el.classList.add(styles.baseAnim);
    });
  }, []);

  return (
    <div className={styles.wrapper} id="wrapper" ref={scope}>
      <div
        className="mt-10 md:mt-16 xl:mt-16 lg:mt-16  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30 lg:p-5"
        id="first_button">
        <DottedButton text={'What about it?'} action={handleAnimate1stButton} />
      </div>
      <div
        className="mt-10 md:mt-16 xl:mt-16 lg:mt-16 overflow-hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:p-5   z-20"
        id="second_button">
        <DottedButton text={'what happened next?'} action={handleAnimate2ndButton} />
      </div>
      <div
        className="mt-10 md:mt-16 xl:mt-16 lg:mt-16 overflow-hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:p-5 z-10 "
        id="nft_button">
        <DottedButton text={'what else you can?'} action={moveToMarketing} />
      </div>

      <span
        id="main_header"
        className={`select-none overflow-hidden text text-white text-[3rem] md:text-[6rem] lg:text-[8rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-50px] rotate-[-15deg] z-6 ${styles.baseAnim} ${styles.text_stroke2}`}>
        {`WEB 3.0`}
      </span>
      {[...Array(10)].map((_, idx) => (
        <span
          key={idx}
          id="main_header"
          ref={(el) => el && textRefs.current.push(el)}
          className={`select-none overflow-hidden text text-white text-[3rem] md:text-[6rem] lg:text-[8rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-50px] rotate-[-15deg] z-5 ${styles.baseAnim} ${styles.text_stroke}`}>
          {`WEB 3.0`}
        </span>
      ))}

      <div
        className="absolute left-1/2 pt-10 transform -translate-x-1/2 top-[40%] md:top-[40%] opacity-0 z-50 flex flex-col xl:flex-row md:flex-row lg:flex-row justify-center gap-6 lg:gap-10"
        id="nftCardContainer"
        style={{ pointerEvents: isAnimationComplete ? 'auto' : 'none' }}>
        {NFTCards.map((card, idx) => (
          <div key={idx} className="flex-shrink z-60 text-black mt-10">
            <NFTCard name={card.name} link={card.link} img={card.img} />
          </div>
        ))}
      </div>

      <h3
        id="third_text"
        className="absolute select-none overflow-hidden text-white text-l text-center opacity-0 xl:text-2xl md:text-2xl p-4 lg:mr-[15%] xl:mr-[20%]">
        My friends took me and wife into NFTs and we started illustrating a lot. Since then we are
        part-time illustrators for different collections and selling arts ourselves. I did:
        generated the ideas, marketing and communication, drew some arts myself. While my wife is
        full-time into illustration.
      </h3>

      <div className="md:mt-[22%] lg:mt-6 xl:mt-6 absolute lg:top-[75%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1
          id="first_text"
          className="overflow-hidden pt-40 text-xl md:text-2xl lg:mt-10 md:mt-0 xl:mt-10 select-none relative text-white text-2xl opacity-0 md:p-10 md:pt-20 lg:p-10">
          Since 2021 I started digging about crypto-tech and found out how interesting it is. And
          since then I couldnt stop. I kept learning using YouTube and books, I still do that.
        </h1>
      </div>

      <div className="overflow-hidden pt-10 md:pt-40 select-none relative flex justify-center items-center h-full z-5">
        <img
          src="/crypto/code.gif"
          id="img"
          className="select-none relative mt-[20%] opacity-0 lg:w-[50%] md:mt-[0%] xl:mt-[0%] lg:h-[50%] md:w-[45%] md:h-[45%] z-7"></img>
      </div>
    </div>
  );
};

export default FloatingText;
