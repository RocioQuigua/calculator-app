import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { useStore } from '../../../store/useStore';

export const ButtonCustom = ({ name, onClick, type }) => {
  const theme = useStore((state) => state.theme);
  return (
    <Button className={`button-custom button-custom__${type} button-custom__${type}--${theme}`} onClick={onClick}>
      {name}
    </Button>
  );
};

ButtonCustom.propTypes = {
  key: PropTypes.any,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
