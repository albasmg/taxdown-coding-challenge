import React from 'react';

const Input = ({ id, placeholder, type, value, maxLength, onChange }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      className="input"
    ></input>
  );
};

export default Input;
