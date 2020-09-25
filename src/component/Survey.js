import React, { useState } from "react";

import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from "@material-ui/icons/Save";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    divStyle: {
        margin: "auto",
    },
    textFieldStyle: {
        margin: theme.spacing(1),
        width: 300,
    },
    button: {
        margin: theme.spacing(1),
        width: 300,
    }
}));

export default function Posting() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [symptom, setSymptom] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangeSymptom = (event) => {
        setSymptom(event.target.value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.divStyle}>
                    <TextField required id="title" label="title" variant="outlined" className={classes.textFieldStyle} />

                  <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="genderInput">symptom</InputLabel>
                            <Select
                                labelId="genderSelect"
                                name="symptom"
                                value={symptom}
                                onChange={handleChangeSymptom}
                                label="symptom"
                            >
                                <MenuItem value={'touteng'}>touteng</MenuItem>
                                <MenuItem value={'fashao'}>fashao</MenuItem>
                                <MenuItem value={'outu'}>outu</MenuItem>
                                <MenuItem value={'laduzi'}>laduzi</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="age"
                                label="Birthday"
                                type="date"
                                defaultValue="2000-05-24"
                                className={classes.textFieldStyle}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </form>
                    </div>
                    <div>
                        <TextField required multiline rows={5} id="introduction" label="description" variant="outlined" className={classes.textFieldStyle} />
                    </div>
                </div>
                <div className={classes.divStyle}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={() => onSubmit(symptom)}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}


function onSubmit(symptom) {

    var title = document.getElementById("title").value;
    console.log(title);
    // var working_experience = document.getElementById("working_experience").value;
    var introduction = document.getElementById("introduction").value;
    var age = document.getElementById("age").value;
    age = age.toString();
    console.log(age);
    console.log(symptom);
    // var address = document.getElementById("address").value;
    // var contact_information = document.getElementById("contact_information").value;

}