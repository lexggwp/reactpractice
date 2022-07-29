import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UnControlledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledInput from "./components/Input/UncontrolledInput";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";


function App() {

    const [ratingValue, setRatingValue] = useState(0);
    const [collapsed, setCollapsed] = useState(true);
    const [onOff, setOnOff] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const onItemClick = (value: any) => {
        console.log(`Item Clicked ${value}`);
    }

    const menu1 = [
        {title: 'Alexey', value: 'Mogilev'},
        {title: 'Ilya', value: 'Minsk'},
        {title: 'Mihail', value: 'Bihov'},
    ];
    const menu2 = [
        {title: 'Sosiska', value: 'upala'},
        {title: 'Новость дня', value: 'дна'},
        {title: 'Mihail', value: 'Bihov'},
    ];
    const select = [
        {id: 1, title: 'Minsk'},
        {id: 2, title: 'Moscow'},
        {id: 3, title: 'Kiev'},
        {id: 4, title: 'Vilnius'},

    ];
    const [value, setValue] = useState('');

    return (
        <div className={"App"}>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating setRatingValue={setRatingValue} value={ratingValue}/>
            <Accordion onClick={onItemClick} items={menu1} setCollapsed={setCollapsed} collapsed={collapsed} title={'Accordion'}/>
            <Accordion onClick={onItemClick} items={menu2} setCollapsed={setCollapsed} collapsed={collapsed} title={'Accordion'}/>
            <Input callBack={setInputValue} value={inputValue}/>
            <UncontrolledAccordion title={'UncontrolledAccordion'}/>
            <UnControlledOnOff status={setOnOff} /> {onOff.toString()}
            <UncontrolledRating/>
            <UncontrolledInput/>
        <hr/>
            <Select value={value} setValue={setValue} items={select}/>
        </div>
    );
}

export default App;
