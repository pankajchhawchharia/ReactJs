import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

const ComponentA = () => {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({type:'SET_INPUT_TEXT',payload:input}); // Dispatch the action to update Redux state
  };
  
  return (
    <div>
    <h2>Component A</h2>
    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder ="Enter Text"/>
    <button onClick={handleClick}>Send input to the Component B </button>
    </div>
);
};
export default ComponentA;
