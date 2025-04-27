'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TerminalContact = ({ onTopicSelect }) => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="w-full flex py-6">
      <div
        ref={containerRef}
        onClick={() => inputRef.current?.focus()}
        className="h-auto bg-slate-950/90 backdrop-blur rounded-lg w-full max-w-xl mx-auto shadow-xl cursor-text font-mono overflow-y-auto">
        <TerminalHeader />
        <TerminalBody
          inputRef={inputRef}
          containerRef={containerRef}
          onTopicSelect={onTopicSelect}
        />
      </div>
    </section>
  );
};

const TerminalHeader = () => (
  <div className="w-full p-2 bg-slate-900 flex items-center gap-1 sticky top-0">
    <span className="text-xs text-slate-200 font-semibold mx-auto">Topic Selector Terminal</span>
  </div>
);

const TerminalBody = ({ containerRef, inputRef, onTopicSelect }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const validTopics = ['coding', 'web3', 'marketing'];

  const handleSubmit = () => {
    const cleanedInput = text.trim().toLowerCase();
    if (validTopics.includes(cleanedInput)) {
      setError(false);
      onTopicSelect(cleanedInput); // Pass topic to parent/3D scene
    } else {
      setError(true);
    }
    setText('');
  };

  return (
    <div className="p-2 text-slate-100 text-sm">
      <p className="text-green-400 mb-1">Please type the name of the topic below to select:</p>
      <p>coding</p>
      <p>web3</p>
      <p>marketing</p>
      <p className="whitespace-nowrap overflow-hidden font-light my-2">
        ------------------------------------------------------------------------
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="sr-only"
          autoComplete="off"
        />
        <p>
          <span className="text-emerald-400">➜</span> <span className="text-cyan-300">~</span>{' '}
          {text}
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
              times: [0, 0.5, 0.5, 1],
            }}
            className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
          />
        </p>
      </form>
      {error && (
        <p className="text-red-400 mt-2">Please type one of the topics: coding, web3, marketing.</p>
      )}
    </div>
  );
};

export default TerminalContact;
