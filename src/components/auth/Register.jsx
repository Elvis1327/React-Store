import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { authRegisterAction } from '../../actions/auth-actions';
import Validator from 'validator';

export const Register = () => {
    const dispatch = useDispatch();
    const { loadingForm } = useSelector(state => state.formLoading)
    const { handleOnChange, inputsValues } = useForm({
        nombre: '',
        email: '',
        password: ''
    });
    const { nombre, email, password } = inputsValues;
    const [ errorForm, setErrorForm ] = useState({});

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(validateFormRegister()){
            setErrorForm({})
        }
        dispatch(authRegisterAction(inputsValues));
    };
    // Validate Form
    const validateFormRegister = () => {
        if(nombre.length < 5){
            setErrorForm({nombreError: 'El nombre debe tener 5 o mas caracteres'});
            return false;
        }else if(email.length < 5){
            setErrorForm({emailError: 'El nombre debe tener 5 o mas caracteres'});
            return false;
        }else if(!Validator.isEmail(email)){
            setErrorForm({emailError: 'El nombre debe tener 5 o mas caracteres'});
            return false;
        }else if(password.length < 5){
            setErrorForm({passwordError: 'El nombre debe tener 5 o mas caracteres'});
            return false;
        }
        return true;
    }

    return (
        <div className="main-container-register-form">
            <form onSubmit={handleSubmit}>
                <h1 className="_h1-register-form">Register</h1>
                <hr />
                <div className="inputs-register">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Name"
                        name="nombre"
                        onChange={handleOnChange}
                    />
                    <span style={{color: 'red'}} > {errorForm?.nombreError && `${errorForm.nombreError}`} </span>
                </div>
                <div className="inputs-register">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Email"
                        name="email"
                        onChange={handleOnChange}
                    />
                    <span style={{color: 'red'}} > {errorForm?.emailError && `${errorForm.emailError}`} </span>
                </div>
                <div className="inputs-register">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="_register-input"
                        placeholder="Introduce your Password"
                        name="password"
                        onChange={handleOnChange}
                    />
                    <span style={{color: 'red'}} > {errorForm?.passwordError && `${errorForm.passwordError}`} </span>
                </div>
                {(loadingForm === true)
                    ?
                    (<div className="loading-form-register-spinner-container">
                        <div className="loading-form-auth-register"></div>
                    </div>)
                    :
                    (<button type="submit" className="_register-form-button">Register</button>)
                }
            </form>
        </div>
    );
};


