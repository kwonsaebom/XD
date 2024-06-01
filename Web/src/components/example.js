import { exampleApi } from '../apis/example';
import React, { useEffect } from 'react';

export const Example = () => {
  useEffect(() => {
    exampleApi();
  }, []);

  return (
    <div>
      <h1>Example</h1>
    </div>
  );
};
