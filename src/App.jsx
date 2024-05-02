import { useState } from 'react';
import BaseForm from './components/BaseForm';
import MidForm from './components/MidForm';
import TopForm from './components/TopForm';
import './styles/App.css';

function App() {

  return (
    <>
      <div className='Builder'>
        <h1 id='cv-main'>CV</h1>
        <BaseForm/>
        <MidForm />
        <TopForm />
      </div>
    </>
  );
}

export default App;
