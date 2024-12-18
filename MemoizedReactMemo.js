import React, {useState, useMemo} from 'react';

// function ExpensiveCalculationUseMemo ({number}) {
//     const result = useMemo(() => {
//         console.log("use memo calculating...",number);
//         return number * 2;
//     },[number]);

//     return (
//         <div>
//         <p>Result from use memo : {result}
//         </p></div>
//     )
// }

const ExpensiveCalculationReactMemo = React.memo((props) => {
    console.log("react memo calculating---",props.number);
    return (
        <p>Result from React memo : {props.number *2}</p>
    )
});
    


function MemoizedReactMemo () {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count  +1)}>Increase Count</button>
            <button onClick={() => setNum(num + 1)}>Increase Number</button>
            <p>num: {num}</p>
            {/* <ExpensiveCalculationUseMemo number={num} /> */}
            <ExpensiveCalculationReactMemo number={num} />
        </div>
    )
}
export default MemoizedReactMemo;
