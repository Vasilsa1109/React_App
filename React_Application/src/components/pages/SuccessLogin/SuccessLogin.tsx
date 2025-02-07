import './SuccessLogin.css';
import { FC } from 'react';

const SuccessLogin: FC = () => {
    return (
        <div className="main">  
            <h1>Thank you for logging in</h1>
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