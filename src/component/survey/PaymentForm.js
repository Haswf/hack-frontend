import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import axios from "../../axios";


export default function PaymentForm() {
    const [tags, setTags] = useState([]);

    useEffect(async () => {
        let response = await axios.get("/symptoms/", {});
        setTags(response.data.data.symptoms)
    }, [])


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Symptom Tags
            </Typography>
            <Grid>add your symptom tags</Grid>
            <Autocomplete
                onChange={(event, value) => sessionStorage.setItem("symptom_value",JSON.stringify(value))}
                multiple
                id="tags-standard"
                options={tags}
                getOptionLabel={(option) => option.name}
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
    { title: 'Fever (≥38 °C)'},
    { title: 'Sore throat'},
    { title: 'Runny nose'},
    { title: 'Dry Cough'},
    { title: 'Shortness of Breath'},
    { title: "Vomiting"},
    { title: 'Nausea'},
    { title: 'Diarrhea'},
    { title: 'Tiredness'},
    { title: 'Conjunctivitis'},
    { title: 'Loss of Taste'},
    { title: 'Loss of Smell'},
    { title: 'Rash on Skin'},
    { title: 'Discolouration of Fingers or Toes'},
    { title: 'Chest Pain or Pressure'},
];
console.log(document.getElementById("symptoms"))

