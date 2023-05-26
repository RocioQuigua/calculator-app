import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../../store/useStore';

export const InputResult = ({value, /*setValue*/}) => {
  const theme = useStore((state) => state.theme);
  return (
    <div className={`input-result input-result--${theme}`}>
      <input className={`result result--${theme}`} value={value}  readOnly />
    </div>
  );
};

InputResult.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};