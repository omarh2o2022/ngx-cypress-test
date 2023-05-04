/// <reference types = "cypress"/>  
describe( 'our first test ', () => {

    it ('fist test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        //find tag name **
       cy.get('input')

        // find ID** necesit llevar el # enfrente
        cy.get('#inputEmail1')

        // find by CLASS NAME siempre debe llevar un punto antes del class **

        cy.get('.input-full-width')

        // find atributes by name siepre debe ir dentro de brackets cuadrados
        cy.get('[placeholder]')

        // find by atribute name and value ** brackets but we have to add = "atribute"

        cy.get('[placeholder="Email"]')

        // find by class value goues with brackets [] and has to be full string
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // find by tag name, atribute and value 
        cy.get('input[placeholder="Email"]')
        
        // find by 2 different atributes just has to be on adifferent [] you can add as many atributes 
        cy.get('[placeholder="Email"]')

        // the most recommended way by cypress we can create our own IDs de estas formas se buscan TODOS los elementos en el codigo
       
        cy.get('#inputEmail3[class="input-full-width size-medium shape-rectangle"]')
        cy.get('button[status="warning"]')
        cy.get('[data-cy="check yellow"]')
        .parents('form')
        .find('nb-checkbox')
        .click()
       })

    
})

describe( 'our second test ', () => {
// agregando .only unicamente correra este test 
    it.only('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        // al agregar data-cy + elargumento en HTML podremos incluirlo en la busqueda en braquests cuadrados []
       cy.get('[data-cy="submitButton"]')
       
    
       cy.get('.ng-tns-c7-6 > .menu-title').click()
       cy.get(':nth-child(1) > nb-card > nb-card-body > .size-medium')
       .click()
       .type('May 2, 2023')
       cy.get(':nth-child(2) > nb-card > nb-card-body > .size-medium')
       .click()
       .type('May 10, 2023')
       cy.get(':nth-child(3) > nb-card > nb-card-body > .size-medium')
       .click()
       .type('Jun 18, 2023')
       
       })
    
})


