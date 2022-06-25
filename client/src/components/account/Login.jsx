import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 180,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 10px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #76d6c6;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color:#3bc4ad;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
  

  ///
//
{/*
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;*/}

////
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

     const imageURL ='data:image/png;base64,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';
    //const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;