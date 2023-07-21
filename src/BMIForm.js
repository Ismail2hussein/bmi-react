import React, { useState } from 'react';

function BMIForm() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [bmi, setBMI] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate BMI
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = mass / (heightInMeters ** 2);
    setBMI(bmiValue.toFixed(2)); // Round BMI value to 2 decimal places
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonStyles = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const resultStyles = {
    marginTop: '20px',
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Mass (kg):
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          style={inputStyles}
        />
      </label>
      <button type="submit" style={buttonStyles}>
        Calculate BMI
      </button>
      {bmi && (
        <div style={resultStyles}>
          <p>Name: {name}</p>
          <p>Height: {height} cm</p>
          <p>Mass: {mass} kg</p>
          <p>BMI: {bmi}</p>
        </div>
      )}
    </form>
  );
}

export default BMIForm;
