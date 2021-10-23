import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { authRegisterAction } from '../../actions/auth-actions';

export const Register = () => {
    const dispatch = useDispatch();
    const { loadingForm } = useSelector(state => state.formLoading)
    const { handleOnChange, inputsValues } = useForm({
        nombre: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(authRegisterAction(inputsValues))
    };

    return (
        <div className="main-container-register-form">
            <form onSubmit={handleSubmit}>
                <h1 className="_h1-register-fom">Register</h1>
                <div className="inputs-register">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Name"
                        name="nombre"
                        onChange={handleOnChange}
                    />
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
                </div>
                <div className="inputs-register">
                    <label>Password</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Password"
                        name="password"
                        onChange={handleOnChange}
                    />
                </div>
                {loadingForm
                    ?
                    <div className="loading-form-register-spinner-container">
                        <div className="loading-form-auth-register"></div>
                    </div>
                    :
                    <button type="submit" className="_register-form-button">Register</button>
                }
            </form>
        </div>
    );
};


