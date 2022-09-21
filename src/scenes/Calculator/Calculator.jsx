import React, { useState } from 'react';

import { InputResult } from '../../components/organisms/InputResult/InputResult';
import { Header } from '../../components/organisms/Header/Header';
import { KeyboardCalculator } from '../../components/organisms/KeyboardCalculator/KeyboardCalculator';

export const Calculator = () => {
  const [valueInput, setValueInput] = useState('');

  return (
    <div className='calculator'>
      <div className='calculator__container'>
        <Header />
        <InputResult value={valueInput} setValue={setValueInput}/>
        <KeyboardCalculator value={valueInput} setValue={setValueInput}/>
      </div>
    </div>
  );
};