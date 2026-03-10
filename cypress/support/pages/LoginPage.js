export const LoginPage = {
  open() {
    cy.visit("https://hr.lstvqatest.online");
  },

  login(companyId, userId, password) {
    cy.get("#gl_comcde").should("be.visible").clear().type(companyId);
    cy.get("#txtusrcde").should("be.visible").clear().type(userId);
    cy.get("#txtusrpwd").should("be.visible").clear().type(password, {
      log: false,
    });

    cy.get(".loginbtn > input").click();
  },

  loginAsHrUser() {
    this.login(
      Cypress.env("HR_COMPANY"),
      Cypress.env("HR_USER"),
      Cypress.env("HR_PASS"),
    );
  },

  assertLoginSuccess() {
     cy.get('.ajs-content').should('contain', 'Successfully logged in')
     cy.get('.ajs-button').click()
  },
};

