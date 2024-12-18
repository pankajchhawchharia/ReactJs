import React, {useState, useCallback} from 'react';

function CounterUseCallback () {
    const [count,setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((c) => c+1);
    },[] );
    
    return (
        <div>
        <p>count: {count}
        </p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default CounterUseCallback;
