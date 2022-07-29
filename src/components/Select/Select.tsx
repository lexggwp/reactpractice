import React, {useState} from 'react';
import s from '../Select/Select.module.css'

type ItemType = {
    id: number,
    title: string,
}

type SelectPropsType = {
    value: any,
    setValue: (value: string) => void;
    items: ItemType[];
}

const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true);
    const onCollapseHandler = () => {
        setCollapsed(!collapsed)
    }
    const onClickItemHandler = (title: string) => {
        props.setValue(title)
        setCollapsed(!collapsed)
    }
    return (
        <div onClick={onCollapseHandler} className={s.selectBox}>
            <div className={`${s.valueBox} ${!collapsed && s.greyValueBox}`}>{props.value}</div>
            <div className={s.selectItems}>
                {!collapsed && props.items.map(el => <div key={el.id} onClick={() => onClickItemHandler(el.title)}
                                                          className={`${s.selectedBox} ${props.value === el.title && s.activeBox }`}>{el.title}</div>)}
            </div>
        </div>
    );
};

export default Select;