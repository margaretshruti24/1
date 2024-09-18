// PersonalDetails.js
import React, { useState } from 'react';

const PersonalDetails = ({ nextStep, handleFormData }) => {
  const [personal, setPersonal] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!personal.firstName) tempErrors.firstName = "First name is required";
    if (!personal.lastName) tempErrors.lastName = "Last name is required";
    if (!/\S+@\S+\.\S+/.test(personal.email)) tempErrors.email = "Email is invalid";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleFormData({ personal });
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Details</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={personal.firstName}
          onChange={(e) => setPersonal({ ...personal, firstName: e.target.value })}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={personal.lastName}
          onChange={(e) => setPersonal({ ...personal, lastName: e.target.value })}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={personal.email}
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;
