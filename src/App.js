import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import Tickets from './routes/Tickets'

/*
  All you need to do is change the string here to the Spektrix webeventid
*/

const match = {
  params : {
    webeventid : 'anthony19'
  }
}

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route path='/'
          render={props => <Tickets {...props} match={match} />} />
      </PicaBody>
    </div>
  );
}

export default App;
