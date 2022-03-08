import './App.css';
import { useState } from 'react';
import BackgroundAnimate from './BackgroundAnimate';
import InputText from './InputText';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="container">
      <InputText setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
