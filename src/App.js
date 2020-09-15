import React, { useState } from 'react';
import formData from './data/formData.json';
import Form from './components/Form/Form';

const initalizeFormInputValues = () =>
  formData.inputFields.reduce((acc, curr) => {
    acc[curr.id] = '';
    return acc;
  }, {});

const App = () => {
  const [formInputValues, setFormInputValues] = useState(
    initalizeFormInputValues()
  );

  const handleInputChange = (ev, id) =>
    setFormInputValues({ ...formInputValues, [id]: ev.target.value });

  return (
    <Form
      inputFields={formData.inputFields}
      inputValues={formInputValues}
      onInputChange={handleInputChange}
    />
  );
};

export default App;
