import React, {useState} from 'react';
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

export type UncontrolledAccordionPropsType = {
    title: string
}



const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <UncontrolledAccordionTitle collapsed={collapsed} callBack={setCollapsed} title={props.title}/>
            {collapsed && <UncontrolledAccordionBody />}
        </div>
    );
};

export default UncontrolledAccordion;