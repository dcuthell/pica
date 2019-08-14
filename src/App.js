import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import EventList from './routes/EventList'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={EventList} />
      </PicaBody>
    </div>
  );
}

export default App;
