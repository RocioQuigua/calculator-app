import React from 'react';

import './Buttons.scss';

export const Buttons = () => {
  return(
    <div className='buttons'>
      <div className='buttons__numbers'>
        <button>7</button>
        <button>4</button>
        <button>1</button>
        <button>.</button>
        <button>8</button>
        <button>5</button>
        <button>2</button>
        <button>0</button>
        <button>9</button>
        <button>6</button>
        <button>3</button>
        <button>/</button>
      </div>
      <div className='buttons__operations'>
      <button>DEL</button>
      <button>+</button>
      <button>-</button>
      <button>X</button>
      </div>
      <div className='buttons__options'>
      <button>RESET</button>
      <button>=</button>
      </div>
    </div>
  );
};