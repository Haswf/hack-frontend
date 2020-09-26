import React, { useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "../axios";
import {Link} from "react-router-dom";
import Copyright from "../component/Copyright";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import { useSnackbar } from 'notistack';
import { withRouter} from 'react-router';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = function(props) {
    const classes = useStyles();
    const [userUserName, setUserUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [signupFailed, setSignupFailed] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const onSignUpHandler = async () => {
        try {
            await axios.post("/users", null, {
                params: {
                    username: userUserName,
                    email: userEmail,
                    password: userPassword
                }
            });
            props.history.replace({pathname: "/login"})
        }
        catch (error) {
            enqueueSnackbar("Signup failed: "+error.message , {
                variant: 'error'
            });
            setSignupFailed(true);
        }
    };

    const isPasswordValid = (password) => {
        if (password.length < 8) {
            return false;
        }
        if (/\s/.test(password)) {
            return false;
        }
        return (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="uname"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                                onChange={(event) => setUserUserName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(event) => setUserEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!isPasswordValid(userPassword)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText="At least 8 characters of upper case, lower case letters and digits without spaces"
                                onChange={(event) => setUserPassword(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSignUpHandler}
                        disabled={!userEmail || !userUserName || !userPassword || !isPasswordValid(userPassword)}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
            <Dialog
                open={signupFailed}
            >
                <Alert severity="warning"
                       onClose={() => {setSignupFailed(false);}
                       }>
                    Signup failed, the email address may already exists or the password is too weak, please try again.
                </Alert>
            </Dialog>
        </Container>
    );
}


export default withRouter(SignUp);