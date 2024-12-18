import React, {useReducer} from 'react';

    // useReducer in react hooks

function reducer(state,action) {
    switch(action.type) {
        case 'increment': 
            return {count: state.count + 1};
        case 'decrement': 
            return {count: state.count - 1};
        case 'reset':
            return {count: 0};
        default:
            throw new Error ('unknown action type');
    }
}
    function Counter () {
        const initialState = {count: 0};
const [state,dispatch] = useReducer(reducer,initialState);
        return (
            <div>
            <p>count : {state.count}</p>
                <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
                <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        )
    }
     export default Counter;
