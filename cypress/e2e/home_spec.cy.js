

it('deve exibir a homepage', function () {
    cy.visit('/');

    cy.title()
        .should('eq', 'Training Wheels | QAninja');

    cy.get('ul[class=menu-list]')
        .should('be.visible');
})