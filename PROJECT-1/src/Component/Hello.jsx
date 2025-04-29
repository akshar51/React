import React, { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log("Hello Component Mounting");

    return () => {
      console.log("Hello Component Unmounting");
    };
  }, []);

  return <h3>Hello Component</h3>;
};

export default Hello;
