import UsersList from "../../UsersList";
import { FC } from "react";
import Form from "../../common/Form/Form";
import Counter from "../../counter/Counter";
import Person from "../../Person/Person";
import UserCard from "../../../components/common/UserCard/UserCard";

const Home:FC = () => {
    return (  
        <div className="main">  
            <h1>Welcome to the Blog</h1>
            <p>This is a simple blog application built with React.</p>
            <Person></Person>
                  <h3>Just a counter</h3>
             <Counter/> 
            <UsersList/>
            <UserCard name="Alex" age={30} isOnline={true}/>
            <UserCard name="Maria"  isOnline={false}/>
            <UserCard name="Marianna" age={34} isOnline={false}/>
            <Form />
            </div>
    );
};

export default Home;
