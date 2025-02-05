import { FC } from "react";

const styleCard = {
    display: 'flex', 
    alignItems: "center", 
    flexDirection: 'column',
     gap: '15px', 
     fontSize: '18px', 
     backgroundColor: '#eab201', 
     padding: '20px',
    borderRadius: '10px',
}
const MiniCard:FC = ({ title, description, img}) => {
    return <div style={styleCard}>
        <h3>{title}</h3>
        <img src={img} alt="" style={{width: '200px', height: 'auto'}}/>
        <b>{description} </b>
    </div>
};

export default MiniCard;


