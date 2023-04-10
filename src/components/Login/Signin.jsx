import React, { useRef } from 'react';

import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import {
    Button,
    Card,
    CardMedia,
    Container,
    TextField,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Loading from '../Others/Loading';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        maxWidth: 400,
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    media: {
        height: 120,
        width: 120,
        margin: theme.spacing(2),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Signin() {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');
    const classes = useStyles();

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
        // toast(`Signin Suceesfully ${user.displayName}`)
    };


    if (user) {
        navigate('/dashboard');
        toast(`Signup Successfully`)
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        toast('Something Wrong Please Try Again !')

    }

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image="https://i.ibb.co/TqDy5Zv/Virgo.png" title="Virgo Tobaco" />
                <Typography component="h1" variant="h5" align="center">
                    Sign in to your account
                </Typography>
                <form className={classes.form} onSubmit={formSubmit}>
                    <TextField
                        inputRef={emailRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type='email'
                    />
                    <TextField
                        inputRef={passRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    {/* <Link to="/forgotpassword" variant="body2">
                        Forgot password?
                    </Link> */}
                </form>
            </Card>
        </Container>
    );
}

export default Signin;