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


function App() {

    const [ratingValue, setRatingValue] = useState(0);
    const [collapsed, setCollapsed] = useState(false);
    const [onOff, setOnOff] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={"App"}>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating setRatingValue={setRatingValue} value={ratingValue}/>
            <Accordion setCollapsed={setCollapsed} collapsed={collapsed} title={'Menus'}/>
            <Input callBack={setInputValue} value={inputValue}/>
            <UncontrolledAccordion title={'MENU'}/>
            <UnControlledOnOff status={setOnOff} /> {onOff.toString()}
            <UncontrolledRating/>
            <UncontrolledInput/>
            <UncontrolledInput/>
            <UncontrolledInput/>



        </div>
    );
}

export default App;
