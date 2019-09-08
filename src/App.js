import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import TBA from './routes/TBA'
import TBAEvent from './routes/TBAEvent'
import EventList from './routes/EventList'
import Blog from './routes/Blog'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={TBA} />
        <Route path='/:id' component={TBAEvent} />
      </PicaBody>
    </div>
  );
}

export default App;
