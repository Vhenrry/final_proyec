describe('Crear producto sin precio sale error se corrige se verifica y se elimina', () => {
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
    cy.get('#name').type('Lentes');
    cy.get('#description').type('Lentes para computadora');
    cy.get('form > .MuiButtonBase-root').click();
    cy.get('.MuiFormHelperText-root').should('be.visible');
    cy.contains('Este campo es requerido').should('be.visible');
    cy.get('#price').type('250');
    cy.get('form > .MuiButtonBase-root').click();
    cy.contains('Lentes').should('be.visible');
    cy.contains('Lentes para computadora').should('be.visible');
    cy.get('#eliminarLentes > .material-icons').click();
    cy.get('.MuiDialogActions-root > .MuiButton-contained').click();
  })
})