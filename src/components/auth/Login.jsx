import React from 'react';
import { useForm } from '../../hooks/useForm';

export const Login = () => {

    const { inputsValues, handleOnChange } = useForm({
        email: '',
        password: ''
    });
    const { email, password } = inputsValues;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="main-container-login-form">
            <h1 className="_h1-login-form">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs-login">
                    <label className="_label-form-login">Email</label>
                    <input 
                        type="text" 
                        className="_login-input"
                        name="email"
                        placeholder="Introduce your Email"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="inputs-login">
                    <label className="_label-form-login">Email</label>
                    <input 
                        type="text" 
                        className="_login-input"
                        name="password"
                        placeholder="Introduce your Email"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" className="_login-button-form">Login</button>
            </form>
        </div>
    );
};

