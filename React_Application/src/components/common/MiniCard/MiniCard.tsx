import { FC } from "react";
import './MiniCard.css'
interface MiniCardProps { 
    title: string; 
    description: string; 
    img: string; 
}

const MiniCard:FC<MiniCardProps> = ({ title, description, img}) => {
    return <div className="mini-card">
        <h3>{title}</h3>
        <img src={img} alt=""/>
        <b>{description} </b>
    </div>
};

export default MiniCard;


