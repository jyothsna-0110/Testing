import htmlTablePage from "../pageObjects/htmlTablePage"

//---This is a re-usable custom command for login into application and verifying the Page header should be visible
Cypress.Commands.add('loginMethod', (url) => {
    cy.visit(url);
    cy.get(htmlTablePage.tagHeader, { timeout: Cypress.config("defaultCommandTimeout") }).should("be.visible")
    cy.log("User Logged in successfully");
})

