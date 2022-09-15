import React from 'react';

import { Button } from 'antd';

export const Buttons = () => {
  return(
    <div className='buttons'>
      <div className='buttons__numbers'>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      </div>
      <div className='buttons__operations'>
      <Button>DEL</Button>
      <Button>+</Button>
      <Button>-</Button>
      <Button>X</Button>
      </div>
      <div className='buttons__operation'>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      </div>
      <div className='buttons__options'>
      <Button>RESET</Button>
      <Button>=</Button>
      </div>
    </div>
  );
};