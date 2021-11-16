import React, { useState } from 'react';
import {Container, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser,  isLoading, authError} = useAuth();
    const history = useHistory();
    const handleOnBlur = (e) => {
        const field  = e.target.name;
        const value  = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData)
    const handleSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match.')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="register-page">
        <Box className="">
            <Container>
                <Box className="text-center ms-auto" >
                    <Box className="register-form-container mx-auto text-center pb-4">
                        <Box className="login-form-head mb-2"><AccountCircleIcon /> Register</Box>
                        {!isLoading && <form onSubmit={handleSubmit}>
                            <TextField 
                            sx={{width: '75%', m:1 }}
                            id="standard-basic" 
                            label="Your Name"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                            <TextField 
                            sx={{width: '75%', m:1 }}
                            id="standard-basic" 
                            label="Your Email"
                            name='email'
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                            <TextField 
                            sx={{width: '75%', m:1 }}
                            id="standard-basic" 
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password" 
                            variant="standard" 
                            />
                            <TextField 
                            sx={{width: '75%', m:1 }}
                            id="standard-basic" 
                            label="ReType Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password" 
                            variant="standard" 
                            />
                            <Button className="submit-button mb-3" sx={{width: '75%', m: 1}} variant="contained" type="submit">Register</Button><br />
                            <NavLink style={{textDecoration: 'none'}} to="/login">
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress sx={{color: 'purple'}}/>}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity='error'>{authError}</Alert>}
                    </Box>
                </Box>
            </Container>
            </Box>
        </div>
    )
}

export default Register;