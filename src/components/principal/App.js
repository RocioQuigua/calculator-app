import React from 'react';
import { InputResult } from '../atoms/InputResult/InputResul';
import { Header } from '../organisms/Header/Header';
import { MenuOptions } from '../organisms/MenuOptions/MenuOptions';

const App = () => {
  return (
    <div className="App">
      <Header />
      <InputResult />
      <MenuOptions />
    </div>
  );
};

export default App;
