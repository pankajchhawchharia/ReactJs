import React, { useState} from 'react';

function ParentComponent () {

  const [sharedData2, setSharedData] = useState("Shared Data 1");

  return (
    <div>
      <ChildA sharedData3 = {sharedData2} />
      <ChildB sharedData4 = {sharedData2} />
      </div>
  );

};

function ChildA ({sharedData3}) {
  return <p> Child A : {sharedData3} </p>
}

function ChildB ({sharedData4}) {
  return <h6> Child b :  {sharedData4} </h6>
}

export default ParentComponent;
