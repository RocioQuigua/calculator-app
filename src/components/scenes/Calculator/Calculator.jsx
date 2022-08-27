import React from 'react';

import { InputResult } from '../../atoms/InputResult/InputResul';
import { Header } from '../../organisms/Header/Header';
import { MenuOptions } from '../../organisms/MenuOptions/MenuOptions';

export const Calculator = () => {
  return (
    <div className='calculator'>
      <Header />
      <InputResult />
      <MenuOptions />
    </div>
  );
};