import React from 'react';
import { Route } from 'react-router-dom'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'
import PicaFooter from './components/PicaFooter'

import Home from './routes/Home'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={Home} />
      </PicaBody>
      <PicaFooter />
    </div>
  );
}

export default App;
