describe('Editar el producto Creado anterior', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('.MuiTypography-alignCenter');
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('input[id="usuario"]').type('user1@example.com');
    cy.get('input[id="contrasena"]').type('password123');
    cy.get('.MuiButton-contained > .MuiTypography-root').click();
    cy.contains('Bienvenido Usuario Admin.').should('be.visible');
    cy.url().should('include','/admin/home');
    //cy.get('.MuiBox-root > .MuiButtonBase-root').click();
    //cy.get('#name').type('Cepillo Electrico');
    //cy.get('#description').type('Cepillo de dientes electrico SONIC T302');
    //cy.get('#price').type('400');
    //cy.get('form > .MuiButtonBase-root').click();
    cy.contains('Cepillo Electrico').should('be.visible');
    cy.contains('Cepillo de dientes electrico SONIC T302').should('be.visible');
    cy.get('#editar14 > .material-icons').click();
    cy.contains('Editar Producto').should('be.visible');
    cy.get('#description').clear().type('Cepillo de dientes electrico SONIC T302 proteccion IPX8 150 dias de bateria');
    cy.get('#price').clear().type('360');
    cy.get('form > .MuiButtonBase-root').click();
    cy.contains('Cepillo de dientes electrico SONIC T302 proteccion IPX8 150 dias de bateria').should('be.visible');
  })
})