import React, { useState } from 'react';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="youremail@domain.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input type="password" placeholder="*********" id="password" name="password"/>
            <button>Login</button>
        </form>
        <button>Don't have an account? Register here. </button>
        </>
        
    )
       
}