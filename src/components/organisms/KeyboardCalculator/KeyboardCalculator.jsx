import React from 'react';
import PropTypes from 'prop-types';

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';
import { items, actions } from '../../../common/utils/keyboardItems';

export const KeyboardCalculator = ({value, setValue}) => {

  const handleOk = (key) => {
    let newValue = value;

    if (Number.isInteger(key)) 
      newValue = `${value}${key}`; //Concatena una cadena

    if (key === 'DEL')
      newValue = newValue.slice(0, -1);

    if(key === 'RESET') 
      newValue = '';
    
    setValue(newValue);
  };

  return (
    <div className="keyboard-calculator">
      <div className='keyboard-calculator__items'>
        {items.map((item) => (
          <ButtonCustom
            key={item.name}
            name={item.name}
            onClick={() => handleOk(item.key)}
            type={item.type}
          />
        ))}
      </div>
      <div className='keyboard-calculator__items keyboard-calculator__items--actions'>
        {actions.map((item) => (
          <ButtonCustom
            key={item.name}
            name={item.name}
            onClick={() => handleOk(item.key)}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

KeyboardCalculator.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};