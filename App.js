import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function App() {
  const [parentValue, setParentValue] = useState('initial value');
  const handleChildData = (newData) => {
    setParentValue(newData);
  }

  return (
    <div>
      <h2> Random user</h2>
     <p>Parent Value {parentValue}</p>
     <ChildComponent value={parentValue} sendDataToParent={handleChildData} />
    </div>
  );
}
