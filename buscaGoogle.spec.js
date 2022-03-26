/// <reference types="cypress" />

it('Uma pesquisa no Google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('pesquise algo legal aqui {enter}')

})