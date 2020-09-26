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
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="Age"
                        fullWidth
                        autoComplete="age"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
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
                        id="email"
                        name="email"
                        label="Email Address"
                        fullWidth
                        autoComplete="email address"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="country"
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

function toUserInformation(){
    window.location.assign(`http://localhost:3000/`);
}