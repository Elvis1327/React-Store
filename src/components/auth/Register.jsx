import React from 'react';

export const Register = () => {

    const handleSubmit = (e) => { 
        e.preventDefault();
    };


    return (
        <div className="main-container-register-fomr">
            <h1 className="_h1-register-fom">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Name"
                        name="nombre"
                    />
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Email"
                        name="email"
                    />
                </div>
                <div className="inputs">
                    <label>Password</label>
                    <input 
                        type="text" 
                        className="_register-input"
                        placeholder="Introduce your Password"
                        name="Password"
                    />
                </div>
                <button type="submit" className="_register-form-button">Register</button>
            </form>
        </div>
    );
};


