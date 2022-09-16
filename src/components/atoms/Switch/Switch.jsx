import React from 'react';

import PropTypes from 'prop-types';

export const Switch = ({ size, active, setActive }) => {
  const items = new Array(size);

  return (
    <div className="switch">
      {[...items].map((_, index) => (
        <button
          key={index}
          className={`switch__button ${active === index + 1 && 'switch__button--active'}`}
          onClick={() => setActive(index+1)}
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
