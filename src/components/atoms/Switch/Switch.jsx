import React from 'react';
import PropTypes from 'prop-types';

import { useStore } from '../../../store/useStore';

export const Switch = ({ size, active, setActive}) => {
  const items = new Array(size);
  const {theme, setTheme} = useStore((state) => state);

  return (
    <div className={`switch switch--${theme} `}>
      {[...items].map((_, index) => (
        <button
          key={index}
          className={`button ${active === index + 1 && 'button--active'}`}
          onClick={() => {
            setActive(index+1);
            setTheme(index === 0 ? 'default' : index === 1 ? 'light' : 'dark');
          }}
        ></button>
      ))}
    </div>
  );
};

Switch.propTypes = {
  size: PropTypes.number,
  active: PropTypes.number,
  setActive: PropTypes.func,
};


