/// <reference types = "cypress"/>  
describe( 'our first test ', () => {
    beforeEach(() => {
        //signin
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
      })
    

    it ('fist test', () => {
                
        //Inline form
        cy.get('.inline-form-card > nb-card-header').should('contain.text', 'Inline form')
        cy.get('[placeholder="Jane Doe"]').type('Juan Salinas')
        cy.get('.form-inline > [placeholder="Email"]').type('jnslinas@gmai.com')
        cy.get('.form-inline > nb-checkbox > .label > .custom-checkbox').click()
        cy.get('.form-inline > .appearance-filled').click()
         
        //Using the Grid
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-header').should('contain.text', 'Using the Grid')
        cy.get('[data-cy="imputEmail1"]').type('jn23js@gmai.com')
        cy.get('#inputPassword2').type('password1')
        cy.get(':nth-child(1) > label > .inner-circle').click()
        cy.get('[data-cy="submitButton"]').click()
        
        //Basic form
        cy.get(':nth-child(2) > :nth-child(1) > nb-card-header').should('contain.text', 'Basic form')
        cy.get('#exampleInputEmail1').type('username@email.com')
        cy.get('#exampleInputPassword1').type('password')
        cy.get(':nth-child(3) > nb-checkbox > .label > .custom-checkbox').click()
        cy.get(':nth-child(2) > :nth-child(1) > nb-card-body > form > .appearance-filled').click()
      
       })
    
    
    it('second test', ()=>{

        //Form without labels
        cy.get(':nth-child(1) > :nth-child(2) > nb-card-header').should('contain.text', 'Form without labels')
        cy.get(':nth-child(2) > nb-card-body > form > :nth-child(1) > .input-full-width').type('user@email.com')
        cy.get(':nth-child(2) > nb-card-body > form > :nth-child(2) > .input-full-width').type('this is an email')
        cy.get(':nth-child(3) > .size-medium').type('this is a message to test cypress input')
        cy.get(':nth-child(2) > nb-card-body > form > .appearance-filled').click()
        
        //Block form
        cy.get(':nth-child(2) > :nth-child(2) > nb-card-header').should('contain.text', 'Block form')
        cy.get('#inputFirstName').type('name')
        cy.get('#inputLastName').type('last name')
        cy.get('#inputEmail').type('user@email.com')
        cy.get('#inputWebsite').type('www.mywebsite.com')
        cy.get('nb-card-body > .appearance-filled').click()
        
        //Horizontal form
        cy.get(':nth-child(3) > .col-md-6 > nb-card > nb-card-header').should('contain.text', 'Horizontal form')
        cy.get('#inputEmail3').type('user@mail.com')
        cy.get('#inputPassword3').type('password')
        cy.get('[data-cy="check yellow"] > nb-checkbox > .label > .custom-checkbox').click()
        cy.get('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled').click()




    })

    
})




