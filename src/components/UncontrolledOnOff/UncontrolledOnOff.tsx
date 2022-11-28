import React, {useState} from 'react';
import s from '../OnOff/OnOff.module.css'




const UnControlledOnOff = () => {

    let [onOff, setOnOff] = useState(false);

    const classNameOn = `${s.onBlock} ${onOff ? s.onBlockActivated: ''}`;
    const classNameOff = `${s.onBlock} ${!onOff ? s.offBlockActivated: ''}`;
    const classNameCircle = `${s.circleBlock} ${onOff ? s.onBlockActivated: s.offBlockActivated}`


    return (
        <div className={s.onOffBlock}>
            <div onClick={ () =>  setOnOff(!onOff)} className={classNameOn}>ON</div>
            <div onClick={ () => setOnOff(!onOff)} className={classNameOff}>OFF</div>
            <div className={classNameCircle}></div>
        </div>
    );
};

export default UnControlledOnOff;