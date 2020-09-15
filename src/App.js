import React from 'react';
import formData from './data/formData.json';
import Form from './components/Form/Form';

const App = () => {
  return <Form inputFields={formData.inputFields} />;
};

export default App;
