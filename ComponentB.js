import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
  const inputText = useSelector((state) => state.inputText); // Access the Redux state

  return (
    <div>
      <h2>Component B</h2>
      <p>Input Text: {inputText}</p>
    </div>
  );
};

export default ComponentB;
