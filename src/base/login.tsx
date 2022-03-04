import React from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import LockOpen from '@mui/icons-material/LockOpen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import Axios from "axios";

const theme = createTheme();

// function InputBox(text: string, passwd: boolean, icon: any): JSX.Element {
//     const t = passwd ? 'password' : 'text';
//     return (
//         <Box
//             display={'flex'} alignItems='flex-end' marginTop={2}
//         >
//             {icon}
//             <TextField
//                 label={text}
//                 variant='standard'
//                 type={t}
//             ></TextField>
//         </Box>
//     )
// }


interface IInputBoxProps {
    text: string;
    id?: string;
    type: string;
    onChange: Function;
    icon?: any;
}

interface IInputBoxState {
}

class InputBox extends React.Component<IInputBoxProps, IInputBoxState> {
    render(): React.ReactNode {
        const text = this.props.text;
        const id = this.props.id;
        const type = this.props.type;
        const handleChange = this.props.onChange;
        const icon = this.props.icon;
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
}

interface ILoginFormProps { }
interface ILoginFormState {
    account: string,
    passwd: string,
}
class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            account: '',
            passwd: '',
        };

        this.handleAccountChange = this.handleAccountChange.bind(this)
        this.handlePasswdChange = this.handlePasswdChange.bind(this)
        this.handleSigninClick = this.handleSigninClick.bind(this)
    }

    handleAccountChange(account: string) {
        this.setState({
            account: account,
            passwd: this.state.passwd,
        });
    }

    handlePasswdChange(passwd: string) {
        this.setState({
            account: this.state.account,
            passwd: passwd,
        });
    }

    handleSigninClick() {
        const data = {
            name: this.state.account,
            passwd: this.state.passwd
        }
        const res = Axios.post('http://10.253.50.11:9527/api/base/login', data);
        console.log(res);
    }


    render(): React.ReactNode {
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
            >

                <InputBox
                    text={'account'}
                    id={'account'}
                    type={'text'}
                    onChange={this.handleAccountChange}
                    icon={accountIcon}
                />
                <InputBox
                    text={'password'}
                    id={'password'}
                    type={'password'}
                    onChange={this.handlePasswdChange}
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
                    <Link to='/mainpage'>
                        <Button
                            sx={{
                                marginTop: 0.5,
                                width: 120,
                                height: 40,
                            }}
                            variant={'contained'}
                            size={'small'}
                            onClick={this.handleSigninClick}
                        >
                            Sign in<LoginIcon sx={{ marginLeft: 1 }} />
                        </Button>
                    </Link>
                </Box>

            </Box>
        )
    }
}

class Login extends React.Component {
    render(): React.ReactNode {
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
        )
    }
}

export default Login