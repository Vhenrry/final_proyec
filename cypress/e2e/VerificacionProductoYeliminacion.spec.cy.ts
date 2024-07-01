describe('Crear producto, verificacion de producto, eliminacion de producto', () => {
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
    //Creacion de producto
    cy.get('#name').type('Producto Oferta');
    cy.get('#description').type('Producto para verificacion');
    cy.get('#price').type('100');
    cy.get('form > .MuiButtonBase-root').click();
    //Edicion de producto
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click();//salir
    cy.get('[href="/"]').click();
    cy.get(':nth-child(8) > .MuiPaper-root > .MuiButtonBase-root > :nth-child(1) > .MuiTypography-h3').click();
    cy.get('.MuiListItemText-root > .MuiTypography-root').should('be.visible');
    cy.contains('Producto Oferta').should('be.visible');
    cy.get('[href="/login"]').click();
    cy.get('.MuiTypography-alignCenter');
    cy.contains('Inicio de Sesión').should('be.visible');
    cy.get('input[id="usuario"]').type('user1@example.com');
    cy.get('input[id="contrasena"]').type('password123');
    cy.get('.MuiButton-contained > .MuiTypography-root').click();
    cy.contains('Bienvenido Usuario Admin.').should('be.visible');
    cy.get('#eliminarProductoOferta > .material-icons').click();
    cy.get('.MuiDialogActions-root > .MuiButton-contained').click();
  })
})