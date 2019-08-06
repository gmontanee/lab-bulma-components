import React from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </>
  );
}

export default App;
