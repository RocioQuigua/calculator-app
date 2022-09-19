import React from 'react';
import { ButtonCustom } from '../../atoms/ButtonCustom/ButtonCustom';

export const KeyboardCalculator = () => {
  const items = [
    {
      key: 7,
      name: '7',
      type: 'default',
    },
    {
      key: 8,
      name: '8',
      type: 'default',
    },
    {
      key: 9,
      name: '9',
      type: 'default',
    },
    {
      key: 'DEL',
      name: 'DEL',
      type: 'primary',
    },
    {
      key: 4,
      name: '4',
      type: 'default',
    },
    {
      key: 5,
      name: '5',
      type: 'default',
    },
    {
      key: 6,
      name: '6',
      type: 'default',
    },
    {
      key: '+',
      name: '+',
      type: 'default',
    },
    {
      key: 1,
      name: '1',
      type: 'default',
    },
    {
      key: 2,
      name: '2',
      type: 'default',
    },
    {
      key: 3,
      name: '3',
      type: 'default',
    },
    {
      key: '-',
      name: '-',
      type: 'default',
    },
    {
      key: '.',
      name: '.',
      type: 'default',
    },
    {
      key: 0,
      name: '0',
      type: 'default',
    },
    {
      key: '/',
      name: '/',
      type: 'default',
    },
    {
      key: 'x',
      name: 'x',
      type: 'default',
    },
  ];

  const actions = [
    {
      key: 'RESET',
      name: 'RESET',
      type: 'primary',
    },
    {
      key: '=',
      name: '=',
      type: 'secundary',
    },
  ];

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
