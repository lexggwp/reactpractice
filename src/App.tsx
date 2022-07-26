import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UnControlledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledInput from "./components/UncontrolledInput/UncontrolledInput";
import Input from "./components/Input/Input";
import NewSelect from "./components/Select/NewSelect";
import ReactMemoPractice from "./ReactMemoPractice/ReactMemoPractice";


function App() {

    const menu1 = [
        {title: 'Alexey', value: 'Mogilev'},
        {title: 'Ilya', value: 'Minsk'},
        {title: 'Mihail', value: 'Bihov'},
    ];
    const selectData = [
        {id: 1, title: 'Minsk'},
        {id: 2, title: 'Moscow'},
        {id: 3, title: 'Kiev'},
        {id: 4, title: 'Vilnius'},

    ];

    const [ratingValue, setRatingValue] = useState(0);
    const [collapsed, setCollapsed] = useState(true);
    const [onOff, setOnOff] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState(selectData[0].title)



    return (
        <div className={"App"}>
            <h2>Controlled Components</h2>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating setRatingValue={setRatingValue} value={ratingValue}/>
            <Accordion items={menu1} setCollapsed={setCollapsed} collapsed={collapsed}
                       title={'Accordion'}/>
            <Input callBack={setInputValue} value={inputValue}/>
            <h2>Uncontrolled Components</h2>
            <UncontrolledAccordion title={'Accordion'}/>
            <UnControlledOnOff/>
            <UncontrolledRating/>
            <UncontrolledInput/>
            <h3>Custom Select 2.0</h3>
            <NewSelect city={city} setCity={setCity} selectData={selectData}/>
            <h4>Standard select</h4>
            <select name="select">
                <option value="Kiev">Kiev</option>
                <option value="Minsk">Minsk</option>
                <option value="Singapore">Singapore</option>
            </select>
            <h3>ReactMemo Practice</h3>
            <ReactMemoPractice/>
        </div>
    );
}

export default App;
