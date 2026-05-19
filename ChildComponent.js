import React, { useState } from 'react';
function ChildComponent({ value, sendDataToParent }) {
  const [data, setData] = useState('abc');
  const handleClick = () => {
    setData('xyz');
    sendDataToParent('update from child');
  };
  return (
    <div>
      <p>
        hello data: {data} value from parent: {value}
      </p>
      <button onClick={handleClick}>click to update</button>
    </div>
  );
}
export default ChildComponent;
