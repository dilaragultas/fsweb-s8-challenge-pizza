import Ekrandakiler from "./ekrandakiler";
import HizliMenu2 from "./hizliMenu2";
import MainCard from "./mainCard";
import './style.css'

export default function MainSection() {
    return (
        <section className="main-section">
           <MainCard/>
            <div className="ara">
                <h1 className="italik">en çok paketlenen menüler</h1>
                <h1 className="kodlar">Acıktıran Kodlara Doyuran Lezzetler</h1>
            </div>
           <HizliMenu2/>
            <Ekrandakiler/>
        </section>
    )
}