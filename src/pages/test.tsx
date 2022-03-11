import {
    Grid,
    TextField,
    Theme,
    Button
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import LoginIcon from '@mui/icons-material/Login';
import LockOpen from '@mui/icons-material/LockOpen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Bg from '../resources/images/bg.jpg'
import './test.css'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundImage: `url(${Bg})`,
        top: 0,
        left: 0
    },

    form: {
        height: '40%',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },

    text: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        marginTop: '15px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },

    btns: {
        marginTop: '15px'
    },

}));

export default function Test() {
    const classes = useStyles();
    return (
        <Grid className={classes.container} >
            <div className={classes.form} >
                <div className={classes.text}>
                    <AccountCircleIcon fontSize='large' sx={{ marginRight: '10px' }} />
                    <TextField
                        fullWidth
                        label='Account'
                        type='text'
                        color='primary'
                    ></TextField>
                </div>
                <div className={classes.text}>
                    <LockOpen fontSize='large' sx={{ marginRight: '10px' }} />
                    <TextField
                        fullWidth
                        label='Password'
                        type='password'
                        color='primary'
                    ></TextField>
                </div>
                <div className={classes.btns} >
                    <Button
                        sx={{
                            marginTop: 0.5,
                            width: 120,
                            height: 40,
                        }}
                        variant={'contained'}
                        size={'small'}
                        color={'info'}
                        className='btn'
                    // onClick={login}
                    >
                        Sign in<LoginIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </div>
            </div>
        </Grid>
    )
}