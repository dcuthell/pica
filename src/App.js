import React from 'react';
import { Route } from 'react-router-dom'

import PicaNavBar from './components/PicaNavBar'
import PicaBody from './components/PicaBody'
import PicaFooter from './components/PicaFooter'

import Home from './routes/Home'
import Events from './routes/Events'
import ArtistsAndArchive from './routes/ArtistsAndArchive'
import Learn from './routes/Learn'
import PrecipiceFund from './routes/PrecipiceFund'
import Support from './routes/Support'
import Members from './routes/Members'
import TBA from './routes/TBA'
import Account from './routes/Account'
import Basket from './routes/Basket'
import Donations from './routes/Donations'
import Membership from './routes/Membership'
import Tickets from './routes/Tickets'

function App() {
  return (
    <div className='App'>
      <PicaNavBar/>
      <PicaBody>
        <Route exact path='/' component={Home} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/artistsandarchive' component={ArtistsAndArchive} />
        <Route exact path='/learn' component={Learn} />
        <Route exact path='/precipicefund' component={PrecipiceFund} />
        <Route exact path='/support' component={Support} />
        <Route exact path='/support/members' component={Members} />
        <Route exact path='/tba' component={TBA} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/basket' component={Basket} />
        <Route exact path='/donations' component={Donations} />
        <Route exact path='/membership' component={Membership} />
        <Route path='/tickets/:webeventid' component={Tickets} />
      </PicaBody>
      <PicaFooter />
    </div>
  );
}

export default App;
