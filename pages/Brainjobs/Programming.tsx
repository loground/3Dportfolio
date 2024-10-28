import React from 'react';
import { useRouter } from 'next/router';
import { FaGithubSquare } from 'react-icons/fa';
import Navbar from '@/components/Widgets/Navbar';
import Image from 'next/image';
import Head from 'next/head';

const iconStyles = {
  color: 'black',
  fontSize: '4em',
  cursor: 'pointer',
};

const textContent = [
  {
    id: 1,
    content: (
      <div>
        <div className="flex flex-col md:flex-row gap-10 justify-center px-4 py-16 bg-base-200">
          <p className="text-gray">
            Starting February 1st, 2023, I began learning programming. A mentor guided me through
            online courses from Hexlet.io and gave me practical tasks. I first grasped the basics of
            HTML and CSS, then practiced by building layouts from Figma designs. Soon after, I moved
            on to basic JavaScript, learning through Hexlet.io, YouTube, and my mentors advice. My
            days were filled with solving coding exercises and challenges.
          </p>
          <Image
            src="/programming/1.png"
            alt="programming-1"
            width={300}
            height={300}
            className="md:ml-0"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col gap-6 justify-center px-4 py-10 bg-base-200">
        <p className="text-gray">
          Moving forward, I was working on this website and got interested in 3D. I began learning
          basics of three-fiber and found my first paid project in Cometa Team. We worked on
          creation of 3D game on Algorand blockchain that is related to NFT collection where you
          could dance against computer using 3d NFT characters.
        </p>
        <Image
          src="/programming/2.png"
          alt="programming-2"
          width={300}
          height={300}
          className="md:ml-[30%]"
        />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col md:flex-row gap-5 justify-center px-4 py-16 bg-base-200">
        <p className="text-gray">
          Beyond my main projects, I took on part-time challenges to explore fresh ideas and master
          new technologies. Fueled by curiosity, I built projects that sharpened my skills. Such as{' '}
          <a className="text-white" target="_blank" href="https://junglebayisland.com">
            Jungle Bay project
          </a>
        </p>
        <img src="/programming/3.png" className="w-[40%] ml-[30%] md:ml-0 md:h-40"></img>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col items-center gap-5 px-4 py-16 bg-base-200">
        <p className="text-gray">
          I am currently working on the{' '}
          <a className="text-white" target="_blank" href="https://app.cometa.farm">
            app.cometa.farm
          </a>{' '}
          project, where I am deeply engaged in building innovative solutions for decentralized
          platforms. Alongside this main project, I continue to take on part-time projects that keep
          my skills sharp and allow me to experiment with new ideas and technologies. Recently, I
          have also dived into a Three.js and three-fiber course, expanding my expertise into the
          world of 3D rendering and interactive web experiences. Balancing these diverse projects
          keeps me on the cutting edge, blending practical experience with new knowledge.
        </p>
        <FaGithubSquare
          style={iconStyles}
          onClick={() => window.open('https://github.com/loground', '_blank')}
        />
      </div>
    ),
  },
];

const Programming = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < textContent.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === textContent.length - 1) {
      router.push('/Facejobs');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 0) {
      router.push('/Brainjobs/Experience');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Head>
        <title>Codeground</title>
        <meta name="Programming" content="My way to become junior" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex gap-10 justify-center mt-5"></div>
      <div className="mockup-code">
        <pre data-prefix="%">
          <code>cd Nick/Brains/Coding</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>npm i coding</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>added 4 packages, and audited 420 packages in a year</code>
        </pre>
        <pre data-prefix=">">
          <code>Stack: React, Next, Tailwind, Framer Motion, Three-fiber, </code>
        </pre>
        <pre data-prefix=">">
          <code>Vercel, Typescript, Redux, Git, Wallet Connect, Styled </code>
        </pre>
      </div>
      <div className="flex justify-center gap-10">
        <button className="btn" onClick={handleBack}>
          {currentStep === 0 ? 'Prev page' : 'back'}
        </button>
        <button className="btn" onClick={handleNext}>
          {currentStep === 3 ? 'You also modeling?' : 'next'}
        </button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ul className="steps steps-vertical lg:steps-horizontal">
          {textContent.map((item, index) => (
            <li
              key={item.id}
              className={`step ${
                index <= currentStep ? 'step-primary' : ''
              } text-white cursor-pointer`}
              onClick={() => setCurrentStep(index)}>
              {['Basics', 'First Project', 'Part-times', 'Current Projects'][index]}
            </li>
          ))}
        </ul>
      </div>
      <div className="mockup-window border bg-base-300">
        {textContent[currentStep].content}

        <div className="flex justify-center gap-10">
          {currentStep > 0 ? (
            <button onClick={handleBack} className="btn btn-outline m-5">
              back
            </button>
          ) : null}
          <button onClick={handleNext} className="btn btn-outline m-5 ">
            next step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programming;
