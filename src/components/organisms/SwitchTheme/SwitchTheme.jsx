import React, { useState } from 'react';

import { Switch } from '../../atoms/Switch/Switch';

import PropTypes from 'prop-types';

export const SwitchTheme = ({ themes }) => {
  const [theme, setTheme] = useState(1);
  const numbers = new Array(themes);

  return (
    <div className="switch-theme">
      <h1>THEME</h1>
      <div className="switch-theme__content">
        <div className="switch-theme__numbers">
          {[...numbers].map((_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>
        <Switch size={themes} active={theme} setActive={setTheme}/>
      </div>
    </div>
  );
};

SwitchTheme.propTypes = {
  themes: PropTypes.number,
};
