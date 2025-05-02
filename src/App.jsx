
import 'bootstrap/dist/css/bootstrap.min.css'
import Alindi from './components/alindi'
import SiparisFormu from './components/siparis'
import { Switch, Route, Router, Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'

function App() {

  const [ekMalzeme, setEkMalzeme] = useState([])
  const [pizzaAdedi, setPizzaAdedi] = useState(1)

  const pizzaFiyati = 85.50
  const urunFiyat = 5
  const ekMalzemeTutari = ekMalzeme.length * urunFiyat
  const siparisTutari = (ekMalzemeTutari + pizzaFiyati) * pizzaAdedi

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <SiparisFormu ekMalzeme={ekMalzeme} setEkMalzeme={setEkMalzeme} pizzaAdedi={pizzaAdedi} setPizzaAdedi={setPizzaAdedi} ekMalzemeTutari={ekMalzemeTutari} siparisTutari={siparisTutari} urunFiyat={urunFiyat} pizzaFiyati={pizzaFiyati}/>
        </Route>
        <Route path='/alindi'>
          <Alindi ekMalzemeTutari={ekMalzemeTutari} siparisTutari={siparisTutari}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
