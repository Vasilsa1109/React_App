import Button from "../common/ClickButton/Button";
import Counter from "../../components/counter/Counter";
import "./MyComponent.css";
import { FC} from "react"; 

interface ComponentProps{
    title: string,
    description: string
}

const MyComponent:FC <ComponentProps> = ({title, description}) => {
    return (
        <div className="container">
            <div className="block1">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <Button
                    onClick={() => alert('Button was clicked')}
                >
                    Click on
                </Button>  
            </div>
            <Counter />
        </div>
    );
}
  export default MyComponent;

 