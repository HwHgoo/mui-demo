import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import LockOpen from '@mui/icons-material/LockOpen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import Axios from "axios";
import { IImgCard } from './interfaces';

const theme = createTheme();

interface IInputBoxProps {
    text: string;
    id?: string;
    type: string;
    onChange: Function;
    icon?: any;
}

function InputBox(props: IInputBoxProps) {
    const text = props.text;
    const id = props.id;
    const type = props.type;
    const handleChange = props.onChange;
    const icon = props.icon;
    return (
        <Box
            display={'flex'} alignItems='flex-end' marginTop={2} width={'90%'}
        >
            {icon}
            <TextField
                id={id}
                label={text}
                variant='standard'
                type={type}
                onChange={(event) => handleChange(event.target.value)}
                fullWidth
            ></TextField>
        </Box>
    )
}

function LoginForm() {
    const [account, setAccount] = useState('');
    const [passwd, setPasswd] = useState('');

    const passwdIcon = <LockOpen
        sx={{
            marginRight: 1,
            marginBottom: 0.5,
        }}
    />;

    const accountIcon = <AccountCircleIcon
        sx={{
            marginRight: 1,
            marginBottom: 0.5,
        }}
    />;

    const navigate = useNavigate();
    const login = () => {
        Axios.post('http://10.253.50.11:9527/api/base/login', { name: account, passwd: passwd })
            .then(function (rsp) {
                if (rsp.status !== 200) {
                    return
                }
                console.log(rsp.data)
                if (rsp.data.code !== 0) {
                    navigate('/mainpage')
                    return
                } else {
                    navigate('/')
                }
            });
    };

    return (
        <Box
            component={'form'}
            id='login-form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 20,
                alignItems: 'center',
                width: '100%'
            }}
            onSubmit={() => console.log('submit!')}
        >

            <InputBox
                text={'account'}
                id={'account'}
                type={'text'}
                onChange={setAccount}
                icon={accountIcon}
            />
            <InputBox
                text={'password'}
                id={'password'}
                type={'password'}
                onChange={setPasswd}
                icon={passwdIcon}
            />

            <Box
                id='login-btns'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '83%',
                    marginTop: 2
                }}
            >
                <Button
                    sx={{
                        margin: 0.5,
                        width: 121,
                        height: 40.5,
                    }}
                    variant={'outlined'}
                    size={'small'}
                >
                    <ArticleIcon sx={{ marginRight: 1 }} />Sign up
                </Button>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{
                            marginTop: 0.5,
                            width: 120,
                            height: 40,
                        }}
                        variant={'contained'}
                        size={'small'}
                        onClick={login}
                    >
                        Sign in<LoginIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Link>
            </Box>

        </Box>
    );
}


function Login() {
    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth='xs'
                component='main'
            >
                <CssBaseline>
                    <LoginForm />
                </CssBaseline>
            </Container>
        </ThemeProvider>
    );
}

export default Login