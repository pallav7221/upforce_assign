
import { TextField, Grid, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
const city = [
    { label: "Bhilwara", value: "bhilwara" },
    { label: "Ajmer", value: "ajmer" },

];
const state = [
    { label: "Rajasthan", value: "rajasthan" },
    { label: "Delhi", value: "delhi" },

];
const country = [
    { label: "India", value: "india" },
    { label: "Srilanka", value: "srilanka" },

];
export default function StepTwo({ formData, setFormData, error }) {
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <Grid container spacing={1}>
            <Grid item md={12}>
                <CardContent>
                    <Grid item container spacing={1} justify="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                placeholder="Address Line1"
                                error={formData.addressLine1.length === 0 && error ? "address +" + error : ""}
                                helperText={formData.addressLine1.length === 0 && error ? "address" + error : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                placeholder="Address Line2"
                                error={formData.addressLine2.length === 0 && error ? "address" + error : ""}
                                helperText={formData.addressLine2.length === 0 && error ? "address" + error : ""}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                    City
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="City"
                                    onChange={handleChange}
                                    value={formData.city}
                                    name="city"
                                    error={formData.city.length === 0 && error ? "city" + error : ""}
                                    helperText={formData.city.length === 0 && error ? "city" + error : ""}
                                >
                                    <MenuItem>None</MenuItem>
                                    {city.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                    State
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="State"
                                    onChange={handleChange}
                                    value={formData.state}
                                    name="state"
                                    error={formData.state.length === 0 && error ? "state" + error : ""}
                                    helperText={formData.state.length === 0 && error ? "state" + error : ""}
                                >
                                    <MenuItem>None</MenuItem>
                                    {state.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Country
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Country"
                                    onChange={handleChange}
                                    value={formData.country}
                                    name="country"
                                    error={formData.country.length === 0 && error ? "country" + error : ""}
                                    helperText={formData.country.length === 0 && error ? "country" + error : ""}
                                >
                                    <MenuItem>None</MenuItem>
                                    {country.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6}>
                            <TextField type="number" name="pinCode" value={formData.pinCode} onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                placeholder="Pin Code"
                                error={formData.pinCode.length === 0 && error ? "pincode" + error : ""}
                                helperText={formData.pinCode.length === 0 && error ? "pincode" + error : ""}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
};