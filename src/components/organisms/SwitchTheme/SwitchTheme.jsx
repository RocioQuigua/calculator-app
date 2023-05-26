import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Switch } from '../../atoms/Switch/Switch';
import { useStore } from '../../../store/useStore';

export const SwitchTheme = ({ themes }) => {
  const [themeSel, setThemeSel] = useState(1);
  const numbers = new Array(themes);
  const theme = useStore((state) => state.theme);

  return (
    <div className={`switch-theme switch-theme--${theme}`}>
      <h1 className={`switch-theme__title switch-theme__title--${theme}`}>THEME</h1>
      <div className="switch-theme__content">
        <div className='switch-theme__numbers'>
          {[...numbers].map((_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>
        <Switch size={themes} active={themeSel} setActive={setThemeSel}/>
      </div>
    </div>
  );
};

SwitchTheme.propTypes = {
  themes: PropTypes.number,
};
