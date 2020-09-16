import React from 'react';

const Label = ({ id, title }) => {
  return (
    <label className="label" htmlFor={id}>
      {title}
    </label>
  );
};

export default Label;
