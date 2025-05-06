// context/BrainSceneContext.ts
import { createContext, useContext, useState } from 'react';

const BrainSceneContext = createContext(null);

export const useBrainScene = () => useContext(BrainSceneContext);

export const BrainSceneProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <BrainSceneContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </BrainSceneContext.Provider>
  );
};
