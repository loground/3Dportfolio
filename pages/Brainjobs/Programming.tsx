import React from 'react';
import { useRouter } from 'next/router';
import { FaGithubSquare } from 'react-icons/fa';
import Navbar from '@/components/Widgets/Navbar';

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
          <p className="text-black">
            Starting February 1st, 2023, I began learning programming. A mentor guided me through
            online courses from Hexlet.io and gave me practical tasks. I first grasped the basics of
            HTML and CSS, then practiced by building layouts from Figma designs. Soon after, I moved
            on to basic JavaScript, learning through Hexlet.io, YouTube, and my mentors advice. My
            days were filled with solving coding exercises and challenges.
          </p>
          <img src="/programming/1.png" className="h-40 mt-5"></img>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col gap-6 justify-center px-4 py-10 bg-base-200">
        <p className="text-black">
          I quickly progressed to learning JavaScript fundamentals, diving into arrays, objects, and
          basic functions. My study routine included reading materials, watching YouTube tutorials,
          practicing on Hexlet, and completing tasks from my mentor. I dedicated several months to
          mastering these core concepts, spending my days solving a variety of coding challenges.
        </p>
        <img
          src="/programming/2.png"
          className="h-30 md:h-[50%] md:w-[30%] md:mt-10 md:ml-[35%]"></img>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col md:flex-row gap-5 justify-center px-4 py-16 bg-base-200">
        <p className="text-black">
          Moving on to React, I initially found it challenging to grasp its syntax, and the
          complexity of the information from Hexlet.io added to the difficulty. To tackle this, I
          turned to the Archakov Blog on YouTube, which offers excellent courses tailored for
          beginners. There, I began with learning functional components after basic learning of
          class components from Hexlet.
        </p>
        <img src="/programming/3.png" className="h-30 md:h-40"></img>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col items-center gap-5 px-4 py-16 bg-base-200">
        <p className="text-black">
          After working on several React projects with functional components, TypeScript, Redux, and
          SCSS, I explored new challenges with Next.js and Tailwind CSS through a YouTube series by
          Code with Antonio. These projects were more complex, involving backend technologies,
          whereas I had previously only used basic JSON fetching from mock APIs. I then tested my
          skills by building a small online store for surfing bags. This pet project, designed more
          for practice than production, helped me understand project creation from start to finish.
          With support from chat GPT and my mentor, I tackled the project, although its adaptivity
          was basic. Currently, I am enhancing my skills by studying documentation, watching YouTube
          tutorials, and integrating components from various sources into my projects, customizing
          them as needed.
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
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex gap-10 justify-center mt-5"></div>
      <div className="mockup-code">
        <pre data-prefix="%">
          <code>cd Nick/Brains/Coding</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>npm i programmingBasics</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>added 4 packages, and audited 420 packages in 10 months</code>
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
              {['HTML/CSS', 'JS', 'React', 'Next/Tailwind/Typescript'][index]}
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
