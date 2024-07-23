import React, { useState } from 'react';

interface PasswordComponentProps {
  onPasswordCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInput: React.FC<PasswordComponentProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState<string | null>(null);

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (password === 'paymewell') {
      onPasswordCorrect(true);
      setWrongPassword(null);
    } else {
      setPassword('');
      setWrongPassword('Dig deeper, or just scroll up a bit');
    }
  };

  return (
    <div className="password-form flex flex-col items-center mt-[-3%] h-[30vh] bg-zinc-900  rounded-2xl">
      <form className="mt-20" onSubmit={handleFormSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          className={`input outline-white w-64 mb-4 px-4 py-2.5 bg-zinc-800 text-white rounded-xl ${
            wrongPassword ? 'input-error' : ''
          }`}
        />
        <button className="text-black w-20 py-3 ml-[-5%] rounded-xl bg-white" type="submit">
          Find out
        </button>
        {wrongPassword && <p className="text-white">{wrongPassword}</p>}
      </form>
    </div>
  );
};

export default PasswordInput;
