// Summary.js
import React from 'react';
import './Summary.css';
const Summary = ({ formData }) => {
  return (
    <div className='Summary'>
      <h2>Summary</h2>
      <h3>Personal Details</h3>
      <p><strong>First Name:</strong> {formData.personal.firstName}</p>
      <p><strong>Last Name:</strong> {formData.personal.lastName}</p>
      <p><strong>Email: </strong>{formData.personal.email}</p>

      <h3>Address Details</h3>
      <p><strong>Street:</strong> {formData.address.street}</p>
      <p><strong>City:</strong> {formData.address.city}</p>
      <p><strong>Zip Code: </strong>{formData.address.zip}</p>

    </div>
  );
};

export default Summary;
