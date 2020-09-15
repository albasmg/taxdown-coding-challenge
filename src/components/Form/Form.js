import React from 'react';

const Form = ({ inputFields, inputValues, onInputChange }) => {
  return (
    <form>
      {inputFields.map(({ label, id, placeholder, type, maxLength }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            maxLength={maxLength}
            value={inputValues[id]}
            onChange={(ev) => onInputChange(ev, id)}
          ></input>
        </div>
      ))}
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
