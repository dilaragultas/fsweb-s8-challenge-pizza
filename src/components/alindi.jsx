import React from "react"
import './alindi.css'
import { useLocation, Link } from "react-router-dom";

export default function Alindi() {
    const location = useLocation();
    const data = location.state;

    if (!data) {
        return (
            <div className="siparis-alindi">
                <p>Gösterilecek sipariş bilgisi yok.</p>
                <Link to="/">Anasayfaya dön</Link>
            </div>
        );
    }
    return (
        <div className="logolu">
            <img className="img" src='./images/iteration-1-images/logo.svg'/>
            <div className="baslik">
                <p className="italik">lezzetin yolda</p>
                <h1 className="alindiBilgisi">SİPARİŞ ALINDI</h1>
            </div>
            <p className="pizzaAdi">Position Absolute Acı Pizza</p>
            <div className="detaylar">
                <p className="kutu">Boyut:<span className="bold">{data.boyut}</span></p>
                <p className="kutu">Hamur:<span className="bold">{data.hamur}</span></p>
                <p className="kutu">Ek Malzemeler: <span className="bold">{data.ekMalzeme.join(',')}</span></p>
            </div>

            <div className="sonKisim">
                <h5>Sipariş Toplamı</h5>
                <p>Seçimler:₺</p>
                <p>Toplam:₺</p>
            </div>




        </div>
    );
}






