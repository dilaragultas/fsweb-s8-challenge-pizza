import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './style.css'

export default function MainCard() {
    return (
        <div className="main-cards">
        <div className="lezzetus">
          <p className="ozel">Özel <br/>Lezzetus</p>
          <p className="aci">Position: Absolute Acı Burger</p>
          <Link to="/siparis"><button id="lezzetusb" className="siparis">SİPARİŞ VER</button></Link>
        </div>
        <div className="ikili">
          <div className="hackathlon">
            <p className="hac">Hackathlon <br/>Burger Menü</p>
            <Link to="/siparis"><button className="siparis">SİPARİŞ VER</button></Link>
          </div>
          <div className="cok">
            <p className="hiz"><span style={{color:'#CE2829'}}>Çoooook</span> hızlı<br/>npm gibi kurye</p>
            <Link to="/siparis"><button className="siparis">SİPARİŞ VER</button></Link>
          </div>
        </div>
      </div>
    )
}