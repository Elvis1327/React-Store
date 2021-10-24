// REACT UTILIRIES
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validator';
// REACT COMPONENTS AND UTILIRIES
import { useForm } from '../../hooks/useForm';
import { authLoginAction } from '../../actions/auth-actions'; 

export const Login = () => {
    const dispatch = useDispatch();
    const { loadingForm } = useSelector(state => state.formLoading);
    const { handleOnChange, inputsValues } = useForm({
        email: '',
        password: ''
    });
    const { email, password } = inputsValues;
    const [ errorsForm, setErrorsForm ] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateLoginForm()){}
        dispatch(authLoginAction(inputsValues));
    };

    // Vadate form
    const validateLoginForm = () => {
        if(!Validator.isEmail(email)){
            setErrorsForm({emailError: 'El email debe tener caracteres validos'});
            return false;
        }else if(email.length < 5){
            setErrorsForm({emailError: 'El email debe de tener 5 o mas caracteres'});
            return false;
        }else if(password.length < 5){
            setErrorsForm({errorPassword: 'El password debe tener 5 o mas caracteres'});
            return false;
        }
        return true;
    };

    return (
        <div className="main-container-login-form">
            <form onSubmit={handleSubmit}>
                <h1 className="_h1-login-form">Login</h1>
                <hr />
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
                    <span style={{color: 'red'}}>{errorsForm?.emailError ? `${errorsForm?.emailError}` : ''}</span>
                </div>
                <div className="inputs-login">
                    <label className="_label-form-login">Password</label>
                    <input 
                        type="password" 
                        className="_login-input"
                        name="password"
                        placeholder="Introduce your Password"
                        onChange={handleOnChange}
                        autoComplete="off"
                    />
                    <span style={{color: 'red'}}>{errorsForm?.errorPassword && `${errorsForm?.errorPassword}`}</span>
                </div>
                {(loadingForm === true) 
                    ?
                    (<div className="loading-form-login-spinner-container">
                        <div className="loading-form-auth-login"></div>
                    </div>)
                    :
                    (<button type="submit" className="_login-button-form">Login</button>)
                }
            </form>
        </div>
    );
};

