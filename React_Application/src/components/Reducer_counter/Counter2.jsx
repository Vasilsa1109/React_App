import React, { useReducer } from 'react';
import Button from "../common/ClickButton/Button";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="block1">
            <p>Счетчик: {state.count}</p>
            <Button onClick={() => dispatch({ type: 'increment' })}
            >
                Увеличить
                </Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>Уменьшить</Button>
            <Button onClick={() => dispatch({ type: 'reset' })}>Сбросить</Button>
        </div>
    );
}

export default Counter2;