import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AddressForm() {
    const defaultProps = {
        options: ['Female', 'Male', 'Prefer Not to Answer']
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName_inquiry"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName_inquiry"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="age_inquiry"
                        name="age"
                        label="Age"
                        fullWidth
                        autoComplete="age"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        onChange={(event, value) => sessionStorage.setItem("gender_inquiry",JSON.stringify(value))}
                        {...defaultProps}
                        required
                        id="Gender"
                        debug
                        renderInput={(params) => <TextField {...params} required label="Gender" />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="contact_number_inquiry"
                        name="contact_number"
                        label="Contact number"
                        fullWidth
                        autoComplete="contact_number"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city_inquiry"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                    />
                </Grid>


                {/*{<Grid item xs={12}>*/}
                {/*    <FormControlLabel*/}
                {/*        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}*/}
                {/*        label="I agree to the terms of service"*/}
                {/*    />*/}
                {/*</Grid>}*/}

            </Grid>
        </React.Fragment>
    );
}