import React, {useRef} from 'react';


type InputPropsType = {
    value: string
    setInputValue: (value: string) => void;

}

const Input = (props: InputPropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const onClick = () => {
        if (inputRef.current) {
            props.setInputValue(inputRef.current.value)
        }
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onClick}>save</button>
        </div>
    );
};

export default Input;