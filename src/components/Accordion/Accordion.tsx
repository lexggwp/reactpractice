import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string,
    value: any;
}


export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void;
    items: Array<ItemType>;
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} collapsed={props.collapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody items={props.items}  />}
        </div>
    );
};

export default Accordion;