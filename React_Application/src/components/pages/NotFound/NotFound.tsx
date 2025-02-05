
import './NotFound.css';
import { NavLink } from 'react-router';
import { FC } from 'react';
const NotFound:FC = () => {
    return (
        <div  className="main error">
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>
                <h3>Please, return to </h3>
                <NavLink to="/" end >Home Page</NavLink>
            </p>
        </div>
    );
};

export default NotFound;
