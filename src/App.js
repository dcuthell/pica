import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import Cookies from './routes/Cookies'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={Cookies} />
      </PicaBody>
    </div>
  );
}

export default App;
