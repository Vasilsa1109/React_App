import PropTypes from "prop-types";
import "./MyComponent.css";

const MyComponent = (props) => {
    //   <div>
    //     <h1>{props.title}</h1>
    //     <p>{props.description}</p>
    //   </div>
    const CompProps = {
        title: "Default title", 
        description: "Default description"
    }
    return (
        <div className="container">
            <h1 className="title">{CompProps.title}</h1>
            <p className="description">{CompProps.description}</p>
        </div>
    );
  }

  MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  export default MyComponent;
