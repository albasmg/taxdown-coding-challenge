import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import formData from './data/formData.json';
import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Submissions from './components/Submissions/Submissions';

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

  const handleClearButttonClick = () => {
    setSubmissions([]);
  };

  const handleSendToServerButtonClick = async () => {
    return await new Promise((resolve) => setTimeout(resolve, 4000));
  };

  return (
    <section className="app">
      <Switch>
        <Route exact path="/">
          <Hero />
          <Form
            inputFields={formData.inputFields}
            inputValues={formInputValues}
            onInputChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
        </Route>
        <Route path="/submissions">
          <Submissions
            submissions={submissions}
            onClearButtonClick={handleClearButttonClick}
            onSendToServerButtonClick={handleSendToServerButtonClick}
          />
        </Route>
      </Switch>
    </section>
  );
};

export default App;
