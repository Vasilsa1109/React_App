import { FC } from "react"; 
import "./MainList.css"; 

interface MainListProps {
    results: any[]; 
}

const MainList: FC<MainListProps> = ({ results = [] }) => { 
    return ( 
        <div> 
            <h1>List</h1> 
            <p>There is a list of elements</p> 
            {results.length > 0 ? ( 
                <Items items={results} /> 
            ) : ( 
                <marquee>There is no data</marquee> 
            )} 
        </div> 
    ); 
}; 

export default MainList;

