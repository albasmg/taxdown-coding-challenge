import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';
import Input from '../Input/Input';

const Form = ({ inputFields, inputValues, onInputChange, onSubmit }) => {
  const handleSubmitButtonClick = (ev) => {
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
        <p class="form__link">Show all submissions</p>
      </Link>
      {inputFields.map(({ label, id, placeholder, type, maxLength }) => (
        <div className="form__group" key={id}>
          <Label id={id} title={label}></Label>
          <Input
            id={id}
            placeholder={placeholder}
            type={type}
            maxLength={maxLength}
            value={inputValues[id]}
            onChange={(ev) => onInputChange(ev, id)}
          />
        </div>
      ))}
      <input
        type="submit"
        value="Submit"
        onClick={handleSubmitButtonClick}
        className="form__submitBtn"
      />
    </form>
  );
};

export default Form;
