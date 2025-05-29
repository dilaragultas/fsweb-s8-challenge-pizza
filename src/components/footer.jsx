import './style.css'
export default function Footer() {
  return (
    <footer className="footer-color">
      <div className="son3lu">
        <div className="iletisim">
          <img src="/assets/iteration-2/footer/logo-footer.svg" />
          <address>
            <div className="konum">
              <img src="/assets/iteration-2/footer/icons/icon-1.png" />
              <p>341 Londonderry Road, <br />Istanbul Türkiye</p>
            </div>
            <div className="mail">
              <img src="/assets/iteration-2/footer/icons/icon-2.png" />
              <p>aciktim@teknolikyemekler.com</p>
            </div>
            <div className="tel">
              <img src="/assets/iteration-2/footer/icons/icon-3.png" />
              <p>+90 216 123 45 67</p>
            </div>
          </address>
        </div>
        <div className="hotmenu">
          <h1 className="font">Hot Menu</h1>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>
        <div className="instagram">
          <h1 className="font">Instagram</h1>
          <div className="fotolar">
            <img src="/assets/iteration-2/footer/insta/li-0.png" />
            <img src="/assets/iteration-2/footer/insta/li-1.png" />
            <img src="/assets/iteration-2/footer/insta/li-2.png" />
            <img src="/assets/iteration-2/footer/insta/li-3.png" />
            <img src="/assets/iteration-2/footer/insta/li-4.png" />
            <img src="/assets/iteration-2/footer/insta/li-5.png" />
          </div>
        </div>
      </div>
      <div className="son">
        <p className="renk">© 2023 Teknolojik Yemekler.</p>
        <img src="#" />

      </div>
    </footer>
  )
}