import React from 'react';

import { useRouter } from 'next/router';
import FallingText from '../components/Features/Skate/SkateText';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import SurfTrip from '@/components/Features/Skate/Surf3d';

const Footjobs = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backToMainPage = () => {
    router.push('/');
  };

  const backToHandjob = () => {
    router.push('/handworks');
  };

  const moveToNextPage = () => {
    router.push('/brainworks');
  };

  return (
    <div className="max-w-4xl  mx-auto">
      <Head>
        <title>Legsground</title>
        <meta name="Skate and surf" content="Skate and surf" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex text-white text-lg  flex-row gap-5 md:gap-20 pt-10 justify-center">
        <button className="hover:text-xl" onClick={backToMainPage}>
          {' '}
          main{' '}
        </button>
        <button className="hover:text-xl" onClick={backToHandjob}>
          {' '}
          back{' '}
        </button>
        <button className="hover:text-xl" onClick={moveToNextPage}>
          {' '}
          next{' '}
        </button>
      </div>
      <div className="pt-4 h-[30vh] md:h-[50vh]">
        <FallingText
          text={`I enjoy surfing and skateboarding a lot. I got support from Magamaev and Fastlads. Participated in several projects: Жена, Terima Kasih, Papan Goreng, Telur Kampung. Created a few shapes of skateboards. I also love surfing finless!  `}
          highlightWords={{
            Magamaev: 'https://magamaevskate.com',
            Fastlads: 'https://www.instagram.com/fastlads_skaterails/',
            Жена: 'https://www.youtube.com/watch?v=7qn10-Va6F0',
            Terima: 'https://www.youtube.com/watch?v=8oSHtIDBQ0I',
            Kasih: 'https://www.youtube.com/watch?v=8oSHtIDBQ0I',
            Papan: 'https://www.youtube.com/watch?v=z9bbkyvDB0k',
            Goreng: 'https://www.youtube.com/watch?v=z9bbkyvDB0k',
            Telur: 'https://www.youtube.com/watch?v=Ji_8outi7Qk',
            Kampung: 'https://www.youtube.com/watch?v=Ji_8outi7Qk',
            shapes: 'https://magamaevskate.com/shop/SMARTWOJAKDECK-2',
          }}
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.4}
          fontSize={isMobile ? '1rem' : '1.6rem'}
          mouseConstraintStiffness={0.9}
        />
      </div>
      <div className="flex justify-center align-items-center"></div>
      <SurfTrip />
    </div>
  );
};

export default Footjobs;
