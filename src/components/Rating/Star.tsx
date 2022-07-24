import React from "react";

type StarPropsType = {
    value: number;
    selected: boolean;
    callback: (value: number) => void;
}

export function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.callback(props.value)}> {props.selected ? <b>star</b> : 'star'}</span>
    )

}