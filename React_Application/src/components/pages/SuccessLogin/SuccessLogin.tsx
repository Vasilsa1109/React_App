import { FC } from "react";
import Person from "../../Person/Person";
import './SuccessLogin.css'
const SuccessLogin:FC = () => {
    return (
          
        <div className="main">  
            <h1>Thank you for loginning</h1>
      <div className="card">
      <div className="check">
        <i className="checkmark">✓</i>
      </div>
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p> 
      </div>
      </div>        
    );
};

export default SuccessLogin;
