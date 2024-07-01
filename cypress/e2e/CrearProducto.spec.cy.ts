describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('.MuiTypography-alignCenter');
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('input[id="usuario"]').type('user1@example.com');
    cy.get('input[id="contrasena"]').type('password123');
    cy.get('.MuiButton-contained > .MuiTypography-root').click();
    cy.contains('Bienvenido Usuario Admin.').should('be.visible');
    cy.url().should('include','/admin/home');
    cy.get('.MuiBox-root > .MuiButtonBase-root').click();
    cy.get('#name').type('Lentes de computadora Blue-Block');
    cy.get('#description').type('Lentes para computadora blue-block tiene 8 capas de proteccion con certificacion UV400');
    cy.get('#price').type('250');
    cy.get('form > .MuiButtonBase-root').click();
    cy.contains('Lentes de computadora Blue-Block').should('be.visible');
    cy.contains('Lentes para computadora blue-block tiene 8 capas de proteccion con certificacion UV400').should('be.visible');
  })
})