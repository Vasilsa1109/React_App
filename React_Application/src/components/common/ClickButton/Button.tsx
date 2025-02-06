import { FC, ReactNode } from "react"; 
import "./Button.css"; 

interface ButtonProps {
    onClick: () => void; 
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => { 
    return (
        <button onClick={onClick} className="clickButton">
            <span className="button-content">{children}</span>
        </button>
    ); 
}; 

export default Button;
