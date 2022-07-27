import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string;
    callBack: (value: string) => void;
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeHandler} value={props.value}/>
        </div>
    );
};

export default Input;