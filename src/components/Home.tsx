import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { COUNTER_ACTION } from "../actions";
export default function Home() {
    const state = useSelector((state: any) => state);
    console.log(state)
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();


    return (
        <div className="App">

            <h3>Counter</h3>
            <h3>NUM:{counter}</h3>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.INCREASE })}>Increase</button>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}>Reset</button>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.DECREASE })}>Decrease</button>

            <hr />
            <h1></h1>
            <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC' })}>get</button>

        </div>
    );
}
