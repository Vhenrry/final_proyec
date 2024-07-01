describe('Intento de Login Fallido', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('.MuiTypography-alignCenter');
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('input[id="usuario"]').type('user1@example.com');
    cy.get('input[id="contrasena"]').type('123456');
    cy.get('.MuiButton-contained > .MuiTypography-root').click();
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('.mui-pawjmq-MuiTypography-root').should('be.visible');
    cy.contains('Nombre de usuario o contraseña incorrectos').should('be.visible');
  })
})