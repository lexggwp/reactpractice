import React, {useState} from 'react';
import s from './OnOff.module.css'


type UnControlledOnOffPropsType = {
    status: (active: boolean) => void;
}


const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

    let [onOff, setOnOff] = useState(false);

    const classNameOn = `${s.onBlock} ${onOff ? s.onBlockActivated: ''}`;
    const classNameOff = `${s.onBlock} ${!onOff ? s.offBlockActivated: ''}`;
    const classNameCircle = `${s.circleBlock} ${onOff ? s.onBlockActivated: s.offBlockActivated}`

    const onClickHandler = (active: boolean) => {
        setOnOff(active)
        props.status(active);
    }

    return (
        <div className={s.onOffBlock}>
            <div onClick={ () => onClickHandler(true)} className={classNameOn}>ON</div>
            <div onClick={ () => onClickHandler(false)} className={classNameOff}>OFF</div>
            <div className={classNameCircle}></div>
        </div>
    );
};

export default UnControlledOnOff;