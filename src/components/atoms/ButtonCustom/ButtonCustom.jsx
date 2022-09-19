import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export const ButtonCustom = ({name, onClick, type}) => {
  return (
    <Button className={`button-custom button-custom--${type}`} onClick={onClick}>{name}</Button>
  );
};

ButtonCustom.propTypes = {
  key: PropTypes.any,
  name: PropTypes.string,
  onClick: PropTypes.string,
  type: PropTypes.string
};