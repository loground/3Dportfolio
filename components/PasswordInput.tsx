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
    if (password === 'dreamjob') {
      onPasswordCorrect(true);
      setWrongPassword(null)
    } else {
      setPassword('');
      setWrongPassword("Dig deeper, or just scroll up a bit");
    }
  };



  return (
    <div className="password-form flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleFormSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          className="w-64 mb-4 px-4 py-2 border border-gray-400 rounded"
        />
        <button className='text-white w-20 py-2 border border-gray-400 rounded' type="submit">
            Find out</button>
            {wrongPassword && <p className='text-white'>{wrongPassword}</p>}
      </form>
    </div>
  );
};

export default PasswordInput;
