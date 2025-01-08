import React, {useState} from 'react';
const App = () => {

  const [counter1, setCounter1] = useState(0);

  const [counter2, setCounter2] = useState(0);

  const [counter3, setCounter3] = useState(0);

    const handleClick3 = () => {

      for(let i = 0; i<5; i++) {
        setCounter3((counter3) => counter3+1); 
      }
    }
    const handleClick1 = () => {
        setCounter1((counter1) => counter1 + 1);
    }

    function handleClick2 () {
        setCounter2((counter2) => counter2 - 1);
    }
    
    return (<>
        Counter1: {counter1} <button onClick={handleClick1}>count1++</button>

        <br/>

        Counter2: {counter2} <button onClick={handleClick2}>count2--</button>

        <br/>

        Counter3: {counter3} <button onClick ={handleClick3}>count3 Inc. by 5</button>

        <br/>

    </>)
}
