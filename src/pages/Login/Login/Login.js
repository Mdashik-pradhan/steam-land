import React, { useState } from 'react';
import {Container, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import googleIcon from '../../../images/g.png';
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
            <Box className="text-center" >
                <Container>
                    <Box className="text-center ms-auto" >
                        <Box className="login-form-container mx-auto text-center pb-4" item sx={{marginLeft: 'auto'}}>
                            <Box className="login-form-head" variant="h3"><LockOpenIcon /> Sign In</Box>
                            <form className="text-center" onSubmit={handleSubmit}>
                                <TextField 
                                sx={{width: '75%', m:1}}
                                id="standard-basic" 
                                label="Your Email"
                                name='email'
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                                />
                                <TextField 
                                sx={{width: '75%', m:1, mb: 5}}
                                id="standard-basic" 
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password" 
                                variant="standard" 
                                />
                                <Button className="submit-button" sx={{width: '75%', m: 1}} variant="contained" type="submit">SIGN IN</Button>
                                <NavLink style={{textDecoration: 'none'}} to="/register">
                                    <Button variant="text">New User? Please Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress/>}
                                {/* {user?.email && <Alert severity="success">User Created Successfully!</Alert>} */}
                                {authError && <Alert severity='error'>{authError}</Alert>}
                                <p>--------------------------------------------------</p>
                                <Button onClick={handleLogInWithGoogle}  className="google-signIn" ><img className="google-icon" src={googleIcon} alt=""/>oogle Sign In</Button>
                            </form>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Login;