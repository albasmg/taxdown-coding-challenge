import React from 'react';

const Label = ({ id, title, isRequired }) => {
  return (
    <label className="label" htmlFor={id}>
      {title} {isRequired && '*'}
    </label>
  );
};

export default Label;
