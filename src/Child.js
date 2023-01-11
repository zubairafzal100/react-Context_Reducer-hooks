import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    const counterValue = useContext(counterContext);

    return (
        <div>
            <h1>This child is using Context Hook.</h1>
            <h2>Counter value is: {counterValue[0]} </h2>


            <button onClick={() => counterValue[1](++counterValue[0])}>Increament Context</button>
            <button onClick={() => counterValue[1](--counterValue[0])}>Decreament Context</button>
        </div>
    )
}

export default Child;
