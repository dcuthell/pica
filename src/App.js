import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'

import Support from './routes/Support'
import Donations from './routes/Donations'
import Members from './routes/Members'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={Support} />
        <Route exact path='/donations' component={Donations} />
        <Route exact path='/members' component={Members} />
      </PicaBody>
    </div>
  );
}

export default App;
