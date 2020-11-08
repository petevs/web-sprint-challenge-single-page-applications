// write tests here

describe('Form Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });
    //helpers to select elements
    const nameInput = () => cy.get('input#name');
    const sizeInput = () => cy.get('select#size')
    const pepperoniInput = () => cy.get('input#pepperoni')
    const sausageInput = () => cy.get('input#sausage')
    const onionsInput = () => cy.get('input#onions')
    const specialInstructionsInput = () => cy.get('input#specialInstructions')
    const submitBtn = () => cy.get('button#submit')

    it('Should display expected elements', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        pepperoniInput().should('exist');
        sausageInput().should('exist');
        onionsInput().should('exist');
        sausageInput().should('exist');
        specialInstructionsInput().should('exist');
    });

    it('Inputs should accept values and form submit', () => {
        nameInput().type('Test Pizza');
        sizeInput().select('Medium');
        pepperoniInput().check();
        sausageInput().check();
        onionsInput().check();
        specialInstructionsInput().type('Here are my instructions!')
        submitBtn().click()
    })
})