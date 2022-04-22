import { useState } from 'react';
import './App.css';
import { Context } from './Contexts/Context';

import SenderForm from './components/SenderForm';
import ResponseMessage from './components/ResponseMessage';
import LoadingScreen from './components/LoadingScreen';
import FailureMessage from './components/FailureMessage';

function App() {
  const [step, set_step] = useState('senderForm')

  return (
    <Context.Provider value={{step, set_step}}>
    <div className="container">
      {
        step === 'senderForm' ? <SenderForm/> :
        step === 'loadingMessage' ? <LoadingScreen/> :  
        step === 'successMessage' ? <ResponseMessage/> :  
        <FailureMessage/>
      }
    </div>
    </Context.Provider>
  );


}

export default App;

