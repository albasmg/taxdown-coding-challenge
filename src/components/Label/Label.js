import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ id, title, isRequired }) => {
  return (
    <label className="label" htmlFor={id}>
      {title} {isRequired && '*'}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default Label;
