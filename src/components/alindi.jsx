import React from "react"
import './alindi.css'
import { useLocation, Link } from "react-router-dom";

export default function Alindi({ ekMalzemeTutari, siparisTutari }) {
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
            <img className="img" src='/images/iteration-1-images/logo.svg' />
            <div className="baslik">
                <p className="italikson">lezzetin yolda</p>
                <h1 className="alindiBilgisi">SİPARİŞ ALINDI</h1>
            </div>
            <p className="pizzaAdi">Position Absolute Acı Pizza</p>
            <div className="detaylar">
                <p className="kutu">Boyut: <strong>{data.boyut}</strong></p>
                <p className="kutu">Hamur: <strong>{data.hamur}</strong></p>
                <p className="kutu">Ek Malzemeler: <strong>{data.ekMalzeme.join(',')}</strong></p>
            </div>

            <div className="sonKisim">
                <h6>Sipariş Toplamı</h6>
                <div className="secimler2">
                    <p className="secimlerp">Seçimler:</p>
                    <p className="secimlerp">{ekMalzemeTutari}₺</p>
                </div>
                <div className="toplam2">
                    <p className="toplamp">Toplam:</p>
                    <p className="toplamp">{siparisTutari}₺</p>
                </div>
            </div>




        </div>
    );
}






