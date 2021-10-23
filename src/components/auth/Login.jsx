// REACT UTILIRIES
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// REACT COMPONENTS AND UTILIRIES
import { useForm } from '../../hooks/useForm';
import { authLoginAction } from '../../actions/auth-actions'; 

export const Login = () => {
    const dispatch = useDispatch();
    const { loadingForm } = useSelector(state => state.formLoading);
    console.log(loadingForm)
    const { handleOnChange, inputsValues } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authLoginAction(inputsValues));
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
                {loadingForm
                    ?
                    <div className="loading-form-login-spinner-container">
                        <div className="loading-form-auth-login"></div>
                    </div>
                    :
                    <button type="submit" className="_login-button-form">Login</button>
                }
            </form>
        </div>
    );
};

