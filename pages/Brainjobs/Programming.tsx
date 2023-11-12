import React from 'react';

const Programming = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
      <p className="text-white">These are clickable below:</p>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary text-white">HTML/CSS</li>
        <li className="step step-primary text-white">JS</li>
        <li className="step text-white">React</li>
        <li className="step text-white">Next/Tailwind/Typescript</li>
      </ul>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          Since 1st of february 2023 I got into programming and started learning coding PT1:
          Learning was with mentor who gave me resources to read/leard and do tests. Mostly from
          online school hexlet.io and his personal tasks. First were basics of HTML+CSS then first
          manual laying out of a project imported from FIGMA. Later I started basic JS from same
          resources: Hexlet.io + youtube + mentors suggestions. Ended up solving excercises on
          hexlet and codewars all day long.
          <br></br>
        </div>
      </div>
      <p className="text-white">Ended up solving excercises on hexlet and codewars all day long.</p>
      <p className="text-white">
        Next step was introduction to React. It was worst moment of them all at the start as I could
        not understand syntaxis of React for a long time. Also, information given by hexlet.io was
        super complicated so it was where I took next step. I started learning from online courses
        by Archakov Blog on youtube. This guy made up some pretty nice courses for pure beginners.
        Only difference that first I started learning class commponents and this was functional.
      </p>
      <p className="text-white">
        After completing several projects using: Classic React (functional components) + typescript
        + redux + SCSS compilator. I moved on to other projects via youtube: called code with
        Antonio. This time I used next/tailwint/typescript. Actually it was much harder as it
        implemented some backend technologies. Before that I used basic JSON backend fetching and
        stored all my info in mockapi.
      </p>
      <p className="text-white">
        Next step was my first ever test of pet-projects constructed all by myself. It was small
        online store with funny functionality that sells the Surfing bags. It never get into product
        stage as it was more a test and had no design at all. It was only made for testing things
        out how can I manage to create a project all myself. Well, basically, my best-friend in this
        battle was chat GPT and my mentor. Adaptivity kinda on low level, but it was just a first
        test.
      </p>
      <p className="text-white">
        Now I am on the stage where I keep learning by watching youtube videos/reading
        documentations and trying to test some of my skills/knowledge in this project. I used some
        of the components from different authors and some adapted for myself.
      </p>
    </div>
  );
};

export default Programming;
