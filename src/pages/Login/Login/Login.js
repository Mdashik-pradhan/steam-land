import React, { useState } from 'react';
import {Container, Box,  Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser,  isLoading, signInWithGoogle , authError} = useAuth();
    const location = useLocation();
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
        
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleLogInWithGoogle = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="login-page">
            <Navigation />
            <Box className="form-overlay pt-5 pb-5" >
                <Container>
                    <Box className="container login-form-container">
                        <Box className="ms-auto" item sx={{marginTop: 8,}}>
                            <Typography variant="body1">Login</Typography>
                            <form onSubmit={handleSubmit}>
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
                                <Button sx={{width: '75%', m: 1}} variant="contained" type="submit">Login</Button>
                                <NavLink to="/register">
                                    <Button variant="text">New User? Please Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress/>}
                                {/* {user?.email && <Alert severity="success">User Created Successfully!</Alert>} */}
                                {authError && <Alert severity='error'>{authError}</Alert>}
                                <p>--------------------------------------------------</p>
                                <Button onClick={handleLogInWithGoogle} variant="contained">Sign In With Google</Button>
                            </form>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    )
}

export default Login;