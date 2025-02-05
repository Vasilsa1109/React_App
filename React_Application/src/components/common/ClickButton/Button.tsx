import { FC } from "react";
import "./Button.css";

const Button:FC = ({ onClick, children}) => {
    return  <button onClick={onClick} className="clickButton"><span className="button-content">{children}</span></button>
};

export default Button;