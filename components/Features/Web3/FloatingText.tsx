import React, { useEffect, useRef } from 'react';
import styles from '@/styles/FloatingText.module.css';
import { useAnimate } from 'framer-motion';
import DottedButton from '../../Shared/DottedButton';
import NFTCard from './NFTCard';
import { useRouter } from 'next/router';
import ArtsCarousel from './ArtsCarousel';

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
        className="mt-20 px-2 py-2 md:mt-16 xl:mt-16 lg:mt-16  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30 lg:p-5"
        id="first_button">
        <DottedButton text={'What about it?'} action={handleAnimate1stButton} />
      </div>
      <div
        className="mt-20 px-2 py-2 md:mt-16 xl:mt-16 lg:mt-16 overflow-hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:p-5   z-20"
        id="second_button">
        <DottedButton text={'NFT Journey'} action={handleAnimate2ndButton} />
      </div>
      <div
        className="mt-10 px-2 py-2 md:mt-16 xl:mt-16 lg:mt-16 overflow-hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:p-5 z-10 "
        id="nft_button">
        <DottedButton text={'Move to Marketing'} action={moveToMarketing} />
      </div>

      <span
        id="main_header"
        className={` overflow-hidden text text-white text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-[-15deg] z-6 ${styles.baseAnim} ${styles.text_stroke2}`}>
        {`WEB 3.0`}
      </span>
      {[...Array(10)].map((_, idx) => (
        <span
          key={idx}
          id="main_header"
          ref={(el) => el && textRefs.current.push(el)}
          className={` overflow-hidden text text-white text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-[-15deg] z-5 ${styles.baseAnim} ${styles.text_stroke}`}>
          {`WEB 3.0`}
        </span>
      ))}

      <div
        className={`absolute left-1/2 pt-10 transform -translate-x-1/2 top-[40%] md:top-[40%] z-50 ${
          isAnimationComplete ? 'opacity-1 flex' : 'opacity-0 hidden'
        }`}
        id="nftCardContainer">
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
            {NFTCards.map((card, idx) => (
              <div key={idx} className="flex-shrink text-black mt-10">
                <NFTCard name={card.name} link={card.link} img={card.img} />
              </div>
            ))}
          </div>
          <h1 className="text-3xl">Some of the arts👇</h1>
          <div className="w-screen h-[100%]">
            <ArtsCarousel />
          </div>
        </div>
      </div>

      <div>
        <h3
          id="third_text"
          className="absolute bottom-[80%] lg:bottom-[80%] select-none overflow-hidden text-white text-l text-center opacity-0 xl:text-2xl md:text-xl p-4 lg:mr-[15%] xl:mr-[20%]">
          - Got into NFT space as an artist doing arts myself and curating arts of my wife.
          <br />
          - Participated in several collection such as: Cryptobatz by Ozzy Osborne, Jungle Bay,
          Toweli Rarecards.
          <br />
          - Showcased in Beeple's art gallery
          <br />
          - Participated in Rare Pepes exhibition in Bali
          <br />
          - Got art featured on main page of Exchange.art
          <br />- Created over 50 arts for different memecoins projects on Solana, Base and Eth
        </h3>
      </div>

      <div className=" px-10 mt-[10%] md:mt-[22%] lg:mt-10 xl:mt-6 absolute lg:top-[75%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1
          id="first_text"
          className="overflow-hidden pt-40  md:text-2xl lg:mt-10 md:mt-0 xl:mt-10 select-none relative text-white text-2xl opacity-0 md:p-10 md:pt-20 lg:p-10">
          <span className="font-bold text-pink-200">2021</span> got into web3.
          <br />
          <span className="font-bold text-pink-300">2022</span> sold first nft.
          <br />
          <span className="font-bold text-pink-400">2023</span> joined defi startup on Algorand.
          <br />
          <span className="font-bold text-pink-500">2024</span> won 2 grants.
          <br />
          <span className="font-bold text-pink-600">2025</span> will see what it brings
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
