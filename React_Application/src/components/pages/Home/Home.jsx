import Form from "../../common/Form/Form";
import Counter from "../../counter/Counter";
import Person from "../../Person/Person";

const Home = () => {
    return (
          
        <div className="main">  
            <h1>Welcome to the Blog</h1>
            <p>This is a simple blog application built with React.</p>
            <Person></Person>
                  <h3>Just a counter</h3>
            <Counter/>
            <Form />
            </div>
    );
};

export default Home;
