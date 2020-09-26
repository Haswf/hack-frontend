import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import SurveyPage from './Symptom';
import Review from './Review';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Personal Information', 'Symptom Tags', 'Review your Inquiry'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if(activeStep===0){
            setActiveStep(activeStep + 1);

            var firstName = document.getElementById("firstName_inquiry").value;
            var lastName = document.getElementById("lastName_inquiry").value;
            var age = document.getElementById("age_inquiry").value;
            var contact_number = document.getElementById("contact_number_inquiry").value;
            var city = document.getElementById("city_inquiry").value;
            sessionStorage.setItem("firstName_inquiry",firstName);
            sessionStorage.setItem("lastName_inquiry",lastName);
            sessionStorage.setItem("age_inquiry",age);
            sessionStorage.setItem("contact_number_inquiry",contact_number);
            sessionStorage.setItem("city_inquiry",city);

            /*console.log("stage one:");
            console.log(sessionStorage.getItem("firstName_inquiry"));
            console.log(sessionStorage.getItem("lastName_inquiry"));
            console.log(sessionStorage.getItem("age_inquiry"));
            console.log(sessionStorage.getItem("gender_inquiry"));
            console.log(sessionStorage.getItem("contact_number_inquiry"));
            console.log(sessionStorage.getItem("city_inquiry"));*/
    }
        if(activeStep===1){
            if(!sessionStorage.getItem("symptom_value")){
                alert("Please select at least one symptom!");
            } else {
                setActiveStep(activeStep + 1);
                console.log("stage two:")
                console.log(sessionStorage.getItem("symptom_value"))
            }
        }

        if(activeStep===2){
            setActiveStep(activeStep + 1);
            console.log("stage one & stage two:")
            console.log("stage one information:.....")
            console.log(sessionStorage.getItem("symptom_value"))
        }

    };

    const handleBack = () => {
        if(activeStep===1){
            console.log(1);
            sessionStorage.removeItem("firstName_inquiry");
            sessionStorage.removeItem("lastName_inquiry");
            sessionStorage.removeItem("age_inquiry");
            sessionStorage.removeItem("contact_number_inquiry");
            sessionStorage.removeItem("city_inquiry");
            sessionStorage.removeItem("gender_inquiry");
        }
        if(activeStep===2){
            sessionStorage.removeItem("symptom_value");
        }
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Ask Doctors!
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Medical Inquiry
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your inquiry.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your inquiry number is #2001539. We have emailed your inquiry confirmation, and will
                                    send you an update when your inquiry has been answered.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}
