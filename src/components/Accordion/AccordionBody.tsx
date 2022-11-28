import React from "react";
import {ItemType} from "./Accordion";

type AccordionBodyPropsType = {
    items: Array<ItemType>;
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( (el, index) => <li key={index}>{el.title}</li>)}
        </ul>
    )
}