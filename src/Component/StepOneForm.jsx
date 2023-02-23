
import { TextField, Grid, CardContent, FormControl, InputLabel, Select, MenuItem, FormControlLabel, FormLabel, Radio, RadioGroup, FormHelperText } from '@mui/material';
const options = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB-", value: "AB-" }
];

export default function StepOne({ formData, setFormData, error }) {
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={12}>
        <CardContent>
          <Grid item container spacing={1} justify="center">
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="First Name"
                error={formData.firstName.length === 0 && error ? "First Name" + error : ""}
                helperText={formData.firstName.length === 0 && error ? "First Name" + error : ""}

              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="text" name="middleName" value={formData.middleName} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Middle Name"
                error={formData.middleName.length === 0 && error ? "Middle Name" + error : ""}
                helperText={formData.middleName.length === 0 && error ? "Middle Name" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Last Name"
                error={formData.lastName.length === 0 && error ? "Last Name" + error : ""}
                helperText={formData.lastName.length === 0 && error ? "Last Name" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="number" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Mobile No"
                error={formData.mobileNo.length === 0 && error ? "Mobile No" + error : ""}
                helperText={formData.mobileNo.length === 0 && error ? "Mobile No" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="email" name="email" value={formData.email} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Email"
                error={formData.email.length === 0 && error ? "Eamil" + error : ""}
                helperText={formData.email.length === 0 && error ? "Email" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="date" name="birthday" value={formData.birthday} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Birthday"
                // label="Birthday"
                error={formData.birthday.length === 0 && error ? "Birthday" + error : ""}
                helperText={formData.birthday.length === 0 && error ? "Birthday" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="" name="age" value={formData.age} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Age"
                error={formData.age.length === 0 && error ? "Age" + error : ""}
                helperText={formData.age.length === 0 && error ? "Age" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Blood Group"
                  onChange={handleChange}
                  value={formData.bloodGroup}
                  name="bloodGroup"
                  error={formData.bloodGroup.length === 0 && error ? "Blood group" + error : ""}
                  helperText={formData.bloodGroup.length === 0 && error ? "Blood Group" + error : ""}
                >
                  <MenuItem>None</MenuItem>
                  {options.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="text" name="height" value={formData.height} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Height"
                error={formData.height.length === 0 && error ? "Height" + error : ""}
                helperText={formData.height.length === 0 && error ? "Height" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField type="text" name="weight" value={formData.weight} onChange={handleChange}
                variant="outlined"
                fullWidth
                placeholder="Weight"
                error={formData.weight.length === 0 && error ? "Weight" + error : ""}
                helperText={formData.weight.length === 0 && error ? "Weight" + error : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl
                error={formData.gender.length === 0 && error ? "Gender" + error : ""}

              >
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"

                >
                  <FormControlLabel onChange={handleChange} value="female" control={<Radio />} label="Female" />
                  <FormControlLabel onChange={handleChange} value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                {formData.gender.length === 0 && error ? <FormHelperText>{"Gender" + error}</FormHelperText> : ""};
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl
                error={formData.gender.length === 0 && error ? "maritalStatus" + error : ""}
              >
                <FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="maritalStatus"
                >
                  <FormControlLabel onChange={handleChange} value="singal" control={<Radio />} label="Single" />
                  <FormControlLabel onChange={handleChange} value="married" control={<Radio />} label="Married" />
                  <FormControlLabel onChange={handleChange} value="divorced" control={<Radio />} label="Divorced" />
                  <FormControlLabel
                    onChange={handleChange}
                    value="widowed"
                    control={<Radio />}
                    label="Widowed"
                  />
                </RadioGroup>
                {formData.maritalStatus.length === 0 && error ? <FormHelperText>{"maritalStatus" + error}</FormHelperText> : ""};
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  );
};


