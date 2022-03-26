/// <reference types="cypress" />

before(() => {
    cy.visit('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')

})

describe('Formulário do GitHub', () => {

    it('Email', () => {
        cy.get('#user_email').type('teste09@email.com')
        .should('have.value','teste09@email.com')
    })

    it('Password', () => {
        cy.get('#user_password').type('teste12345')
    })

    it('Aceitar e-mails', () =>{
        cy.get('#all_emails').click()
    })

    describe('CheckBox', () => {
        it('descrição', () =>{
            cy.contains('Verify your account')
        })
        
    })
      
})





