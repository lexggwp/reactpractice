import React from "react";


type UncontrolledAccordionTitlePropsType = {
    title: string
    callBack: (collapsed: boolean) => void;
    collapsed: boolean
}

export function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 onClick={ () => props.callBack(!props.collapsed)}>{props.title}</h3>
    )
}