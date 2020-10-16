import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  placeholder,
  type,
  value,
  maxLength,
  onChange,
  options,
}) => {
  if (type === 'singleselect') {
    return (
      <select id={id} placeholder={placeholder} onChange={onChange}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }

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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Input;
