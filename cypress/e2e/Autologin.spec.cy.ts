describe('Login del sistema', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('.MuiTypography-alignCenter');
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('input[id="usuario"]').type('user1@example.com');
    cy.get('input[id="contrasena"]').type('password123');
    cy.get('.MuiButton-contained > .MuiTypography-root').click();
    cy.contains('Bienvenido Usuario Admin.').should('be.visible');
    cy.url().should('include','/admin/home');
  })
})