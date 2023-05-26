import React from 'react';
import PropTypes from 'prop-types';

import { useStore } from '../../../store/useStore';
import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';
import { items, actions } from '../../../common/utils/keyboardItems';

const operations = ['+', '-', '*', '/'];

export const KeyboardCalculator = ({value, setValue}) => {
  const theme = useStore((state) => state.theme);

  const handleOk = (key) => { // key = 1
    let newValue = value; 
    const lastKey = value.slice(-1);
    
    if (Number.isInteger(key)) 
      newValue = `${value}${key}`; //Concatena una cadena
    
    if (operations.includes(key) && !isNaN(parseInt(lastKey, 10)))
      newValue = `${value}${key}`; //las operaciones

    if (operations.includes(key) && operations.includes(lastKey))
      newValue = `${value.substring(0, value.length-1)}${key}`;
    
    if (key === 'DEL')
      newValue = value.slice(0, -1);

    if (key === 'RESET')
      newValue = '';

    if (key === '=')
      newValue = eval(newValue);
    
    //crear una funcion, recibir una cadena (new value), convertir una cadena en array .split
    //recorrer el array
    //en cada posicion preguntar si es un numero u operacion
    //si es una operacion toca calcular 

    setValue(newValue);
  };

  return (
    <div className={`keyboard-calculator keyboard-calculator--${theme}`}>
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