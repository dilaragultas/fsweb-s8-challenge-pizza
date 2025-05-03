import './style.css'
export default function Ekrandakiler() {
    return (
        <div className="ekrandakiler">
                <div className="pizza1">
                    <img src="public/assets/iteration-2/pictures/food-1.png" />
                    <p className="still">Terminal Pizza</p>
                    <div className="yanyana">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
                <div className="pizza2">
                    <img src="public/assets/iteration-2/pictures/food-2.png" />
                    <p className="still">Position Absolute Acı Pizza</p>
                    <div className="yanyana">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
                <div className="burger">
                    <img src="public/assets/iteration-2/pictures/food-3.png" />
                    <p className="still">UseEffect Tavuklu Burger</p>
                    <div className="yanyana">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
            </div>
    )
}