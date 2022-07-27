import React, {useRef, useState} from 'react';






const UncontrolledInput = () => {

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const onClick = () => {
        if (inputRef.current) {
            setInputValue(inputRef.current.value)
        }
    }

    return (
        <div>
            <input ref={inputRef}/> {inputValue};
            <button onClick={onClick}>save</button>
        </div>
    );
};

export default UncontrolledInput;