import React, { useState } from 'react';

import { InputResult } from '../../components/organisms/InputResult/InputResult';
import { Header } from '../../components/organisms/Header/Header';
import { KeyboardCalculator } from '../../components/organisms/KeyboardCalculator/KeyboardCalculator';
import { useStore } from '../../store/useStore';

export const Calculator = () => {
  const [valueInput, setValueInput] = useState('');
  const theme = useStore((state) => state.theme);

  return (
    <div className={`calculator calculator--${theme}`}>
      <div className='calculator__container'>
        <Header />
        <InputResult value={valueInput} setValue={setValueInput}/>
        <KeyboardCalculator value={valueInput} setValue={setValueInput}/>
      </div>
    </div>
  );
};