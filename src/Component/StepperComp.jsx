import { useState } from 'react';
import Button from '@mui/material/Button';
import { Stepper, Step, StepLabel, Grid} from '@mui/material';
import StepOne from './StepOneForm';
import StepTwo from './StepTwoForm';
import StepThree from './FinalStep';


export default function MyForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: '',
    birthday: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  });
  const [error, setError] = useState("");

  const handleNext = () => {

    if (formData.firstName.length === 0 || formData.lastName.length === 0 || formData.middleName.length === 0 || formData.email.length === 0 || formData.mobileNo.length === 0 || formData.birthday.length === 0 || formData.age.length === 0 || formData.bloodGroup.length === 0 || formData.height.length === 0 || formData.weight.length === 0 || formData.maritalStatus.length === 0) {
      setError(" is requried field")
    }
    if (formData.firstName.length !== 0 && formData.lastName.length !== 0 && formData.middleName.length !== 0 && formData.email.length !== 0 && formData.mobileNo.length !== 0 && formData.birthday.length !== 0 && formData.age.length !== 0 && formData.bloodGroup.length !== 0 && formData.height.length !== 0 && formData.weight.length !== 0 && formData.maritalStatus.length !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    console.log(formData);
  };

  const steps = [
    { label: 'USER INFORMATION', component: <StepOne formData={formData} setFormData={setFormData} handleNext={handleNext} error={error} /> },
    { label: 'ADDRESS DETAILS', component: <StepTwo formData={formData} setFormData={setFormData} handleBack={handleBack} handleNext={handleNext} error={error} /> },
    { label: 'Thank You', component: <StepThree formData={formData} handleBack={handleBack} handleComplete={handleComplete} /> },
  ];

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps[activeStep].component}
      <Grid className='buttons'>
        <Button disabled={activeStep === 0} variant="contained" size="large" onClick={handleBack}>Back</Button>
        <Button disabled={activeStep === 2} variant="contained" size="large" onClick={handleNext}>Next</Button>
      </Grid>
    </div>
  );
};
