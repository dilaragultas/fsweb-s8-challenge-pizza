
import 'bootstrap/dist/css/bootstrap.min.css'
import Alindi from './components/alindi'
import SiparisFormu from './components/siparis'
import { Switch, Route, Router, Link } from 'react-router-dom/cjs/react-router-dom.min'

function App() {

  return (
   <div>
    <Switch>
    <Route path='/' exact>
    <SiparisFormu/>
    </Route>
    <Route path='/alindi'>
    <Alindi/>
    </Route>
    </Switch>
   </div>
  )
}

export default App
