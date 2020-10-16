import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import Input from '../Input/Input';

const Form = ({ inputFields, inputValues, onInputChange, onSubmit }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const isSubmitButtonDisabled = Object.keys(inputValues).some(
    (inputValue) => !inputValues[inputValue].trim()
  );

  const handleSubmitButtonClick = (ev) => {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 2000);
    onSubmit();
    ev.preventDefault();
  };

  return (
    <form className="form">
      <div className="form__decoration"></div>
      <h2 className="form__claim">
        <span>Hey!</span> Could you fill this form for us?
      </h2>
      <Link to="/submissions">
        <p className="form__link">Show all submissions</p>
      </Link>
      {inputFields.map(
        ({ label, id, placeholder, type, maxLength, options }) => (
          <div className="form__group" key={id}>
            <Label id={id} title={label} isRequired></Label>
            <Input
              id={id}
              placeholder={placeholder}
              type={type}
              maxLength={maxLength}
              options={options}
              value={inputValues[id]}
              onChange={(ev) => onInputChange(ev, id)}
            />
          </div>
        )
      )}
      <input
        type="submit"
        value="Submit"
        onClick={handleSubmitButtonClick}
        className="form__submitBtn"
        disabled={isSubmitButtonDisabled}
      />
      <div className="form__submittedMessageContainer">
        {isFormSubmitted && (
          <p className="form__submittedMessage">
            Your form has been submitted successfully!{' '}
            <span role="img" aria-label="icon">
              💃🏻
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

Form.propTypes = {
  inputFields: PropTypes.array.isRequired,
  inputValues: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
