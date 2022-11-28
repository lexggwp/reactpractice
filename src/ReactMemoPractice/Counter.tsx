import React from "react";

type CounterPropsType = {
    setCount: (count: number) => void;
    count: number;
}
 const Counter = (props: CounterPropsType) => {
    console.log('render counter')
    return (
        <div>{props.count}
            <button onClick={() => props.setCount(props.count + 1)}>+</button>
        </div>
    )
}

export const CounterMemo = React.memo(Counter)