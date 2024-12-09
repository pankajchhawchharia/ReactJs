import React,{useContext} from 'react';
import DataContext from './DataContext';

function ChildComponent() {
  const {sharedData} = useContext(DataContext);
  return <p>{sharedData}</p>;
}
export default ChildComponent;
