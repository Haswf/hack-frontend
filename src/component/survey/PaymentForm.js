import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Symptom Tags
            </Typography>
            <Grid>add your symptom tags</Grid>
            <Autocomplete
                multiple
                id="tags-standard"
                options={symptomsTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Symptom Tags"
                        placeholder="Favorites"
                    />
                )}
            />



        </React.Fragment>
    );
}

const symptomsTags = [
    { title: 'Fever (≥38 °C) ', year: 1994 },
    { title: 'Sore throat', year: 1972 },
    { title: 'Runny nose', year: 1974 },
    { title: 'Dry Cough', year: 2008 },
    { title: 'Shortness of Breath', year: 1957 },
    { title: "Vomiting", year: 1993 },
    { title: 'Nausea', year: 1994 },
    { title: 'Diarrhea', year: 2003 },
    { title: 'Tiredness', year: 1966 },
    { title: 'Conjunctivitis', year: 1999 },
    { title: 'Loss of Taste', year: 2001 },
    { title: 'Loss of Smell', year: 1980 },
    { title: 'Rash on Skin', year: 1994 },
    { title: 'Discolouration of Fingers or Toes', year: 2010 },
    { title: 'Chest Pain or Pressure', year: 2002 },
];

