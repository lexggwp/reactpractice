import React from 'react';
import s from './OnOff.module.css'

type UncontrolledOnOffProps = {
    setOnOff: (onOff: boolean) => void;
    onOff: boolean;
}


const OnOff = (props: UncontrolledOnOffProps) => {

    const classNameOn = `${s.onBlock} ${props.onOff ? s.onBlockActivated: ''}`;
    const classNameOff = `${s.onBlock} ${!props.onOff ? s.offBlockActivated: ''}`;
    const classNameCircle = `${s.circleBlock} ${props.onOff ? s.onBlockActivated: s.offBlockActivated}`

    return (
        <div className={s.onOffBlock}>
            <div onClick={ () => props.setOnOff(true)} className={classNameOn}>ON</div>
            <div onClick={ () => props.setOnOff(false)} className={classNameOff}>OFF</div>
            <div className={classNameCircle}></div>
        </div>
    );
};

export default OnOff;