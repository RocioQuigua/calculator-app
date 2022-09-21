import React from 'react';
import PropTypes from 'prop-types';

export const InputResult = ({value, /*setValue*/}) => {
  return (
    <div className='input-result'>
      <input value={value}  readOnly />
    </div>
  );
};

InputResult.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};