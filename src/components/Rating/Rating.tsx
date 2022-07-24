import React from "react";
import {Star} from "./Star";


type NewRatingPropsType = {
    value: number;
    setRatingValue: (value: number) => void;
}

function Rating(props: NewRatingPropsType) {

    return (
        <div>
            <Star callback={props.setRatingValue} value={1} selected={props.value > 0}/>
            <Star callback={props.setRatingValue} value={2} selected={props.value > 1}/>
            <Star callback={props.setRatingValue} value={3} selected={props.value > 2}/>
            <Star callback={props.setRatingValue} value={4} selected={props.value > 3}/>
            <Star callback={props.setRatingValue} value={5} selected={props.value > 4}/>
        </div>
    );
}

export default Rating