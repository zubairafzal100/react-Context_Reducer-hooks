import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);

    return (
        <div>
            <h1>This child is using Reducer Hook.</h1>
            <h2>Counter value is: {state} </h2>


            <button onClick={() => dispatch('INCREAMENT')}>Increament Reducer</button>
            <button onClick={() => dispatch('DECREAMENT')}>Decreament Reducer</button>
        </div>
    )
}

export default Child2;
