import "./Button.css";

const Button = ({ onClick, children}) => {
    return  <button onClick={onClick} className="clickButton">{children}</button>
};

export default Button;