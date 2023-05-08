import { useState } from 'react';
export const useLocalStorageCounter = () => {
  const [counter, setCounter] = useState(() => {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? parseInt(storedCounter, 10) : 0;
  });

  const incrementCounter = () => {
    setCounter((prevCounter) => {
      let newCounter = prevCounter + 1;
      if (newCounter === 100) {
        newCounter = 0;
      }
      localStorage.setItem('counter', newCounter.toString());
      return newCounter;
    });
  };
  return { counter, incrementCounter, setCounter };
};
