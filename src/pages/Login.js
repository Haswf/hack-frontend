import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "../axios"
import {Link} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import { useSnackbar } from 'notistack';
import { withRouter } from "react-router";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const classes = useStyles();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const onSignInHandler = async () => {
        try {
            let response = await axios.post("/auth/login", null, {
                params: {
                    email: userEmail,
                    password: userPassword
                }
            });
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            localStorage.setItem("token", JSON.stringify(response.data.data.token));
            console.log(response.data.data.token);
            props.history.replace({pathname: "/discussionList"})
            axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.data.token;
        }
        catch (error) {
            enqueueSnackbar("Signin failed: "+error.message , {
                variant: 'error'
            });
            setLoginFailed(true);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography
                    component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event, ) => setUserPassword(event.target.value)}

                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => onSignInHandler()}
                        disabled={!userEmail || !userPassword}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/*<Link to="/recover" variant="body2">*/}
                            {/*    Forgot password?*/}
                            {/*</Link>*/}
                        </Grid>
                        <Grid item>
                            <Link
                                to="/signup"
                                variant="body2">
                                Don't have an account? Sign Up!
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/*<Box mt={8}>*/}
            {/*    <Copyright/>*/}
            {/*</Box>*/}
            <Dialog
                open={loginFailed}
            >
                <Alert severity="warning"
                       onClose={() => {setLoginFailed(false);}
                       }>
                    Something went wrong on our end. Check your login credential again?
                </Alert>
            </Dialog>
        </Container>
    );
}

export default withRouter(SignIn);
