const styleCard = {
    display: 'flex', 
    alignItems: "center", 
    flexDirection: 'column',
     gap: '15px', 
     fontSize: '18px', 
     backgroundColor: '#dee0ff', 
     padding: '20px',
    borderRadius: '10px'
}
const MiniCard = ({ title, description, img}) => {
    return <div style={styleCard}>
        <h3>{title}</h3>
        <img src={img} alt="" style={{width: '200px', height: 'auto'}}/>
        <p>{description} </p>
    </div>
};

export default MiniCard;


