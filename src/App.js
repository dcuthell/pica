import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import TBAEvent from './routes/TBAEvent'
import EventList from './routes/EventList'
import Blog from './routes/Blog'

/*
  All you need to do is change the string here to the program route
*/

const match = {
  params : {
    id : 'block-party19'
  }
}

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route path='/'
          render={props => <TBAEvent {...props} match={match} />} />
      </PicaBody>
    </div>
  );
}

export default App;
