import React, { useState } from 'react';
import formData from './data/formData.json';
import Form from './components/Form/Form';

const initalizeFormInputValues = () =>
  formData.inputFields.reduce((inputValues, inputField) => {
    inputValues[inputField.id] = '';
    return inputValues;
  }, {});

const App = () => {
  const [formInputValues, setFormInputValues] = useState(
    initalizeFormInputValues()
  );
  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (ev, id) =>
    setFormInputValues({ ...formInputValues, [id]: ev.target.value });

  const handleFormSubmit = () => {
    console.log(formInputValues);
    setSubmissions([...submissions, formInputValues]);
  };

  return (
    <Form
      inputFields={formData.inputFields}
      inputValues={formInputValues}
      onInputChange={handleInputChange}
      onSubmit={handleFormSubmit}
    />
  );
};

export default App;
