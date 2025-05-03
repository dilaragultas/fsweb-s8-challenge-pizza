const { input } = require("@testing-library/user-event/dist/cjs/event/input.js")

describe('formTesti', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/siparis')
  })
  it("inputa bir metin giren test",()=> {
    const siparisNotu ="Dinliyorum"
    cy.get(`textarea[name='text']`).type(siparisNotu).should('have.value', siparisNotu)
  })
  it("birden fazla malzeme seçilebilen bir test",()=>{
    const secilenler = ["Pepperoni", "Biber", "Ananas", "Jalepeno"]
    secilenler.forEach((elm) => {
      cy.contains(`label`, elm)
      .find(`input[type='checkbox']`)
      .check()
      .should('be.checked')
    })
  })
  it("formu gönderen bir test",()=>{
    cy.get(`input[value='Orta']`)
    .check()
    cy.get(`select[name='select']`).select('Orta')
    const secilenler = ["Pepperoni", "Biber", "Ananas", "Jalepeno"]
    secilenler.forEach((elm) => {
      cy.contains(`label`, elm)
      .find(`input[type='checkbox']`)
      .check()
      .should('be.checked')
    })
    const siparisNotu ="Dinliyorum"
    cy.get(`textarea[name='text']`).type(siparisNotu).should('have.value', siparisNotu)
    cy.get(`button[type='submit']`).click()
  })
})