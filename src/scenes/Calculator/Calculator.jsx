import React from 'react';

import { InputResult } from '../../components/organisms/InputResult/InputResult';
import { Header } from '../../components/organisms/Header/Header';
import { KeyboardCalculator } from '../../components/organisms/KeyboardCalculator/KeyboardCalculator';

export const Calculator = () => {
  return (
    <div className='calculator'>
      <Header />
      <InputResult />
      <KeyboardCalculator />
    </div>
  );
};