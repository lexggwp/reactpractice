import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void;
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} collapsed={props.collapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody  />}
        </div>
    );
};

export default Accordion;