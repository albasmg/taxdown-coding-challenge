import React from 'react';

const Form = ({ inputFields }) => {
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
          ></input>
        </div>
      ))}
    </form>
  );
};

export default Form;
