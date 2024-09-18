// AddressDetails.js
import React, { useState } from 'react';

const AddressDetails = ({ nextStep, prevStep, handleFormData }) => {
  const [address, setAddress] = useState({ street: '', city: '', zip: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!address.street) tempErrors.street = "Street is required";
    if (!address.city) tempErrors.city = "City is required";
    if (!address.zip) tempErrors.zip = "Zip code is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleFormData({ address });
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Address Details</h2>
      <div>
        <label>Street</label>
        <input
          type="text"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        {errors.street && <span>{errors.street}</span>}
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />
        {errors.zip && <span>{errors.zip}</span>}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AddressDetails;
