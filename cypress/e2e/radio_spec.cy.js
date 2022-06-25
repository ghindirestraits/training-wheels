

it('deve marcar thor ragnarok', function () {
    cy.visit('/radios');
    
    cy.get('input[value=thor3]')
        .click()
        .should('be.checked')
})