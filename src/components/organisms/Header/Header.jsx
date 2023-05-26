import React from 'react';
import { SwitchTheme } from '../../organisms/SwitchTheme/SwitchTheme';

import {useStore } from '../../../store/useStore';

export const Header = () => {
  const theme = useStore((state) => state.theme);
  return (
    <div className={`header header--${theme}`}>
      <h1 className={`title title--${theme}`}>calc</h1>
      <SwitchTheme themes={3}/>
    </div>
  );
};