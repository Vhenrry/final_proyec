describe('Creacion doble de un producto se requiere correccion', () => {
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
    cy.get('#name').type('Linterna');
    cy.get('#description').type('Linterna para noche');
    cy.get('#price').type('50');
    cy.get('form > .MuiButtonBase-root').click();
    cy.contains('Linterna').should('be.visible');
    cy.contains('Linterna para noche').should('be.visible');
    cy.get('.MuiBox-root > .MuiButtonBase-root').click();
    cy.get('#name').type('Linterna');
    cy.get('#description').type('Linterna para noche');
    cy.get('#price').type('55');
    cy.get('form > .MuiButtonBase-root').click();
  })
})