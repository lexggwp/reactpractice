import React from "react";
import {ItemType} from "./Accordion";

type AccordionBodyPropsType = {
    items: Array<ItemType>;
    onClick: (value: any) => void;
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( (el, index) => <li key={index} onClick={ () => {props.onClick(el.value)}} >{el.title}</li>)}
        </ul>
    )
}