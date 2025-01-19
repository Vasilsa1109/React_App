
import './NotFound.css';

const NotFound = () => {
    return (
        <div  className="main error">
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>
                <NavLink to="/" end >Home Page</NavLink>
            </p>
        </div>
    );
};

export default NotFound;
