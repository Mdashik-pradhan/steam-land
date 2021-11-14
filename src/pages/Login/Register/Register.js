import React, { useState } from 'react';
import {Container, Grid, Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
// import loginImg from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';
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
        <Navigation />
        <Box className="register-overlay pt-5 pb-5">
            <Container>
                <Box className = "container register-form-container" >
                    <Box item sx={{marginTop: 8,}}>
                        <Typography variant="body1">Register</Typography>
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
                            <Button sx={{width: '75%', m: 1}} variant="contained" type="submit">Register</Button>
                            <NavLink to="/login">
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress/>}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity='error'>{authError}</Alert>}
                    </Box>
                    <Grid item xs={6}>
                        {/* <img style={{width: '100%'}} src={loginImg} alt="" /> */}
                    </Grid>
                </Box>
            </Container>
            </Box>
            <Footer />
        </div>
    )
}

export default Register;