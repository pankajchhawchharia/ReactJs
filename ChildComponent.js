// access the store in child component using useSelector hook

import React from 'react';
import {useSelector } from 'react-redux';

const ChildComponent = () => {
  const sharedData = useSelector((state) => state.sharedData);

  return (
    <div>
      <h6>access the store in component</h6>
      <p>{sharedData}</p>
      </div>
  )
}

export default ChildComponent;
