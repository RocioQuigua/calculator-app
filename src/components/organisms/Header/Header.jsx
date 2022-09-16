import React from 'react';
import { SwitchTheme } from '../../organisms/SwitchTheme/SwitchTheme';

export const Header = () => {
  return (
    <div className='header'>
      <h1>calc</h1>
      <SwitchTheme themes={3}/>
    </div>
  );
};