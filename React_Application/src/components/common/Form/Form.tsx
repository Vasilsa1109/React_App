import "./Form.css";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { FC } from "react";

const Form:FC = () => {

    const { register, handleSubmit, formState: { errors} } 
    = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        navigate('/login');
    };
            return (
                <div>
                    <h4>Sign up</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <input 
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 6,
                                    message: "Name must be at least 6 characters",
                                },
                                maxLength: {
                                    value: 24,
                                    message: "Name must be no more than 24 characters",
                                },
                            })}
                            className="input"
                            placeholder="Name"
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
        
                        <input
                            {...register("email", {
                                required: "Email is required",
                                minLength: {
                                    value: 12,
                                    message: "Email must be at least 12 characters",
                                },
                                maxLength: {
                                    value: 40,
                                    message: "Email must be no more than 40 characters",
                                },
                            })}
                            className="input"
                            placeholder="Email"
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
        
                        <input 
                            {...register("password", {
                                required: "Password is required",
                                length: 8,
                            })}
                            className="input"
                            placeholder="Password"
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                        
        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        };
export default Form;