// StepForm.js
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';

import Summary from './Summary';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {}, address: {}, payment: {}
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormData = (stepData) => {
    setFormData({ ...formData, ...stepData });
  };

  switch(step) {
    case 1:
      return <PersonalDetails nextStep={nextStep} handleFormData={handleFormData} />;
    case 2:
      return <AddressDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
    
    case 3:
      return <Summary formData={formData} />;
    default:
      return <PersonalDetails nextStep={nextStep} />;
  }
};

export default StepForm;
