import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import SiparisHeader from "./siparisheader";
import "./siparis.css"
import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Alindi from "./alindi";

const ekMalzemeListesi = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
  "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
  "Sarımsak", "Biber", "Salam", "Ananas", "Kabak"
]

const pizzaFiyati = 85.50
const urunFiyat = 5

export default function SiparisFormu() {

  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [ekMalzeme, setEkMalzeme] = useState([])
  const [not, setNot] = useState('')
  const [pizzaAdedi, setPizzaAdedi] = useState(1)
  const [responseData, setResponseData] = useState(null);
  const history = useHistory()

  const handleChange = (event) => {
    const { value, checked } = event.target
    if (checked && ekMalzeme.length < 10) {
      setEkMalzeme([...ekMalzeme, value])
    } else if (!checked) {
      setEkMalzeme(ekMalzeme.filter((elm) => elm !== value))
    }
  }

  const handleAzalt = (event) => {
    event.preventDefault()
    if (pizzaAdedi > 1) {
      setPizzaAdedi(pizzaAdedi - 1)
    }
  }
  const handleArttir = (event) => {
    event.preventDefault()
    setPizzaAdedi(pizzaAdedi + 1)
  }


  const ekMalzemeTutari = ekMalzeme.length * urunFiyat
  const siparisTutari = (ekMalzemeTutari + pizzaFiyati) * pizzaAdedi

  const handleSubmit = async (e) => {
    e.preventDefault();

    const siparis = {
      boyut,
      hamur,
      ekMalzeme,
      not,
      pizzaAdedi,
      toplamTutar: siparisTutari,
      secimTutari: ekMalzemeTutari,
    };

    axios
      .post(
        'https://reqres.in/api/pizza',
        siparis,
        {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        }
      )
      .then((res) => {
        console.log(res.data)
        history.push('/alindi', res.data)

      })
      .catch(err => console.error(err))

  };

  return (
    <>
      <SiparisHeader />
      <div className="formSayfasi">
        <h5 className="title">Position Absolute Acı Pizza</h5>
        <div className="ikili">
          <h3><strong>{pizzaFiyati}₺ </strong></h3>
          <div className="yildizveyorum">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p className="ilkMetin"> Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>

        <Form onSubmit={handleSubmit}>
          <div className="radio">
            <FormGroup tag="fieldset">
              <legend>
                <h5>Boyut Seç <span style={{ color: 'red' }}>*</span></h5>
              </legend>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Büyük
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                <h5>Hamur Seç <span style={{ color: 'red' }}>*</span></h5>
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option disabled>
                  Hamur Kalınlığı
                </option>
                <option>
                  Süpper İnce
                </option>
                <option>
                  İnce
                </option>
                <option>
                  Orta
                </option>
                <option>
                  Kalın
                </option>
              </Input>
            </FormGroup>

          </div>

          <h5>Ek Malzemeler</h5>
          <p className="cumle">En az 4 malzeme seçilmelidir!</p>
          <p className="cumle">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="malzemeler">
            {ekMalzemeListesi.map((elm) => {
              return (
                <FormGroup
                  check
                  inline
                >

                  <Label className="tektek" check>
                    <Input type="checkbox" value={elm} onChange={handleChange} disabled={ekMalzeme.length >= 10 && !ekMalzeme.includes(elm)} checked={ekMalzeme.includes(elm)} />
                    {elm}
                  </Label>
                </FormGroup>
              )
            })}
          </div>

          <FormGroup>
            <Label for="exampleText">
              <h5>Sipariş Notu</h5>
            </Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>

          <div className="sonikili">
            <div className="artazal">
              <Button className="butonlar" color="warning" onClick={handleAzalt}>-</Button>
              <p className="adet">{pizzaAdedi}</p>
              <Button className="butonlar" color="warning" onClick={handleArttir}>+</Button>
            </div>
            <div className="toplam">
              <h5>Sipariş Toplamı</h5>
              <p>Seçimler: {ekMalzemeTutari}₺</p>
              <p style={{ color: 'red' }}>Toplam: {siparisTutari}₺</p>
              <Button type="submit" color="warning" disabled={ekMalzeme.length <4? true : false}><strong>Sipariş Ver</strong></Button>


            </div>
          </div>
        </Form>

      </div>
    </>
  )
}