import React from 'react';

import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';
import { items, actions } from '../../../common/utils/keyboardItems';

export const KeyboardCalculator = () => {
  const handleOk = (key) => {
    console.log(key);
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
