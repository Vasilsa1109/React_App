
import "./Person.css"; 
import hero from '../../assets/img4.webp';
import Button from "../common/ClickButton/Button"; 
import { FC, useState } from "react"; 

const Person:FC = () => { 
    const [support, giveSupport] = useState(0); 

    const handleClick = () => {
        alert(`Спасибо за ваш лайк!`);
        giveSupport(support + 1);
    };

    return ( 
        <>
        <img src={hero} alt='Main Hero' style={{ width: '200px', height: 'auto' }} />
        <h3>I’m Ali. I’m a Doctor turned Entrepreneur, YouTuber,</h3>
        <h2>and the author of the New York Times bestseller, Feel-Good Productivity.</h2>
        <div className="support"  style={{ display: "flex", alignItems: "center", gap: '60px', color: '#351747' }}>
            <h3>Support me with like:</h3>
        <Button onClick={handleClick}> 
            {support} Likes 
        </Button></div>
        </>
    ); 
}; 

export default Person;

