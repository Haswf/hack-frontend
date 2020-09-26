import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import GridContainer from "../../pages/Grid/GridContainer";


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
        marginLeft: 240,

        color: '#006064',
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
        alignItems: "center"

    },
    personalinfo: {
        alignItems: 'left',
        color: '#006064',
    },
}));

export default function Review() {
    const classes = useStyles();
    const symptoms = JSON.parse(sessionStorage.getItem("symptom_value"))
    console.log(symptoms);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Symptoms
            </Typography>
            <List disablePadding>
                {symptoms.map((symptom) => (
                    <ListItem className={classes.listItem} key={symptom.name}>
                        {symptom.name}
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom className={classes.title}>
                       Personal Information
                    </Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"First Name:  " + sessionStorage.getItem("firstName_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"Last Name:   " + sessionStorage.getItem("lastName_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"Age: " + sessionStorage.getItem("age_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"Gender:  " + sessionStorage.getItem("gender_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"Contact Number:  " + sessionStorage.getItem("contact_number_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{"City:    " + sessionStorage.getItem("city_inquiry")}</Typography>
                    <Typography className={classes.personalinfo} variant="subtitle1" gutterBottom>{sessionStorage.getItem("des_inquiry")}</Typography>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}