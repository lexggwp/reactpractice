import React, {useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar";


function UncontrolledRating() {

    const [likes, setLikes] = useState(0);


    return (
        <div>
            <UncontrolledStar setValue={() => setLikes(1)} selected={likes > 0}/>
            <UncontrolledStar setValue={() => setLikes(2)} selected={likes > 1}/>
            <UncontrolledStar setValue={() => setLikes(3)} selected={likes > 2}/>
            <UncontrolledStar setValue={() => setLikes(4)} selected={likes > 3}/>
            <UncontrolledStar setValue={() => setLikes(5)} selected={likes > 4}/>
        </div>
    );
}

export default UncontrolledRating;