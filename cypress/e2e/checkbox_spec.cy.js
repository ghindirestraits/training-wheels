

it('deve marcar os top 5 filmes da Marvel', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes');

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ];

    movies.forEach(function (m) {
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked');
    })

})