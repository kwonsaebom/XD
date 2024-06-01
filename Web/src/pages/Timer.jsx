import React from 'react';
import { useStore } from '../store/test';

export const Timer = () => {
  const { count, increaseCount, setThree } = useStore();
  // const {yourState, yourAction} = useYourStore();
  // yourAction((state) => state.yourState)
  return (
    <div>
      <div>Zustand ! {count}</div>
      <button onClick={increaseCount}>+1</button>
      <button onClick={() => setThree(3)}>set3</button>
    </div>
  );
};
