import "./Form.css";

// function AppForm(){
//     const { register } =  useForm();

//     return (
//         <div style={style.container}>

//         </div>
//     );

// }
const styles = {
    container, input: {
        color: "black",
        fontSize: "18px"
    }
}


const AppForm = () => {

    const { register, handleSubmit } =  useForm();

    function onSubmit(data) {
        console.log(data);
        // {username: 'Mi', email: 'mail@gmail.com', password: '44_kfsk'}
    } 

    return (
        <div style={styles.container}>
            <h4>Sign Up</h4>
            <form onSubmit={onSubmit}>
                <input name="username" ref={register({
                    required: true, minLength: 6, maxLength: 24,
                })} 
                placeholder="Username" 
                style={styles.input}
                />
                <input  name="email" ref={register} placeholder="Email"  style={styles.input}/>
                <input name="password" ref={register} placeholder="Password"  style={styles.input}/>
               <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default AppForm;