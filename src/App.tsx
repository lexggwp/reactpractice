import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UnControlledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledInput from "./components/UncontrolledInput";
import Input from "./components/Input";


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
            <UncontrolledAccordion title={'Menus'}/>
            <UnControlledOnOff status={setOnOff} /> {onOff.toString()}
            <UncontrolledRating/>
            <UncontrolledInput/>
            <Input callBack={setInputValue} value={inputValue}/>
        </div>
    );
}

export default App;
