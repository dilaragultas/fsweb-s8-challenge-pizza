import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Form, FormGroup, Input, Label } from "reactstrap";

 const ekMalzemeListesi = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
    "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"
  ]

  const pizzaFiyati = 85.50
  const urunFiyat = 5

export default function SiparisFormu() {

    const [boyut, setBoyut] = useState('')
    const [hamur, setHamur] = useState('')
    const [ekMalzeme, setEkMalzeme] = useState([])
    const [not, setNot] = useState('')
    const [pizzaAdedi, setPizzaAdedi] = useState(1)

    const handleChange = () => {
        //Buraya ek malzeme secildikten sonra arraye atilacak urunler gelecek yazmayi unutma!
    }

    const ekMalzemeTutari = ekMalzeme.length * urunFiyat
    const siparisTutari = (ekMalzemeTutari + pizzaFiyati) * pizzaAdedi

    return (
      <div>
            <Link to="/" exact>Anasayfa</Link>
            <div>
                <h1>Position Absolute Acı Pizza</h1>
                <p className="pizzaFiyati">Fiyat: {pizzaFiyati}₺ </p>
                <p className="yildiz">4.9</p>
                <p className="yorum">(200)</p>
                <p> Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                />
            </FormGroup>
            </Form>
    
        </div>

    )
}