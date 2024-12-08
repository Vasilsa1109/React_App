import React, { useState } from "react";
import "./Counter.css";
import Button from "../common/ClickButton/Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [discount, setDisCount] = useState(0);
    
    return (
        <div className="container">
            <h3>{count} likes</h3>
            <h3>{discount} dislikes</h3>
            <h3>Delete like</h3>
            <h3>Delete dislike</h3>
            <Button
                onClick={() => setCount(count+1)}
            >
                Like
            </Button>
            <Button
                onClick={() => setDisCount(discount+1)}
            >
                Dislike
            </Button>
        </div>
    );
}

export default Counter;