import React from 'react';
import PropTypes from 'prop-types';

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';
import { items, actions } from '../../../common/utils/keyboardItems';

const operations = ['+', '-', '*', '/'];

export const KeyboardCalculator = ({value, setValue}) => {

  const handleOk = (key) => { // key = 1
    let newValue = value; 
    const lastKey = value.slice(-1);
    
    if (Number.isInteger(key)) 
      newValue = `${value}${key}`; //Concatena una cadena
    
    if (operations.includes(key) && !isNaN(parseInt(lastKey, 10)))
      newValue = `${value}${key}`; //las operaciones

    if (operations.includes(key) && operations.includes(lastKey))
      newValue = `${value.substring(0, value.length-1)}${key}`;
    
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