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
            <form onSubmit={handleSubmit}>
                <h1 className="_h1-login-form">Login</h1>
                <div className="inputs-login">
                    <label className="_label-form-login">Email</label>
                    <input 
                        type="text" 
                        className="_login-input"
                        name="email"
                        placeholder="Introduce your Email"
                        onChange={handleOnChange}
                        autoComplete="off"
                    />
                </div>
                <div className="inputs-login">
                    <label className="_label-form-login">Password</label>
                    <input 
                        type="text" 
                        className="_login-input"
                        name="password"
                        placeholder="Introduce your Password"
                        onChange={handleOnChange}
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className="_login-button-form">Login</button>
            </form>
        </div>
    );
};

