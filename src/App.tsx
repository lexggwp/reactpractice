import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/Accordion/UncontrolledRating/UncontrolledRating";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UnControlledOnOff from "./components/OnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState(0);
    let [collapsed, setCollapsed] = useState(false);
    let [onOff, setOnOff] = useState(false);

    return (
        <div className={"App"}>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating setRatingValue={setRatingValue} value={ratingValue}/>
            <Accordion setCollapsed={setCollapsed} collapsed={collapsed} title={'Menus'}/>
            <UncontrolledAccordion title={'Menus'}/>
            <UnControlledOnOff status={setOnOff} /> {onOff.toString()}
            <UncontrolledRating/>
        </div>
    );
}

export default App;
