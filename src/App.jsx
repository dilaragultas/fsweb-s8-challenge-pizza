
import 'bootstrap/dist/css/bootstrap.min.css'
import Alindi from './components/alindi'
import SiparisFormu from './components/siparis'
import { Switch, Route, Router, Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'
import Header from './components/header'
import HizliMenu from './components/hizliMenu'
import MainSection from './components/mainSection'
import Footer from './components/footer'

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
        <Route path="/" exact>
          <Header/>
          <HizliMenu/>
          <MainSection/>
        </Route>
        <Route path='/siparis' exact>
          <SiparisFormu ekMalzeme={ekMalzeme} setEkMalzeme={setEkMalzeme} pizzaAdedi={pizzaAdedi} setPizzaAdedi={setPizzaAdedi} ekMalzemeTutari={ekMalzemeTutari} siparisTutari={siparisTutari} urunFiyat={urunFiyat} pizzaFiyati={pizzaFiyati}/>
        </Route>
        <Route path='/alindi'>
          <Alindi ekMalzemeTutari={ekMalzemeTutari} siparisTutari={siparisTutari}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App